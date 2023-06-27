Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    width: 800,
    height: 600
  },
  computed: {
    halfWidth: function() {
      return this.width / 2
    },
    halfHight: function() {
      return this.height / 2
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHight
      }
    }
  }
})