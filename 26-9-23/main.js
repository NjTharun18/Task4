var score=1;
function decrease(){
    score=score-1;
    document.getElementById("score").textContent=score;
}
function increase(){
    score=score+1;
    document.getElementById("score").textContent=score;
}