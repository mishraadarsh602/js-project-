setInterval(function(){

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let date = new Date();
H = date.getHours();
M =date.getMinutes();
S = date.getSeconds();

 HRotate = 30*H+1*M/2;
 MRotate = 6*M;
 SRotate = 6*S;
 hour.style.transform=`rotate(${HRotate}deg)`;
 minute.style.transform=`rotate(${MRotate}deg)`;
 second.style.transform=`rotate(${SRotate}deg)`;




},1000)