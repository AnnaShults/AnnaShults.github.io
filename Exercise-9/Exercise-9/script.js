const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName(){
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${}`; // Not a quote!
}

// document.getElementById("mydiv").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
// }
//const is making something constant, a variable that we know isn't going to change
