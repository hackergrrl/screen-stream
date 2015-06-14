# screen-stream

Provides a video stream of your computer's display.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

```sh
npm install screen-stream
```

You will also need `ffmpeg` installed and accessible from the command line.

Linux only so far! :O

## CLI Usage

Remember to install globally so you can access the screen-stream command:

```sh
$ npm install -g screen-stream
```

Then freely pipe the stream anywhere!

```sh
$ screen-stream > recording.mp4
^C

$ mplayer recording.mp4
```

## API

`screen-stream` exports a single method, which creates a new live stream of your
display.

Stream your live screen to e.g. an HTTP endpoint!

```js
var screen = require('screen-stream')
var request = require('request')

screen().pipe(request.put("http://my.website.com/live_stream_feed"))
```

## Limitations

 * Linux support only so far
 * Requires a pre-existing ffmpeg install that's setup on your command line
 * No way to customize output (size, bitrate, format, etc)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests,
[please create an issue](https://github.com/noffle/screen-stream/issues/new).

Please use [standard Javascript](https://github.com/feross/standard) in your pull requests.


