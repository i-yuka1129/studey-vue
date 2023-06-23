Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100},
      { id: 2, name: 'ゴブリン', hp: 200},
      { id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
  mounted: function() {
    console.log(this.$el)
  },
  created: function() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this)
    this.$set(this.list, 1, { id: 1, name: 'キングスライム', hp: 500})
  }
})