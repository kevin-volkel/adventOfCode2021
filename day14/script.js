let input = `FSKBVOSKPCPPHVOPVFPC

BV -> O
OS -> P
KP -> P
VK -> S
FS -> C
OK -> P
KC -> S
HV -> F
HC -> K
PF -> N
NK -> F
SC -> V
CO -> K
PO -> F
FB -> P
CN -> K
KF -> N
NH -> S
SF -> P
HP -> P
NP -> F
OV -> O
OP -> P
HH -> C
FP -> P
CS -> O
SK -> O
NS -> F
SN -> S
SP -> H
BH -> B
NO -> O
CB -> N
FO -> N
NC -> C
VF -> N
CK -> C
PC -> H
BP -> B
NF -> O
BB -> C
VN -> K
OH -> K
CH -> F
VB -> N
HO -> P
FH -> K
PK -> H
CC -> B
VH -> B
BF -> N
KS -> V
PV -> B
CP -> N
PB -> S
VP -> V
BO -> B
HS -> H
BS -> F
ON -> B
HB -> K
KH -> B
PP -> H
BN -> C
BC -> F
KV -> K
VO -> P
SO -> V
OF -> O
BK -> S
PH -> V
SV -> F
CV -> H
OB -> N
SS -> H
VV -> B
OO -> V
CF -> H
KB -> F
NV -> B
FV -> V
HK -> P
VS -> P
FF -> P
HN -> N
FN -> F
OC -> K
SH -> V
KO -> C
HF -> B
PN -> N
SB -> F
VC -> B
FK -> S
KK -> N
FC -> F
NN -> P
NB -> V
PS -> S
KN -> S`;
let [template, pairs] = input.split(`\n\n`)
pairs = pairs.split('\n').map( (pair) => pair.split(' -> '))
console.log(pairs);

const dayOne = () => {
  let copyTemplate = template;
  for(let i = 0; i < 10; i++){
    tempArr = copyTemplate.split('')
    //! look for changes in copyTemplate, make changes to tempArr

    let delay = 0;
    for(char in copyTemplate){
      for(pair of pairs) {
        if(pair[0] == `${copyTemplate[char]}${copyTemplate[Number(char) + 1]}`){
          tempArr.splice(Number(char) + 1 + delay, 0, pair[1])
          delay++
        }
      }
    }
    copyTemplate = tempArr.join('');
  }

  let charCounter = {};

  copyTemplate.split('').map( (char) => {
    if(!charCounter[char]) charCounter[char] = 0;
    charCounter[char] ++;
  })

  let most = Math.max(...Object.values(charCounter))
  let least = Math.min(...Object.values(charCounter))

  return console.log(most - least)
}

const dayTwo = () => {
  let copyTemplate = template;
  for(let i = 0; i < 40; i++){
    console.log(i);
    tempArr = copyTemplate.split('')
    //! look for changes in copyTemplate, make changes to tempArr

    let delay = 0;
    for(char in copyTemplate){
      for(pair of pairs) {
        if(pair[0] == `${copyTemplate[char]}${copyTemplate[Number(char) + 1]}`){
          tempArr.splice(Number(char) + 1 + delay, 0, pair[1])
          delay++
        }
      }
    }
    copyTemplate = tempArr.join('');
  }

  let charCounter = {};

  copyTemplate.split('').map( (char) => {
    if(!charCounter[char]) charCounter[char] = 0;
    charCounter[char] ++;
  })

  let most = Math.max(...Object.values(charCounter))
  let least = Math.min(...Object.values(charCounter))

  return console.log(most - least)
}

dayOne();
dayTwo();