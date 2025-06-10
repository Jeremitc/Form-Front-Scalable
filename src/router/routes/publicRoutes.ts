// src/router/routes/publicRoutes.ts
import type { RouteRecordRaw } from 'vue-router';

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('../../views/public/HomeView.vue'),
    meta: { title: 'Inicio' },
  },
  {
    path: 'login',
    name: 'login',
    component: () => import('../../views/public/LoginView.vue'),
    meta: { title: 'Iniciar Sesión' },
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('../../views/public/AboutView.vue'),
    meta: { title: 'Acerca de' },
  },
];

export default publicRoutes;