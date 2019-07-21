new Vue({
    el:"#app",
    data:{
        counter:0,
        x:0,
        y:0
        },
    methods: {
        buttonClick:function (step) {
            this.counter+=step;
        },
        updateCoordinate:function(owndata,event){
            console.log(owndata)
            this.x=event.clientX;
            this.y=event.clientY;

        },
        alertMe: function(event){
            console.log(event);
        }
        
    }
});