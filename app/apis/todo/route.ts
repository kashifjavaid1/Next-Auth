import { NextRequest, NextResponse } from "next/server";
// body fetch request
export const POST = async (req: NextResponse) => {
  const body = await req.json();
  console.log("body: ", body);
  return NextResponse.json({ body: body });
};

export const GET = () => {
  return NextResponse.json({ message: "post request successful" });
};

export const PUT = () => {
  return NextResponse.json({ message: "put request" });
};

export const DELETE = () => {
  return NextResponse.json({ message: "delete request" });
};
