// src/views/private/DashboardView.vue
<template>
  <div>
    <h1>{{ $t('dashboard.title') }}</h1>
    <p>{{ $t('dashboard.welcome') }}</p>
    <button @click="logout">{{ $t('dashboard.logout') }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter, useRoute } from 'vue-router'; // ¡Importa useRoute!

export default defineComponent({
  name: 'DashboardView',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute(); // Obtén acceso a la ruta actual

    const logout = async () => {
      // El logout es manejado por una ruta específica, es mejor navegar a ella.
      // Le pasamos el locale para que sepa a dónde volver.
      await router.push({ name: 'logout', params: { locale: route.params.locale } });
    };

    return { logout };
  },
});
</script>