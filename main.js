Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    width: 800
  },
  computed: {
    computedData: function() {
      return Math.random() 
    }
  },
  methods: {
    methodsData: function() {
      return Math.random() 
    }
  }
})