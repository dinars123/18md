import Link from 'next/link';
import { useEffect, useState } from 'react';
import connectMongoDb from '../lib/mongodb';
import Blog from '../models/blogs';
import RealtiveTime from './relativeTime';

interface Blog {
  title: string;
  author: string;
  content: string;
  category: string;
  createdAt: string;
  _id: string;
}

const AllBlogsRender = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/createBlog', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('failed to fetch blogs');
        }

        const data = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);


  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  const sortedBlogsLatest = [...blogs].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA - dateB;
    
  });

  



  const categoryStyles: { [key: string]: string } = {
    Technology: 'Technology',
    Travel: 'Travel',
    Food: 'Food',
    Lifestyle: 'Lifestyle',
    Fashion: 'Fashion',
    Finance: 'Finance',
    'Health And Fitness': 'HealthAndFitness',
    'Book Reviews': 'BookReviews',
    Entertainment: 'Entertainment',
    'Diy And Crafts': 'DiyAndCrafts',
  };

  return (
    <div>
      <button onClick={() => setBlogs(sortedBlogs)}>Newest posts</button>
      <button onClick={() => setBlogs(sortedBlogsLatest)}>Latest posts</button>
      <div className="blogContainer">
        {blogs.map((blog: Blog) => (
          <div className="blog" key={blog._id}>
            <h1>{blog.title}</h1>
            <h2>Author: {blog.author}</h2>
            <span className={`category ${categoryStyles[blog.category]}`}>
              {blog.category}
            </span>
            <Link href={`/singlePost/${blog._id}`}>read more</Link>
            <p>Posted {RealtiveTime(new Date(blog.createdAt))}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsRender;
