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
const letter1 = {
  1: 96,
  2: 97,
  3: 98,
  4: 99,
  5: 100,
  6: 101,
  7: 102,
  8: 103,
  9: 104,
  10: 105,
  11: 106,
  12: 107,
  13: 108,
  14: 109,
  15: 110,
  16: 111,
  17: 112,
  18: 113,
  19: 114,
  20: 115,
  21: 116,
  22: 117,
  23: 118,
  24: 119,
  25: 120,
  26: 121
};
function battle() {
  let ppl1Str;
  let ppl1Arr = [];
  let ppl2Str;
  let ppl2Arr = [];
  let play1Letter;
  let play2Letter;
  let ppl1PowerArray =[];
  let ppl2PowerArray =[];
  console.log("creating string...");
  ppl1Str = creatingStrings();
  ppl2Str = creatingStrings();
  console.log("creating array...");
  ppl1Arr = [...createArrays()];
  ppl2Arr = [...createArrays()];
  console.log("Identifying the letters...");
  play1Letter = identifyLetter(ppl1Str, ppl2Arr);
  play2Letter = identifyLetter(ppl2Str, ppl1Arr);
  console.log(" assign points...")
  definePower(play1Letter);

}
function definePower(string){
  let result =[];
  let workArr = string.split("");
  
  console.log(workArr)
}
function identifyLetter(string, array) {
  //ако стойноста на индекс-а от масива (арр[0]='0') === индекса на елемент-а от
  // стринг-а ('стрингстринг'-> 'с'=[0]),
  //тогава премахваме елемнта от стринга
  //докато дължината на стринга е > 16
  let letterArray = string.split("");
  let currentStrElementIndex = 0;
  while (letterArray.length > 16) {
    let k = currentStrElementIndex;
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
  return letterArray.join().replace(/,/g,"");
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
