<template>
<div>

<h1>Home Vue </h1>
<app-server-status v-for="server in  5"> </app-server-status>
</div>
</template>

<script>
//we use local component inject here serverstatus.vue
import ServerStatus from './ServerStatus.vue';
export default {
    components:{
        'app-server-status':ServerStatus
    }
    
}
</script>

<style>

</style>

