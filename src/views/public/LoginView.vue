// src/views/public/LoginView.vue
<template>
  <div>
    <h1>{{ $t('login.title') }}</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" :placeholder="$t('login.email')" />
      <input v-model="password" type="password" :placeholder="$t('login.password')" />
      <button type="submit">{{ $t('login.submit') }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter, useRoute } from 'vue-router'; // ¡Importa useRoute!

export default defineComponent({
  name: 'LoginView',
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute(); // Obtén acceso a la ruta actual

    const handleLogin = async () => {
      await authStore.login({ email: email.value, password: password.value });
      if (authStore.isAuthenticated) {
        // Pasa el locale actual en los params
        router.push({ name: 'dashboard', params: { locale: route.params.locale } });
      }
    };

    return { email, password, handleLogin };
  },
});
</script>