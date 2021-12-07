let obj = {
  1: '24',
  2: '5'
}

const newObj = JSON.parse(JSON.stringify(obj))

console.log(newObj);