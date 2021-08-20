// document.getElementById('btnStart').addEventListener('click', startTheGame);
document.getElementById('btnStart').addEventListener('click', setCondiotion);

let minValue;
let maxValue;

function setCondiotion() {

    document.getElementById('btnStart').classList.add("d-none");
    document.getElementById('conditionField').classList.remove("d-none");

    const form = document.getElementById('conditionForm');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        minValue = parseInt(form.querySelector('[name="minNum"]').value);
        maxValue = parseInt(form.querySelector('[name="maxNum"]').value);

        if (isNaN(maxValue) || isNaN(minValue)){
            minValue = 0;
            maxValue = 100;
        }
    
        (minValue < -999) ? minValue = -999 : minValue;
        (maxValue > 999) ? maxValue = 999 : maxValue;

        document.getElementById('conditionField').classList.add("d-none");
        document.getElementById('newAlert').classList.remove("d-none");
        document.getElementById('alertText').innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю \u{1F609}`;

        document.getElementById('alertBtn').addEventListener("click", function() {
            startTheGame();
        })

    })  
} 
 

function startTheGame() {

    document.getElementById('newAlert').classList.add("d-none");
    document.getElementById('gameField').classList.remove("d-none");

    // let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    // let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    let answerNumber = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;

    document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                minValue = answerNumber + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                let phrases = [
                    'Я думаю, это число ', 
                    'Да это легко! Ты загадал ', 
                    'Наверное, это число ', 
                    'Ты загадал ',
                    'Дай подумать... Это ',
                    `Хм...\u{1F649} Пусть будет `, 
                ]
                answerField.innerText = `${phrases[Math.floor(Math.random()*6)]} ${numberToText(answerNumber)}`;
            }
        }
    })

    document.getElementById('btnLess').addEventListener('click', function (){
        if(gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue)/2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phrases = [
                'Я думаю, это число ', 
                'Да это легко! Ты загадал ', 
                'Наверное, это число ', 
                'Ты загадал ',
                'Дай подумать... Это ',
                `Хм... \n\u{1F649} Пусть будет `, 
            ]
            answerField.innerText = `${phrases[Math.floor(Math.random()*6)]} ${numberToText(answerNumber)}`;

        }
    }});

    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            let phrases = [
                `Я всегда угадываю\n\u{1F60E}`, 
                'Изи! Сыграем еще? ', 
                'Это было интересно. Еще раз?', 
                `У тебя не быдл шансов\n\u{1F60E}`,
                'Как два пальца..Еще раз?', 
            ]
            answerField.innerText = `${phrases[Math.floor(Math.random()*5)]}`;
            gameRun = false;
        }
    })

    document.getElementById('btnRetry').addEventListener('click', function () {
        orderNumber = 0;
        document.getElementById('gameField').classList.add("d-none");
        setCondiotion();
    })
}

function numberToText(num) {
    let numAbs = Math.abs(num);
    let numArr = Array.from(String(numAbs), Number);
    let numText = '';

    let arr1 = [
        'ноль',
        'один',
        'два',
        'три',
        'четыре',
        'пять',
        'шесть',
        'семь',
        'восемь',
        'девять',
    ] 
    let arr11 = [
        'десять',
        'одинадцать',
        'двенадцать',
        'тринадцать',
        'четырнадцать',
        'пятнадцать',
        'шестнадцать',
        'семнадцать',
        'восемнадцать',
        'девятнадцать',
    ]
    let arr10 = [
        'десять',
        'двадцать',
        'тридцать',
        'сорок',
        'пятьдесят',
        'шестдесят',
        'семдесят',
        'восемдесят',
        'девяносто',
    ] 
    let arr100 = [
        'сто',
        'двести',
        'триста',
        'четыреста',
        'пятьсот',
        'шестьсот',
        'семьсот',
        'восемьсот',
        'девятьсот',
    ]

    if(numArr.length == 1){
        numText = arr1[numArr[0]];
    }
    if(numArr.length == 2){
        switch(numAbs){
            case 10:
                numText = 'десять';
                break;
            case 11:
                numText = 'одинадцать';
                break;
            case 12:
                numText = 'двенадцать';
                break;
            case 13:
                numText = 'тринадцать';
                break;
            case 14:
                numText = 'четырнадцать';
                break;
            case 15:
                numText = 'пятнадцать';
                break;
            case 16:
                numText = 'шестнадцать';
                break;
            case 17:
                numText = 'семнадцать';
                break;
            case 18:
                numText = 'восемнадцать';
                break;
            case 19:
                numText = 'девятнадцать';
                break;
            case 20:
                numText = 'двадцать';
                break;
            case 30:
                numText = 'тридцать';
                break;
            case 40:
                numText = 'сорок';
                break;
            case 50:
                numText = 'пятьдесят';
                break;
            case 60:
                numText = 'шестдесят';
                break;
            case 70:
                numText = 'семдесят';
                break;
            case 80:
                numText = 'восемдесят';
                break;
            case 90:
                numText = 'девяносто';
                break;
            default:
                numText = arr10[numArr[0]-1] + " " + arr1[numArr[1]];
                break;
        }       
    }
    if(numArr.length == 3){
        switch(numAbs){
            case 100:
                numText = 'сто';
                break;
            case 200:
                numText = 'двести';
                break;
            case 300:
                numText = 'триста';
                break;
            case 400:
                numText = 'четыреста';
                break;
            case 500:
                numText = 'пятьсот';
                break;
            case 600:
                numText = 'шестьсот';
                break;
            case 700:
                numText = 'семьсот';
                break;
            case 800:
                numText = 'восеьмсот';
                break;
            case 900:
                numText = 'девятьсот';
                break;
            default:
                if(String(numAbs).slice(1) > 9 && String(numAbs).slice(1) < 20){
                    numText = arr100[numArr[0]-1] + " " + arr11[numArr[2]];  
                } else if(String(numAbs).slice(1) < 10){
                    numText = arr100[numArr[0]-1] + " " + arr1[numArr[2]];
                } else {
                    if(numArr[2]==0){
                        numText = arr100[numArr[0]-1] + " " + arr10[numArr[1]-1];
                    } else {
                        numText = arr100[numArr[0]-1] + " " + arr10[numArr[1]-1] + " " + arr1[numArr[2]];
                    }
                }
                break;
        }
    }
    return num > 0 ? numText : ("минус " + numText);
    }   

