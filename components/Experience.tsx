'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { GiTrophy, GiDiploma } from 'react-icons/gi';
import { FaRocket, FaFlag, FaStar } from 'react-icons/fa';

// Parallax scroll animation hook - fades in on scroll down, stays visible, fades out on scroll up
function useParallaxReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      // Element is in viewport
      const inViewport = elementTop < windowHeight * (1 - threshold) && elementBottom > 0;

      if (inViewport && scrollingDown) {
        setIsVisible(true);
        setHasBeenVisible(true);
      } else if (!inViewport && !scrollingDown && elementTop > windowHeight * 0.5) {
        // Only fade out when scrolling up and element is above viewport
        setIsVisible(false);
      } else if (hasBeenVisible && inViewport) {
        // Keep visible if we've seen it and it's still in viewport
        setIsVisible(true);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, hasBeenVisible]);

  return { ref, isVisible };
}

// Animated wrapper component with parallax effect
const ScrollReveal = ({ 
  children, 
  delay = 0,
  direction = 'up'
}: { 
  children: React.ReactNode; 
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) => {
  const { ref, isVisible } = useParallaxReveal();
  
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return 'translateX(-50px)';
        case 'right': return 'translateX(50px)';
        default: return 'translateY(40px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const journeySteps = [
  {
    year: "Now",
    title: "Web Developer",
    company: "Lexite PH",
    location: "Philippines",
    period: "Nov 2025 - Current",
    description: "Building AI & IoT-integrated solutions. Pest Detection App with YOLOv8, QR Attendance System with Laravel.",
    icon: <FaRocket className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500",
    highlights: ["PHP & Laravel", "YOLOv8 AI", "IoT", "Real-time Dashboard"],
    isCurrent: true,
  },
  {
    year: "2025",
    title: "Business Systems Developer",
    company: "NinjaTribe Axilara",
    location: "Philippines", 
    period: "Jul 2025 - Dec 2025",
    description: "AL programming in Business Central. Automated workflows reducing manual work by 50%.",
    icon: <HiBriefcase className="w-5 h-5" />,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500",
    highlights: ["AL Programming", "Business Central", "Power Automate"],
    isCurrent: false,
  },
  {
    year: "2025",
    title: "Programmer of the Year",
    company: "Bago City College",
    location: "Bago City",
    period: "2025",
    description: "Recognized for exceptional coding skills and technical excellence.",
    icon: <GiTrophy className="w-5 h-5" />,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500",
    highlights: ["Technical Excellence", "Innovation", "Leadership"],
    isAward: true,
    isCurrent: false,
  },
  {
    year: "2024",
    title: "SDTP Training (OJT)",
    company: "NOLITC",
    location: "Philippines",
    period: "2024 - 2025",
    description: "6-month competency-based software development training. Built ticket support system reducing response time by 40%.",
    icon: <HiAcademicCap className="w-5 h-5" />,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500",
    highlights: ["Power Platform", "Practical Projects"],
    isCurrent: false,
  },
  {
    year: "2021",
    title: "BSIS Journey Begins",
    company: "Bago City College",
    location: "Bago City",
    period: "2021 - 2025",
    description: "Bachelor of Science in Information Systems. Led hackathon team to 2nd place as Lead Developer.",
    icon: <FaFlag className="w-5 h-5" />,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500",
    highlights: ["Systems Analysis", "Database Management", "2nd Place Hackathon"],
    isCurrent: false,
  },
];

const certifications = [
  { 
    name: "SDTP Graduate", 
    fullName: "Software Development Training Program",
    issuer: "NOLITC / Microsoft",
    year: "2025",
    icon: <GiDiploma className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500"
  },
  { 
    name: "CSE Professional", 
    fullName: "Civil Service Examination Passer",
    issuer: "Civil Service Commission",
    year: "2025",
    icon: <FaStar className="w-8 h-8" />,
    color: "from-amber-400 to-orange-500"
  }
];

export default function Experience() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/30 to-white overflow-hidden">
      <div className="container-max section-padding">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 text-primary-600 text-sm font-medium mb-4">
              <FaRocket className="w-4 h-4" />
              My Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4">
              The Adventure So Far
            </h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Every milestone tells a story of growth, learning, and building cool stuff
            </p>
          </div>
        </ScrollReveal>

        {/* Adventure Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Squiggly Path - Desktop */}
          <svg 
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full max-w-lg hidden md:block pointer-events-none" 
            viewBox="0 0 300 1000" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M150 0
                 C150 20 220 40 230 80
                 C240 120 180 140 150 160
                 C100 190 60 200 70 250
                 C80 300 140 320 150 360
                 C160 400 240 420 230 480
                 C220 540 100 560 80 620
                 C60 680 120 720 150 760
                 C180 800 250 840 230 900
                 C210 960 150 980 150 1000"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Squiggly Path - Mobile */}
          <svg 
            className="absolute left-0 top-0 h-full w-32 md:hidden pointer-events-none" 
            viewBox="0 0 100 1000" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M32 0
                 C32 30 45 60 50 100
                 C55 140 40 180 32 220
                 C20 270 15 320 25 370
                 C35 420 45 470 32 520
                 C20 570 15 620 25 670
                 C35 720 45 770 32 820
                 C20 870 25 920 32 1000"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {journeySteps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 100}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div 
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot connector - Mobile */}
                  <div 
                    className="absolute md:hidden top-6"
                    style={{
                      left: index === 0 ? '32px' : 
                            index === 1 ? '50px' : 
                            index === 2 ? '32px' : 
                            index === 3 ? '25px' : '32px',
                      transform: 'translate(-50%, 0)'
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${step.isCurrent ? 'bg-primary-900' : 'bg-white'} border-2 ${step.isCurrent ? 'border-primary-900' : 'border-primary-400'} shadow-md`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`group relative bg-white rounded-xl border ${
                      step.isCurrent 
                        ? 'border-primary-900 shadow-lg' 
                        : 'border-primary-200'
                    } hover:shadow-xl hover:border-primary-300 transition-all duration-300 overflow-hidden`}>
                      
                      {/* Current indicator */}
                      {step.isCurrent && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary-900"></div>
                      )}
                      
                      {/* Award indicator */}
                      {step.isAward && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
                      )}

                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-2.5 rounded-lg ${step.isCurrent ? 'bg-primary-900' : 'bg-primary-100'} ${step.isCurrent ? 'text-white' : 'text-primary-700'}`}>
                            {step.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-primary-900">{step.title}</h3>
                              {step.isCurrent && (
                                <span className="px-2 py-0.5 bg-primary-900 text-white text-xs font-medium rounded">Now</span>
                              )}
                              {step.isAward && (
                                <span className="text-lg">🏆</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-primary-600">
                              <span>{step.company}</span>
                              <span>•</span>
                              <span>{step.year}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-primary-600 leading-relaxed mb-4">{step.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((h, i) => (
                            <span key={i} className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot connector - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6">
                    <div className={`w-3 h-3 rounded-full ${step.isCurrent ? 'bg-primary-900' : 'bg-white'} border-2 ${step.isCurrent ? 'border-primary-900' : 'border-primary-400'} shadow-md`}></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Grand Certifications */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-2">
                🎖️ Certifications & Credentials
              </h3>
              <p className="text-primary-500">Proof that I actually know what I&apos;m doing</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 150} direction={index === 0 ? 'left' : 'right'}>
                <div className="group relative bg-white rounded-xl p-6 border border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-100 text-primary-700 group-hover:bg-primary-900 group-hover:text-white transition-colors">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">{cert.name}</h4>
                        <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-primary-600 mb-1">{cert.fullName}</p>
                      <p className="text-xs text-primary-500">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-xl border border-primary-200 shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">{journeySteps.length}</div>
                <div className="text-xs text-primary-500">Milestones</div>
              </div>
              <div className="w-px h-8 bg-primary-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">{certifications.length}</div>
                <div className="text-xs text-primary-500">Certifications</div>
              </div>
              <div className="w-px h-8 bg-primary-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">∞</div>
                <div className="text-xs text-primary-500">Learning</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
