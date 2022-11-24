let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainer = document.getElementById("bgContainer");
let bgColorsArrayLength = bgColorsArray.length;
let randomNumberGenerate = Math.ceil(Math.random() * bgColorsArrayLength);
let colorChange = true;

function randomColorButton() {
    if (colorChange === true) {
        let randomNumberGenerate = Math.ceil(Math.random() * bgColorsArrayLength);
        let randomColor = bgColorsArray[randomNumberGenerate];
        bgContainer.style.backgroundColor = randomColor;
        colorChange = false;
    } else {
        let randomNumberGenerate = Math.ceil(Math.random() * bgColorsArrayLength);
        let randomColor = bgColorsArray[randomNumberGenerate];
        bgContainer.style.backgroundColor = randomColor;
        colorChange = false;
    }
}
