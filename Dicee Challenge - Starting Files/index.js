var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Its a Draw";
} 
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}