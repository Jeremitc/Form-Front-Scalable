// src/router/routes/privateRoutes.ts
import type { RouteRecordRaw } from 'vue-router';

const privateRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('../../views/private/DashboardView.vue'),
    meta: { requiresAuth: true, roles: ['user', 'admin'], title: 'Panel de Control' },
  },
  {
    path: 'profile',
    name: 'profile',
    component: () => import('../../views/private/ProfileView.vue'),
    meta: { requiresAuth: true, roles: ['user', 'admin'], title: 'Perfil' },
  },
  {
    path: 'admin',
    name: 'admin',
    component: () => import('../../views/private/AdminView.vue'),
    meta: { requiresAuth: true, roles: ['admin'], title: 'Administración' },
  },
  {
    path: 'user/:id',
    name: 'user-profile',
    component: () => import('../../views/private/UserProfileView.vue'),
    meta: { requiresAuth: true, roles: ['user', 'admin'], title: 'Perfil de Usuario' },
  },
];

export default privateRoutes;