import { NextResponse } from "next/server";
// http://localhost:3000/apis/products/ali/allproducts?title="all title"
//  Body data fetch
export const GET = (req: { url: string }) => {
  const title = new URL(req.url).searchParams.get("title");
  return NextResponse.json({ message: "SUCCESS", data: { title } });
};
// post request
export const POST = (req: { url: string }) => {
  const name = new URL(req.url).searchParams.get("name");
  return NextResponse.json({ message: "SUCCESS", data: { name } });
};

// put request
export const PUT = (req: { url: string }) => {
  const showData = new URL(req.url).searchParams.get("abc");
  return NextResponse.json({ message: "SUCCESS DATA", Data: { showData } });
};
