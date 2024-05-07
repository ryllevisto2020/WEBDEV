<script setup>
import { useRoute } from 'vue-router';
const use_route = useRoute();
console.log(`This is the Route Value =>`,use_route);
</script>
<template>
    <h1>This is useRoute</h1>
    <h2>The Output is: {{ use_route }}</h2>
    <h2>Note: Open DevTools and Go to Console to see the output</h2>
</template>