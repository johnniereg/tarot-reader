// Ask me a question, I'll tell you you're fortune.
//
// Tarot Reader program.
//
// On execution, returns a single tarot card for your daily reading.
//
// Random selection of one of 78 cards
//
// Features to add:
//
// Info on the cards.
// Card upright or in reverse.
//
//

const theDeck = {
  // Major Arcana
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
  21: 'The World',
  // Wands
  22: 'Ace of Wands',
  23: 'Two of Wands',
  24: 'Three of Wands',
  25: 'Four of Wands',
  26: 'Five of Wands',
  27: 'Six of Wands',
  28: 'Seven of Wands',
  29: 'Eight of Wands',
  30: 'Nine of Wands',
  31: 'Ten of Wands',
  32: 'Page of Wands',
  33: 'Knight of Wands',
  34: 'Queen of Wands',
  35: 'King of Wands',
  // Pentacles
  36: 'Ace of Pentalces',
  37: 'Two of Pentalces',
  38: 'Three of Pentalces',
  39: 'Four of Pentalces',
  40: 'Five of Pentalces',
  41: 'Six of Pentalces',
  42: 'Seven of Pentalces',
  43: 'Eight of Pentalces',
  44: 'Nine of Pentalces',
  45: 'Ten of Pentalces',
  46: 'Page of Pentalces',
  47: 'Knight of Pentalces',
  48: 'Queen of Pentalces',
  49: 'King of Pentalces',
  // Cups
  50: 'Ace of Cups',
  51: 'Two of Cups',
  52: 'Three of Cups',
  53: 'Four of Cups',
  54: 'Five of Cups',
  55: 'Six of Cups',
  56: 'Seven of Cups',
  57: 'Eight of Cups',
  58: 'Nine of Cups',
  59: 'Ten of Cups',
  60: 'Page of Cups',
  61: 'Knight of Cups',
  62: 'Queen of Cups',
  63: 'King of Cups',
  // Swords
  64: 'Ace of Swords',
  65: 'Two of Swords',
  66: 'Three of Swords',
  67: 'Four of Swords',
  68: 'Five of Swords',
  69: 'Six of Swords',
  70: 'Seven of Swords',
  71: 'Eight of Swords',
  72: 'Nine of Swords',
  73: 'Ten of Swords',
  74: 'Page of Swords',
  75: 'Knight of Swords',
  76: 'Queen of Swords',
  77: 'King of Swords'
};

function pullTarotCard(question) {
  if (question === undefined) {
    console.log("Ask a question. Any question. Like this... <node tarot.js \"What should I do?\">");
  } else {
    let card = Math.floor(Math.random() * (71 - 0)) + 0;
    console.log("You asked:", question);
    setTimeout(function() {
      console.log("Shuffling the deck...");
    }, 1000);
    setTimeout(function() {
      console.log("Pulling a card...");
    }, 2000);
    setTimeout(function() {
      console.log("Your card is:", theDeck[card]); }, 3500);
    }
}

let theQuestion = process.argv[2];

pullTarotCard(theQuestion);

