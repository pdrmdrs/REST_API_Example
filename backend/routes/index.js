const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
      message: 'hello world'
  });
});

router.use(require('./post.route'));
router.use(require('./user.route'));

module.exports = router;