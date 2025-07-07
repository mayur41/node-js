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
    },
    role: {
        type: String,
        default: 'user'
    },
});

module.exports = connection.model('user', userModal, 'user');