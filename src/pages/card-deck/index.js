const result = document.getElementById("result");
const deckDisplay = document.getElementById("deck");

const testingDeck = [
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" },
];
DisplayDeck(testingDeck);

function Play() {
  if (CheckDeck()) {
    result.innerHTML = "&#9989";
  } else {
    result.innerHTML = "&#10060";
  }
}

function CheckDeck() {
  if (
    Object.keys(testingDeck[0]).every((key) =>
      IsPropertyValid(key, testingDeck)
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function IsPropertyValid(key, deck) {
  const props = deck.map((card) => card[key]);

  if (props.every((el) => props[0] === el)) {
    return true;
  } else if (new Set(props).size === props.length) {
    return true;
  } else return false;
}

function DisplayDeck(deck) {
  deckDisplay.innerText = "";
  deck.forEach((element) => {
    deckDisplay.innerText += `color: ${element.color}, number: ${element.number}, shade: ${element.shade}, shape: ${element.shape} \n`;
  });
}
