let randomeRGBvalues = function (){
    let randomeValue = Math.random();
    return randomeValue;
}


let assingValuesRgb = function (){
    const r = Math.floor(randomeRGBvalues() * 255);
    const g = Math.floor(randomeRGBvalues() * 255);
    const b = Math.floor(randomeRGBvalues() * 255);
    return `rgb(${r}, ${g}, ${b}, 0.3)`;
}



let newH1 = document.createElement('h1');
newH1.innerText = assingValuesRgb();


let hr = document.createElement('hr')
let br1 = document.createElement('br')
let br2 = document.createElement('br')

let newDiv = document.createElement('div');
newDiv.id = "rgbDiv"
newDiv.style.textAlign = "center"

let newBtn = document.createElement('button');
newBtn.textContent = "Create an RGB background collor" ;
newBtn.id="rgbBtn";

document.querySelector('main').prepend(newDiv);
document.querySelector('#rgbDiv').prepend(newH1,newBtn,br1,br2,hr);


let body = document.querySelector('body');
body.style.backgroundColor = assingValuesRgb();

let x = document.querySelector('button');
x.addEventListener('click', function (){
    body.style.backgroundColor = assingValuesRgb();
    newH1.innerText = assingValuesRgb();

});






