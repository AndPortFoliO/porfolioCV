//https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/0.png

let body = document.querySelector('body')


let newH2 = document.createElement('h2');
newH2.innerText = "Game on Pokemon - The 1st 151 pokemons from the original show";
newH2.style.display = "flex"

let newdiv = document.createElement('div');
newdiv.id ="1stDiv";
newdiv.style.display = "flex"
newdiv.style.flexWrap = "wrap"

let  newhr = document.createElement('hr');
let  newhr2 = document.createElement('hr');
let  newbr1 = document.createElement('br');
let  newbr2 = document.createElement('br');

body.append(newbr1);
body.append(newbr2);
body.append(newhr);
body.append(newH2); 

body.append(newdiv);

for (let i=1; i<152; i++){

    let newDiv2 = [];
    newDiv2[i] = document.createElement('div');

    let nextArray = newDiv2[i];
    newdiv.append(nextArray);
    let toDiv=[];
    toDiv = document.querySelectorAll('div');

    let newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/${i}.png`
    newImg.alt = `missing pic - ${i}`;

    let newP = document.createElement('p');
    newP.innerText = `# - ${i}`;


    newDiv2[i].style.textAlign = 'center' ;
    
    toDiv[i].append(newImg,newP);
}
body.append(newhr2);




