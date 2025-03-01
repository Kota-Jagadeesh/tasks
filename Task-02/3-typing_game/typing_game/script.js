// qquotes for the game
const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = [];
let wordIndex = 0;
let startTime = null;

// dom Elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startButton = document.getElementById('start');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');
const highScoreElement = document.getElementById('high-score');

// stores and displays the highest score using local storage 
let highScore = localStorage.getItem('highScore');
if (highScore) {
  highScoreElement.innerText = `Best Time: ${highScore} sec`;
}

// starts the game event
startButton.addEventListener('click', () => {
  // picks a random quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  // resets the game variables 
  words = quote.split(' ');
  wordIndex = 0;

  // displays quote with highlighting
  quoteElement.innerHTML = words.map(word => `<span>${word} </span>`).join('');
  quoteElement.childNodes[0].className = 'highlight';

  // clear the previous messages
  messageElement.innerText = '';

  // this reenables input field when we reload 
  typedValueElement.disabled = false;
  typedValueElement.value = '';
  typedValueElement.focus();

  // Start timer
  startTime = new Date().getTime();
});

// Typing event
typedValueElement.addEventListener('input', () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
      // Game completed
      const elapsedTime = (new Date().getTime() - startTime) / 1000;
      messageElement.innerText = `You finished in ${elapsedTime.toFixed(2)} seconds!`;

      // if we break our own high score it gets updated 
      if (!highScore || elapsedTime < parseFloat(highScore)) {
          localStorage.setItem('highScore', elapsedTime.toFixed(2));
          highScoreElement.innerText = `Best Time: ${elapsedTime.toFixed(2)} sec`;
      }

      // after completing the typing we cant type further , input is disabled 
      typedValueElement.disabled = true;  
      // popup message 
      modalMessage.innerText = `Congratulations! You finished in ${elapsedTime.toFixed(2)} seconds.`;
      modal.style.display = 'block';

  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // Correct word typed
      typedValueElement.value = '';
      wordIndex++;

      // reseting highlights 
      for (const wordElement of quoteElement.childNodes) {
          wordElement.className = '';
      }
      quoteElement.childNodes[wordIndex].className = 'highlight';

  } else if (currentWord.startsWith(typedValue)) {
      typedValueElement.className = '';
  } else {
      // for wrong inputs
      typedValueElement.className = 'error';
  }
});

// closed popup on clicking ok 
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
