const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const colors = require('colors');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    addMessage: (obj) => {
        // Connection URL
        const url = 'mongodb://localhost:27017';
        // Database Name
        const dbName = 'messages';

        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected!");
            const db = client.db(dbName);
            const collection = db.collection('messages');
            collection.insertOne(JSON.parse(obj), ()=> console.log('You added' + obj));
            client.close();
        });

    },

    getMessage: (id, response) => {

        const url = 'mongodb://localhost:27017';
        const dbName = 'messages';

        MongoClient.connect(url, (err, client) => {
           assert.equal(null, err);
           console.log('Connected!');
           const db = client.db(dbName);
           const o_id = new ObjectId(id);
           const collection = db.collection('messages');
           collection.find({"_id": o_id}).toArray((mongoError, objects) => {
               if(mongoError)
                   throw mongoError.red;
               response.send(objects);
           })
        });
    },

    getMessages: (response) => {
        const url = 'mongodb://localhost:27017';

        const dbName = 'messages';

        MongoClient.connect(url, (err, client)=> {
            assert.equal(err, null);
            console.log('Connected!');
            const db = client.db(dbName);
            const collection = db.collection('messages');
            collection.find({}).toArray((mongoError, objects) => {
               if(mongoError)
                   throw mongoError.red;
               response.send(objects);
            });
            client.close();
        })
    }
};