// src/views/NotFoundView.vue
<template>
  <div>
    <h1>{{ $t('notFound.title') }}</h1>
    <p>{{ $t('notFound.description') }}</p>
    <!-- El enlace a "/" será interceptado por el router y redirigido a "/es" o "/en" -->
    <router-link to="/">{{ $t('notFound.back') }}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
});
</script>