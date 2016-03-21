'use strict';

const
	fs = require('fs'),
 	express = require('express'),
	compression = require('compression'),
	handlebars = require('handlebars')

const app = express()

app.use(compression())

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
	fs.readFile('src/index.tpl', (err, data) => {
		if (err) {
			return res.status(500).end(err.message)
		}
		let tpl = handlebars.compile(data.toString())
		res.set('Content-Type', 'text/html')
		res.end(tpl(req.query))
	})
})

const port = process.argv[2] || process.env.PORT || 8080
app.listen(port)
console.log("Listen on port", port)