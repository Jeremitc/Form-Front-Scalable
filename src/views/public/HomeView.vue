<!-- src/views/public/HomeView.vue -->
<template>
  <div>
    <HeroSection />
    <FeaturesGrid />
    <!-- <Testimonials /> -->
    <!-- <CallToAction /> -->
  </div>
</template>

<script setup lang="ts">
// Importa los componentes que has creado
import HeroSection from '../../components/home/HeroSection.vue';
import FeaturesGrid from '../../components/home/FeaturesGrid.vue';
// import Testimonials from '../../components/views/home/Testimonials.vue';
// import CallToAction from '../../components/views/home/CallToAction.vue';
</script>