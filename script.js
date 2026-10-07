
let btn=document.getElementsByClassName("btn");
let msg=document.getElementById("msg");
let reset=document.getElementById("reset");
let newgame=document.getElementById("newgame");
 function resetvalue(){
    for(let button of btn){
button.disabled=false;
 button.innerText="";

}
     turn = "X";
    msg.innerText = "";
}
reset.addEventListener("click", () => {
    resetvalue();
   });
   newgame.addEventListener("click", () => {
    resetvalue();
   });
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
 let turn="X";
 for(let button of btn){
    button.addEventListener("click",()=>{
    if(turn=="X"){
        turn="O";
    button.innerText="X";
    button.disabled = true;
 }
  else{
       turn="X"
        button.innerText="O";
        button.disabled = true;
    }
    let winner=checkWinner();
    if(winner){
        for(let button of btn){
          button.disabled = true;  
        }
        msg.innerText=winner;
    }
    });}
function checkWinner(){
    for(let pattern of winPatterns){
if(
        btn[pattern[0]].innerText != "" &&
        btn[pattern[0]].innerText == btn[pattern[1]].innerText &&
        btn[pattern[1]].innerText == btn[pattern[2]].innerText){
    return "winner is :"+btn[pattern[0]].innerText;
}
 }}



