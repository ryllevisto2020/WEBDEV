<script setup>
import {onMounted, ref} from "vue";
const emits = defineEmits(["call"]);
const title = ref(null);
const notes = ref(null);

let dataNotes = Array();
let id = 0;
function CreateTodo(){
    console.log(id);
    let data = {
        id:id,
        title:title.value.value,
        notes:notes.value.value,
    }
    dataNotes.push(data);
    window.localStorage.setItem("notes",JSON.stringify(dataNotes));
    title.value.value = null;
    notes.value.value = null;
    let collectNotes = JSON.parse(window.localStorage.getItem("notes"));
    id = collectNotes[collectNotes.length - 1].id + 1;
}

onMounted(()=>{
    let checkNotes = window.localStorage.getItem("notes");
    console.log(checkNotes)
    if(checkNotes == null){
        window.localStorage.setItem("notes",JSON.stringify(dataNotes));
        id = id + 1;
    }else{
        let collectNotes = JSON.parse(window.localStorage.getItem("notes"));
        console.log(collectNotes);
        if(collectNotes.length ==0){
            id = id + 1;
        }else{
            collectNotes.forEach(element => {
                dataNotes.push(element)
            });
            id = collectNotes[collectNotes.length - 1].id + 1;
            console.log(id);
        }
    }
});
</script>
<template>
<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" ref="title">
</div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Notes</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref="notes"></textarea>
</div>
<button type="button" class="btn btn-primary" v-on:click="CreateTodo" @click="$emit('call')">Create</button>
</template>
<style scoped>
</style>