Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    edited: false,
    list: [
      { id: 1, name: 'りんご', price: 100},
      { id: 2, name: 'ばなな', price: 200},
    ]
  },
  created: function() {
    var unwatch = this.$watch('list', function() {
      this.edited = true
      unwatch()
    }, {
      deep: true
    })
  }
})