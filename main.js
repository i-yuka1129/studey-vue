Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello'
  },
  filters: {
    filter: function(message, foo, num) {
      console.log(message, foo, num)
    }
  }
})