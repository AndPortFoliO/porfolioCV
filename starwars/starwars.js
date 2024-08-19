let hair_color  ;
let bday ; 
let height ;
let homeworld ; 

let planetNum = 1; // max 60 planets
let num = 1;    // max 82 ppl
let maxPlanets = 8; //https://mobile.planets.nu/img/planets/402.png max 402 planets



let planetsAllNames =[];
let planetsAllClimates =[];
let planetsAllDiameter =[];
let planetsAllTerrains =[];
let planetsGeneralInfos =[];
let planetImg = [];


let theErrorMsg = "";
let id;



let getStarwarPpl = async function (num){
    try{
        for(planetNum; planetNum <= maxPlanets; planetNum++){
            const resold2 = await fetch(`https://swapi.dev/api/planets/${planetNum}`);
            const dataPlanet = await resold2.json();
            //console.log(dataPlanet);
            let planetName = dataPlanet.name;
            let planetClimate = dataPlanet.climate;
            let planetDiameter = dataPlanet.diameter;
            let planetTerrain = dataPlanet.terrain;

            planetImg.push(dataPlanet.films);
            console.log(planetImg[0][0]);


            planetsAllNames.push(dataPlanet.name);
            planetsAllClimates.push(dataPlanet.climate);
            planetsAllDiameter.push(dataPlanet.diameter); 
            planetsAllTerrains.push(dataPlanet.terrain);

            planetsGeneralInfos.push({planetName,planetClimate,planetDiameter,planetTerrain});
        }
    }
    catch(e){
        theErrorMsg = `Their is an error. No wories we are working on it !!!  ( ${e})` ;
        console.log("the error - ",e);
    }
}

const infoBox = document.querySelector("#infoBox");
const selectionBox = document.querySelector("#selectionBox");
const characterBox = document.querySelector("#characterBox");
const main = document.querySelector('main');


window.addEventListener('load', async function (){
    await getStarwarPpl(num);
    let errorP = document.createElement('p');
    errorP.innerText = theErrorMsg;
    errorP.style.color= "red";
    main.prepend(errorP);

   createAndAddPlanetsToSelectionBox();

    
    const planetSelect = document.querySelectorAll('p');
/** need to write a function to reset the txt in infoBox by deleting if the counter > 0 (p.remove) */
    selectingPlanet(planetSelect);
});



let counter = 0;

function selectingPlanet (planetSelect){
    for ( let planet of planetSelect){
        planet.addEventListener('click', function (){   
            for ( let thePlanet of planetSelect){
                thePlanet.style.color = "white" ;
            }
            if(counter>0){
                deletePlanetData ();
                removeImgs ();
                counter=0;
                console.log("new counter format",counter);
            } 
            planet.style.color = "red" ;
            id = planet.id;
            counter=1;
            
            showPlanetTxtInfo();
            console.log("else counter format",counter);
            addImgs ()
        });
    }
};



function createAndAddPlanetsToSelectionBox(){
    for(let i=0; i < planetsGeneralInfos.length; i++){
        let text = document.createElement("p");
        text.innerText = planetsGeneralInfos[i].planetName;
        selectionBox.classList.add("planetsFormat");
        text.id = i;
            
        selectionBox.append(text);
    }
}

function deletePlanetData() {
    let ps = document.querySelectorAll('p');
    let textElements = document.querySelectorAll('#showPlanetInfo');
    textElements.forEach((element) => element.remove());
}



function showPlanetTxtInfo(){
    let onePlanetInfos = Object.entries(planetsGeneralInfos[id]);
    for(let onePlanetInfoKeyValue of onePlanetInfos){
        let  [firstValue, ...restValues] = onePlanetInfoKeyValue;
            for(let theValue of restValues){
            let textElement = document.createElement('p');

            if (firstValue == "planetDiameter"){
                textElement.innerText = `The ${firstValue} : ${theValue} km`;
                textElement.id = "showPlanetInfo";
            }
            else{
                textElement.innerText = `The ${firstValue} : ${theValue} `;
                textElement.id = "showPlanetInfo";
            }
            infoBox.append(textElement);
        }
    }
}

function addImgs (){
    let imgPlanet = document.createElement('img')
    imgPlanet.src = `https://mobile.planets.nu/img/planets/${id}.png`;
    imgPlanet.alt = "Picture not found :[";  
    imgPlanet.classList.add("planets") ; 
    characterBox.append(imgPlanet);
}

function removeImgs (){
    let imgs = document.querySelectorAll('img');

    imgs.forEach(function (element) {
        element.remove();
        element.id = "#planetsImgs";
    });
    
}

