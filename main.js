Vue.config.devtools = true;

Vue.component('comp-child', {
  template: '<p id="child" class="child">Child</p>',
  // props: ['val']
})

new Vue({
  el:'#app',
  data: {
    message: 'Hello'
  }
})