<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
       <button @click="changeName">Change Name</button>
         <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :myName="name"
                :userAge="age"
                @nameWasReset="name=$event"
                :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="ageWasEditedByChild"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:function(){
            var response={};
            response.name="Asim";
            response.age=30;
            return response
        },
        methods: {
            changeName(){
                this.name='Turgut';
            },
            resetName(){
                this.name="Asim";
            },
            ageWasEditedByChild(editedAge){
                console.log(editedAge);
                 this.age=editedAge;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
