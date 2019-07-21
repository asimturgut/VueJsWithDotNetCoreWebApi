new Vue({
    el:"#app",
    data:{
        link:"https://www.google.com.tr/"
        },
    methods: {
        changeLink:function () {
            this.link="https://www.apple.com";
        }
    }
});