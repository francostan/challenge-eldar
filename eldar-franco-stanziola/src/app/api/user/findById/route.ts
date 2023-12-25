import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const user = await db.findOne(id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
