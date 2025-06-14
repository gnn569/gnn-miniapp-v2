
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Neobase Punk',
    description: 'Mint your Neobase Punk on Base!',
    image: 'https://neobasepunks.vercel.app/sample-alien-punk.png',
    buttons: [
      { label: 'Mint Now', action: 'mint' }
    ],
    mint: {
      type: 'zora-erc721',
      contractAddress: '0x6E08e084BA6BafFaE8467faF3DF158C59304e88F'
    }
  });
}
