Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    item: {
      id: 1,
      class: 'item01',
      width: 200,
      height: 200,
      style: 'background-color: lightblue;',
    }
  }
})