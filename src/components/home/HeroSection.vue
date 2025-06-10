<!-- src/components/home/HeroSection.vue -->
<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white overflow-hidden">
    <!-- Fondo orgánico -->
    <div class="absolute inset-0 opacity-20">
      <svg class="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" fill-opacity="0.3" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,202.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    <div class="container mx-auto px-4 text-center relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up">
        {{ $t('home.hero.title') }}
      </h1>
      <p class="text-lg md:text-2xl mb-8 animate-slide-in-up animation-delay-200">
        {{ $t('home.hero.subtitle') }}
      </p>
      <router-link
        to="/login"
        class="inline-block bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-green-100 hover:scale-105 transition-transform duration-300 animate-pulse"
      >
        {{ $t('home.hero.cta') }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
}
@keyframes slide-in-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>