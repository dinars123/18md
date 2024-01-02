import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import connectMongoDb from '../../../../../lib/mongodb';
import Blog from '../../../../../models/blogs';
import Comment from '../../../../../models/blogs'
import path from 'path';

interface Params {
    params: {
      id: string;
    };
  }

export async function PUT(request: NextApiRequest, { params }:Params) {
  await connectMongoDb();
  const { id } = params;
  await Blog.findByIdAndUpdate(id, { Comment });
  return NextResponse.json({ message: 'Comment added' }, { status: 200 });
}

export async function GET(request: NextApiRequest, { params }: Params) {
  await connectMongoDb();
  const { id } = params;
  const blog = await Blog.findOne({ _id: id }).lean();
  console.log("the blog", blog)
  return NextResponse.json({ blog }, { status: 200 });
}
