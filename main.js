Vue.config.devtools = true;
var app = new Vue({
  el:'#app',
  data: {
    order: false,
    // フォームの入力と紐づけるデータ
    budget: 300,
    // 表示件数
    limit: 2,
    // もとになるリスト
    list: [
      {id: 1, name: 'りんご', price: 100},
      {id: 2, name: 'ばなな', price: 200},
      {id: 3, name: 'いちご', price: 300},
      {id: 4, name: 'めろん', price: 400},
      {id: 5, name: 'すいか', price: 500},
    ]
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    sorted: function() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    },
    limited: function() {
      return this.sorted.slice(0, this.limit)
    }
  }
})