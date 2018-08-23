const restify = require('restify');
const mongoose = require('mongoose')
const config = require('./config')

/**
  * Initialize Server
  */
 const server = restify.createServer({
	name: config.name,
	version: config.version,
});
 
/**
  * Middleware
  */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
 
server.listen(config.port, function () {
  // establish connection to mongodb
	mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri);

	const db = mongoose.connection;

	db.on('error', (err) => {
	    console.error(err);
	    process.exit(1);
	});

	db.once('open', () => {
	    require('./src/routes')(server);
      console.log(`Server is listening on port ${config.port}`);
	});
  
});

module.exports = server // for testing