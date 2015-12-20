#!/usr/bin/env node

process.chdir(__dirname + '/../')

var screen = require('../index')
var http = require('http')

// TODO: minimalist support; usage doc
var doServer = process.argv[2]
if (doServer && doServer === '-s') {
  runServer()
} else {
  screen().pipe(process.stdout)
}

function runServer() {
  var server = http.createServer(function (req, res) {
    if (req.url === '/') {
      screen().pipe(res)
    }
  })
  server.listen(6900)
}
