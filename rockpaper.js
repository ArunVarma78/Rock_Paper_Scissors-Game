
let computer='';
let result;

let score = JSON.parse(localStorage.getItem('score')) || {
    wons:0,
    losses:0,
    ties:0
};
scorePrint();

function randCom(myChoice){
    CompMove();

    if(myChoice=='Rock'){
        if(computer=='Rock'){
        result='Tie';
        }else if(computer=='Paper'){
        result='You lost!';
        }else{
        result='You won!';
        }
    }else if(myChoice=='Paper'){
        if(computer=='Rock'){
        result='You won!';
        }else if(computer=='Paper'){
        result='Tie';
        }else{
        result='You lost!';
        }
    }else if(myChoice=='Scissor'){
        if(computer=='Rock'){
        result='You lost!';
        }else if(computer=='Paper'){
        result='You won!';
        }else{
        result='Tie';
        }
    }

    if(result=='You won!'){
        score.wons++;
    }else if(result=='You lost!'){
        score.losses++;
    }else{
        score.ties++;
    }

    scorePrint();
    movePrint(myChoice);
    resultPrint();
    localStorage.setItem('score',JSON.stringify(score));
    
    return myChoice;
}

function movePrint(myChoice){
    document.querySelector('.js-moves').innerHTML=`You choose ${myChoice}, computer  choose ${computer}`;
}
function resultPrint(){
    document.querySelector('.js-result').innerHTML=result;
}
function scorePrint(){
    document.querySelector('.js-score')
.innerHTML=`Won:${score.wons} Lost:${score.losses} Tie:${score.ties}`;
}
function CompMove(){
    let rand = (Math.floor(Math.random()*9))+1;

    if(rand<=3){
        computer='Rock';
    }else if(rand>3 && rand<=6){
        computer='Paper';
    }else{
        computer='Scissor';
    }

    return computer;
}

function reset(){
    score.wons=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    scorePrint();
    document.querySelector('.js-moves').innerHTML='';
    document.querySelector('.js-result').innerHTML='';
}
   