Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello Vue,js',
  },
  methods: {
    handler: function(comment) {
      console.log(comment)
    }
  }
})