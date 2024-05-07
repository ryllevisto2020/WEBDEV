<script setup>
import { ref } from 'vue';

const sample = true; //Change false to see the output
const isClick = ref(true);

const clickHere = () =>{ //Click the button to see the output
    isClick.value = !isClick.value;
}
</script>
<template>
    <h1>This is a Conditional Rendering</h1>
    <div v-if="sample">
        <h1>hello</h1>
    </div>
    <div v-else>
        <h1>world</h1>
    </div>

    <input type="button" value="Click Here" v-on:click="clickHere"/>
    <div>
        <h1 v-if="isClick">Yes!</h1>
        <h1 v-else>No!</h1>
    </div>
</template>


