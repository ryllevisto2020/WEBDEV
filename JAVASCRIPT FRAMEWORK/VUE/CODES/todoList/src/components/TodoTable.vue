<script setup>
import CreateTodo from '../components/CreateTodo.vue'
import { onMounted ,ref,watch } from 'vue';

let collectionNotes = ref(null);

function refreshTable(){
    collectionNotes.value = JSON.parse(window.localStorage.getItem("notes"));
}

onMounted(()=>{
    collectionNotes.value = JSON.parse(window.localStorage.getItem("notes"));
});
</script>
<template>
<CreateTodo @call="refreshTable"/>
<br>
<br>
<h4>LIST</h4>
<table class="table">
    <thead>
        <tr>
            <th scope="col">ID#</th>
            <th scope="col">Title</th>
            <th scope="col">Notes</th>
            <th scope="col">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in collectionNotes">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.notes }}</td>
        </tr>
    </tbody>
    </table>
</template>
<style scoped>
</style>