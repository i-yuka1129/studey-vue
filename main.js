Vue.config.devtools = true;

const array = [1, 2, 3]
// バラバラの3つの引数として渡す
myFunction(...array)
// arrayを展開して4を加えた新しい一次配列を作成
const newArray = [...array, 4] 