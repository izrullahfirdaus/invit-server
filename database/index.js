// (1) import package mongoose

const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../app/config');

const mongoose = require('mongoose');



mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@k2-cluster.wdt9ip1.mongodb.net/${dbName}?retryWrites=true&w=majority`)

const db = mongoose.connection

module.exports = db