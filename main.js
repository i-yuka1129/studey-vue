Vue.config.devtools = true;

var mixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

Vue.component('my-component-a', {
  mixin: [mixin],
  template: '<p>MyComponentA</p>'
})
Vue.component('my-component-b', {
  mixin: [mixin],
  template: '<p>MyComponentB</p>'
})

new Vue({
  el: '#app',
  data: {
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0
  },
  computed: {
    component: function () {
      return this.componentTypes[this.current]
    }
  }
})