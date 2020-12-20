var express = require('express');
var router = express.Router();
let audioData = {};
const info = require('../info.js');

info((error, audioTrack) => {
  if (error) console.error(error)
  if (!audioTrack) console.error(new Error('Returned audio track is invalid!'))
  console.log('audiotrack properties', audioTrack.properties)
  console.log(`Probe results for file at URI: ${audioTrack.source.uri}\n\n`)
  audioData.source = audioTrack.source.uri

  console.log('File format...\t', audioTrack.properties.format.format_long_name)
  audioData.format = audioTrack.properties.format.format_long_name
  console.log('File size...\t', audioTrack.properties.format.size, 'bytes')
  audioData.size = audioTrack.properties.format.size
  console.log('Codec type...\t', audioTrack.properties.stream.codec_type)
  audioData.codec = audioTrack.properties.stream.codec_type
  console.log('Channel count...', audioTrack.properties.stream.channels)
  audioData.channelCount = audioTrack.properties.stream.channels
  console.log('Duration...\t', audioTrack.properties.stream.duration, 'seconds')
  audioData.duration = audioTrack.properties.stream.duration
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('audiodata', audioData)
  res.json(audioData)
});

module.exports = router;
