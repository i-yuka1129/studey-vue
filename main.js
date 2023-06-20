Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    message: {
      value: 'Hello Vue.js!'
    },
    list: ['りんご', 'ばなな', 'いちご'],
    num: 1
  },
  methods: {
    increment: function() {
      this.count += 1
    }
  }
})