import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-50 border-t border-primary-200">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Logo and Copyright */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link href="/" className="text-xl font-display font-bold text-primary-900">
              Carl Navid Cata-an
            </Link>
            <div className="text-primary-600 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="mailto:cataancarlnavid@gmail.com" 
              className="text-sm text-primary-600 hover:text-primary-900 transition-colors"
            >
              Email
            </Link>
            <Link 
              href="https://github.com/BelowZeroPortfolio" 
              target="_blank"
              className="text-sm text-primary-600 hover:text-primary-900 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/carl-navid-cata-an-92b89836b/" 
              target="_blank"
              className="text-sm text-primary-600 hover:text-primary-900 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center pt-8 border-t border-primary-200 mt-8">
          <p className="text-sm text-primary-500">
            Designed and built with care using Next.js, Tailwind CSS, and a lot of ☕
          </p>
        </div>
      </div>
    </footer>
  );
} 