"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, MessageCircle, AlertTriangle, Coffee } from "lucide-react";

export default function FoundersNote() {
  return (
    <section id="mission" className="py-24 px-6 bg-oasis-deep relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-oasis-moss/20 border border-oasis-sage/20 relative backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-oasis-glow/10 flex items-center justify-center text-oasis-glow">
              <Coffee size={24} />
            </div>
            <div>
              <h2 className="font-cormorant text-3xl italic text-oasis-sand leading-none">A note from the builder.</h2>
              <p className="font-geist text-xs text-oasis-mist/50 mt-1 uppercase tracking-widest">Why I built Oasis</p>
            </div>
          </div>

          <div className="space-y-6 font-geist text-lg text-oasis-mist/90 leading-relaxed">
            <p>
              Let&apos;s be real for a second. Traditional social media? It&apos;s basically a doomscrolling machine. 
              We&apos;ve all been there—you hop on for &quot;five minutes&quot; and suddenly it&apos;s 2 AM, your thumb is sore, 
              and you feel like you&apos;ve wasted half your life. 
            </p>

            <p>
              We try to set screentime limits on our phones, but let&apos;s be honest—we just hit &quot;Ignore for today&quot; 
              every single time. I do it too! And those 3rd party app blockers? They&apos;re either too annoying or they just 
              flat-out block everything, making you want to delete them immediately. There was no middle ground... so I built one.
            </p>

            <div className="p-6 bg-oasis-glow/5 border border-oasis-glow/20 rounded-2xl space-y-4">
              <h3 className="font-dm-serif text-xl text-oasis-glow flex items-center gap-2">
                <Shield size={20} /> The &quot;No Excuses&quot; Limit
              </h3>
              <p className="text-base italic">
                Oasis doesn&apos;t just ask you to stop. When you hit your daily limit, the app gently but firmly 
                locks you out for 30 minutes. It&apos;s a forced breather—a chance to look up, stretch, and 
                actually exist in the real world before you jump back in.
              </p>
            </div>

            <p>
              For your peace of mind: <strong>everything you write is End-to-End Encrypted.</strong> No one can read 
              your messages. Not the government, not hackers, and definitely not me. I built Oasis on the 
              <strong> Signal Protocol</strong> (the same stuff WhatsApp uses), so your texts are stored as 
              unreadable keys in the database. Your digital footprint stays under your own feet.
            </p>

            <p>
              You might notice something missing: <strong>there are no &quot;Likes&quot; or &quot;Comments&quot; buttons.</strong> 
              I removed them on purpose. We spend way too much energy worrying about metrics and social anxiety. 
              They might come back in the future, but it&apos;ll be in a way that doesn&apos;t make your brain 
              chase dopamine hits. Sorry if it feels a bit &quot;quiet&quot; compared to the trending apps—Oasis 
              isn&apos;t for the hype, it&apos;s for people who genuinely care about their privacy and 
              sanity.
            </p>

            <p className="p-4 bg-oasis-sand/5 border-l-2 border-oasis-sand/30 italic">
              Oh, and a quick heads up: <strong>Ads might be introduced in the Free tier at some point.</strong> 
              C&apos;mon guys, I put a lot of my own time and soul into building this, and let&apos;s face it—maintaining 
              apps isn&apos;t exactly cheap! I need a bit of revenue to keep the lights on and the servers humming. 
              But don&apos;t worry, I&apos;ll make sure they aren&apos;t the annoying, privacy-invading kind.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-12 pt-8 border-t border-oasis-sage/10">
              <div className="flex-1 space-y-3">
                <h4 className="font-dm-serif text-oasis-sand flex items-center gap-2">
                  <AlertTriangle size={18} className="text-yellow-500/70" /> Heads up on Calls
                </h4>
                <p className="text-sm text-oasis-mist/60">
                  Voice and Video calls are still in active development. They might be a bit buggy for now, 
                  but I&apos;m working on it!
                </p>
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="font-dm-serif text-oasis-sand flex items-center gap-2">
                  <MessageCircle size={18} className="text-oasis-glow/70" /> Speak your mind
                </h4>
                <p className="text-sm text-oasis-mist/60">
                  The app isn&apos;t perfect, and I&apos;d love your feedback or feature suggestions. 
                  I&apos;ll try my best to build the ones you want.
                </p>
              </div>
            </div>

            <p className="pt-8 font-cormorant text-2xl italic text-oasis-sand text-right">
              Use it. Don&apos;t use it.<br />
              <span className="text-oasis-glow">It&apos;s up to you.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-oasis-glow/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-oasis-sand/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}
