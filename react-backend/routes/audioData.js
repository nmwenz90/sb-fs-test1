var express = require('express');
var router = express.Router();

const audioDataController = require('../controllers/audioDataController.js')

router.get('/', audioDataController.getAudioInfo , (req, res) => {
  return res.status(200).json(res.locals.audioData);
});

module.exports = router;
