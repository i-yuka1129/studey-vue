Vue.config.devtools = true;

// 成功
function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success!')
    }, 1000)
  })
}