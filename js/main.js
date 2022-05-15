
$("#phone").mask("+7 (000) 000-00-00");
console.log()


let form = document.querySelector('form')
let sendForm = document.querySelector('#send-form');
sendForm.onclick = (event) =>{
  event.preventDefault();
  console.log("work")
} 