'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container-max section-padding">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 text-sm font-medium mb-8 hover:shadow-md transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Available for new projects
            <div className="ml-2 text-green-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-900 leading-tight mb-8">
            I build efficient{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              scalable solutions
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-600 leading-relaxed mb-12 max-w-2xl">
            Dedicated Programmer with hands-on experience in PHP, C#, JavaScript, and Microsoft Power Platform, building automation and user-centric applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#work" className="btn-primary">
              View My Work
            </Link>
            <Link href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </Link>
            <Link 
              href="/Cata-an_Carl_Navid_Resume.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-700 bg-primary-100 border border-primary-200 rounded-lg hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </Link>
          </div>

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
    </section>
  );
} 