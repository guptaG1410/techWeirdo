const express = require('express');
const mongodb = require('mongodb');
const app = express();
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'binarytree';

MongoClient.connect(url, function(err, client) {
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  
  
  app.listen(3000, function() {
    console.log('Listening on port 3000');
  });
});
