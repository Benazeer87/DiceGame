
var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImage1source = "images/" + randomImage1;

var diceImage1Random = document.querySelectorAll("img")[0];

diceImage1Random.setAttribute("src", randomImage1source);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImage2source = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2source );


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "😁Player1 is winner";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "😁Player2 is winner";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}