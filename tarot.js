// Ask me a question, I'll tell you you're fortune.
//
// Tarot Reader program.
//
// On execution, returns a single tarot card for your daily reading.
//
// Random selection of one of 72 cards
//
//
// Features to add:
//
// Info on the cards.
//
// Ask a question.
//
// More complicated cards.
//
//
//
//
//
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function pullTarotCard() {
  let card = getRandomInt(0, 71);


  console.log("Your card is: ", card);
}

pullTarotCard();