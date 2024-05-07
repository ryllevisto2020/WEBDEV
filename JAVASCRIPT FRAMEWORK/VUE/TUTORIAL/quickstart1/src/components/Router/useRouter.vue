<script setup>
import { useRouter } from 'vue-router';
const use_router = useRouter();
console.log(`This is the Router Value =>`,use_router);
</script>
<template>
    <h1>This is useRouter</h1>
    <h2>The Output is: {{ use_router }}</h2>
    <h2>Note: Open DevTools and Go to Console to see the output</h2>
</template>