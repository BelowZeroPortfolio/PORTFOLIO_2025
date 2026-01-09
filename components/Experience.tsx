'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HiAcademicCap, HiBriefcase, HiLocationMarker } from 'react-icons/hi';
import { GiTrophy, GiDiploma } from 'react-icons/gi';
import { FaRocket, FaFlag, FaStar } from 'react-icons/fa';

// Scroll animation hook
function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Animated wrapper component
const ScrollReveal = ({ 
  children, 
  delay = 0,
  direction = 'up'
}: { 
  children: React.ReactNode; 
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) => {
  const { ref, isVisible } = useScrollReveal();
  
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
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
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
    description: "4-month competency-based software development training. Built ticket support system reducing response time by 40%.",
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
          {/* Adventure Path - Natural winding road */}
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
              stroke="url(#adventureGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.6"
            />
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
              stroke="url(#adventureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20 10"
              className="animate-dash"
              fill="none"
            />
            <defs>
              <linearGradient id="adventureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="20%" stopColor="#8B5CF6" />
                <stop offset="40%" stopColor="#F59E0B" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="80%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-amber-500 via-emerald-500 to-rose-500 md:hidden"></div>

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
                  {/* Year Badge - Mobile */}
                  <div className={`absolute -left-1 md:hidden w-[72px] h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                    {step.year}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`group relative bg-white p-6 rounded-2xl border-2 ${step.isCurrent ? 'border-blue-300 shadow-lg shadow-blue-100' : 'border-primary-100'} hover:shadow-xl hover:border-primary-300 transition-all duration-300`}>
                      {/* Current Badge */}
                      {step.isCurrent && (
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          Currently Here
                        </div>
                      )}

                      {/* Award Badge */}
                      {step.isAward && (
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-full">
                          🏆 Achievement Unlocked!
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-1">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-primary-500 mb-3">
                            <span className="font-medium">{step.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <HiLocationMarker className="w-3 h-3" />
                              {step.location}
                            </span>
                          </div>
                          <p className="text-primary-600 text-sm mb-4">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.highlights.map((h, i) => (
                              <span key={i} className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg border-4 border-white`}>
                      {step.icon}
                    </div>
                    <div className={`mt-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-md`}>
                      {step.year}
                    </div>
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

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 150} direction={index === 0 ? 'left' : 'right'}>
                <div 
                  className="group relative bg-white rounded-3xl p-8 border-2 border-primary-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-[22px] -z-5"></div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {cert.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-bold text-primary-900">{cert.name}</h4>
                        <span className="px-2 py-0.5 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium">{cert.fullName}</p>
                      <p className="text-sm text-primary-400">Issued by {cert.issuer}</p>
                    </div>

                    {/* Verified Badge */}
                    <div className="mt-6 flex items-center gap-2 text-emerald-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">Verified Credential</span>
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
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-full border border-primary-200 shadow-lg">
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
