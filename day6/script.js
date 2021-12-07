let input = `1,2,1,1,1,1,1,1,2,1,3,1,1,1,1,3,1,1,1,5,1,1,1,4,5,1,1,1,3,4,1,1,1,1,1,1,1,5,1,4,1,1,1,1,1,1,1,5,1,3,1,3,1,1,1,5,1,1,1,1,1,5,4,1,2,4,4,1,1,1,1,1,5,1,1,1,1,1,5,4,3,1,1,1,1,1,1,1,5,1,3,1,4,1,1,3,1,1,1,1,1,1,2,1,4,1,3,1,1,1,1,1,5,1,1,1,2,1,1,1,1,2,1,1,1,1,4,1,3,1,1,1,1,1,1,1,1,5,1,1,4,1,1,1,1,1,3,1,3,3,1,1,1,2,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,2,1,1,1,4,1,1,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,2,3,1,2,1,1,5,4,1,1,2,1,1,1,3,1,4,1,1,1,1,3,1,2,5,1,1,1,5,1,1,1,1,1,4,1,1,4,1,1,1,2,2,2,2,4,3,1,1,3,1,1,1,1,1,1,2,2,1,1,4,2,1,4,1,1,1,1,1,5,1,1,4,2,1,1,2,5,4,2,1,1,1,1,4,2,3,5,2,1,5,1,3,1,1,5,1,1,4,5,1,1,1,1,4`;
let obj = {
  '-1': 0,
  '0': 0,
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 0,
  '8': 0,
};

input = input.split(',');
input = input.map((num) => Number(num));

const populateObj = (arr) => {
  arr.map((num) => {
    num = String(num);
    obj[num]++;
    return num;
  });
};

const starOne = () => {
  let copyInput = JSON.parse(JSON.stringify(input));

  for (let i = 0; i < 80; i++) {
    let newArr = [];
    copyInput = copyInput.map((num) => {
      --num;
      if (num < 0) {
        newArr.push(8);
        num = 6;
      }
      return num;
    });
    copyInput = copyInput.concat(newArr);
  }

  console.log(copyInput.length);
};

const starTwo = () => {

  let copyInput = JSON.parse(JSON.stringify(input));

  populateObj(copyInput)
  const newObj = {}
  for (let i = 0; i < 256; i++) {
    for(let i = 0; i < 9; i++){
      newObj[i - 1] = obj[i]
    }
    if(newObj[-1] > 0){
      let newFish = newObj[-1]
      newObj[-1] = 0;
      newObj[8] = newFish;
      newObj[6] += newFish
    } else {
      newObj[8] = 0;
    }
    obj = JSON.parse(JSON.stringify(newObj))
  }

  console.log(obj);

  let total = Object.values(obj).reduce( (total, curr) => total + curr)
  console.log(total);
};

starOne();
starTwo();
