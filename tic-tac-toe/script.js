console.log("Welcome to Tik Tok Toe");

let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
//let gameover = new Audio('gameover.mp3');
let gameover = new Audio('won.mp3');

let isgameover=false;
let turn="X";

//music.play();
//function to change the turn
const changeTurn =()=>{
    return turn==="X"?"0":"X";
}


//Function to check for win
const checkWin = ()=>{
  let boxtexts =  document.getElementsByClassName('boxtext');
  console.log(boxtexts);
    let wins =[
        [0,1,2,3,5,0],
        [3,4,5,3,15,0],
        [6,7,8,3,25,0],
        [0,3,6,-6,15,90],
        [1,4,7,4,15,90],
        [2,5,8,14,15,90],
        [0,4,8,4,15,45],
        [2,4,6,4,15,-45]
    ];

    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)  && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerHTML=boxtexts[e[0]].innerText+" WON";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";

           isgameover=true;

        }
       //console.log(boxtexts[e[0]]);
    })
   
    // if(boxtext[])



}

//game logic
function checkLogic(){
      boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((element)=>{
        element.addEventListener("click",function(){
            boxtext = element.querySelector(".boxtext");
            if(boxtext.innerHTML===""){
                boxtext.innerHTML=turn;
               checkWin();
               turn =changeTurn();
               if(!isgameover){
                document.getElementsByClassName('info')[0].innerHTML=" Turn for "+turn; 
                audioTurn.play();
                
              }
              if(isgameover){
                gameover.play();
                document.querySelector('.line').style.width="21vw";
     
                document.querySelector('.imgbox img').style.width="138px";

              }
            }
           
          
           
           // console.log(turn);
           // console.log(boxtext);
            
           
        })
    })
   
}

checkLogic();

let reset = document.getElementById('reset');

//reset starts
reset.addEventListener("click",()=>{
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.transform="initial";
    document.querySelector('.line').style.width="0";
    turn = "X";
    document.querySelector('.info').innerHTML="Turn for "+turn;
     isgameover=false;
   boxtext = document.querySelectorAll('.boxtext');

   Array.from(boxtext).forEach((e)=>{
      e.innerHTML="";
   });
  
   gameover.pause();
   gameover.currentTime=0;
});





