import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//we use golobal component inject here with home.vue
Vue.component('app-servers',Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
