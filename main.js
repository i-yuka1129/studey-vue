Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
})