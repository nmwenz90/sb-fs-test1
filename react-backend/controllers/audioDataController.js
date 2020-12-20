const info = require('../info.js');

const audioDataController = {};
const audioData = {}

audioDataController.getAudioInfo = (req, res, next) => {
  try{
    info((error, audioTrack) => {
        if (error) console.error(error)
        if (!audioTrack) console.error(new Error('Returned audio track is invalid!'))
     audioData.source = audioTrack.source.uri;
     audioData.format = audioTrack.properties.format.format_long_name;
     audioData.size = audioTrack.properties.format.size;
     audioData.codec = audioTrack.properties.stream.codec_type;
     audioData.channelCount = audioTrack.properties.stream.channels;
     audioData.duration = audioTrack.properties.stream.duration;
        res.locals.audioData = audioData;
        next()
    })
  }
  catch(err) {
    return next(err)
  }
}

module.exports = audioDataController

