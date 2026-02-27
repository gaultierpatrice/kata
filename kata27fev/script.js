function tryWord(word, base) {
  word = word.toLowerCase();
  base = base.toLowerCase();

  let wellPlaced = [];
  let notInWord = [];
  let missplaced = [];

  let arrayBase = base.split("");
  let arrayWord = word.split("");

  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] === arrayWord[i]) {
      wellPlaced.push(arrayWord[i]);
    } else if (arrayBase.includes(arrayWord[i])) {
      missplaced.push(arrayWord[i]);
    } else {
      notInWord.push(arrayWord[i]);
    }
  }

  return {
    wellPlaced: wellPlaced,
    missplaced: missplaced,
    notInWord: notInWord,
  };
}

function guess() {
  document.getElementById("win").innerText = "";
  let base = "dictionnaire";
  let word = document.getElementById("word").value;
  let result = tryWord(word, base);
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}
