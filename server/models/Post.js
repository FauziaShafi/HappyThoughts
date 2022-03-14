const { Schema, model } = require('mongoose');
const dateFormat = require('../util/dateFormat');

const postSchema = new Schema({
   postTitle: {
      type: String,
      required: true,
      trim: true,
    },
    postText: {
      type: String,
      required: 'You need to leave a post!',
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  });
  
  const Post = model('post', postSchema);
  
  module.exports = Post;
  