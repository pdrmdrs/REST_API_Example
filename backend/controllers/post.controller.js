const response_utils = require('../utils/res.util');

exports.post_list = function(req, res, next) {
    response_utils.json_message(res, 'post list');
}

exports.create_post = function(req, res, next) {
    response_utils.json_message(res, 'create post');
}

exports.update_post = function(req, res, next) {
    response_utils.json_message(res, 'update post ' + req.params.id);
}

exports.delete_post = function(req, res, next) {
    response_utils.json_message(res, 'delete post ' + req.params.id);
}

exports.get_post = function(req, res, next) {
    response_utils.json_message(res, 'get post ' + req.params.id);
}

