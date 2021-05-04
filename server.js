const express = require('express');
const quiz = require('./data');
const flowers = require('./flowers');

const app = express();
const port = process.env.PORT || 4002;

// data
let scores = [];


app.use(express.json());

app.get('/quizzes', (request, response) => {
    response.json(quiz);
});

app.get('/quiz/:id', (request, response) => {
    let id = request.params.id;
    if (quiz[id]){
        response.json(quiz[id]);
    } else {
        response.status(404).send('Quiz id ${id} not found');
    }
    
});

app.post('/score', (request, response) => {
    let score = request.body.score;
    scores.push(score);
    response.send('Score added.');
});

// Taken from the lesson
app.listen(port, () => console.log('Listening on port ' + port));

