Vue.config.devtools = true;

function Cat(name) {
  this.name = name
}

Vue.component('example', {
  props: {
    val: Cat
  }
})

new Vue({
  el:'#app',
  data: {
    value: new Cat('たま')
  }
})