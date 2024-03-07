import { User } from "@/app/model/User";
import { connect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
// for db connections
export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    try {
      const { name, email, password } = await request.json();
      if (!name || !email || !password) {
        throw new Error("Name, email, and password are required.");
      }
      const hashedPassword = await bcrypt.hash(password, 6);
      await connect();
      await User.create({ name, email, password: hashedPassword });
      return NextResponse.json(
        { message: "successful user register" },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  } else {
    return NextResponse.json(
      { message: "method not allowed" },
      { status: 405 }
    );
  }
}
