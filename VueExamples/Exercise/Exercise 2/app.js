new Vue({
        el: '#exercise',
        data: {
            value: 'Default'
        },
        methods: {
            callAlert: function(){

                alert("Hello Vue!!!")
            },
            callKeyDown: function(event){

                this.value=event.target.value;
            }
        }
    });