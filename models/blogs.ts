import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema],
    category: {
      type: [String],
      default: [],
    },
  },
);

const Blog = models.Blog || mongoose.model("Blog" , blogsSchema)
export default Blog
