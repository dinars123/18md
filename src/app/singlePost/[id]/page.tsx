import React from 'react';

interface SinglePostProps {
  params: {
    id: string;
  };
}

const getSingleTopic = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('failed to fetch topics');
    }

    const data = await res.json();
    console.log('response', data); // Log the data here

    return data;
  } catch (error) {
    console.log(error);
  }
};

const SinglePost = async ({ params }: SinglePostProps) => {
  const { id } = params;
  console.log(id);
  const { blog } = await getSingleTopic(id);
  console.log('current id', id);
  const { title, author, content, category, createdAt } = blog;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{content}</p>
      <span>{category}</span>
    </div>
  );
};

export default SinglePost;
