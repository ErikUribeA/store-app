import { NextRequest, NextResponse } from 'next/server'

export async function GET() {

    const res = await fetch('http://192.168.88.39:7000/auth/products', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer <access_token> "
        },
    })

    const products = await res.json();

    return NextResponse.json({
        products,
    }, { status: 200 })
}

export async function POST(request: NextRequest) {

    const data = await request.json()
    console.log('Received POST data:', data)

    return NextResponse.json({
        message: 'POST: Hello from Next.js!',
        data: data,
    }, { status: 200 })
}

