<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Components</h1>
                <p>Server  Status : {{status}} </p>
                <app-servers> </app-servers>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            var response={};
            response.status='Critical';
            return response;
        }
    }
</script>

<style>

</style>
