import { NextResponse } from 'next/server'

// listen out for POST requests on /api/post-comment
export async function POST(request: Request) {
  // get the comment from the Ajax request
  const { comment } = await request.json()

  // usually this response would come back from a database
  // where things like ID wouldn't just be a random number
  // and the user would be relevant to who posted!
  return NextResponse.json({
    id: Math.floor(Math.random() * 1000000),
    name: 'Rik',
    comment: comment,
  })
}
