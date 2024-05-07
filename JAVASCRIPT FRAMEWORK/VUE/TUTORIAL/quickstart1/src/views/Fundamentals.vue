<script setup>
//Import Componets 
import TemplateCom from "../components/Templates.vue";
import PropsCom from "../components/Props.vue";
import SlotsCom from "../components/Slots.vue";
import ComputedCom from "../components/ComputedProperties.vue";
import ListRenderCom from "../components/ListRendering.vue";
import ConditionRenderCom from "../components/ConditionalRendering.vue";
import EventHandlingCom from "../components/EventHandling.vue";
import WatchersCom from "../components/Watchers.vue"
// Create Emitter Event 
const HandleEventEmit = () =>{
    alert("Parents: hello world! (VALUE FROM PARENTS)");
}
const HandleEventEmit_A = (e) =>{
    alert("Parents: "+ e + " (VALUE FROM CHILD EMIT COMPONENTS)");
}
</script>

<template>
<h1>VUE.JS Fundamentals and Basic</h1>
<br/>
<TemplateCom/>
<h1>------------------------------------------</h1>
<PropsCom name="Visto"/>
<h1>------------------------------------------</h1>
<SlotsCom v-slot="slotProps">
    <h3>Slot:{{ slotProps }}</h3> <!--This is a Slot or Children Props-->
</SlotsCom>
<h1>------------------------------------------</h1>
<ComputedCom/>
<h1>------------------------------------------</h1>
<ListRenderCom/>
<h1>------------------------------------------</h1>
<ConditionRenderCom/>
<h1>------------------------------------------</h1>
<EventHandlingCom @clickable="HandleEventEmit" @clickable_A="HandleEventEmit_A"/>
<h1>------------------------------------------</h1>
<WatchersCom/>
</template>

<style scoped>
</style>
