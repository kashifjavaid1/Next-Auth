import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "get request" });
};

export const POST = () => {
  return NextResponse.json({ message: "post request" });
};

export const PUT = () => {
  return NextResponse.json({ message: "put request" });
};

export const DELETE = () => {
  return NextResponse.json({ message: "delete request" });
};
