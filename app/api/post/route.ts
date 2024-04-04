import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export const revalidate = 0

export async function GET(request: NextRequest) {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
    },
  })
  return NextResponse.json(posts)
}
