
var vm1=new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()")
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeDestroy() {
    console.log("beforeDestroy()");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    destroyVue: function() {
     this.$destroy();
    }
  }
});
