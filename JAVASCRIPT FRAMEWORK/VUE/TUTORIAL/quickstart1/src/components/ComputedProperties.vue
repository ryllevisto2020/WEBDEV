<script setup>
import { computed , ref} from 'vue'

const data = {
    name:"visto",
    grades:[
        "ICT101 -> 85",
        "NET101 -> 86",
    ]
}

const InputFname = ref(null);
const InputLname = ref(null);

const name = ref(null);

const fullname = computed({
    get(){
        return name.value;
    },
    set(val){
        name.value = val;
    }
});

const haveGrades = computed(()=>{
    return data.grades.length > 0 ? "Yes" : "No";
})

const handleClick = () =>{
    //name.value = InputFname.value.value + " " + InputLname.value.value;
    fullname.value = InputFname.value.value + " " + InputLname.value.value;
}
</script>
<template>
    <h1>This is a Computed</h1>
    <h3>Name:{{ data.name }}</h3>
    <h3>Have Grades:{{ haveGrades }}</h3>

    <input type="text" name="" class="" id="" value="" ref="InputFname" placeholder="First Name"/>
    <input type="text" name="" class="" id="" value="" ref="InputLname" placeholder="Last Name"/>
    <label for="full">Fullname:{{ fullname }}</label>
    <input type="button" v-on:click="handleClick" name="" class="" id="" value="Compute" ref=""/>
</template>