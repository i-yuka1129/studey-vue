Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  methods: {
    scrollTop: function() {
      scroll.animateScroll(0)
    }
  }
})