// const div= document.querySelector('div');
// const score = document.querySelector("div");



// score.textContent = matches;
//
// const getEmoji = [
//   '\u{1F40C}',
//   '\u{1F40C}',
//   '\u{1F332}',
//   '\u{1F332}',
//   '\u{1F344}',
//   '\u{1F344}',
//   '\u{1F422}',
//   '\u{1F422}',
//   '\u{1F421}',
//   '\u{1F421}',
//   '\u{1F991}',
//   '\u{1F991}',
// ];
// console.log(getEmoji[0]);
// console.log(getEmoji[2]);
// console.log(getEmoji[4]);
// console.log(getEmoji[6]);
// console.log(getEmoji[8]);
// console.log(getEmoji[10]);
//
// //game board
//
// const board = document.querySelector('board')
// let cardChoose=[]
// let cardChooseId=[]
//
// function createGame(){
//   for(let i=0; i < getEmoji.length; i++){
//     let card = document.createBlank('img')
//     card.setElement('src', 'Final-Project/blank.jpeg')
//     card.setElement('data-id', i)
//     // card.addEventListener('click, flipcard')
//     board.appendChild(card)
//   }
// }
//
// //check for matches
// // let i=&#128012;
// function checkmatch(){
//
//   if (i===i);
//     alert("You have a match!");
//   // else;
//     alert("No Match!")
// }
//
// // //flip flipcard
// // const cards=document.querySelectorAll('cardflip');
// // function flipCard(){
// //   this.classlist.toggle('flip');
// // }
// // cards.forEach(card=> card.addEventListener('click', flipCard));
// //   // let card=this.setElement('data-id')
// //   // cardChoose.push(getEmoji[card].name)
// //   // cardChooseId.push(card)
// //   // this.setAttribute('src', cardArray[card].img)
// //   // if(cardChoose.length===2){
// //   //   setTimeout(checkForMatch, 300)
// //   // }
//
// const cards = document.querySelectorAll('grid-container');
//
// function flipCard() {
//   this.classList.toggle('flip');
// }
//
// cards.forEach(card => card.addEventListener('click', flipCard));
//
// const cards = document.querySelectorAll('.grid-item');
//
// let hasFlippedCard = false;
// let firstCard, secondCard;
//
// function flipCard() {
//  this.classList.toggle('flip');
//  this.classList.add('flip');
//
//  if (!hasFlippedCard) {
//    hasFlippedCard = true;
//    firstCard = this;
//  }
// }
//
//
//
//
// const randomize = () => {
// const data = getEmoji();
// console.log(data);
// }
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.ceil(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


var timeleft = 50;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("TimerButton").innerHTML = "Finished";
  } else {
    document.getElementById("TimerButton").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
// TimerButton.addEventListener("click, ('TimerButton') =>")
// })
