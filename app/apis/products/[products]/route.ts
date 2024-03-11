import { NextResponse } from "next/server";

export const GET = (req: {}, route: { params: { products: string } }) => {
  console.log("req", req);

  console.log("route", route.params);

  return NextResponse.json({ success: "data", params: route.params.products });
};

export const POST = (req: {}, route: { params: { products: string } }) => {
  return NextResponse.json({ success: "data", params: route.params.products });
};
