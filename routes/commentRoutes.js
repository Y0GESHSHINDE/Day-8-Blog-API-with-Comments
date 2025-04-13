const express = require('express');
const Comment = require('../models/Comment');
const Blog = require('../models/Blog');
const router = express.Router();

// Add comment to blog
router.post('/:blogId', async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  if (!blog) return res.status(404).json({ error: 'Blog not found' });

  const comment = new Comment({ text: req.body.text, blog: blog._id });
  await comment.save();

  blog.comments.push(comment._id);
  await blog.save();

  res.status(201).json(comment);
});

module.exports = router;
