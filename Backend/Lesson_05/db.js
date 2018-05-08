const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const colors = require('colors');
const ObjectId = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'messages';


module.exports = {
    addMessage: (obj) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected!");
            const db = client.db(dbName);
            const collection = db.collection('messages');
            collection.insertOne(obj, (err) => {
                if(err)
                    throw err;
                console.log('You added' + JSON.stringify(obj))
            });
            client.close();
        });

    },

    getMessage: (id, response) => {
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