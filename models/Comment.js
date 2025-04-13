const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }
});

module.exports = mongoose.model('Comment', commentSchema);
