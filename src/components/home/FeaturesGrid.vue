<!-- src/components/home/FeaturesGrid.vue -->
<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        {{ $t('home.features.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          :class="{ 'animate-fade-in': isVisible }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="text-green-500 text-4xl mb-4">
            <component :is="feature.icon" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Rocket, Users, Shield } from 'lucide-vue-next';

const { t } = useI18n();

const features = [
  {
    title: t('home.features.feature1.title'),
    description: t('home.features.feature1.description'),
    icon: Rocket,
  },
  {
    title: t('home.features.feature2.title'),
    description: t('home.features.feature2.description'),
    icon: Users,
  },
  {
    title: t('home.features.feature3.title'),
    description: t('home.features.feature3.description'),
    icon: Shield,
  },
];

const isVisible = ref(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  },
  { threshold: 0.1 }
);

onMounted(() => {
  const section = document.querySelector('.feature-card');
  if (section) observer.observe(section);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>