document.addEventListener('DOMContentLoaded', function(){

    // dice 1
    var random1 = Math.ceil(Math.random() * 6);
    var dice1 = "images/dice" + random1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", dice1);

    // dice 2
    var random2 = Math.ceil(Math.random() * 6);
    var dice2 = "images/dice" + random2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", dice2);

    if(random1 > random2){
        document.querySelector('h1').innerHTML = "🚩Player 1 Wins"
    }
    else if(random1 < random2){
        document.querySelector('h1').innerHTML = "Player 2 Wins🚩"
    }
    else{
        document.querySelector('h1').innerHTML = "Draw!"
    }

});