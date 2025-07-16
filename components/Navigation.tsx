'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl lg:text-2xl font-display font-bold text-primary-900 hover:text-primary-700 transition-colors"
          >
            Carl Navid Cata-an
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#work" 
              className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/Cata-an_Carl_Navid_Resume.pdf" 
              target="_blank"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-primary-600 hover:text-primary-900 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
            <div className="py-4 space-y-2">
              <Link 
                href="#work" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                Work
              </Link>
              <Link 
                href="#about" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                About
              </Link>
              <Link 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/Cata-an_Carl_Navid_Resume.pdf" 
                target="_blank"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 