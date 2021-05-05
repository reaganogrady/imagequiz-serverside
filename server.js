const express = require('express');
const quiz = require('./data');
const flowers = require('./flowers');

const app = express();
const port = process.env.PORT || 4002;

var cors = require('cors');

// data
let scores = [];

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("imagequiz-serverside");
});

app.get('/quizzes', (request, response) => {
    response.json(quiz);
});

app.get('/flowers', (request, response) => {
    response.json(flowers);
});

app.get('/quiz/:id', (request, response) => {
    let id = request.params.id;
    if (quiz[id]){
        response.json(quiz[id]);
    } else {
        response.status(404).send('Quiz id not found');
    }
    
});

app.post('/score', (request, response) => {
    let curr = {score: request.body.score, quizID: request.body.quizID, user: request.body.user};
    scores.push(curr);
    response.send('Score added.');
});

// Taken from the lesson
app.listen(port, () => console.log('Listening on port ' + port));

