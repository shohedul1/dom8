const message = document.querySelector('#message');
const result  = document.querySelector('#result');
const ass = document.querySelector('#ass')

message.addEventListener('input',()=>{
    result.textContent = message.value 
    result.style.color = 'red';
    result.style.backgroundColor = 'yellow'
   
})
