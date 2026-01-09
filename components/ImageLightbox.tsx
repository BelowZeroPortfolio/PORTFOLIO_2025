'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiX, HiZoomIn } from 'react-icons/hi';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageLightbox({ src, alt, width = 600, height = 400, className = '' }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Clickable Image with Zoom Icon */}
      <div 
        className={`relative cursor-zoom-in group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={width}
          height={height}
          className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
        />
        {/* Zoom overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <HiZoomIn className="w-6 h-6 text-primary-700" />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fadeIn" />
          
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <HiX className="w-8 h-8 text-white" />
          </button>

          {/* Image container */}
          <div 
            className="relative z-10 max-w-[90vw] max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={src} 
              alt={alt} 
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              priority
            />
            {/* Caption */}
            <p className="text-center text-white/70 text-sm mt-4">{alt}</p>
          </div>

          {/* Click anywhere to close hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            Click anywhere or press ESC to close
          </p>
        </div>
      )}
    </>
  );
}
