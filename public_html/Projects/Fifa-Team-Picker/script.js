/* global gen */
var teamList = ['Manchester City', 'Manchester United', 'Arsenal', 'Chelsea', 
                'Liverpool', 'Tottenham', 'Barcelona', 'Real Madrid', 
                'Athletico Madrid', 'Dortmund', 'Bayern Munich', 'PSG', 'Juventus'];

// Methods for generating a new random team from the teamList array.
function randomTeamGen() {
    var randomIndex = Math.floor(Math.random() * teamList.length);
    var randomTeam = teamList[randomIndex];
    return randomTeam;
}

var player1 = document.getElementById("player1-input").value;
var player2 = document.getElementById("player2-input").value;

function getPlayers() {
    if(document.getElementById("player1-input").value.length === 0)
    {
        document.getElementById('player1').innerHTML =
            "Player 1's name must be submitted.";
    }
    else if(document.getElementById("player2-input").value.length === 0)
    {
        document.getElementById('player1').innerHTML =
            "Player 2's name must be submitted.";
    }
    else {
        document.getElementById('player1').innerHTML = 
            document.getElementById("player1-input").value 
            + " is Player 1, he will play as: " + randomTeamGen();

        document.getElementById('player2').innerHTML = 
            document.getElementById("player2-input").value 
            + " is Player 2, he will play as: " + randomTeamGen();
    }
}