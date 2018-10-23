const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    image: String,
    author_id: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    like: Number,
    dislike: Number,
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

const Article = mongoose.model('Article', articleScheme)
module.exports = Article