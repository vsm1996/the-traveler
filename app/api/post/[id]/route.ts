import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";


export async function POST(request: NextRequest,
  { params: { id } }: { params: { id: string } }) {
  const body = await request.json();
  // Validate data
  const validation = schema.safeParse(body)
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  // search user by unique username, replace id with params.id below

  // else, add post to db
  const newpost = await prisma.post.create({
    data: {
      message: body.message,
      userId: id
    }
  })

  //return post
  return NextResponse.json(newpost,
    // Status: 201 -> an object was created
    { status: 201 })
}