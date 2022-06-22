const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName(){
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`; // Not a quote!

}

// document.getElementById("mydiv").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
// }
//const is making something constant, a variable that we know isn't going to change
function aboutme() {
  alert("Hi! My name is Anna and I have a pet guinea pig named Rona and a dog named Bunnie!");
}
