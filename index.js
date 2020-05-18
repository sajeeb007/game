var name1 = prompt("Enter Player 1 Name: ");
var name2 = prompt("Enter Player 2 Name: ");

document.querySelector(".p1").innerText = name1;
document.querySelector(".p2").innerText = name2;




var player1;
var player2;
player1 = Math.floor(Math.random()*6 + 1);
player2 = Math.floor(Math.random()*6 + 1);

for(var i = 1; i <= 6; i++){
  var imgSrc = "dice" + i + ".png"
  if(player1 === i){
    document.querySelector("img.img1").src = "images/" + imgSrc;
  }
}
for(var i = 1; i <= 6; i++){
  var imgSrc = "dice" + i + ".png"
  if(player2 === i){
    document.querySelector("img.img2").src = "images/" + imgSrc;
  }
}

if(player1 > player2){
  document.querySelector("h1").innerText = name1 + " Wins!";
}
else if(player2 > player1){
  document.querySelector("h1").innerText =  name2 + " Wins!";
}
else{
  document.querySelector("h1").innerText = "Draw!";
}
console.log(player1);
console.log(player2);
