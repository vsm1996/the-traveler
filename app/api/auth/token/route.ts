import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


// AS AN EXAMPLE
export async function GET(request: NextRequest) {
  const token = await getToken({ req: request })
  return NextResponse.json(token)
}