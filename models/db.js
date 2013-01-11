/*
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
    
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}),{w:0, native_parser: false});
*/

var settings = require('../settings'),
	mongoose = require('mongoose')


module.exports = mongoose.createConnection(settings.host, settings.db)
