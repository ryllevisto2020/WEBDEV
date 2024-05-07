<script setup>
const data = [
    {
        name:"visto"
    },
    {
        name:"dulay"
    }
    ]
</script>
<template>
    <h1>This is a List Rendering</h1>
    <div v-for="datas in data">
        <h3>{{ datas }}</h3>
    </div>
</template>