const path = require('path');
global.appRoot = path.resolve(__dirname)

module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	host: process.env.HOST || 'http://localhost',
	port: process.env.PORT || 3000,
	base_url: process.env.BASE_URL || `${this.host}:${this.port}`,
	app_root: appRoot,
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wd-api',
	},
};