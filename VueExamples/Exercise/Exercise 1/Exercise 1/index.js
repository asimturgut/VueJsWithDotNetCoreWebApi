
var exercise=new Vue({
    el:"#exercise",
    data:{
        name:"Asim",
        age:30,
        imageSrc:'https://pbs.twimg.com/profile_images/926594448485748736/VHgObAnR_400x400.jpg'
    },
    computed: {
        items: function () { 
            var items= [
                { name: this.name },
                { name: this.name },
                { name: this.name }
              ];
              return items;
         }
      },
      methods: {
          getFloat:function(){
              var floatNumber=Math.random();
              return floatNumber;
          },
          changeName: function(event){
              this.name=event.target.value;
          }
      }
});

