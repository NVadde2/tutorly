// Requiring modules
const express = require('express');
const app = express();
/*const mssql = require("mysql");

// Get request
app.get('/', function (req, res) {

	// Config your database credential
	const config = {
		user: 'sql9579691',
		password: 'mMHEz3f4yK',
		server: 'sql9.freesqldatabase.com',
		database: 'sql9579691'
	};

	// Connect to your database
	mssql.connect(config, function (err) {

		// Create Request object to perform
		// query operation
		var request = new mssql.Request();

		// Query to the database and get the records
		request.query('SELECT * FROM `user`',
			function (err, records) {

				if (err) console.log(err)

				// Send records as a response
				// to browser
				res.send(records);

			});
	});
});

var server = app.listen(5000, function () {
	console.log('Server is listening at port 5000...');
}); */
