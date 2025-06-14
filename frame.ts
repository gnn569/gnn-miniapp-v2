import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  return new Response(
    JSON.stringify({
      version: 'vNext',
      image: 'https://neobasepunks.vercel.app/sample-alien-punk.png',
      name: 'Neobase Punk',
      description: 'Mint your Neobase Punk on Base',
      buttons: [
        {
          label: 'Mint Now',
          action: 'mint',
        },
      ],
      mint: {
        type: 'zora-erc721',
        contractAddress: '0x6E08e084BA6BafFaE8467faF3DF158C59304e88F',
      },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}