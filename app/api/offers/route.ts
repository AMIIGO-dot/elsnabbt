import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'offers.json');
  const offers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return NextResponse.json(offers);
}