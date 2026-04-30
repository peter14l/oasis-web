import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <main className="bg-oasis-deep min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-oasis-glow/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-12 font-geist text-oasis-mist/90 leading-relaxed">
          <div className="space-y-4 border-b border-oasis-sage/20 pb-8">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-oasis-sand">Oasis Terms of Service</h1>
            <p className="text-sm font-space-mono text-oasis-mist/60 uppercase tracking-widest">Last updated: April 2026</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">1. The Oasis Mission</h2>
            <p>
              Oasis is an intentional relationship platform. By using this app, you acknowledge that Oasis is designed to prioritize mental wellbeing over engagement metrics. This means we surgically remove features like infinite feeds, view counts, and public likes to protect your peace.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">2. Acceptance of Terms</h2>
            <p>
              By accessing or using Oasis, you agree to be bound by these Terms of Service. If you do not agree to these terms, including our commitment to data sovereignty and intentionality, please do not use the app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">3. Eligibility & Children</h2>
            <p>
              You must be at least 13 years of age. Users in certain regions (including India under the DPDP Act 2023) between the ages of 13 and 18 may require verifiable parental consent. You represent that you have not been previously suspended or removed from Oasis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">4. Encryption & Account Security</h2>
            <p>Oasis uses End-to-End Encryption (E2EE).</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Responsibility:</strong> You are solely responsible for remembering your PIN and securing your Recovery Code.</li>
              <li><strong>No Recovery:</strong> Because Oasis follows a &quot;Zero-Knowledge&quot; architecture, we cannot recover your encrypted messages if you lose your credentials.</li>
              <li><strong>Security:</strong> You must notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">5. The Subscription Covenant</h2>
            <p>Oasis operates on a subscription-first model. &quot;You pay us so we never have to sell you.&quot;</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Payment:</strong> Payments are processed via Razorpay or RevenueCat (App Store/Play Store).</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time.</li>
              <li><strong>Transparency:</strong> We provide annual reports on how subscription funds are used to maintain the platform&apos;s mission.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">6. Content & Relational Circles</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Ownership:</strong> You retain ownership of content you post.</li>
              <li><strong>Privacy:</strong> Content posted to a &quot;Circle&quot; is intended only for that circle.</li>
              <li><strong>Anti-Virality:</strong> You agree not to attempt to circumvent our blocks on content reshare or virality mechanisms. Oasis is for intentional sharing, not broadcast media.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">7. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li>Harass or bully other users.</li>
              <li>Reverse engineer or attempt to extract our source code (except for our open-source cryptographic components).</li>
              <li>Use automated scripts to scrape user data.</li>
              <li>Share illegal or harmful content.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">8. Disclaimers & Limitation of Liability</h2>
            <p>
              Oasis is provided &quot;as is.&quot; While we strive for 100% security, no system is perfect. To the maximum extent permitted by law, Oasis is not liable for data loss caused by lost encryption keys or device failure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">9. Termination</h2>
            <p>
              You may delete your account at any time. Upon deletion, all your data is permanently scrubbed from our active servers in accordance with your &quot;Right to be Forgotten.&quot;
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-dm-serif text-2xl text-oasis-sand">10. Contact</h2>
            <p>For legal or support inquiries:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-oasis-glow">
              <li><strong>Email:</strong> legal@oasis.com</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
