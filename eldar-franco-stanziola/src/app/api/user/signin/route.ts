import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await req.json();
    if (!user) {
      return NextResponse.error();
    }

    const existingUser = await db.findOneByEmail(user.email);
    const correctPassword = existingUser?.password === user.password;

    if (!existingUser || !correctPassword) {
      return NextResponse.json({ message: "Invalid credentials" });
    } else {
      return NextResponse.json(existingUser);
    }
  } catch (error) {
    return NextResponse.error();
  }
}
