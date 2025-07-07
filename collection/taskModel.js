const { Schema } = require("mongoose");

var taskModal = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    status: {
        type: String, //todo, progress, done
        default: 'todo' // Default status is 'todo'
    },
    priority: {
        type: String // low, medium, high
    },
    comments: [{
        text: {
            type: String
        },
        cdt: {
            type: Date,
            default: new Date()
        },
    }],
    isdelete: {
        type: Boolean,
        default: false
    },
    cdt: {
        type: Date,
        default: new Date()
    },
    cdy: {
        type: String // Created by user id
    }
});

module.exports = connection.model('task', taskModal, 'task');