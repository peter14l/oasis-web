import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const currentVersion = searchParams.get('version');

    // Fetch the latest released version from Supabase
    const { data: versionData, error } = await supabase
      .from('app_versions')
      .select('*')
      .eq('status', 'released')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !versionData) {
      console.error('Error fetching latest version:', error);
      // Return a default response if no version is found in DB
      return NextResponse.json({
        latestVersion: '4.3.1',
        downloadUrl: `https://${process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]}/storage/v1/object/public/versions/oasis-v4.3.1.apk`,
        releaseNotes: 'Oasis is officially ready for download.',
        isRequired: false,
      });
    }

    return NextResponse.json({
      latestVersion: versionData.version,
      downloadUrl: versionData.download_url,
      releaseNotes: versionData.release_notes,
      isRequired: versionData.is_required,
      releaseDate: versionData.created_at,
    });
  } catch (error) {
    console.error('Update check error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
