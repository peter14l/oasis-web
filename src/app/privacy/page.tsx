import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-oasis-deep min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-oasis-glow/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-12 font-geist text-oasis-mist/90 leading-relaxed">
          <div className="space-y-4 border-b border-oasis-sage/20 pb-8">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-oasis-sand">Oasis Privacy Policy</h1>
            <p className="text-sm font-space-mono text-oasis-mist/60 uppercase tracking-widest">Last updated: April 2026</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">1. Data Sovereignty & Minimization</h2>
            <p>Oasis is designed with &quot;Privacy by Architecture.&quot; We follow the principle of data minimization:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li>We only collect the absolute minimum data required to provide the service.</li>
              <li>Direct messages and media are End-to-End Encrypted (E2EE).</li>
              <li>We do not track your location in the background unless explicitly enabled for specific features (like the Pulse Map).</li>
              <li>We do not sell, rent, or trade your personal data to any third party, ever.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">2. Information We Collect (Data Categories)</h2>
            <p>To comply with the Indian DPDP Act (2023) and GDPR, we disclose the following categories of data processed:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Account Identifiers:</strong> Email, username, and hashed credentials.</li>
              <li><strong>Encrypted Content:</strong> Your messages and media (stored in encrypted form; we do not hold the keys).</li>
              <li><strong>Cryptographic Metadata:</strong> Public keys and salt used for your E2EE identity.</li>
              <li><strong>Subscription Data:</strong> Managed via Razorpay/RevenueCat to process payments (we do not store your credit card numbers locally).</li>
              <li><strong>Device Telemetry:</strong> Opt-in crash reports (Sentry) and basic device type for compatibility.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">3. End-to-End Encryption (E2EE)</h2>
            <p>Your privacy is mathematically protected:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li>Messages and media are encrypted using RSA-2048 and AES-256 before leaving your device.</li>
              <li>Your private key is encrypted with a key derived from your PIN using the Argon2id protocol.</li>
              <li className="text-oasis-glow italic">IMPORTANT: Because we do not store your PIN or your unencrypted private key, we cannot recover your messages if you lose both your PIN and your recovery code.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">4. Your Rights (DPDP & GDPR Compliance)</h2>
            <p>You have full control over your digital footprint:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Right to Erasure:</strong> You can delete your account and all associated data instantly from Settings.</li>
              <li><strong>Data Portability:</strong> You can request a full export of your data (Technical Manifest).</li>
              <li><strong>Right to Correction:</strong> You can update your profile information at any time.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can toggle sync for analytics and wellness data at any time.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">5. Children&apos;s Privacy (Verifiable Consent)</h2>
            <p>Oasis is intended for users aged 13 and older.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li>For users between 13 and 18, we may require verifiable parental consent in certain jurisdictions (like India under the DPDP Act).</li>
              <li>We do not engage in behavioral tracking or targeted advertising directed at minors.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">6. Data Storage & Local-First Media</h2>
            <p>Oasis prioritizes on-device storage:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li>Your shared media is stored locally by default.</li>
              <li>Cloud backups are an optional opt-in feature to protect your data during device loss.</li>
              <li>Data stored on our servers is protected by Row Level Security (RLS) at the database engine level.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">7. Wellness & Intentionality Data</h2>
            <p>Digital wellbeing data (Screen Time, Energy Meter) is processed primarily on your device. We do not use this data for profiling or third-party marketing.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">8. Contact our Data Protection Officer</h2>
            <p>For legal inquiries or data requests:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Email:</strong> privacy@oasis.com</li>
              <li><strong>Address:</strong> Oasis Tech Support, Delhi, India.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
