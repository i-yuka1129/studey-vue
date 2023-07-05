Vue.config.devtools = true;

Vue.component('my-component', {
  template: '#child-template'
})

new Vue({
  el: '#app',
})