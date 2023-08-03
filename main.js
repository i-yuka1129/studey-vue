Vue.config.devtools = true;

const array = [
  { id: 1, name: 'りんご' },
  { id: 2, name: 'ばなな' }
]
const result = array.findIndex(el => el.id === 2)
console.log(result)