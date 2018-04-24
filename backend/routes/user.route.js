const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

//get users
router.get('/users', user_controller.user_list);

//create one user
router.post('/users', user_controller.create_user);

//update user
router.put('/users/:id', user_controller.update_user);

//delete user
router.delete('/users/:id', user_controller.delete_user);

//get one user
router.get('/users/:id', user_controller.get_user);

module.exports = router;