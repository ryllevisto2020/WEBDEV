<script setup>
import {useRouter,useRoute} from "vue-router"
const Router = useRouter();

</script>
<template>
    <h1>This is Navigation With Parameter</h1>
    <router-link :to="{name:'router',params:{id:1}}">Click to Navigate using router-link</router-link>
    <input type="button" value="Click to Navigate using useRouter.push" v-on:click="(()=>{Router.push({name:'router',params:{id:2}});})"/>
</template>