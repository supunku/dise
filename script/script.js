//Random number selection palyer 1

var playerA = Math.floor(Math.random()*6 + 1);
console.log(playerA)

var imageA = "images/dice" + playerA + ".png";

document.querySelector(".image1").setAttribute("src",imageA);
document.querySelector(".number1").textContent = playerA;

// Random number selection player 2

var playerB = Math.floor(Math.random()*6 + 1);

var imageB = "images/dice" + playerB + ".png";

document.querySelector(".image2").setAttribute("src",imageB);
document.querySelector(".number2").textContent = playerB;



//


function gameStatus(){if (playerA>playerB){
    document.querySelector(".game").textContent= "Player 1 Won"
}else if (playerA<playerB){
    document.querySelector(".game").textContent = "Player 2 Won"
}else {
    document.querySelector(".game").textContent = "Draw"
}

}

gameStatus();
    

// Button function

function btn () {
    window. location. reload();
}



