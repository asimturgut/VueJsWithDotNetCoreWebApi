new Vue({
    el:"#app",
    data:{
        title:"Grow up step by step",
        content:"Hello World Hello Vue :)",
        link:"https://www.google.com.tr/",
        finishedLink:'<a href="https://www.google.com.tr">Click to google</a>'
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