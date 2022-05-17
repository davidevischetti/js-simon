//VARIABILI DI RICHIAMO DEGLI ELEMENTI DEL DOM
const divTimer = document.getElementById('timer');
const divNum = document.getElementById('numbers');
const startBtn = document.getElementById('start');


//EVENTO START
startBtn.addEventListener ('click', function () {
    var userTimer;
    let maxTime = 5;

    // ARRAY CON 5 NUMERI RANDOM
    divNumArr = getRandomNumArr(5, 1, 99);
    divNum.innerHTML = divNumArr;
    console.log(divNumArr);

    // TIMER DI 30 SECONDI
    userTimer = setInterval (function () {
        divTimer.innerHTML = 'Memorizza questi numeri in: ' + -- maxTime;
        if (maxTime == 0) {
            clearInterval(userTimer);
            // FAR SPARIRE I NUMERI
            divNum.innerHTML = '';
            divTimer.innerHTML = '';

            // ARRAY CON NUMERI SCELTI DALL'UTENTE
            let userNumArr = [];
            while ( userNumArr.length < 5) {
                // CHIEDERE ALL'UTENTE QUALI FOSSERO I NUMERI
                let userNum = parseInt(prompt('Scrivi uno dei numeri che hai visto'));
                userNumArr.push(userNum);
            };
            console.log(userNumArr);
        };
    } , 1000);
});


// VERIFICARE EVENTUALI CORRISPONDENZE
// COMUNICARE ALL'UTENTE IL RISULTATO



//CREO UNA FUNZIONE CHE GENERI NUMERI RANDOM NON RIPETIBILI
function getRandomNumArr (total, min, max) {
    const randomNumArr = [];
    while (randomNumArr.length < total) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) +1;
        randomNumArr.push(randomNum);
    };
    return randomNumArr;
};
