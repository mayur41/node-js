const { Schema } = require("mongoose");

var userModal = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = connection.model('user', userModal, 'user');