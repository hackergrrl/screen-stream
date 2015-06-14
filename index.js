var exec = require('exec-stream')
var spawn = require('child_process').spawn

module.exports = function (opts) {

  var cmd = "ffmpeg"

  var captureVideoDevice = "x11grab"
  var captureAudioDevice = "pulse"
  var display = ":0.0"

  opts = opts || {}
  opts.fps = opts.fps || 20
  opts.resolution = opts.resolution || '1440x900'
  opts.threads = opts.threads || 2
  opts.bitrateKbps = opts.bitrateKbps || "3000k"
  opts.audioRate = opts.audioRate || 44100
  opts.videoCodec = opts.videoCodec || 'libx264'

  var params = [
    '-f',           captureVideoDevice,
    '-s',           opts.resolution,
    '-r',           opts.fps,
    '-i',           display,
    '-f',           'alsa',
    '-i',           'pulse',
    '-f',           'flv',
    '-ac',          '2',
    '-ar',          opts.audioRate,
    '-vcodec',      opts.videoCodec,
    '-g',           opts.fps * 2,
    '-keyint_min',  opts.fps,
    '-b:v',         opts.bitrateKbps,
    '-minrate',     opts.bitrateKbps,
    '-maxrate',     opts.bitrateKbps,
    '-pix_fmt',     'yuv420p',
    '-s',           opts.resolution,
    '-preset',      'ultrafast',
    '-tune',        'film',
    '-acodec',      'libmp3lame',
    '-threads',     opts.threads,
    '-strict',      'normal',
    '-bufsize',     opts.bitrateKbps
  ]

  params.push('pipe:1')

  return spawn(cmd, params).stdout
}
