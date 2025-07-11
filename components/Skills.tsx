import React from 'react';
import Image from 'next/image';
import { 
  SiPhp, 
  SiSharp, 
  SiJavascript, 
  SiMysql, 
  SiHtml5,
  SiDotnet
} from 'react-icons/si';
import { HiLightBulb } from 'react-icons/hi';

const skills = [
  {
    name: "PHP & Web Development",
    icon: <SiPhp className="w-6 h-6 md:w-8 md:h-8 text-[#777BB4]" />
  },
  {
    name: "C# & ASP.NET Framework",
    icon: <Image src="/c%23.png" alt="C#" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    name: "JavaScript & Frontend",
    icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8 text-[#F7DF1E]" />
  },
  {
    name: "MySQL & Database Design",
    icon: <SiMysql className="w-6 h-6 md:w-8 md:h-8 text-[#4479A1]" />
  },
  {
    name: "Power Apps",
    icon: <Image src="/power-apps.png" alt="Power Apps" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    name: "Power Pages",
    icon: <Image src="/power-pages.png" alt="Power Pages" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    name: "Power Automate",
    icon: <Image src="/power-automate.png" alt="Power Automate" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
  },
  {
    name: "HTML/CSS & Tailwind",
    icon: <SiHtml5 className="w-6 h-6 md:w-8 md:h-8 text-[#E34F26]" />
  },
  {
    name: "Problem Solving & Debugging",
    icon: <HiLightBulb className="w-6 h-6 md:w-8 md:h-8 text-[#4F46E5]" />
  }
];

export default function Skills() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Core Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies 
            that I use to build efficient, scalable solutions.
          </p>
        </div>

        {/* Skills Marquee */}
        <div className="relative">
          {/* First marquee row */}
          <div className="flex animate-marquee space-x-4 md:space-x-6 mb-6 md:mb-8">
            {[...skills, ...skills].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex-shrink-0 group">
                <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[240px] md:min-w-[280px]">
                  <div className="flex items-center">
                    <div className="mr-3 md:mr-4 p-2 md:p-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-primary-800 font-semibold text-sm md:text-lg block truncate">
                        {skill.name}
                      </span>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-primary-600 text-xs md:text-sm">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second marquee row (reverse direction) */}
          <div className="flex animate-marquee-reverse space-x-4 md:space-x-6">
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => {
              const isMicrosoftTech = skill.name.includes('Power Apps') || skill.name.includes('Power Pages') || skill.name.includes('Power Automate');
              return (
                <div key={`reverse-${skill.name}-${index}`} className="flex-shrink-0 group">
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[240px] md:min-w-[280px]">
                    <div className="flex items-center">
                      <div className="mr-3 md:mr-4 p-2 md:p-3 bg-white rounded-lg md:rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                        {skill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-primary-800 font-semibold text-sm md:text-lg block truncate">
                          {skill.name}
                        </span>
                        <div className="flex items-center mt-1">
                          <div className={`w-2 h-2 ${isMicrosoftTech ? 'bg-orange-500' : 'bg-blue-500'} rounded-full mr-2 animate-pulse`}></div>
                          <span className="text-primary-600 text-xs md:text-sm">
                            {isMicrosoftTech ? 'Learning' : 'Expert'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient Overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-primary-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-primary-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-primary-200 rounded-full shadow-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-primary-700 font-medium text-sm md:text-base">
              9+ Technologies Mastered • Always Learning More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 