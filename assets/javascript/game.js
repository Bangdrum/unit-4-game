$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);


    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $('#numberOfWins').text(wins);
    $('#numberOfLosses').text(losses);

    $("#red").on('click', function () {
        userScore = userScore + num1;
        console.log("New userScore=" + userScore);
        $('#totalScore').text(userScore);
        if (userScore === Random) {
            yay();
        } else if (userScore > Random) {
            loser();
        }
    })

    $("#pink").on('click', function () {
        userScore = userScore + num2;
        console.log("New userScore=" + userScore);
        $('#totalScore').text(userScore);
        if (userScore === Random) {
            yay();
        } else if (userScore > Random) {
            loser();
        }
    })

    $("#purple").on('click', function () {
        userScore = userScore + num3;
        console.log("New userScore=" + userScore);
        $('#totalScore').text(userScore);
        if (userScore === Random) {
            yay();
        } else if (userScore > Random) {
            loser();
        }
    })

    $("#green").on('click', function () {
        userScore = userScore + num4;
        console.log("New userScore=" + userScore);
        $('#totalScore').text(userScore);
        if (userScore === Random) {
            yay();
        } else if (userScore > Random) {
            loser();
        }
    })

    function yay() {
        alert("Great! You won!");
        wins++;
        $('#numberOfWins').text(wins);
        reset();
    }

    function loser() {
        alert("You bust!");
        losses++;
        $('#numberOfLosses').text(losses);
        reset();
    }

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $('#totalScore').text(userScore);
    }

});