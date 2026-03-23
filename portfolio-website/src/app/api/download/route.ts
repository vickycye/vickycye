import { NextRequest, NextResponse } from 'next/server';
import { incrementDownloadCount, getDownloadCount } from '@/lib/downloads';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('fileId');

  if (!fileId) {
    return NextResponse.json({ error: 'fileId is required' }, { status: 400 });
  }

  try {
    const count = await incrementDownloadCount(fileId);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error tracking download:', error);
    return NextResponse.json({ error: 'Failed to track download' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('fileId');

  if (!fileId) {
    return NextResponse.json({ error: 'fileId is required' }, { status: 400 });
  }

  try {
    const count = await getDownloadCount(fileId);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching download count:', error);
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}
