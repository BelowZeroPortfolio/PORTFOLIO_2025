'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from 'framer-motion';

interface EnhancedCursorProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  scaleOnHover?: number;
  hideOnMobile?: boolean;
  trailLength?: number;
  enableTrail?: boolean;
  enableGlow?: boolean;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion';
  springConfig?: {
    damping: number;
    stiffness: number;
  };
}

/**
 * EnhancedCursor - An advanced cursor component with bonus features
 * Additional Features:
 * - Trailing effect with customizable length
 * - Multiple blend modes
 * - Enhanced accessibility support
 * - Advanced spring configuration
 * - Performance monitoring
 */
export default function EnhancedCursor({
  size = 24,
  color = '#f97316',
  hoverColor = '#fb923c',
  scaleOnHover = 1.5,
  hideOnMobile = true,
  trailLength = 3,
  enableTrail = true,
  enableGlow = true,
  blendMode = 'difference',
  springConfig = { damping: 25, stiffness: 700 },
}: EnhancedCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Performance monitoring
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for natural movement
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail positions for multiple cursor dots
  const trailPositions = useRef<Array<{ x: number; y: number }>>([]);



  /**
   * Check for accessibility preferences
   */
  const checkAccessibilityPreferences = useCallback(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  /**
   * Check if device is mobile/tablet based on screen width and user agent
   */
  const checkMobile = useCallback(() => {
    const isMobileDevice = 
      window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
    return isMobileDevice;
  }, []);

  /**
   * Update trail positions for trailing effect
   */
  const updateTrail = useCallback((x: number, y: number) => {
    if (!enableTrail) return;

    trailPositions.current = [
      { x, y },
      ...trailPositions.current.slice(0, trailLength - 1)
    ];
  }, [enableTrail, trailLength]);

  /**
   * Handle mouse movement with performance monitoring
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Performance monitoring
    const now = performance.now();
    frameCount.current++;
    
    if (now - lastTime.current > 1000) {
      const fps = frameCount.current;
      frameCount.current = 0;
      lastTime.current = now;
      
      // Log performance warnings if FPS is too low
      if (fps < 30) {
        console.warn('CustomCursor: Low FPS detected:', fps);
      }
    }

    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;
      
      cursorX.set(x);
      cursorY.set(y);
      updateTrail(x, y);
    });
  }, [cursorX, cursorY, size, updateTrail]);

  /**
   * Enhanced interactive element detection
   */
  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    
    // Enhanced detection including computed styles
    const computedStyle = window.getComputedStyle(target);
    const isInteractive = 
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'SELECT' ||
      target.tagName === 'TEXTAREA' ||
      target.getAttribute('role') === 'button' ||
      target.getAttribute('role') === 'link' ||
      target.classList.contains('cursor-pointer') ||
      computedStyle.cursor === 'pointer' ||
      target.hasAttribute('onclick') ||
      target.hasAttribute('href') ||
      target.hasAttribute('tabindex') ||
      target.contentEditable === 'true';

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
   * Setup event listeners with enhanced functionality
   */
  useEffect(() => {
    // Check accessibility preferences
    const cleanupAccessibility = checkAccessibilityPreferences();
    
    // Initial mobile check
    const isMobileDevice = checkMobile();
    
    // Don't setup cursor on mobile if hideOnMobile is true
    if (hideOnMobile && isMobileDevice) {
      return cleanupAccessibility;
    }

    // Don't setup animations if user prefers reduced motion
    if (reducedMotion) {
      return cleanupAccessibility;
    }

    // Mouse movement tracking
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterViewport);
    document.addEventListener('mouseleave', handleMouseLeaveViewport);

    // Enhanced hover detection with delegation for better performance
    const handleDelegatedEvent = (e: Event) => {
      if (e.type === 'mouseover') {
        handleMouseEnter(e);
      } else if (e.type === 'mouseout') {
        handleMouseLeave();
      }
    };

    document.addEventListener('mouseover', handleDelegatedEvent, true);
    document.addEventListener('mouseout', handleDelegatedEvent, true);

    // Window resize handler for mobile detection
    const handleResize = () => {
      checkMobile();
    };
    window.addEventListener('resize', handleResize);

    // Focus/blur handlers for accessibility
    const handleFocus = () => setIsVisible(true);
    const handleBlur = () => setIsVisible(false);
    
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnterViewport);
      document.removeEventListener('mouseleave', handleMouseLeaveViewport);
      document.removeEventListener('mouseover', handleDelegatedEvent, true);
      document.removeEventListener('mouseout', handleDelegatedEvent, true);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      cleanupAccessibility?.();
    };
  }, [
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterViewport,
    handleMouseLeaveViewport,
    checkMobile,
    checkAccessibilityPreferences,
    hideOnMobile,
    reducedMotion,
  ]);

  // Don't render on mobile if hideOnMobile is enabled
  if (hideOnMobile && isMobile) {
    return null;
  }

  // Don't render if user prefers reduced motion
  if (reducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className={`fixed top-0 left-0 pointer-events-none z-50`}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              mixBlendMode: blendMode,
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
                damping: springConfig.damping,
                stiffness: springConfig.stiffness,
              },
              opacity: {
                duration: 0.2,
              }
            }}
          >
            <div
              className={`rounded-full shadow-lg ${enableGlow ? 'animate-cursor-glow' : ''}`}
              style={{
                width: size,
                height: size,
                backgroundColor: isHovering ? hoverColor : color,
                opacity: 0.8,
                filter: enableGlow ? 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))' : 'none',
              }}
            />
          </motion.div>

          {/* Trail effect */}
          {enableTrail && trailPositions.current.map((position, index) => (
            <motion.div
              key={index}
              className="fixed top-0 left-0 pointer-events-none z-40"
              style={{
                x: position.x,
                y: position.y,
                mixBlendMode: blendMode,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: (1 - (index * 0.2)) * (isHovering ? scaleOnHover * 0.8 : 0.8),
                opacity: 0.6 - (index * 0.15),
              }}
              transition={{
                duration: 0.3 + (index * 0.1),
                ease: "easeOut",
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: size * 0.7,
                  height: size * 0.7,
                  backgroundColor: isHovering ? hoverColor : color,
                  opacity: 0.4,
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
} 