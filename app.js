let gameSeq=[];
let userSeq=[];
let score=[];

let level=0;
let started=false;
let h2=document.querySelector("h2");
let playBtn = document.querySelector(".play");
let ruleBtn = document.querySelector(".rule");
let btns=["pink","green","orange","blue"];


document.addEventListener("click", function(){
    if(started==false){
        console.log("Game is starded");
        started=true;
        levelUp();
       }
       });

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
    };

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
      },250);
      };

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    };

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
        setTimeout(levelUp,1000);
          } 
         }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
              document.querySelector("body").style.backgroundColor="white";
           },150);
         let h3=document.querySelector("h3");
         score.push(level);
         console.log(score);
         let  highScore = -1;
         for(let i=0;i<score.length;i++){
            if(highScore<score[i]){
                highScore=score[i];
                console.log(highScore);
             }
         };
         h2.innerHTML=`High Score ${highScore}`;
         h3.innerHTML=`Game OVER!! Your<b> score is ${level}               
         </b><br>Press any key to start game`;
         const audio = new Audio("./assets/game-over-audio.mp3");
         audio.play();
        reset();
       }};
  
       function btnPress(){
       console.log(this);
        let btn=this;
        userFlash(btn);
        const audio = new Audio("./assets/button-audio.mp3");
        audio.play();
        userColor=btn.getAttribute("id");
        console.log(userColor);
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
     };

    let allBtns = document.querySelectorAll(".btn");
    for( let btn of allBtns){
    btn.addEventListener("click",btnPress);
    }

    function reset(){
        console.log("reset game");
        started= false;
        gameSeq=[];
        userSeq=[];
        level=0;
     };

// Description

