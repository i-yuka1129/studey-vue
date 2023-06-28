Vue.config.devtools = true;

Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function () {
      this.$emit('childs-event')
    }
  }
})

new Vue({
  el:'#app',
  methods: {
    parentMethods: function () {
      alert('イベントをキャッチ！')
    }
  }
})