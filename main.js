Vue.config.devtools = true;

import Example from 'Example.js'

console.log(Example.count)

new Vue({
  el: '#app',
  data: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  methods: {
    doShuffle: function () {
      this.list = _.shuffle(this.list)
    },
    doAdd: function() {
      var newNumber = Math.max.apply(null, this.list) + 1
      var index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    },
    beforeLeave: function(el) {
      var style = window.getComputedStyle(el)
      el.style.left = el.offsetLeft - parseFloat(style.marginLeft, 10) + 'px'
      el.style.top = el.offsetTop - parseFloat(style.marginTop, 10) + 'px'
    }
  }
})