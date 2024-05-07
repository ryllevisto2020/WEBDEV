<script setup>
const emits = defineEmits(['call'])
function hello() {
    alert("from child");
}
</script>
<template>
    <h1>awd</h1>
    <button  @click="$emit('call','awd')">click me</button>
</template>