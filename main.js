Vue.config.devtools = true;

var bus = new Vue({
  data: {
    count: 0
  }
})

Vue.component('component-b', {
  template: '<p>{{ bus.count }}</p>',
  computed: {
    bus: function () {
      return bus.$data
    }
  },
  created: function () {
    bus.$on('bus-event', function () {
      this.count++
    })
  },
  props: {
    id: Number,
    name: String,
    hp: Number
  },
  methods: {
    doAttack: function () {
      this.$emit('attack', this.id)
    }
  }
})

new Vue({
  el:'#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100},
      { id: 2, name: 'ゴブリン', hp: 200},
      { id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
  methods: {
    handleAttack: function (id) {
      var item = this.list.find(function (el) {
        return el.id === id
      })
      if (item !== undefined && item.hp > 0)item.hp -= 10
    }
  }
})