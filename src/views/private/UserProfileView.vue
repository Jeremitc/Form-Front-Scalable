// src/views/private/UserProfileView.vue
<template>
  <div>
    <h1>{{ $t('perfil_usuario.titulo', { id: $route.params.id }) }}</h1>
    <p>Detalles del usuario {{ $route.params.id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserProfileView',
});
</script>