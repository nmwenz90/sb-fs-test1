const { AudioTrack, Source } = require('little-media-box')
const path = require('path')

const EXAMPLE_AUDIO_FILE_PATH = path.resolve('../example.wav')

function main(cb) {
  const audioFile = new Source(EXAMPLE_AUDIO_FILE_PATH)

  audioFile.open((err) => {
    if(err) cb(err)

    const audioTrack = AudioTrack.from(audioFile, { index: 0 })
    audioTrack.ready((err) => {
      if (err) cb(err)

      cb(null, audioTrack)
    })
  })
}

module.exports = main
