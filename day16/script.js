let input = `8A004A801A8002F478`;

const convertToDec = (binary) => {
  return parseInt(binary, 2)
}

const dayOne = () => {
  let copyInput = input;
  let binaryInput = copyInput.split('').map( (hex) => parseInt(hex, 16).toString(2)).join('')
  
  //! find version and type
  let version = [];
  let type = [];
  for(let i = 0; i < 3; i++) {
    version.push(binaryInput[i])
    type.push(binaryInput[+i + 3])
  }
  version = convertToDec(version.join(''))
  type = convertToDec(type.join(''))
  if(type != '4') {
    let length = (binaryInput[6] == '1') ? 11 : 15
    console.log(length);
  } else {
    
  }

}

const dayTwo = () => {

}

dayOne();
dayTwo();