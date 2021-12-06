let input = `1,2,1,1,1,1,1,1,2,1,3,1,1,1,1,3,1,1,1,5,1,1,1,4,5,1,1,1,3,4,1,1,1,1,1,1,1,5,1,4,1,1,1,1,1,1,1,5,1,3,1,3,1,1,1,5,1,1,1,1,1,5,4,1,2,4,4,1,1,1,1,1,5,1,1,1,1,1,5,4,3,1,1,1,1,1,1,1,5,1,3,1,4,1,1,3,1,1,1,1,1,1,2,1,4,1,3,1,1,1,1,1,5,1,1,1,2,1,1,1,1,2,1,1,1,1,4,1,3,1,1,1,1,1,1,1,1,5,1,1,4,1,1,1,1,1,3,1,3,3,1,1,1,2,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,2,1,1,1,4,1,1,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,2,3,1,2,1,1,5,4,1,1,2,1,1,1,3,1,4,1,1,1,1,3,1,2,5,1,1,1,5,1,1,1,1,1,4,1,1,4,1,1,1,2,2,2,2,4,3,1,1,3,1,1,1,1,1,1,2,2,1,1,4,2,1,4,1,1,1,1,1,5,1,1,4,2,1,1,2,5,4,2,1,1,1,1,4,2,3,5,2,1,5,1,3,1,1,5,1,1,4,5,1,1,1,1,4`;

input = input.split(',')
input = input.map( (num) => Number(num))

const starOne = () => {
  let copyInput = JSON.parse(JSON.stringify(input))

  for(let i = 0; i < 80; i++){
    let newArr = [];
    copyInput = copyInput.map( (num) => {
      --num
      if(num < 0) {
        newArr.push(8)
        num = 6;
      }
      return num;
    })
    copyInput = copyInput.concat(newArr)
  }

  console.log(copyInput.length);
}

const starTwo = () => {
  let copyInput = JSON.parse(JSON.stringify(input))
  let obj = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
  }

  copyInput = copyInput.map( (num) => {
    num = String(num)
    obj[num]++;
    return num;
  })

  for(let i = 0; i < 256; i++){
    console.log(i);
    let newArr = [];
    
    console.log(obj);
    copyInput = copyInput.concat(newArr)
  }
  
  console.log(copyInput.length);
}

starOne();
starTwo();