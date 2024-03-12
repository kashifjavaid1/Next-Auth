import { NextResponse } from "next/server";

// interface posttypes {
//   id: number;
//   title: string;
//   description: string;
// }
const posts = [
  {
    id: 1,
    title: "title1",
    description: "web development",
  },
  {
    id: 2,
    title: "title2",
    description: "react native development",
  },
  {
    id: 3,
    title: "title3",
    description: "next js development",
  },
];

export const GET = () => {
  return NextResponse.json(posts);
};

export const POST = async (req: NextResponse) => {
  const body = await req.json();
  posts.push(body);
  return NextResponse.json("post successfully");
};

export const PUT = async (req: NextResponse) => {
  const body = await req.json();
  posts.map((post) => {
    if (post.id == body.id) {
      return body;
    } else {
      return post;
    }
  });
  return NextResponse.json("post successfully updated");
};
