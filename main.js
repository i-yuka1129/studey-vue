Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    width: 800
  },
  computed: {
    halfWidth: {
      get: function() {
        return this.width / 2
      },
      set: function(value) {
        this.width = value * 2
      }
    }
  }
})