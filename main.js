Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    value: '編集してみてね'
  },
  watch: {
    value: _.debounce(function(newVal) {
      console.log(newVal)
    },
    500)
  }
})