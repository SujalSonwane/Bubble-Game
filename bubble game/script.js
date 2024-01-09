

var timer= 60;
var score = 0;
let randnum =0;
var hitnum = "";

function increasescore (){
    score = score + 10;
    document.querySelector("#scorebox").textContent = score;
}


function makeBubble (){let bubbles="";

for(i=0;i<=63; i++){
   randnum = Math.floor(Math.random()*10);
  bubbles +=  `<div class="bubble" id="bubble">${randnum}</div>` ;
}

document.querySelector('.lowerpanel').innerHTML=bubbles;
}



function runTimer( ) {
    var timing = setInterval(

     function (){

        if(timer>0) {
            timer--;
    document.querySelector('#timerbox').textContent = timer;}
    
    else{
        clearInterval(timing);
        
        
        document.querySelector('#lowerpanel').innerHTML = `<h1 style="color:orange">WELL DONE YOUR SCORE WAS "${score}".</h1>`;
        
    }
}
    ,1000);

}


function hitOn() {

      hitnum= Math.floor(Math.random()*10);

    document.querySelector('#hitbox').textContent = hitnum;
    
}

document.querySelector('#lowerpanel').addEventListener('click',
function (details){
console.log(details.target.textContent);

let answ = Number(details.target.textContent);
console.log(answ);

if(answ==hitnum){
    increasescore();
    makeBubble();  
    hitOn();
}
}
);



makeBubble();
runTimer();
hitOn();
increasescore();
