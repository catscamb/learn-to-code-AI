import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'

export async function POST(request: Request) {

    const chat = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: 'what colour is the sky'}],
    })
    return NextResponse.json({
        message: chat.data.choices[0].message?.content ?? 'error',
      })
}