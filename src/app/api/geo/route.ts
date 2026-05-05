import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // Get IP from headers
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               '';

    // Using ip-api.com with fields to detect VPN/Hosting
    // fields=16916480 includes: status, message, country, countryCode, city, proxy, hosting
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=16916480`);
    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error(data.message || 'IP API failed');
    }

    // A user is likely using a VPN if 'proxy' or 'hosting' is true
    const isVpn = data.proxy === true || data.hosting === true;
    
    return NextResponse.json({
      country: data.countryCode || 'US',
      country_name: data.country || 'United States',
      city: data.city,
      isVpn: isVpn
    });
  } catch (error) {
    console.error('Geo detection error:', error);
    // Fallback to safe default
    return NextResponse.json({ country: 'US', isVpn: false });
  }
}
