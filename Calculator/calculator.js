let currentDisplay = '';
document.querySelector('#input1').value = currentDisplay;

const mainButton = document.querySelector(".backgroundChange");
const body = document.body;
//mainButton.style.color="blue";
mainButton.style.backgroundColor = "pink";
mainButton.style.fontStyle = "italic";

function RandomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const random = `rgb(${red},${green},${blue})`;
    return random;
}

mainButton.addEventListener("click", () => {
    const randomColor = RandomColorGenerator();
    body.style.backgroundColor = randomColor;

});

