<script setup>
import { ref } from 'vue';
const data = ref(null);
data.value = [{
    name:"Rylle Visto",
},{
    name:"Claire Dulay",
}]
</script>
<template>
    <h1>This is a Slot!:</h1>
    <div v-for="profile in data">
        <slot :names="profile.name"></slot> <!--This is a Slot or Children Props-->
    </div>
</template>