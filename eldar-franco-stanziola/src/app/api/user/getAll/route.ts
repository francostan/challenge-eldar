import { db } from "../../../fakeDB/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await db.getAll();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.error();
    }
}