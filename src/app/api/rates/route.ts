import { NextResponse } from 'next/server'

export async function GET() {
  // Mock API response for exchange rates
  const rates = {
    EUR_XOF: 655.96,
    USD_XOF: 600.00,
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(rates)
}