<template>
  <section class="bg-blue-600 text-white">
    <div class="container mx-auto px-6 py-24 text-center">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight">
        {{ $t('home.hero.title') }}
      </h1>
      <p class="mt-4 text-lg md:text-xl text-blue-100">
        {{ $t('home.hero.subtitle') }}
      </p>
      <div class="mt-8">
        <router-link 
          :to="{ name: 'login', params: { locale: $i18n.locale } }"
          class="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
        >
          {{ $t('home.hero.cta') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Este componente es puramente visual, no necesita lógica de script por ahora.
</script>