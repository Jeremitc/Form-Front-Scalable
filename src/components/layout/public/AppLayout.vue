<!-- src/components/layout/AppLayout.vue -->
<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- 1. Pasamos los datos como props al Navbar -->
    <Navbar 
      :is-authenticated="isAuthenticated" 
      :user="user" 
      :has-role="hasRole"
    />
    
    <main class="flex-grow container mx-auto py-8 px-4">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { useAuthStore } from '../../../stores/auth'; // <- Ruta correcta
import { storeToRefs } from 'pinia';

// 2. La lógica de autenticación vive aquí, en el componente padre.
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

const hasRole = (role: string): boolean => {
  return user.value?.roles?.includes(role) || false;
};
</script>