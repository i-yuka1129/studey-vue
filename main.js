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
  methods: {
    upDate: function(index) {
      this.$set(this.list, 0, { id: 1, name: 'キングスライム', hp:500})
    }
  }
})