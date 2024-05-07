<script setup>
import {useRouter,useRoute} from "vue-router"
const Router = useRouter();

</script>

<template>
  <router-link to="/fundamentals">Fundamentals</router-link>
  <router-link to="/router">Router</router-link>
  <router-link to="/post">Post</router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
