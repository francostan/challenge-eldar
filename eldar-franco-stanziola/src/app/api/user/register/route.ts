import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await req.json();
    if (!user) {
      return NextResponse.error();
    }

    const existingUser = await db.findOne(user.email);

    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    await db.createOne(user);

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.error();
  }
}
