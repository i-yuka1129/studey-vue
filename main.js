Vue.config.devtools = true;

Vue.component('my-calender', {
  // model: {
  //   // 現在の値をvalueではなくcurrentに割り当てる
  //   prop: 'current',
  //   // イベントをchangeに割り当てる
  //   event: 'change'
  // },
  // // propsでcurrentを受け取る
  // props: {
  //   current: String
  // },
  // created: function() {
  //   this$emit('change', '2023-07-01')
  // }
  template: '<div class="my-calender">{{ value }}</div>',
  props: { value: String },
  created: function () {
    this.$emit('input', '2023-07-01')
  }
})

new Vue({
  el:'#app',
  data: {

  }
})