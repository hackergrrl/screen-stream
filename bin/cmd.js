#!/usr/bin/env node

var screen = require('../index')

screen().pipe(process.stdout)
