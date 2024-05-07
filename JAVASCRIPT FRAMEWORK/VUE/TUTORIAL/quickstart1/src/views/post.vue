<script setup>
import { onMounted, ref , watch, watchEffect} from 'vue';
import {useRouter,useRoute, onBeforeRouteUpdate} from 'vue-router';

const Route = useRoute();
const ParamsId = ref(Route.params.id);
const data = ref();

onMounted(() =>{
    console.log("onMounted=>",ParamsId);
})

onBeforeRouteUpdate(()=>{
    console.log("onBeforeRouteUpdate=>",Route);
    console.log("onBeforeRouteUpdate=>",Route);
})

watch(ParamsId,(newId,oldId)=>{
    alert("awd");
});

/* FUNCTION SECTION*/
async function fetchAll(){
    const response = fetch("http://localhost:3000/posts",{
        method: "GET",
    }).then(async function(res){
        data.value = await res.json();
    });
}

async function fetchSingle(id){
    const response = fetch("http://localhost:3000/posts/"`${id}`,{
        method: "GET",
    }).then(async function(res){
        console.log(res);
    })
}
</script>
<template>
    <h1>{{ data }}</h1>
</template>