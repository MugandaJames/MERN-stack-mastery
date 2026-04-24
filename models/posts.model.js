const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'description required'],
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

const Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;