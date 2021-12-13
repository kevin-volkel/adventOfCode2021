let input = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;

//! fold the paper up (for horizontal y=... lines) or left (for vertical x=... lines)

let [points, folds] = input.split('\n\n')
points = points.split('\n')
folds = folds.split('\n')

const dayOne = () => {
  let grid = {};
  points.map( (point) => {
    let [col, row] = point.split(',')
    if(!grid[row]) grid[row] = [];
    grid[row].push(col);
  })

  for(fold of folds) {
    let [dir, num] = fold.split(' ')[2].split('=')
    
    if(dir == 'y') {
      for(let i = Number(num) + 1; i <= Math.max(...Object.keys(grid)); i++){
        if(!grid[i]) continue;
        let newRow = (2 * num) - i;
        if(!grid[newRow]) grid[newRow] = [];
        grid[newRow].push(...grid[i])
        grid[i] = undefined;
      }
    }
    if(dir == 'x') {
      console.log(grid);
      for(let i = 0; i <= Math.max(...Object.keys(grid)); i++){
        if(!grid[i]) continue;
        console.log(grid[i]);
        let tempArr = grid[i]
        for(let col = 0; col < tempArr.length; i++){
          grid[i] = grid[i].sort( (a, b) => a - b)
          if(grid[i][col] < num) continue;
          console.log(grid[2][col]);
          let newCol = (2 * num) - grid[i][col];
          grid[i][col] = false;
          grid[i].push(String(newCol))
          grid[i] = grid[i].filter( (num) => num)
        }
        grid[i] = [...new Set(grid[i])];
      }
      console.log(grid);
    }
  }

  // return console.log(grid);
}

const dayTwo = () => {

}

dayOne();
dayTwo();