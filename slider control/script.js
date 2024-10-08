const sizeSlider = document.getElementById("size")
const displayText = document.getElementById("display-text");
console.log(sizeSlider)
sizeSlider.addEventListener("input", () => {
    const fontSize = sizeSlider.value;
    displayText.style.fontSize = `${fontSize}px`;
});

//function(e) {

//}

// () => {

//}
    