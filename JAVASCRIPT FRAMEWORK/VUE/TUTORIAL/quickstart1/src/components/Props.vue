<script setup>
const props = defineProps({
    name:String,
})
</script>
<template>
    <h1>This is a Props:</h1><h3>{{ props.name }}</h3>
</template>