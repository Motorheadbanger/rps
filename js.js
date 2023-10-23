let button = document.querySelectorAll("button.choice");
let restart = document.querySelector("button#restart");
let scoreboard = document.querySelector("#scoreboard")
let cpuWins = 0;
let playerWins = 0;

button.forEach(button => button.addEventListener('click', event => playRound(event.target.textContent)));

function playRound(playerMove) {
    let cpuMove = getCpuMove();
    let round = resolveRound(playerMove.toLowerCase(), cpuMove);

    calculateScores(round);
    updateScores();

    if (cpuWins == 5 || playerWins == 5) {
        setTimeout(declare, 50);
        restartGame();
    }
}

restart.addEventListener('click', restartGame);

function getCpuMove() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
        default:
            alert('Something wrong with rng');
    }
}

function resolveRound(player, cpu) {
    let roundResolution;
    
    switch (player) {
        case 'rock':
            switch (cpu) {
                case 'rock':
                    roundResolution = 'D';
                    break;
                case 'paper':
                    roundResolution = 'L';
                    break;
                case 'scissors':
                    roundResolution = 'W';
                    break;
            }
        case 'paper':
            switch (cpu) {
                case 'rock':
                    roundResolution = 'W';
                    break;
                case 'paper':
                    roundResolution = 'D';
                    break;
                case 'scissors':
                    roundResolution = 'L';
                    break;
            }
        case 'scissors':
            switch (cpu) {
                case 'rock':
                    roundResolution = 'L';
                    break;
                case 'paper':
                    roundResolution = 'W';
                    break;
                case 'scissors':
                    roundResolution = 'D';
                    break;
            }
    }

    return roundResolution;
}

function calculateScores(roundResolution) {
    if (roundResolution === 'W')
        playerWins++;
    else if (roundResolution === 'L')
        cpuWins++;
}

function restartGame() {
    cpuWins = 0;
    playerWins = 0;
    updateScores();
}

function updateScores() {
    scoreboard.innerText = `Player: ${playerWins}, CPU: ${cpuWins}`;
}

function declare() {
    if (cpuWins == 5)
        alert('You lost the game');
    else
        alert('You won the game');
}