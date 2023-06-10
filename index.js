const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const choiseButtons = document.querySelectorAll('.choiceButtons');

choiseButtons.forEach(button => {
button.addEventListener('click', event =>{
alert(event.target.textContent);
  })
});  