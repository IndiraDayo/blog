const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const toDoScheme = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: String,
    status: Boolean,
    due_date: Number,
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
});

const ToDo = mongoose.model('ToDo', toDoScheme)
module.exports = ToDo