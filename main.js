Vue.config.devtools = true;

Vue.component('my-component', {
  template: '<p>{{ message }}</p>',
  data: function() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    
  }
})

new Vue({
  el:'#app',
})