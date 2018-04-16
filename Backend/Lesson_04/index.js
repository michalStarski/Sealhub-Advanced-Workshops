const db = require('./db.js');
const colors = require('colors');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/messages', (request,response) => {
    response.send((`you posted: ${JSON.stringify(request.body)}`).red);
    db.addMessage(JSON.stringify(request.body));
});

app.get('/messages', (request, response) => {
   db.getMessages(response);
});

app.get(`/messages:id`, (request,response) =>{
    let id = request.params.id.toString().slice(1);
    db.getMessage(id, response);
});

app.listen(8080);
