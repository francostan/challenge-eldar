import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await req.json();
    const res = await db.updateOne(user);
    return NextResponse.json({ message: res ? "User updated successfully" : "User not found" });
  } catch (error) {
    return NextResponse.error();
  }
}
