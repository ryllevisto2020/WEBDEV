<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import {ref} from 'vue';


</script>

<template>
  <main>
    <!--NavBar-->
    <NavBar/>
    <router-view class="view one"></router-view>
  </main>
</template>

<style scoped>

</style>
