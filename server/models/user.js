const mongoose = require('mongoose'),
    Schema = mongoose.Schema
    hash = require('bycjwt')

const userScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    articles: [{
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }],
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

userScheme.post('validate', function() {
    this.password = hash.bcencode(this.password)
});

const User = mongoose.model('User', userScheme)
module.exports = User