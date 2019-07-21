<template>
<div>

<h1>ServerStatus.Vue </h1>
<p>Server Status : {{status}} </p>
<hr>

<button @click="changeStatus">Change Status !</button>
</div>
</template>

<script>
export default {
    data:function(){
        var response={};
        response.status='Critical';
        return response;
    },
    methods:{
        changeStatus(){
            this.status='Normal';
        }
    }
}
</script>

<style>

</style>

