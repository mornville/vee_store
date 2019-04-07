import Vue from 'vue';
import App from './App.vue';
import $ from "jquery";
import VueFuse from 'vue-fuse'



new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use(VueFuse);