// src/views/private/ProfileView.vue
<template>
  <div>
    <h1>{{ $t('profile.title') }}</h1>
    <p>{{ $t('profile.description') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileView',
});
</script>