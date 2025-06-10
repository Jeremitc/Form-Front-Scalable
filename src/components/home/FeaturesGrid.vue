<!-- src/components/views/home/FeaturesGrid.vue -->
<template>
  <section class="bg-gray-50 py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado de la Sección -->
      <div class="text-center">
        <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">
          {{ $t('home.features.tagline') }}
        </h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {{ $t('home.features.title') }}
        </p>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {{ $t('home.features.description') }}
        </p>
      </div>

      <!-- Rejilla de Características (Grid) -->
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          
          <!-- Característica 1 -->
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <!-- Icono SVG (Ej: Un candado para Seguridad) -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-lg font-medium text-gray-900">
                {{ $t('home.features.item1.title') }}
              </h3>
              <p class="mt-2 text-base text-gray-500">
                {{ $t('home.features.item1.description') }}
              </p>
            </div>
          </div>

          <!-- Característica 2 -->
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <!-- Icono SVG (Ej: Un globo para Internacionalización) -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935m-14.005 14.005A10 10 0 1120.95 9.055" />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-lg font-medium text-gray-900">
                {{ $t('home.features.item2.title') }}
              </h3>
              <p class="mt-2 text-base text-gray-500">
                {{ $t('home.features.item2.description') }}
              </p>
            </div>
          </div>
          
          <!-- Característica 3 -->
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <!-- Icono SVG (Ej: Un cohete para Rendimiento) -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-lg font-medium text-gray-900">
                {{ $t('home.features.item3.title') }}
              </h3>
              <p class="mt-2 text-base text-gray-500">
                {{ $t('home.features.item3.description') }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Este componente es puramente visual, por lo que no necesita lógica de script.
// Todo el contenido es manejado por i18n y la estructura del template.
</script>