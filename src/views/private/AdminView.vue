// src/views/private/AdminView.vue
<template>
  <div>
    <h1>{{ $t('admin.titulo') }}</h1>
    <p>Panel de administración</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminView',
});
</script>