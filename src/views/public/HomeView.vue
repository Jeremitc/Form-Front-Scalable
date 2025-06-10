<!-- src/views/public/HomeView.vue -->
<template>
  <div >
    <HeroSection />
    <FeaturesGrid />
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../../components/home/HeroSection.vue';
import FeaturesGrid from '../../components/home/FeaturesGrid.vue';
import CallToAction from '../../components/home/CallToAction.vue';
</script>