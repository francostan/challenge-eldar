import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    await db.deleteOne(parseInt(id));
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.error();
  }
}
