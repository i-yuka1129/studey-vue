Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    width: 100,
    height: 200
  },
  computed: {
    watchTarget: function() {
      return [this.width, this.height]
    }
  },
  watch: {
    watchTarget: function() {
      console.log('変更されました')
    }
  }
})