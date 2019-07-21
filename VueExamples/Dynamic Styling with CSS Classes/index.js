new Vue({
    el:"#app",
    data:{
        attachedRed:false,
        color:"green"
        },
        computed: {
            divClass: function(){
                return {
                    red:this.attachedRed,
                    yellow:!this.attachedRed
                };
            }
        },
    methods: {
        
        
    }
});