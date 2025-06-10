// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios, { type AxiosResponse } from 'axios';
import router from '../router'; 
import { getInitialLocale } from '../i18n'; // Asegúrate de que esta función esté definida en tu i18n

export interface User {
  email: string;
  roles?: string[];
  accessToken?: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const user = ref<User | null>(null);
  const isInitialized = ref(false);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.tu-app.com',
    withCredentials: true,
  });

  // NUEVO: Interceptor de Petición
  api.interceptors.request.use(config => {
    // No puedes usar 'user' directamente aquí porque se captura su valor inicial.
    // Debes obtener el estado actual del store cada vez.
    const authStore = useAuthStore();
    if (authStore.user?.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.user.accessToken}`;
    }
    return config;
  });

  api.interceptors.response.use(
  response => response,
  async (error: unknown) => {
    // Asegúrate de que el error es de Axios y tiene una configuración
    if (axios.isAxiosError(error) && error.config && error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true; // Ahora TypeScript no se quejará
      try {
        const { data }: AxiosResponse<RefreshTokenResponse> = await api.post('/auth/refresh');
        if (user.value) {
          // Actualiza el token en el store
          user.value.accessToken = data.accessToken;
          
          // Actualiza la cabecera de la petición original y la reintenta
          error.config.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(error.config);
        } else {
          // Si no hay usuario en el store, no tiene sentido reintentar
          throw new Error('Usuario no autenticado durante el refresh.');
        }
      } catch (refreshError) {
        // Si el refresh falla, el logout es la acción correcta
        await logout();
        // Redirige al login para que el usuario inicie sesión de nuevo
        const currentLocale = router.currentRoute.value.params.locale || getInitialLocale();
        router.push({ name: 'login', params: { locale: currentLocale } });
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

  const initialize = async () => {
    try {
      const { data } = await api.get('/auth/me');
      isAuthenticated.value = true;
      user.value = {
        email: data.email,
        roles: data.roles,
        accessToken: data.accessToken,
      };
    } catch (error) {
      console.error('Inicialización fallida:', error);
    }
    isInitialized.value = true;
  };

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      isAuthenticated.value = true;
      user.value = {
        email: data.email,
        roles: data.roles,
        accessToken: data.accessToken,
      };
      // YA NO ES NECESARIO: api.defaults.headers.common['Authorization'] = ...
      // El interceptor de petición se encargará de esto.
    } catch (error) {
      // ...
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      isAuthenticated.value = false;
      user.value = null;
      // YA NO ES NECESARIO: delete api.defaults.headers.common['Authorization'];
      // El interceptor de petición no encontrará un token y no lo añadirá.
    }
  };

  return {
    isAuthenticated,
    user,
    isInitialized,
    initialize,
    login,
    logout,
  };
});