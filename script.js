//VARIABILI DI RICHIAMO DEGLI ELEMENTI DEL DOM
const divTimer = document.getElementById('timer');
const divNum = document.getElementById('numbers');
const startBtn = document.getElementById('start');
const rightNum = document.getElementById('right');
const wrongNum = document.getElementById('wrong');
const finalScore = document.getElementById('score');


//EVENTO START
startBtn.addEventListener ('click', function () {
    var userTimer;
    let maxTime = 5;

    // ARRAY CON 5 NUMERI RANDOM
    divNumArr = getRandomNumArr(5, 1, 99);
    divNum.innerHTML = divNumArr;
    console.log(divNumArr);

    // TIMER DI 30 SECONDI
    userTimer = setInterval (function userFunc() {
        // ARRAY CON NUMERI SCELTI DALL'UTENTE
        let userNumArr = [];

        divTimer.innerHTML = 'Memorizza questi numeri in: ' + -- maxTime;
        if (maxTime == 0) {
            clearInterval(userTimer);
            // FAR SPARIRE I NUMERI
            divNum.innerHTML = '';
            divTimer.innerHTML = '';

            let userScore = 0;

            while ( userNumArr.length < 5) {
                // CHIEDERE ALL'UTENTE QUALI FOSSERO I NUMERI
                let userNum = parseInt(prompt('Scrivi uno dei numeri che hai visto'));
                userNumArr.push(userNum);
 
                // VERIFICARE EVENTUALI CORRISPONDENZE
                if (divNumArr.includes(userNum)) {
                    console.log('wewe');
                    console.log(userNum);
                    rightNum.append(`${userNum} `);
                    userScore ++;
                } else {

                    wrongNum.append(`${userNum} `);
                };
            };

            //DICHIARO IL PUNTEGGIO FINALE
            finalScore.innerHTML = `Il tuo punteggio: ${userScore}`;
            console.log(userScore);
            console.log(userNumArr);
        };
        return;
        
    } , 1000);

});

//CREO UNA FUNZIONE CHE GENERI NUMERI RANDOM NON RIPETIBILI
function getRandomNumArr (total, min, max) {
    const randomNumArr = [];
    while (randomNumArr.length < total) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) +1;
        randomNumArr.push(randomNum);
    };
    return randomNumArr;
};
