// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';
import NotFoundView from '../views/NotFoundView.vue';
import { useAuthStore } from '../stores/auth';
import { i18n, setLocale, isSupportedLocale, getInitialLocale, type SupportedLocale } from '../i18n';

// Esta ruta ahora usa beforeEnter para manejar la lógica asíncrona
const logoutRoute: RouteRecordRaw = {
  path: 'logout', // Puede ser relativo 'logout' en lugar de '/logout'
  name: 'logout',
  component: { template: '<div>Cerrando sesión...</div>' }, 
  async beforeEnter(to, from, next) {
    const authStore = useAuthStore();
    await authStore.logout();
    // Redirige a la página de login CON el locale que venía en la URL.
    next({ name: 'login', params: { locale: to.params.locale } });
  },
};

const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
};

const routes: RouteRecordRaw[] = [
  {
    path: '/:locale(en|es)',
    component: () => import('../components/layout/public/AppLayout.vue'),
    // El beforeEnter en la ruta es bueno para la lógica específica de esa ruta
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale as SupportedLocale;
      // Aquí ya sabemos que el locale es válido gracias al regex y al guard global.
      // Así que simplemente lo establecemos.
      setLocale(locale);
      next();
    },
    children: [
      ...publicRoutes,
      ...privateRoutes,
      logoutRoute,
    ],
  },
  {
    path: '/',
    redirect: () => `/${getInitialLocale()}`,
  },
  notFoundRoute,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 },
});

// --- GUARD DE NAVEGACIÓN GLOBAL UNIFICADO ---
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // 1. GESTIÓN DE IDIOMA EN LA URL (i18n)
  const paramsLocale = to.params.locale;

  // Si la ruta no tiene un locale o no es uno de los soportados, redirigimos.
  if (!isSupportedLocale(paramsLocale)) {
    // Construimos la nueva ruta con el locale por defecto y mantenemos el path y queries.
    const targetPath = to.fullPath === '/' ? '' : to.fullPath;
    return next(`/${getInitialLocale()}${targetPath}`);
  }
  
  // 2. GESTIÓN DE AUTENTICACIÓN
  const authStore = useAuthStore();
  if (!authStore.isInitialized) {
    await authStore.initialize();
  }
  
  const isAuthenticated = authStore.isAuthenticated;
  const requiresAuth = to.meta.requiresAuth;

  // A. Ruta protegida y usuario no autenticado -> a Login
  if (requiresAuth && !isAuthenticated) {
    return next({ 
      name: 'login', 
      params: { locale: paramsLocale }, // ¡Mantenemos el locale!
      query: { redirect: to.fullPath } 
    });
  }

  // B. Usuario autenticado intenta ir a Login -> a Dashboard
  if (to.name === 'login' && isAuthenticated) {
    return next({ name: 'dashboard', params: { locale: paramsLocale } });
  }

  // 3. GESTIÓN DE ROLES
  if (to.meta.roles && isAuthenticated) {
    const userRoles = authStore.user?.roles || [];
    const requiredRoles = to.meta.roles as string[];
    const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
    
    if (!hasRequiredRole) {
      // a 404 si no tiene permiso. `pathMatch` es la forma correcta para la ruta catch-all.
      return next({ 
        name: 'not-found', 
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash,
      });
    }
  }

  // Si todo está en orden, ¡adelante!
  next();
});

router.onError((error: Error, to: RouteLocationNormalized) => {
  console.error(`Error de navegación a ${to.path}:`, error);
  router.push({ name: 'not-found' });
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Mi App` : 'Mi App';
});

export default router;