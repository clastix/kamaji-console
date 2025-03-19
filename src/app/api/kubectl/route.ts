import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

const execAsync = promisify(exec);

// Make sure to export the POST handler correctly for Next.js 13+ API routes
export async function POST(req: NextRequest) {
  let kubeconfigPath = '';
  
  try {
    const body = await req.json();
    const { command, kubeconfig } = body;

    if (!command?.startsWith('kubectl ')) {
      return NextResponse.json(
        { error: 'Only kubectl commands are allowed' }, 
        { status: 400 }
      );
    }

    if (!kubeconfig) {
      return NextResponse.json(
        { error: 'Kubeconfig is required' },
        { status: 400 }
      );
    }

    // Create temporary kubeconfig file with unique name
    const kubeconfigName = `kubeconfig-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    kubeconfigPath = join(tmpdir(), kubeconfigName);
    
    try {
      // Write the kubeconfig file
      await writeFile(kubeconfigPath, kubeconfig, { 
        encoding: 'utf-8',
        mode: 0o600 // Set proper permissions
      });
      
      // Execute the command
      const { stdout, stderr } = await execAsync(command, {
        env: {
          ...process.env,
          KUBECONFIG: kubeconfigPath,
        },
      });

      return NextResponse.json({ 
        output: stdout || stderr,
        kubeconfigPath: kubeconfigPath // Return full path
      });
    } catch (error) {
      console.error('Command execution error:', error);
      throw error;
    }
  } catch (error) {
    console.error('kubectl execution error:', error);
    throw error;
  }
} 