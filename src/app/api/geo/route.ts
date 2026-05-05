import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // 1. Try Vercel's built-in headers first (Most reliable on Vercel)
    const vercelCountry = request.headers.get('x-vercel-ip-country');
    const vercelCity = request.headers.get('x-vercel-ip-city');

    // 2. Get IP for VPN detection
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               '';

    // If we are in local development (no IP or local IP), return a test case or default
    if (!ip || ip === '::1' || ip === '127.0.0.1') {
      return NextResponse.json({
        country: vercelCountry || 'IN', // Default to India for local testing if you want
        country_name: 'India',
        city: vercelCity || 'Local',
        isVpn: false
      });
    }

    // 3. Use ip-api.com primarily for VPN/Hosting detection
    // Fields: status, message, country, countryCode, city, proxy, hosting
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,city,proxy,hosting`);
    const data = await response.json();

    if (data.status !== 'success') {
      // If the external API fails, fall back to Vercel headers
      return NextResponse.json({
        country: vercelCountry || 'IN',
        country_name: vercelCountry === 'IN' || !vercelCountry ? 'India' : 'United States',
        city: vercelCity || '',
        isVpn: false
      });
    }

    // Use Vercel country code if available (often more accurate at edge), otherwise API data
    const finalCountry = vercelCountry || data.countryCode || 'IN';
    
    // A user is likely using a VPN if 'proxy' or 'hosting' is true
    // We are cautious with 'hosting' as some consumer ISPs might trigger it
    const isVpn = data.proxy === true || data.hosting === true;
    
    return NextResponse.json({
      country: finalCountry,
      country_name: data.country || 'India',
      city: vercelCity || data.city,
      isVpn: isVpn
    });
  } catch (error) {
    console.error('Geo detection error:', error);
    return NextResponse.json({ country: 'IN', country_name: 'India', isVpn: false });
  }
}
