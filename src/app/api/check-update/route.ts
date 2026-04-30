import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// The new public R2 bucket URL for versions.json
const R2_VERSIONS_URL = 'https://pub-eb8774786d7e48b8982367d35368a478.r2.dev/versions.json';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform') || 'android';

    // Fetch the single versions.json from R2
    const response = await fetch(R2_VERSIONS_URL, {
      cache: 'no-store', // Always get the latest version
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch versions from R2: ${response.statusText}`);
    }

    const versions = await response.json();
    
    // Extract the requested platform or fallback to android
    const versionData = versions[platform] || versions['android'];

    if (!versionData) {
      return NextResponse.json({
        latestVersion: '4.3.1',
        downloadUrl: `https://pub-eb8774786d7e48b8982367d35368a478.r2.dev/oasis-arm64-v8a-release.apk`,
        releaseNotes: 'Oasis is officially ready for download.',
        isRequired: false,
      });
    }

    // Map the new JSON structure to the response format expected by the app
    return NextResponse.json({
      latestVersion: versionData.version,
      downloadUrl: versionData.url,
      releaseNotes: versionData.notes,
      isRequired: versionData.required || false,
      releaseDate: versionData.date || new Date().toISOString(),
    });
  } catch (error) {
    console.error('Update check error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
