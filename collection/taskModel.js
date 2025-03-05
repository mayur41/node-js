const { Schema } = require("mongoose");

var taskModal = new Schema({
    email: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    isdelete: {
        type: Boolean,
        default: false
    },
    cdt: {
        type: Date,
        default: new Date()
    },
});

module.exports = connection.model('task', taskModal, 'task');