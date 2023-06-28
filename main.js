Vue.config.devtools = true;

Vue.component('comp-child', {
  template: '<div>...</div>',
  created: function () {
    this.$on('open', function () {
      console.log('何か処理')
    })
  }
})

new Vue({
  el:'#app',
  methods: {
    handleClick: function () {
      this.$refs.child.$emit('open')
    }
  }
})