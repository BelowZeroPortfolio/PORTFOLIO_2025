'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CustomCursorProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  scaleOnHover?: number;
  hideOnMobile?: boolean;
}

/**
 * CustomCursor - A fully animated cursor component using Framer Motion
 * Features:
 * - Smooth mouse tracking with spring physics
 * - Interactive scaling on hover over clickable elements
 * - Mobile detection and hiding
 * - Customizable colors and sizes
 * - Performance optimized with useMotionValue
 */
export default function CustomCursor({
  size = 24,
  color = '#f97316',
  hoverColor = '#fb923c',
  scaleOnHover = 1.5,
  hideOnMobile = true,
}: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for natural movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  /**
   * Check if device is mobile/tablet based on screen width
   */
  const checkMobile = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);
    return isMobileDevice;
  }, []);

  /**
   * Handle mouse movement with requestAnimationFrame for performance
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    });
  }, [cursorX, cursorY, size]);

  /**
   * Handle mouse enter for hover effects
   */
  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    
    // Check if element is interactive
    const isInteractive = 
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('cursor-pointer') ||
      target.style.cursor === 'pointer' ||
      target.hasAttribute('onclick') ||
      target.hasAttribute('href');

    if (isInteractive) {
      setIsHovering(true);
    }
  }, []);

  /**
   * Handle mouse leave for hover effects
   */
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  /**
   * Handle cursor entering/leaving viewport
   */
  const handleMouseEnterViewport = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeaveViewport = useCallback(() => {
    setIsVisible(false);
  }, []);

  /**
   * Setup event listeners and mobile detection
   */
  useEffect(() => {
    // Guard against SSR - only run on client
    if (typeof window === 'undefined') return;
    
    // Initial mobile check
    const isMobileDevice = checkMobile();
    
    // Don't setup cursor on mobile if hideOnMobile is true
    if (hideOnMobile && isMobileDevice) {
      return;
    }

    // Mouse movement tracking
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnterViewport);
    document.addEventListener('mouseleave', handleMouseLeaveViewport);

    // Hover detection for interactive elements
    const interactiveSelectors = 'a, button, [role="button"], .cursor-pointer, [onclick], [href]';
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Window resize handler for mobile detection
    const handleResize = () => {
      checkMobile();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnterViewport);
      document.removeEventListener('mouseleave', handleMouseLeaveViewport);
      window.removeEventListener('resize', handleResize);

      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterViewport,
    handleMouseLeaveViewport,
    checkMobile,
    hideOnMobile,
  ]);

  /**
   * Dynamic event listener setup for newly added interactive elements
   * This ensures the cursor works with dynamically added content
   */
  useEffect(() => {
    // Guard against SSR - only run on client
    if (typeof window === 'undefined') return;
    if (hideOnMobile && isMobile) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Check if the added element itself is interactive
            const isInteractive = 
              element.tagName === 'A' ||
              element.tagName === 'BUTTON' ||
              element.getAttribute('role') === 'button' ||
              element.classList.contains('cursor-pointer');

            if (isInteractive) {
              element.addEventListener('mouseenter', handleMouseEnter);
              element.addEventListener('mouseleave', handleMouseLeave);
            }

            // Check for interactive children
            const interactiveChildren = element.querySelectorAll(
              'a, button, [role="button"], .cursor-pointer, [onclick], [href]'
            );
            
            interactiveChildren.forEach(child => {
              child.addEventListener('mouseenter', handleMouseEnter);
              child.addEventListener('mouseleave', handleMouseLeave);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [handleMouseEnter, handleMouseLeave, hideOnMobile, isMobile]);

  // Don't render on mobile if hideOnMobile is enabled
  if (hideOnMobile && isMobile) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovering ? scaleOnHover : 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: {
              type: "spring",
              damping: 25,
              stiffness: 500,
            },
            opacity: {
              duration: 0.2,
            }
          }}
        >
          <div
            className="rounded-full shadow-lg animate-cursor-glow"
            style={{
              width: size,
              height: size,
              backgroundColor: isHovering ? hoverColor : color,
              opacity: 0.8,
              filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))',
            }}
          />
          
          {/* Optional trailing effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: isHovering ? hoverColor : color,
              opacity: 0.3,
            }}
            animate={{
              scale: isHovering ? scaleOnHover * 1.2 : 1.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 