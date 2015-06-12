var exec = require('exec-stream')

exec('lib/screen').pipe(process.stdout)
