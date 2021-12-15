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

const isEnded = (arr) => {
  let ended = false;
  arr.map( (item) => {
    if(item[-1] !== 'end'){
      ended = true;
    }
  })
  return ended;
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
    let copyPaths = Array.from(paths)
    //! look at paths, change copyPaths
    for(path in paths) {
      let nextStep = paths[path][1]
      let changed = false;
      copyInput.map( (dir) => {
        if(dir.includes(nextStep) && !changed){
          copyPaths[path].push( (dir[0] == nextStep) ? dir[1] : dir[0])
          changed = true;
        }
      })
      console.log(copyPaths);
    }

    paths = Array.from(paths)
    searching = false
  }
}

const dayTwo = () => {

}

dayOne();
dayTwo()