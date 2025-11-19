'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="relative min-h-screen bg-[#f8f6f1] flex items-center justify-center px-4">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #a10012 0%, #faaf01 50%, #de5900 100%)',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #f7e5c8 0%, #ffb700 100%)',
          }}
        ></div>
      </div>

      {/* Success Card */}
      <div className="relative max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl border border-black/10 p-12 shadow-2xl text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6207]/20">
            <svg className="h-10 w-10 text-[#ff6207]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-5xl md:text-6xl font-bold font-[var(--font-jakarta)] mb-4">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#ff6207] via-[#e26b08] to-[#a10012] bg-clip-text text-transparent">
            Horizon
          </span>
        </h1>

        <p className="text-xl font-[var(--font-inter)] text-black/70 mb-8 leading-relaxed">
          Thank you for securing your early access! We're thrilled to have you on board.
        </p>

        <div className="bg-[#f8f6f1] rounded-2xl p-6 mb-8">
          <p className="text-base font-[var(--font-inter)] text-black/70 mb-2">
            Check your email for next steps and exclusive early access details.
          </p>
          {sessionId && (
            <p className="text-sm font-[var(--font-inter)] text-black/50 font-mono">
              Session ID: {sessionId.substring(0, 30)}...
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="h-14 px-8 bg-[#ff6207] text-white text-lg font-semibold font-[var(--font-jakarta)] rounded-xl hover:bg-[#e26b08] transition-all shadow-lg shadow-[#ff6207]/20 hover:shadow-xl hover:scale-105 flex items-center justify-center"
          >
            Return Home
          </Link>
          <a
            href="mailto:support@yourdomain.com"
            className="h-14 px-8 bg-white/60 backdrop-blur-sm text-black text-lg font-semibold font-[var(--font-jakarta)] rounded-xl hover:bg-white/80 transition-all border border-black/10 flex items-center justify-center"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
