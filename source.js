/*
const game = ()=> {

    //here is the game starting

    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // play match
    const playMatches = () => {
        const options = document.querySelectorAll('.options button');
        const playerFigures = document.querySelector('.player-figures');
        const computerFigures = document.querySelector('.computer-figures'); 
        
        
    };

    startGame();

};
*/

let random = document.getElementById("lucky");
let cards = ["lizard", "paper", "rock", "scissors", "spock"];

function cardChosen(elmnt, card) {
    document.getElementById("cardImg").src = `img/${card}.png`
    console.log(elmnt, card)
    window.result1 = card;
    
    var result = Math.floor(Math.random() * cards.length);
    window.result2 = cards[result];
}

var pScore = 0;
var cScore = 0;

function playMatch() { 

    function addPlayerScore() {
        pScore++;
        document.getElementById("playerScore").innerHTML = pScore;
        return;
    }

    function addComputeScore() {
        cScore++;
        document.getElementById("computerScore").innerHTML = cScore;
        return;
    }

    function tieBreaker() {
        alert("Its a tie!");
        return;
    }

    if (result1 === result2) {
        tieBreaker();
        return;
    }

    if (result1 === "rock") {
        if (result2 === "scissors" || result2 === "lizard") {
            alert("You win!");
            addPlayerScore();
            return;
        } else {
            if (result2 === "spock" || result2 === "paper") {
                alert(`You lose!\nComputer has ${result2}`);
                addComputeScore();
                return;
            }
        }
    }
    if (result1 === "paper") {
        if (result2 === "rock" || result2 === "spock") {
            alert("You win!");
            addPlayerScore();
            return;
        } else {
            if (result2 === "scissors" || result2 === "lizard") {
                alert(`You lose!\nComputer has ${result2}`);
                addComputeScore();
                return;
            }
        }
    }
    if (result1 === "scissors") {
        if (result2 === "paper" || result2 === "lizard") {
            alert("You win!");
            addPlayerScore();
            return;
        } else {
            if (result2 === "rock" || result2 === "spock") {
                alert(`You lose!\nComputer has ${result2}`);
                addComputeScore();
                return;
            }
        }
    }
    if (result1 === "spock") {
        if (result2 === "scissors" || result2 === "rock") {
            alert("You win!")
            addPlayerScore();
            return;
        } else {
            if (result2 === "lizard" || result2 === "paper") {
                alert(`You lose!\nComputer has ${result2}`);
                addComputeScore();
                return;
            }
        }
    }
    if (result1 === "lizard") {
        if (result2 === "spock" || result2 === "paper") {
            alert("You win!");
            addPlayerScore();
            return;
        } else {
            if (result2 === " rock" || result2 === "scissors") {
                alert(`You lose!\nComputer has ${result2}`);
                addComputeScore();
                return;
            }
        }
    }
}

// game();