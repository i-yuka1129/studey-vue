Vue.config.devtools = true;

// 失敗
function myFunction() {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve('succese!')
    } else {
      reject('error!')
    }
  })
}

myFunction(100).catch(value => {
  console.log(value)
})