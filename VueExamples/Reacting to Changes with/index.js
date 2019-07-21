new Vue({
    el:"#app",
    data:{
        counter:0
        },
        computed: {
            output:function()
            {
            var response=    this.counter>5 ? "Greater Than 5": "Less than 5";
        return response;    
        }
        },
        watch: {
            //execute code upon data changes
            counter: function (value) {
                var vm=this;
                setTimeout(function(){
                    vm.counter=0;
                },2000);                
            }
        },
    methods: {
        
        
    }
});