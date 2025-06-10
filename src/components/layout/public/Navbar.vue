<!-- src/components/layout/Navbar.vue -->
<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <!-- Logo -->
      <router-link :to="{ name: 'home', params: { locale: $i18n.locale } }" class="text-xl font-bold text-gray-800">
        Mi App
      </router-link>

      <!-- Links de Navegación -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link :to="{ name: 'home', params: { locale: $i18n.locale } }" class="text-blue-600 hover:text-blue-800">{{ $t('home.title') }}</router-link>
        <router-link :to="{ name: 'about', params: { locale: $i18n.locale } }" class="text-blue-600 hover:text-blue-800">{{ $t('about.title') }}</router-link>
        <!-- 3. Usamos los props recibidos -->
        <router-link v-if="isAuthenticated" :to="{ name: 'dashboard', params: { locale: $i18n.locale } }" class="text-blue-600 hover:text-blue-800">{{ $t('dashboard.title') }}</router-link>
        <router-link v-if="isAuthenticated && hasRole('admin')" :to="{ name: 'admin', params: { locale: $i18n.locale } }" class="text-blue-600 hover:text-blue-800">{{ $t('admin.title') }}</router-link>
      </div>

      <!-- Acciones de Usuario y Idioma -->
      <div class="flex items-center space-x-4">
        <LanguageSwitcher />
        <div v-if="isAuthenticated" class="flex items-center space-x-2">
          <span class="text-gray-600">{{ user?.email }}</span>
          <router-link :to="{ name: 'logout', params: { locale: $i18n.locale } }" class="text-red-500 hover:text-red-700">{{ $t('logout') }}</router-link>
        </div>
        <router-link v-else :to="{ name: 'login', params: { locale: $i18n.locale } }" class="text-blue-600 hover:text-blue-800">{{ $t('login.title') }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import type { User } from '../../../stores/auth'; // Importamos el tipo para tipar el prop
import type { PropType } from 'vue';

// 1. Definimos los props que el componente espera recibir del padre.
defineProps({
  isAuthenticated: {
    type: Boolean,
    required: true,
  },
  user: {
    type: Object as PropType<User | null>,
    required: true,
  },
  hasRole: {
    type: Function as PropType<(role: string) => boolean>,
    required: true,
  }
});

// 2. ¡NO HAY LÓGICA DE STORE AQUÍ! El componente es ahora mucho más simple.
</script>