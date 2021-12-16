// let input = `hl-WP
// vl-fo
// vl-WW
// WP-start
// vl-QW
// fo-wy
// WW-dz
// dz-hl
// fo-end
// VH-fo
// ps-vl
// FN-dz
// WP-ps
// ps-start
// WW-hl
// end-QW
// start-vl
// WP-fo
// end-FN
// hl-QW
// WP-dz
// QW-fo
// QW-dz
// ps-dz`;

let input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`
input = input.split('\n').map( (dir) => dir.split('-'))

const isArrIncluded = (testArr, mainArr) => {
  for(arr of mainArr) {
    if(arr == testArr) return true;
  }
  return false;
}

const dayOne = () => {
  let copyInput = JSON.parse(JSON.stringify(input))
  //! loop through all starts, pushing the possible paths to an arr
  //! keep looping through this arr to add the next part of the path
  //! repeat until no other paths can be made

  let paths = [];
  //! add the starts
  for(path of copyInput){
    if(path[0] == 'start') paths.push([path[0], path[1]])
  }
  copyInput = copyInput.filter( (path) => !path.includes('start'))

  let searching = true;
  while(searching) {
  // for(let i = 0; i < 1; i++){
    searching = false;
    let copyPaths = Array.from(paths)
    //! look at paths, change copyPaths
    for(path in paths) {
      if(paths[path][-1] == 'end') continue;
      let nextStep = paths[path][paths[path].length - 1]
      let changed = false;
      if(nextStep == 'end') continue;
      copyInput.map( (dir, i) => {
        if(dir.includes(nextStep) && changed){
          let newStep = (dir[0] == nextStep) ? dir[1] : dir[0]
          if(copyPaths.includes([...copyPaths[path], newStep])) return;

          //! adding new path if path is already updated
          if(newStep.toUpperCase() !== newStep){;
            if(!paths[path].includes(newStep)){
              copyPaths.push([...copyPaths[path], newStep])
              searching = true;
            }
          } else {
            copyPaths.push([...copyPaths[path], newStep])
            searching = true;
          }
          nextStep = paths[path][paths[path].length - 1]
        }

        //! updating current path before making new ones
        if(dir.includes(nextStep) && !changed){
          let newStep = (dir[0] == nextStep) ? dir[1] : dir[0]
          if(newStep.toUpperCase() !== newStep){
            if(!paths[path].includes(newStep)){
              copyPaths[path].push(newStep)
              searching = true;
              changed = true;
            }
          } else {
            copyPaths[path].push(newStep)
            searching = true;
            changed = true;
          }
          nextStep = paths[path][paths[path].length - 1]
        }
      })
    }
    // console.log(copyPaths);

    copyPaths = [...new Set(copyPaths)]
    paths = JSON.parse(JSON.stringify(copyPaths))
    
  }

  let unique = [['a', 'b', 'c']];
  let filteredArr = paths.filter( (path) => {
    if (path[path.length - 1] == 'end'){
      if(unique.includes(path)) return false;
      unique.push(path)
      return true;
    }
    return false;
  })

  console.log(filteredArr);
  return console.log(filteredArr.length);
}

const dayTwo = () => {

}

dayOne();
dayTwo()

let mainArr = [
  ['a', 'b', 'c'],
  ['d', 'b', 'e'],
  ['d', 'l', 'k'],
]
let testArr = ['a', 'b', 'c']

console.log(isArrIncluded(testArr, mainArr));