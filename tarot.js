// Ask me a question, I'll tell you you're fortune.
//
// Tarot Reader program.
//
// On execution, returns a single tarot card for your daily reading.
//
// Random selection of one of 72 cards
//
// Features to add:
//
// Info on the cards.
// Ask a question.
// More complicated cards.
//

const theDeck = {
  0: 'The Fool',
  1: 'The Magician',
  2: 'The High Priestess',
  3: 'The Empress',
  4: 'The Emperor',
  5: 'The Hierophant',
  6: 'The Lovers',
  7: 'The Chariot',
  8: 'Strength',
  9: 'The Hermit',
  10: 'Wheel of Fortune',
  11: 'Justice',
  12: 'The Hanged Man',
  13: 'Death',
  14: 'Temperance',
  15: 'The Devil',
  16: 'The Tower',
  17: 'The Star',
  18: 'The Moon',
  19: 'The Sun',
  20: 'Judgement',
  21: 'The World'
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function pullTarotCard() {
  let card = getRandomInt(0, 21);
  console.log("Your card is: ", theDeck[card]);
}

pullTarotCard();