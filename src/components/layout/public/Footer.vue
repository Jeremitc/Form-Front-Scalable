<!-- src/components/layout/Footer.vue -->
<template>
  <footer class="bg-gray-800 text-white py-8 mt-auto">
    <div class="container mx-auto text-center">
      <p>© {{ new Date().getFullYear() }} Mi App. Todos los derechos reservados.</p>
      <div class="mt-4">
        <a href="#" class="px-3 hover:text-blue-400">Política de Privacidad</a>
        <a href="#" class="px-3 hover:text-blue-400">Términos de Servicio</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No se necesita script para este ejemplo simple
</script>