let input = `4112256372
3143253712
4516848631
3783477137
3746723582
5861358884
4843351774
2316447621
6643817745
6366815868`;

// let input = `5483143223
// 2745854711
// 5264556173
// 6141336146
// 6357385478
// 4167524645
// 2176841721
// 6882881134
// 4846848554
// 5283751526`
input = input.split('\n').map( (row) => row.split('').map( (num) => Number(num)))
// console.table(input)

const increaseSurrounding = (arr, row, col) => {
  let left, right, top, bottom = false;
  if(col == 0) left = true
  if(row == 0) top = true
  if(col == arr[row].length - 1) right = true;
  if(row == arr.length - 1) bottom = true;


  if(!top && !right) arr[row - 1][col + 1]++;
  if(!top && !left) arr[row - 1][col - 1]++;
  if(!top) arr[row - 1][col]++;
  if(!bottom && !right) arr[row + 1][col + 1]++;
  if(!bottom && !left) arr[row + 1][col - 1]++;
  if(!bottom) arr[row + 1][col]++;
  if(!right) arr[row][col + 1]++;
  if(!left) arr[row][col - 1]++;
}

const dayOne = () => {
  let copyInput = JSON.parse(JSON.stringify(input))
  let totalFlashed = 0;
  for(let i = 0; i < 100; i++) {
    console.log(i);
    //! increase everything by 1
    for(row in copyInput) {
      for(col in copyInput[row]){
        copyInput[row][col]++;
      }
    }
    
    //! find anything > 9
    let tempInput = JSON.parse(JSON.stringify(copyInput))
    let searching = true;
    let flashed = [];
    while(searching) {
      searching = false;
      for(row in copyInput) {
        for(col in copyInput[row]){
          if(tempInput[row][col] > 9 && !flashed.includes(`${row}|${col}`)){
            flashed.push(`${row}|${col}`)
            searching = true;
            increaseSurrounding(tempInput, Number(row), Number(col))
          } 
        }
      }
    }
    
    //! reset any that flashed back to 0
    totalFlashed += flashed.length
    flashed.map( (coord) => {
      let [row, col] = coord.split('|')
      tempInput[row][col] = 0;
    })

    copyInput = JSON.parse(JSON.stringify(tempInput))
  }

  return console.log(totalFlashed);
}

const dayTwo = () => {
  let copyInput = JSON.parse(JSON.stringify(input))
  let firstFlash = 0;
  for(let i = 0;; i++) {
    //! increase everything by 1
    for(row in copyInput) {
      for(col in copyInput[row]){
        copyInput[row][col]++;
      }
    }
    
    //! find anything > 9
    let tempInput = JSON.parse(JSON.stringify(copyInput))
    let searching = true;
    let flashed = [];
    while(searching) {
      searching = false;
      for(row in copyInput) {
        for(col in copyInput[row]){
          if(tempInput[row][col] > 9 && !flashed.includes(`${row}|${col}`)){
            flashed.push(`${row}|${col}`)
            searching = true;
            increaseSurrounding(tempInput, Number(row), Number(col))
          } 
        }
      }
    }
    
    //! reset any that flashed back to 0
    if(flashed.length === 100){
      firstFlash = Number(i) + 1;
      break;
    }

    flashed.map( (coord) => {
      let [row, col] = coord.split('|')
      tempInput[row][col] = 0;
    })

    copyInput = JSON.parse(JSON.stringify(tempInput))
  }

  return console.log(firstFlash);
}

dayOne();
dayTwo();