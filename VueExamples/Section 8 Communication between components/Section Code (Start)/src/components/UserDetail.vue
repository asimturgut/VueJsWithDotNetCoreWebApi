<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{myName}}</p>
         <p>User Age : {{userAge}}</p>
        <p>Reverse User Name : {{switchName()}}</p>
      <button @click="resetName">ResetName</button>
      <button @click="resetFn">Parent Reset Name</button>
     
    </div>
</template>

<script>

import {eventBus}  from '../main';

export default {
    //props: ['myName'],
    props:{
        myName:{
            type:String,
            required:true,
            //if type=Object
        //     default: function(){
        //         return {
        //             name:"Asim Turgut"
        //         }
        // }
        default:"Asim Turgut"
        },
        resetFn:Function,
        userAge:Number

    },
    methods: {
        switchName(){
            return this.myName.split("").reverse().join("");
        },
        resetName(){
            this.myName='Default Name';
            this.$emit('nameWasReset',this.myName);
        }
    },
    created(){
        eventBus.$on('ageWasEdited',(age)=>{
            this.userAge=age;
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
