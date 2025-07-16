'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Animated Headline */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-900 leading-tight mb-8 animate-fade-in-up text-center">
            I build efficient{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              scalable solutions
            </span>
          </h1>

          {/* Animated Subheadline */}
          <p className="text-xl lg:text-2xl text-primary-600 leading-relaxed mb-12 max-w-2xl animate-fade-in text-center">
            Dedicated Programmer with hands-on experience in PHP, C#, JavaScript, and Microsoft Power Platform, building automation and user-centric applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#work" className="btn-primary flex items-center gap-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              View My Work
            </Link>
            <Link href="#contact" className="btn-secondary flex items-center gap-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15l-5-5-5 5" /></svg>
              Let's Talk
            </Link>
            <Link 
              href="/Cata-an_Carl_Navid_Resume.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-700 bg-primary-100 border border-primary-200 rounded-lg hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </Link>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-primary-200">
            <div className="group text-center p-4 rounded-xl hover:bg-primary-50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                🎓
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-900 mb-1">2025</div>
              <div className="text-sm text-primary-600 font-medium">Fresh Graduate</div>
            </div>
            <div className="group text-center p-4 rounded-xl hover:bg-primary-50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                🏆
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-900 mb-1">2nd</div>
              <div className="text-sm text-primary-600 font-medium">Place Hackathon</div>
            </div>
            <div className="group text-center p-4 rounded-xl hover:bg-primary-50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                🥇
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-900 mb-1">2025</div>
              <div className="text-sm text-primary-600 font-medium">Programmer Award</div>
            </div>
            <div className="group text-center p-4 rounded-xl hover:bg-primary-50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                ✅
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-900 mb-1">SDTP</div>
              <div className="text-sm text-primary-600 font-medium">Certified</div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center animate-bounce">
        <span className="text-primary-400 text-xs mb-1">Scroll Down</span>
        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
} 