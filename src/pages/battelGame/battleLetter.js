/**Бойни букви
 * Имате двама играчи, които ще играят бойни букви. Напишете JS функция, която трябва да генерира 2 стринга и 2 масива
 * изцяло на случаен принцип.  Двата стринга трябва да представляват буквите в англисйката азбука разбъркани, а масивите са 10 числа.
 * Първият стринг и първият масив са за играч 1 и аналогично.Масивите на всеки играч сочат към позициите на стринга на противоположния.
 * При попадение играча губи тази буква. Когато играчите останат с 16 букви в стринговете си, те трябва да определят коя
 * буква колко точки дава, но не трябва да се съобразяват с позициите на буквите в азбуката, а по друг начин. След като определят
 * коя буква колко точки им носи, започва битката. Всяка буква, вече число, се “бие” с противоположната на отсрещния играч.
 * Намира се разликата между двете числа и се прибавя в полза на победителя.
 * Изкарайте накрая резултат с точките на всеки играч и кой е победителя.
 * ПС: Искам да виждам и разбирам какво се случва в играта през цялото време и на всеки един етап.
 * Все едно стоя и наблюдавам играчите на живо.
 */

const letter = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z"
};

function battle() {
  let ppl1Str;
  let ppl1Arr = [];
  let ppl2Str;
  let ppl2Arr = [];
  let play1Letter;
  let play2Letter;
  let ppl1PowerArray = [];
  let ppl2PowerArray = [];
  let theWinner;
  console.log("creating string...");
  ppl1Str = creatingStrings();
  ppl2Str = creatingStrings();
  console.log("creating array...");
  ppl1Arr = [...createArrays()];
  ppl2Arr = [...createArrays()];
  console.log("Identifying the letters...");
  play1Letter = identifyLetter(ppl1Str, ppl2Arr);
  play2Letter = identifyLetter(ppl2Str, ppl1Arr);
  console.log("Assign points...");
    ppl1PowerPoint = [...definePower(play1Letter)];
  ppl2PowerPoint = [...definePower(play2Letter)];

  theWinner = theWinnerIs(ppl1PowerPoint, ppl2PowerPoint);
  
  console.log(theWinner)
}
function theWinnerIs(array1, array2){
  let ppl1PowerPoint =  [...array1];
  let ppl2PowerPoint =  [...array2];
  let ppl1 ={ score:0}
  let ppl2 ={ score:0}
  let counter =0
  while(counter<array1.length){
    if((array1[counter] - array2[counter])>0){
      ppl1.score +=array1[counter] - array2[counter]
    }else{
      ppl2.score +=array2[counter] - array1[counter]
    }
    counter++;
  }
  if(ppl1.score > ppl2.score){
    return `The Winner is Player1 with score of ${ppl1.score} vs Player2 with score of ${ppl2.score} `
  }else if(ppl1.score< ppl2.score){
    return `The Winner is Player2 with score of ${ppl2.score} vs Player1 with score of ${ppl1.score}`
  }else{
    return `The Game id DRAW Player1 with score of ${ppl1.score}vs Player2 with score of ${ppl2.score}`
  }
}
function definePower(string) {
  let result = [];
  let workArr = string.split("");
  let stringLength = string.length;
  for (let i = 0; i < stringLength; i++) {
    result.push(Math.ceil((string.charCodeAt(i) + i*5) / 2).toFixed(0));
  }
  return result;
}
function identifyLetter(string, array) {
  let letterArray = string.split("");
  let currentStrElementIndex = 0;
  let k =0;
  while (letterArray.length > 16) {
    if (currentStrElementIndex >= 20) {
      k = currentStrElementIndex - 20;
    } else if (currentStrElementIndex >= 10) {
      k = currentStrElementIndex - 10;
    }
    if (array[k] === currentStrElementIndex) {
      letterArray.splice(currentStrElementIndex, 1);
    }
    if (currentStrElementIndex >= 26) {
      currentStrElementIndex = 0;
    } else {
      currentStrElementIndex++;
    }
  }
  return letterArray.join().replace(/,/g, "");
}
function createArrays() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(Math.round(Math.random() * 10));
  }
  return result;
}
function creatingStrings() {
  let result = [];
  let keys = Object.keys(letter);
  for (let i = 0; i < keys.length; i++) {
    let num = Math.ceil(Math.random() * 26);
    result.push(letter[num]);
  }
  return result.join().replace(/,/g, "");
}
battle();
