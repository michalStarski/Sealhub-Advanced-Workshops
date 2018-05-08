const db = require('./db.js');
const colors = require('colors');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/messages', (request,response) => {
    response.send(request.body);
    db.addMessage(request.body);
});

app.get('/messages', (request, response) => {
   db.getMessages(response);
});

app.get(`/messages/:id`, (request,response) =>{
    let id = request.params.id.toString();
    db.getMessage(id, response);
});


app.listen(8080, console.log('listening on port 8080 ...'));
