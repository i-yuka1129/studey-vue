Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    text: 'Vue',
    list: [
      { id: 1, name: 'スライム', hp: 100},
      { id: 2, name: 'ゴブリン', hp: 200},
      { id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
  methods: {
    doAttack: function(index) {
      this.list = this.list.filter(function(el) {
        return el.hp >= 100
      })
    }
  }
})