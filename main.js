Vue.config.devtools = true;

const [a, b] = [1, 2]
console.log(a)


const {name} = { id:1, name: 'りんご'}
console.log(name)

function myFunction({ id, name }) {
  console.log(name) // -> りんご
}
myFunction({ id: 1, name: 'りんご' })