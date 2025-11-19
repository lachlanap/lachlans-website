'use client';

import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#f8f6f1]">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
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

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        ></div>

        {/* Subtle dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Additional gradient accent - top right */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ff6207 0%, transparent 70%)',
          }}
        ></div>

        {/* Additional gradient accent - bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #faaf01 0%, transparent 70%)',
          }}
        ></div>
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-[var(--font-jakarta)] tracking-tight text-white">
              Horizon
            </div>

            <div className="hidden md:flex items-center gap-12">
              <a href="#features" className="text-base font-semibold font-[var(--font-jakarta)] text-white hover:text-[#ff6207] transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-base font-semibold font-[var(--font-jakarta)] text-white hover:text-[#ff6207] transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-base font-semibold font-[var(--font-jakarta)] text-white hover:text-[#ff6207] transition-colors">
                About
              </a>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="h-12 px-5 bg-[#ff6207] text-white font-medium font-[var(--font-jakarta)] rounded-lg hover:bg-[#e26b08] transition-all"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-black/10">
            <span className="w-2 h-2 bg-[#ff6207] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold font-[var(--font-jakarta)] text-black">
              Now in Beta
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold font-[var(--font-jakarta)] leading-[0.95] tracking-tight mb-8">
            Build better marketing
            <br />
            <span className="bg-gradient-to-r from-[#ff6207] via-[#e26b08] to-[#a10012] bg-clip-text text-transparent">
              with Horizon
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-[var(--font-inter)] text-black/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            An end-to-end platform that turns your docs into on-brand collateral, keeps everything updated, and frees your team to focus on growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => setShowModal(true)}
              className="h-14 px-8 bg-[#ff6207] text-white text-lg font-semibold font-[var(--font-jakarta)] rounded-xl hover:bg-[#e26b08] transition-all shadow-lg shadow-[#ff6207]/20 hover:shadow-xl hover:shadow-[#ff6207]/30 hover:scale-105"
            >
              Get Early Access
            </button>
            <button className="h-14 px-8 bg-white/60 backdrop-blur-sm text-black text-lg font-semibold font-[var(--font-jakarta)] rounded-xl hover:bg-white/80 transition-all border border-black/10">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-black/10">
            <div>
              <div className="text-4xl font-bold font-[var(--font-jakarta)] text-[#ff6207] mb-2">
                10k+
              </div>
              <div className="text-sm font-medium font-[var(--font-inter)] text-black/60">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-[var(--font-jakarta)] text-[#ff6207] mb-2">
                99.9%
              </div>
              <div className="text-sm font-medium font-[var(--font-inter)] text-black/60">
                Uptime
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-[var(--font-jakarta)] text-[#ff6207] mb-2">
                24/7
              </div>
              <div className="text-sm font-medium font-[var(--font-inter)] text-black/60">
                Support
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[var(--font-jakarta)] text-center mb-16">
            Why choose{' '}
            <span className="bg-gradient-to-r from-[#ff6207] to-[#a10012] bg-clip-text text-transparent">
              Horizon
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'Experience unparalleled speed with our optimized infrastructure.',
                icon: '⚡',
              },
              {
                title: 'Secure by Default',
                description: 'Enterprise-grade security built into every layer of our platform.',
                icon: '🔒',
              },
              {
                title: 'Scale Effortlessly',
                description: 'Grow from startup to enterprise without changing tools.',
                icon: '📈',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-black/10 hover:border-[#ff6207]/30 transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold font-[var(--font-jakarta)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-base font-[var(--font-inter)] text-black/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-black/10 py-12 text-center">
        <p className="text-sm font-[var(--font-inter)] text-black/60">
          &copy; {new Date().getFullYear()} Horizon. All rights reserved.
        </p>
      </footer>

      {/* Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-6 top-6 text-black/40 hover:text-black transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h2 className="mb-2 text-3xl font-bold font-[var(--font-jakarta)]">Join the Waitlist</h2>
                <p className="mb-8 text-black/60 font-[var(--font-inter)]">
                  Be among the first to experience Horizon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold font-[var(--font-jakarta)]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-black/20 bg-[#f8f6f1] px-4 py-3 font-[var(--font-inter)] focus:border-[#ff6207] focus:outline-none focus:ring-2 focus:ring-[#ff6207]/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold font-[var(--font-jakarta)]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-black/20 bg-[#f8f6f1] px-4 py-3 font-[var(--font-inter)] focus:border-[#ff6207] focus:outline-none focus:ring-2 focus:ring-[#ff6207]/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold font-[var(--font-jakarta)]">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-black/20 bg-[#f8f6f1] px-4 py-3 font-[var(--font-inter)] focus:border-[#ff6207] focus:outline-none focus:ring-2 focus:ring-[#ff6207]/20"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 bg-[#ff6207] text-white text-base font-semibold font-[var(--font-jakarta)] rounded-xl hover:bg-[#e26b08] transition-all shadow-lg shadow-[#ff6207]/20 hover:shadow-xl hover:scale-105"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6207]/20">
                    <svg className="h-8 w-8 text-[#ff6207]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold font-[var(--font-jakarta)]">You're on the list!</h3>
                <p className="text-black/60 font-[var(--font-inter)]">We'll be in touch soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
