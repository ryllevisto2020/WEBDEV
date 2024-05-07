<script setup>

const ClickEvent = () =>{
    alert("Click Event");
}
const ClickEvent_A = () =>{
    alert("Click Event A");
}

const ChangeEvent = (e) =>{
    console.log(e);
}

defineEmits(['clickable','clickable_A']);
</script>
<template>
    <h1>This is a Event Handling</h1>
    <input type="button" value="Event 1" v-on:click="()=>{ClickEvent()}"/>
    <input type="button" value="Event 2" @click="()=>{ClickEvent_A()}"/>
    
    <!--EVENT WITH PARAMETERS/ARGUMENTS-->
    <input type="text" value="" v-on:change="(e)=>{ChangeEvent(e)}"/>

    <!--EMITTER WITH/WITHOUT PARAMETER/ARGUMENTS-->
    <input type="button" value="Emit Event" v-on:click="$emit('clickable')"/>
    <input type="button" value="Emit Event With Arguments/Parameters" v-on:click="$emit('clickable_A','hello world!')"/>
</template>