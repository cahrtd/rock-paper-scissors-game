
const gameContainer = document.querySelector('.container'),
 userResult = document.querySelector('.user_result img'),
 compResult = document.querySelector('.comp_result img'),
 result = document.querySelector('.result'),
 optionImages = document.querySelectorAll('.option_image');

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = compResult.src = "images/Rockimage.png";
        
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


        let randomNumber = Math.floor(Math.random() * 3);

        let compImages = ["images/Rockimage.png", "images/Paperimage.png", "images/Scissorsimage.png"];
        compResult.src = compImages[randomNumber];

        let compValue = ["rock", "paper", "scissors"][randomNumber];
        let userValue = ["rock", "paper", "scissors"][index];

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

        result.textContent = outComeValue === "draw" ? "It's a Draw!" : outComeValue === "user" ? "You Win!" : "Computer Wins!";
    }, 1500);

    console.log(compValue, userValue);
    })
});

