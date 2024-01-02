'use client';

import { useState } from 'react';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorr, setErrorr] = useState('');

  console.log('title', title);
  console.log('content', content);
  console.log('author', author);
  console.log('category', category);

  const handleBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !author || !category) {
      setErrorr('All fields are required');
      return;
    }

    try {
      const responseBlog = await fetch('api/createBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          author,
          category,
        }),
      });
    
      if (!responseBlog.ok) {
        throw new Error('Failed to post blog');
      }
    
   
      setAuthor('');
      setCategory('');
      setContent('');
      setTitle('');

    
    } catch (error) {
      console.error('Error posting blog:', error);
      setErrorr('Failed to post blog. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleBlogPost}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Fashion">Fashion</option>
          <option value="Finance">Financeee</option>
          <option value="Health And Fitness">Health and Fitness</option>
          <option value="Book Reviews">Book Reviews</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Diy And Crafts">Diy and Crafts</option>
        </select>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Submit</button>
        <div>{errorr}</div>
      </form>
   <hr />
    </div>
  );
};

export default PostBlog;
    