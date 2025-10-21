const express = require('express');
const app = express();
const PORT = 3000;

// Random number between 1 and 100
let numberToGuess = Math.floor(Math.random() * 100) + 1;

app.get('/guess/:num', (req, res) => {
    const userGuess = parseInt(req.params.num);
    if(userGuess > numberToGuess) res.send('Too high!');
    else if(userGuess < numberToGuess) res.send('Too low!');
    else res.send('Correct! You guessed it!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

