var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}


function makeBubble (){


var clutter  = "";
for(var i = 1; i<=192; i++){
    var rn = Math.floor(Math.random()*20)
    clutter += `<div class = "bubble">${rn}</div>`;
}   
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timeint = setInterval(function(){
        if(timer>0){
         timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <h1>`;
        }
        
    }, 1000)


}

// var timer = 60;
function getNewHit(){
    hitrn = Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent = hitrn;
}
document.querySelector("#pbtm")
.addEventListener("click" , function(dets){
    var chickednum = Number(dets.target.textContent);
    if(chickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
 


})

runTimer();
makeBubble();
getNewHit();

