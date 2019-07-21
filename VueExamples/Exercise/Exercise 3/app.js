new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        watch: {
            //execute code upon data changes
            value: function (val) {
                var vm=this;
                setTimeout(function(){
                    vm.value=0;
                },5000);                
            }
        },
        computed: {
            result:function(){
                
                if(this.value==37){
                    return "OK"
                }
                else
                {
                    return "NOK";
                }
            }
        }
    });