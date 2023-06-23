Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  methods: {
    handleClick: function() {
      alert('クリックしたよ！')
    }
  }
})