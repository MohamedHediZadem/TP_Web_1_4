let listElements = document.querySelectorAll('#colorList li');

//function to change the background color and the text color
function randomColor(li) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    li.style.backgroundColor = color;
    let brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    let textColor = brightness > 186 ? "black" : "white"; //for low brightness the text color is black and it turns white for low brightness
    li.style.setProperty('color', textColor, 'important');
    return;
}


//adding the event listeners so that on every click the color changes
listElements.forEach( li =>{
    li.addEventListener('click', ()=>{
        randomColor(li);
    });
});