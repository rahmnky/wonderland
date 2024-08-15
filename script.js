function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (userChoice === aiChoice) {
        result = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && aiChoice === 'scissors') ||
        (userChoice === 'paper' && aiChoice === 'rock') ||
        (userChoice === 'scissors' && aiChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${aiChoice}.`;
    } else {
        result = `You lose! ${aiChoice} beats ${userChoice}.`;
    }

    document.getElementById('result').textContent = result;
}
