const response_utils = require('../utils/res.util');

exports.user_list = function(req, res, next) {
    response_utils.json_message(res, 'user list');
}

exports.create_user = function(req, res, next) {
    response_utils.json_message(res, 'create user');
}

exports.update_user = function(req, res, next) {
    response_utils.json_message(res, 'update user ' + req.params.id);
}

exports.delete_user = function(req, res, next) {
    response_utils.json_message(res, 'delete user ' + req.params.id);
}

exports.get_user = function(req, res, next) {
    response_utils.json_message(res, 'get user ' + req.params.id);
}
