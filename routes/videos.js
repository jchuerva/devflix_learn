const express = require('express');

function videosApi(app) {
  const router = express.Router();

  app.use('/api/videos', router);

  router.get('/', (req, res, next) => {
    // tags are send as query params (?tags=blablabla)
    const { tags } = req.query;

    res.status(200).json({
      data: tags,
      message: 'video listed',
    });
  });

  router.get('/:videoId', (req, res, next) => {
    const { videoId } = req.params;

    res.status(200).json({
      data: videoId,
      message: 'video retrieved',
    });
  });

  router.post('/', (req, res, next) => {
    // a 201 is more appropiated for the post but 200 is also valid
    res.status(201).json({
      data: {},
      message: 'video created',
    });
  });

  router.put('/:videoId', (req, res, next) => {
    const { videoId } = req.params;

    res.status(200).json({
      data: videoId,
      message: 'video updated',
    });
  });

  router.delete('/:videoId', (req, res, next) => {
    const { videoId } = req.params;

    res.status(200).json({
      data: videoId,
      message: 'video deleted',
    });
  });
}

module.exports = videosApi;
