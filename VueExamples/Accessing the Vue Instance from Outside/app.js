
Vue.component('hello',{
  template:'<h1>HELLO COMPONENT!!!</h1>'
  });

var vm1=new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      console.log(this.$refs.myButton);
      this.$refs.myButton.innerText='Test OK';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 =new Vue({
  el: '#app2',
  data: {
    title: 'App2 The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    },
    onChange: function(){
      vm1.title="Changed from vm 2";
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$refs.heading.innerText="Asim :)";
vm2.$refs.heading.innerText="Asim 2:)";


setTimeout(() => {
  vm1.title="Changed By Timer VM1";
  vm2.title="Changed By Timer VM2"
  console.log(vm1.$data.title);
}, 3000);

var vm3 = new Vue({
  template:'<h1>HELLO !!!</h1>'
});

vm3.$mount("#app3");


