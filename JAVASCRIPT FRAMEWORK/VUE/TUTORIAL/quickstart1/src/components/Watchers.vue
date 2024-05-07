<script setup>
import { ref , watch } from 'vue';
const count = ref(0);

watch(count,(newCount,oldCount)=>{
    console.log(`The New Count:${newCount} and The Old Count:${oldCount}`);
});

async function ClickHandler(){
    count.value = count.value +  1;
}
</script>
<template>
    <h1>This is a Watcher</h1>
    <input type="button" name="" class="" id="" value="Click" v-on:click="ClickHandler"/>
</template>