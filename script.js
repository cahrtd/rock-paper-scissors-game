
const gameContainer = document.querySelector('.container');
let userResult = document.querySelector('.user_result img');
let compResult = document.querySelector('.comp_result img');
let optionImages = document.querySelectorAll('.option_image');

const finalUserWinMessages = [
    "Victory!",
    "You win the game!",
    "You beat the AI!",
    "You’re the winner!"
];
const finalCompWinMessages = [
    "AI wins the game!",
    "Defeated by the computer!",
    "The computer takes the crown!",
    "Game over!"
];

let result = document.querySelector('.result');
let userScore = 0;
let compScore = 0;
const winningScore = 3;
const userScoreDisplay = document.querySelector('.user_score');
const compScoreDisplay = document.querySelector('.comp_score');

const restartBtn = document.querySelector('.restart_btn');

function endGame() {
        
        optionImages.forEach(image => {
            image.style.pointerEvents = 'none';
            image.classList.remove('active');
        });

        //result.textContent = userScore === winningScore ? "You Won!" : "Computer Won!";
        
        if (userScore === winningScore) {
        result.textContent = finalUserWinMessages[Math.floor(Math.random() * finalUserWinMessages.length)];
    } else {
        result.textContent = finalCompWinMessages[Math.floor(Math.random() * finalCompWinMessages.length)];
    }

        restartBtn.style.display = 'inline-block';
        restartBtn.onclick = () => {
            resetGame();
        };
}

function resetGame() {
        userScore = 0;
        compScore = 0;
        userScoreDisplay.textContent = `Your Score: ${userScore}`;
        compScoreDisplay.textContent = `Computer\'s Score: ${compScore}`;
        
        

        result.textContent = "Let\'s play!";
        userResult.src = compResult.src = "Rockimage.png";
        
        optionImages.forEach(image => {
            image.style.pointerEvents = 'auto';
        });

        restartBtn.style.display = 'none';
}

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = compResult.src = "Rockimage.png";
        
        let waitingMessages = ["3... 2... 1...!", "Thinking...", "AI calculating...", "Waiting for opponent..."];
        result.textContent = waitingMessages[Math.floor(Math.random() * waitingMessages.length)];

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active');
    });

    gameContainer.classList.add('start');

    let time = setTimeout(() => {

        gameContainer.classList.remove('start');

        let imageSrc = e.target.querySelector('img').src;
        userResult.src = imageSrc;

let compImages = ["Rockimage.png", "Paperimage.png", "Scissorsimage.png"];
let compOptions = ["rock", "paper", "scissors"];
let userValue = compOptions[index];

// Generate computer choice, but avoid matching userValue if possible
let randomNumber = Math.floor(Math.random() * 3);
let compValue = compOptions[randomNumber];

// If draw, re-roll once to try to avoid a draw
if (compValue === userValue) {
    let otherOptions = compOptions.filter(opt => opt !== userValue);
    let newIndex = Math.floor(Math.random() * 2);
    compValue = otherOptions[newIndex];
    compResult.src = compImages[compOptions.indexOf(compValue)];
} else {
    compResult.src = compImages[randomNumber];
}

        /*let randomNumber = Math.floor(Math.random() * 3);

        let compImages = ["Rockimage.png", "Paperimage.png", "Scissorsimage.png"];
        compResult.src = compImages[randomNumber];

        let compValue = ["rock", "paper", "scissors"][randomNumber];
        let userValue = ["rock", "paper", "scissors"][index];
*/
        let outcomes = {
            rockrock: "draw",
            rockpaper: "comp",
            rockscissors: "user",
            paperrock: "user",
            paperpaper: "draw",
            paperscissors: "comp",
            scissorsrock: "comp",
            scissorspaper: "user",
            scissorsscissors: "draw"
        };

        let outComeValue = outcomes[`${userValue}${compValue}`];

        if (outComeValue === "user") {
            userScore++;
            userScoreDisplay.textContent = `Your Score: ${userScore}`;
        } else if (outComeValue === "comp") {
            compScore++;
            compScoreDisplay.textContent = `Computer\'s Score: ${compScore}`;
        }
        
        if (userScore === winningScore || compScore === winningScore) {
            endGame();
        } else {
            result.textContent = outComeValue === "draw" ? "It's a Draw!" : outComeValue === "user" ? "You Win!" : "Computer Wins!";
        }
        }, 1500);

    })

});

restartBtn.addEventListener('click', resetGame);


