'use strict';
module.exports = function(app) {

    /* apis for users management and profile */
    var usersController = require('../controllers/users');

    app.route('/users')
    .get(usersController.list_users);

    app.route('/user/:userId')
    .get(usersController.get_user_information)
    .put(usersController.edit_user_information)
    .delete(usersController.remove_user_information);
    
    /* =========================================================== */
};