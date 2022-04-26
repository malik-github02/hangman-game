// Create Varible Contain The Letters
const letters = 'abcdefghijklmnopqrstuvwxyz';

// Create Array Contains Letters Based in Variables
let lettersArray = Array.from(letters);

let lettersDiv = document.querySelector('.letters');

lettersArray.forEach((letter) => {
       // Create Span Element in Every loop
       let span = document.createElement('span');
       // Create Letter in Every Loop
       let spanLetter = document.createTextNode(letter);
       // Append Every Letter in The Span
       span.appendChild(spanLetter);
       // Add Class To Every Span
       span.className = 'letter-box';
       // Append Every Span In The Main Div
       lettersDiv.appendChild(span);
});

// Create Object Contain Property + Words
const words = {
       Programming: [
              'Java Script',
              'Php',
              'Go',
              'Python',
              'Ruby',
              'Html',
              'Css',
       ],
       Country: [
              'Syria',
              'Sweden',
              'Denmark',
              'Germany',
              'Australia',
              'Egypt',
              'Iraq',
       ],
       Food: [
              'Tomato',
              'Cucamber',
              'Banana',
              'Apple',
              'Potato',
              'Meat',
              'Pizza',
       ],
       Animal: [
              'Horse',
              'Dog',
              'Crocodile',
              'Camel',
              'Elephant',
              'Leon',
              'Fox',
       ],
       Brands: [
              'Zara',
              'Adidas',
              'Puma',
              'Channel',
              'Nike',
              'Lacoste',
              'Reebook',
       ],
};

// Get All Keys In The Object
let allKeys = Object.keys(words);

// Get Random Number Based on allKeys Array
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Get Random property From Array Based On RandomPropNumber
let randomPropName = allKeys[randomPropNumber];

// Get Random Value From Array In Property
let randomPropValue = words[randomPropName];

// Get Random Number Based On randomPropValue Array Length
let randomValueNaumber = Math.floor(Math.random() * randomPropValue.length);

// Get Random Value From Array I am In It
let randomValue = randomPropValue[randomValueNaumber];

// Add Property Name To word-origin
document.querySelector('.word-origin span').innerHTML = randomPropName;

// Select Element Letter Guess Container
let lettersGuessContainer = document.querySelector('.letters-guess');

// Create Array From The Word Value Who Choosen
let wordLetters = Array.from(randomValue);

wordLetters.forEach((letter) => {
       // Create Empty Span In Every Each Loop
       let emptySpan = document.createElement('span');

       // Append Every Span To The Letter Guess Container
       lettersGuessContainer.appendChild(emptySpan);
});

// Set Variable To All Spans In LetterSGuess
let allSpans = document.querySelectorAll('.letters-guess span');

// Set Wrong Counter
let wrongCounter = 0;

let successCounter = 0;

// Select The hang
let theHang = document.querySelector('.the-hang');

// Add Event Listener To The Letter Box Because It Created Not Exist
document.addEventListener('click', (e) => {
       // Set The Status
       let theStatus = false;
       if (e.target.className == 'letter-box') {
              // Add Class Clicked To The Letter
              e.target.classList.add('clicked');

              let WordsLetters = Array.from(randomValue.toLowerCase());

              // Get The Letter Was Clicked
              let theClickedLetter = e.target.innerHTML.toLowerCase();

              // Loop on The Word Chosen
              WordsLetters.forEach((wordLetter, index) => {
                     // Check If Word Letter Contain The Clicked Letter
                     if (theClickedLetter == wordLetter) {
                            // Choose The Status Value
                            theStatus = true;

                            // Loop on All Span To Put The Letter In It
                            allSpans.forEach((span, spanIndex) => {
                                   if (index == spanIndex) {
                                          successCounter++;
                                          span.innerHTML = wordLetter;
                                          // Check If SuccessCounter Equal To Word Chosen Length
                                          if (
                                                 successCounter ==
                                                 WordsLetters.length
                                          ) {
                                                 // Appear Popup Win
                                                 document.querySelector(
                                                        '.win'
                                                 ).style.display = 'flex';
                                                 // Play Win Music
                                                 document
                                                        .getElementById(
                                                               'success'
                                                        )
                                                        .play();
                                                 // Set Time To Restart The Game
                                                 setTimeout(function () {
                                                        location.reload();
                                                 }, 5000);
                                          }
                                   }
                            });
                     }
              });

              if (theStatus === false) {
                     // Increase Wrong Counter One
                     wrongCounter++;
                     // Add Wrong Class To The Draw To Style It
                     theHang.classList.add(`wrong-${wrongCounter}`);

                     if (wrongCounter == 7) {
                            // Appear Popup Lose
                            document.querySelector('.lose').style.display =
                                   'flex';
                            // Play Lose Music
                            document.getElementById('fail').play();
                            // Set Time To Restart The Game
                            setTimeout(function () {
                                   location.reload();
                            }, 5000);
                     }
              }
       }
});
