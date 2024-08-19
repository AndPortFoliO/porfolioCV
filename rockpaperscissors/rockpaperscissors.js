const btnP1 = document.querySelector('#P1');
const btnP2 = document.querySelector('#P2');
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');

let counterP1 = null;
let counterP2 = null;
let numOfRounds = 0;

let Selects = document.querySelector('select');
Selects.addEventListener('change', function(e){
    numOfRounds = parseInt(Selects.value);
})

    btnP1.addEventListener('click', function (e){
        if (numOfRounds > 0 && counterP1 < numOfRounds && counterP2 < numOfRounds ){
        counterP1++;
        counterP1=parseInt(counterP1);
        p1Score.innerText = counterP1;
        if (counterP1 === numOfRounds ){
            p1Score.classList.add('winner');
        }
    }
    })
    btnP2.addEventListener('click', function (e){
        if (numOfRounds > 0 && counterP2 < numOfRounds && counterP1 < numOfRounds ){
            counterP2++;
            counterP2=parseInt(counterP2);

            console.log('counterP2-',counterP2);
            p2Score.innerText = counterP2;
            if( parseInt(counterP2) === parseInt(numOfRounds)){
                p2Score.classList.add('winner');
            }
        }
    });

    
const reset = document.querySelector('#reset');
reset.addEventListener('click', function(e){
    console.log(`numOfRounds ${counterP2}`);
    p2Score.innerText = 0;
    p1Score.innerText = 0;
    counterP1 = "0";
    counterP2 = "0";
    p2Score.classList.remove('winner');
    p1Score.classList.remove('winner');
    Selects.value = "options";
    numOfRounds = 0;

})