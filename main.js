Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello Vue,js',
  },
  methods: {
    handleInput: function(event) {
      this.message = event.target.value
    }
  }
})