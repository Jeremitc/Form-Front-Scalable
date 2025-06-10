<!-- src/components/home/CallToAction.vue -->
<template>
  <section class="py-16 bg-gradient-to-r from-blue-500 to-green-400 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-up">
        {{ $t('home.cta.title') }}
      </h2>
      <p class="text-lg mb-8 animate-slide-in-up animation-delay-200">
        {{ $t('home.cta.subtitle') }}
      </p>
      <div class="flex justify-center">
        <router-link
          to="/login"
          class="bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-green-100 hover:scale-105 transition-transform duration-300"
        >
          {{ $t('home.cta.button') }}
        </router-link>
      </div>
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