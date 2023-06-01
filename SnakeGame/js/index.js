// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 
//const foodSound = new Audio('music/food.mp3');
const foodSound = new Audio('music/food2.mp3');
const hiss = new Audio('music/hiss.mp3');

const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
//const musicSound = new Audio('music/music.mp3');
const musicSound = new Audio('music/music2j.mp3');

let speed = 4;

let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];
food = {x: 6, y: 7};
let highScoreVal=0;
let scoreBox = document.getElementById("scoreBox");
let hiscoreBox = document.getElementById("hiscoreBox");

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
     lastPaintTime = ctime;
    gameEngine();
   // console.log(ctime);
}


function isCollide(snake){
    //if you bump into yourself
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y ){
            return true;
        }
    }
        if(snake[0].x>=18 || snake[0].x<=0 ||  snake[0].y>=18 || snake[0].y<=0){
            return true;
        }
   
    
}

function gameEngine(){
    // Part 1: Updating the snake array & Food

    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        hiss.pause();
        inputDir = {x:0,y:0};
        alert("Game Over !!   Please press any key to  Play again");
        snakeArr = [{x: 13, y: 15}];
         musicSound.play();
         hiss.play();

        score=0;
        scoreBox.innerHTML="Score is : "+score;
        speed=4;

    
    }

    // if you have eaten the food increment the scroe and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x === food.x){
        score+=1;
        //increase speed in evry  interval
       
            speed+=1;
      
        //console.log(speed);
        scoreBox.innerHTML="Score is : "+score;
        if(score>highScoreVal){
            highScoreVal=score;
            localStorage.setItem("hiScore",JSON.stringify(highScoreVal));
            hiscoreBox.innerHTML="High Score : " + highScoreVal;

        }
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y});
        let a=2;
        let b=16;
        food = {x:Math.round(a+(b-1)*Math.random())  ,y:Math.round(a+(b-1)*Math.random()) };
        foodSound.play();
    }

    //move the snake
    for(let i=snakeArr.length-2;i>=0;i--){
      
        snakeArr[i+1]={...snakeArr[i]};
        
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;

     //Part 2 : Display Snake and Food
    //display the snake    
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index==0){
            snakeElement.classList.add("head");
        }
         else {
            snakeElement.classList.add("snake");

        }

        board.appendChild(snakeElement);
      
    });
     //display snake food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);


}  


//save high score in localStorage
//let highScore;
let hiScore=localStorage.getItem("hiScore");
if(hiScore===null){
    highScoreVal=0;
     localStorage.setItem("hiScore",JSON.stringify(highScoreVal));

    
}else{
  hiscoreBox.innerHTML="High Score : " + hiScore;

}

console.log(highScoreVal);



//snake logic below
window.requestAnimationFrame(main);
window.addEventListener("keydown",(e)=>{
    musicSound.play();
    hiss.play();
    inputDir = { x:0,y:1}; //start the game
    moveSound.play();

    switch(e.key){
        case "ArrowUp":
        console.log("Arrow Up pressed");
        inputDir.x =0;
        inputDir.y=-1;
        break;
        case "ArrowDown":
        console.log("Arrow down pressed");
        inputDir.x =0;
        inputDir.y=1;
        break;
        case "ArrowLeft":
        console.log("ArrowLeft pressed");
        inputDir.x =-1;
        inputDir.y=0;
        break;
        case "ArrowRight":
        console.log("ArrowRight pressed");
        inputDir.x =1;
        inputDir.y=0;
        break;
        default:
            console.log("other key pressed");


    }

})
