#!/usr/bin/env node

process.chdir(__dirname + '/../')

var screen = require('../index')

screen().pipe(process.stdout)
