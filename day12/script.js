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
input = input.split('\n')

const dayOne = () => {
  let copyInput = JSON.parse(JSON.stringify(input))
  //! start by making intial paths
  
  // for(path of copyInput) {
  //   let [start, end] = path.split('-')
  //   if(start == 'start') paths.push(path)
  // }
  // copyInput = copyInput.filter( path => !paths.includes(path))
    
  console.log(copyInput);
  
  let paths = [];
  for(path in copyInput) {
    let [start, end] = path.split('-')
    let starts = [];
    
  }

  console.log(paths);
}

const dayTwo = () => {

}

dayOne();
dayTwo()