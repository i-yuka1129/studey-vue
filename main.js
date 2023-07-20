Vue.config.devtools = true;

new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    beforeEnter: function() {
      console.log('before-enter')
    },
    enter: function (el, done) {
      console.log('enter')
      setTimeout(done, 1000)
    },
    afterEnter: function (el) {
      console.log('after-enter')
    },
    enterCancelled: function (el) {
      console.log('enter-cancelled')
    },
    // Leave
    beforeLeave: function (el) {
      console.log('before-leave')
    },
    leave: function (el, done) {
      console.log('leave')
      setTimeout(done, 1000)
    },
    afterLeave: function (el) {
      console.log('after-leave')
    },
    leaveCancelled: function (el) {
      console.log('leave-cancelled')
    }
  }
})