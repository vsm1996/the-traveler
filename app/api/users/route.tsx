import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// Add request: NextRequest to prevent caching the response data 
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  // fetch users from a db
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate data
  const validation = schema.safeParse(body)
  // If invalid, return 400
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  // check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email }
  })

  // if user exists, throw 400 error
  if (existingUser) return NextResponse.json({ error: 'User already exists' }, { status: 400 })

  // Else, input new user into db and return newUser object
  const newUser = await prisma.user.create({
    data: {
      username: body.username,
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(newUser,
    // Status: 201 -> an object was created
    { status: 201 });
}