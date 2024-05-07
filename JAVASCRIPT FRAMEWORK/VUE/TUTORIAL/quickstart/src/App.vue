<script setup>
import { useRoute,useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
console.log(route);
</script>
<template>
  <RouterView></RouterView>
</template>

<style>
</style>