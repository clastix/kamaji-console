import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import fs from 'fs';

export async function POST(req: NextRequest) {
  try {
    const { kubeconfigPath } = await req.json();
    
    if (!kubeconfigPath) {
      return NextResponse.json({ error: 'No path provided' }, { status: 400 });
    }

    // Check if file exists synchronously first
    if (!fs.existsSync(kubeconfigPath)) {
      return NextResponse.json({ success: true }); // File doesn't exist, consider it cleaned
    }
    
    try {
      // Try to delete the file
      await unlink(kubeconfigPath);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error during file deletion:', error);
      
      // If file doesn't exist after failed deletion, consider it a success
      if (!fs.existsSync(kubeconfigPath)) {
        return NextResponse.json({ success: true });
      }
      
      // Try synchronous deletion as fallback
      try {
        fs.unlinkSync(kubeconfigPath);
        return NextResponse.json({ success: true });
      } catch (syncError) {
        console.error('Synchronous deletion failed:', syncError);
        return NextResponse.json({ 
          error: 'Failed to cleanup file',
        }, { status: 500 });
      }
    }
  } catch (error) {
    console.error('Cleanup request error:', error);
    return NextResponse.json({ 
      error: 'Invalid request',
    }, { status: 400 });
  }
} 