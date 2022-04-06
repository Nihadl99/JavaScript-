const minute = document.querySelector('#chrono span:nth-child(1)');
const second = document.querySelector('#chrono span:nth-child(2)');
const milli = document.querySelector('#chrono span:nth-child(3)');


const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');


const liste = document.querySelector('.liste');


let countMilli = 0;
let countSecond = 0;
let countMinute = 0;
let interval = 0;

let isStart = false;
let isStop = false;

@ts-ignore 
let intervalMilli = choiceMilli.value;

console.log(choiceMilli.option[choiceMilli.selectindex]);
let intervalMilli = choiceMilli.getAttribue('value');


btnStart.addEventListener('click', () => {
    if(isStart){


       // console.log(countMilli, countSecond, countMinute);
       liste.innerHTML +=`<p>${oneToTwo(countMinute)} : ${oneToTwo(countSecond)} . ${oneToTwoMilli(countMilli)}</p> `;

    }else{
        choiceMilli.setAttribute('disabled' , 'true');

       interval = setInterval(()=>{
             if(!isStart){
               isStart = true;
            }
            countMilli += 60;
            logiqueCompteur();
           // console.log(countMilli, countSecond, countMinute);       remplissageHtml();
           remplissageHtml();
        }, 60);
        btnStart.innerHTML = "step";
        btnStop.innerHTML = "stop";
        isStop = false

    }
});

btnStop.addEventListener('click', () => {
    choiceMilli.setAttribute('disabled');
    if (isStop){
        milli.innerHTML="000"
        second.innerHTML="00"
        minute.innerHTML="0"

        liste.innerHTML="";

        btnStop.innerHTML = "stop";
        btnStart.innerHTML = "start";
    }else{

        clearInterval(interval);
        remplissageHtml();
        isStart = false;
        btnStart.innerHTML = "Restard";
        isStop = true;
        btnStop.innerHTML = "reset";
    }
});

choiceMilli.addEventListener('change',(e:Event)=>{
    @ts-ignore
    intervalMilli = parseInt(e.target.value);
});


function logiqueCompteur() {
    if (countMilli >= 1000) {
        countMilli = 0;
        countSecond++;
    }
    if (countSecond >= 60){
        countSecond = 0;
        countMinute++;
    }
    if (countMinute >= 60) {
        countMilli = 0;
        countSecond = 0;
        countMinute = 0;
    }
}
function oneToTwo(num) {
    return num < 10 ? `0${num}` : num.toString();
}
function oneToTwoMilli(num) {
    if (num < 10) {
        return `00${num}`;
    }else if (num < 100) {
        return `0${num}`;
    }else{
        return num.toString();
    }
}
function remplissageHtml() {
    milli.innerHTML = oneToTwoMilli(countMilli);

    if(second.innerHTML !== oneToTwo(countSecond)){
        second.innerHTML = oneToTwo(countSecond);
    }
    if(minute.innerHTML !== oneToTwo(countMinute)){
       minute.innerHTML = oneToTwo(countMinute);
    }
    
    
}
remplissageHtml();