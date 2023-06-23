Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello Vue,js',
  },
  methods: {
    doDelete: function() {
      console.log('削除')
    }
  }
})