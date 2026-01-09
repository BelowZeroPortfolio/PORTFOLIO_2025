'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Component wrapper for scroll animations
export function useStaggeredAnimation<T extends HTMLElement>(
  index: number,
  baseDelay: number = 100
) {
  const { ref, isVisible } = useScrollAnimation<T>({ threshold: 0.2 });
  
  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity 0.6s ease-out ${index * baseDelay}ms, transform 0.6s ease-out ${index * baseDelay}ms`,
    },
  };
}
