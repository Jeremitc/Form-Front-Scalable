// src/components/layout/LanguageSwitcher.vue
<template>
  <select v-model="currentLocale" @change="changeLocale" class="border rounded px-2 py-1">
    <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ locale.toUpperCase() }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const { availableLocales, locale } = useI18n();
const router = useRouter();

const currentLocale = computed({
  get: () => locale.value,
  set: (newLocale) => {
    locale.value = newLocale;
  }
});

const changeLocale = async () => {
  // Cambia el parámetro 'locale' en la URL actual
  await router.push({ params: { locale: currentLocale.value } });
};
</script>