new Vue({
    el:"#app",
    data:{
        title:"First Step With Vue.js",
        content:"Hello World Hello Vue :)",
        link:"https://www.google.com.tr/"
    },
    methods: {
        changeTitle:function (event) {
            this.title=event.target.value;
        },
        sayHello:function()
        {
            this.title= "Hi Asim";
            return this.title;
        },
        getTitle:function()
        {
            return this.title;
        }
        
    }
});