const fs = require('fs');



module.exports = {
    addMessage: (obj) => {
        console.log(obj);
        fs.readFile('messages.json', 'utf-8', (error, data) => {
           const json = JSON.parse(data);
           json.push(Object.assign(JSON.parse(obj), {id: json.length+1}));
           fs.writeFile('messages.json', JSON.stringify(json), error => {
               if(error)
                   throw error;
           })
        });
    },

    getMessage: (id, response) => {
        fs.readFile('messages.json', 'utf-8', (error, data) => {
           if(error)
               throw error;
           const messages = JSON.parse(data);
           response.send(messages[id-1]);
        });
    },

    getMessages: (response) => {
        fs.readFile('messages.json', 'utf-8', (error, data) => {
            if(error)
                throw error;
            const messages = JSON.parse(data);
            response.send(messages)
        });
    }
};