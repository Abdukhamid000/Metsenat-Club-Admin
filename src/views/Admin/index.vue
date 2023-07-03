<template>
  <div>
    <Header />
    <Sub />
    <div class="w-full max-w-1200">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Sub from '../../components/Sub.vue'
</script>

<style scoped></style>
