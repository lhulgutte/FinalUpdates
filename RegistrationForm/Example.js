//Get All Value
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value
    name.value = '';
    email.value = '';
    message.value = '';

});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

});

/*const body=document.body;
setInterval(() =>{
    const red=Math.floor(Math.random() *126);
    const green=Math.floor(Math.random() *126);
    const blue=Math.floor(Math.random() *126);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background= `rgb`;
    //console.log(rgb);

},1000);*/