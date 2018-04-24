const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post.controller');

//get posts
router.get('/posts', post_controller.post_list);

//create one post
router.post('/posts', post_controller.create_post);

//update post
router.put('/posts/:id', post_controller.update_post);

//delete post
router.delete('/posts/:id', post_controller.delete_post);

//get one post
router.get('/posts/:id', post_controller.get_post);

module.exports = router;