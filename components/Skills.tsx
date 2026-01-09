import React from 'react';
import Image from 'next/image';
import {
  SiPhp,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiGithub,
  SiVuedotjs,
  SiDocker,
  SiLaravel,
  SiHtml5,
} from 'react-icons/si';
import { HiCode } from 'react-icons/hi';

// Custom AL Icon
const ALIcon = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5DE6C4] to-[#3DBEA0]">
    <span className="text-[#0D6B58] font-bold text-sm md:text-base">AL</span>
  </div>
);

// Proficient Skills
const proficientSkills = [
  { name: 'PHP', icon: <SiPhp className="w-10 h-10 md:w-12 md:h-12 text-[#777BB4]" /> },
  { name: 'Laravel', icon: <SiLaravel className="w-10 h-10 md:w-12 md:h-12 text-[#FF2D20]" /> },
  { name: 'AL', icon: <ALIcon /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 md:w-12 md:h-12 text-[#F7DF1E]" /> },
  { name: 'MySQL', icon: <SiMysql className="w-10 h-10 md:w-12 md:h-12 text-[#4479A1]" /> },
  { name: 'HTML/CSS', icon: <SiHtml5 className="w-10 h-10 md:w-12 md:h-12 text-[#E34F26]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12 text-[#06B6D4]" /> },
  { name: 'Power Automate', icon: <Image src="/power-automate.png" alt="Power Automate" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'GitHub', icon: <SiGithub className="w-10 h-10 md:w-12 md:h-12 text-[#181717]" /> },
];

// Learning Skills
const learningSkills = [
  { name: 'Vue.js', icon: <SiVuedotjs className="w-10 h-10 md:w-12 md:h-12 text-[#4FC08D]" /> },
  { name: 'Inertia.js', icon: <Image src="/inertia.svg" alt="Inertia.js" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'React', icon: <SiReact className="w-10 h-10 md:w-12 md:h-12 text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-10 h-10 md:w-12 md:h-12 text-black" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10 md:w-12 md:h-12 text-[#3178C6]" /> },
  { name: 'Docker', icon: <SiDocker className="w-10 h-10 md:w-12 md:h-12 text-[#2496ED]" /> },
  { name: 'Redis', icon: <Image src="/redis.png" alt="Redis" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'Power Apps', icon: <Image src="/power-apps.png" alt="Power Apps" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'Power Pages', icon: <Image src="/power-pages.png" alt="Power Pages" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" /> },
];

const SkillIcon = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => (
  <div className="group flex flex-col items-center gap-3">
    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-lg group-hover:border-primary-300 group-hover:-translate-y-1 transition-all duration-300">
      {skill.icon}
    </div>
    <span className="text-xs text-primary-600 font-medium">
      {skill.name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 text-primary-600 text-sm font-medium mb-4">
            <HiCode className="w-4 h-4" />
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-primary-600 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Proficient */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-primary-200 flex-1 max-w-[100px]"></div>
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Proficient</span>
            <div className="h-px bg-primary-200 flex-1 max-w-[100px]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {proficientSkills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Learning */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-primary-200 flex-1 max-w-[100px]"></div>
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Learning</span>
            <div className="h-px bg-primary-200 flex-1 max-w-[100px]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {learningSkills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="text-center mt-16">
          <p className="text-sm text-primary-400">
            {proficientSkills.length + learningSkills.length} technologies • Always learning
          </p>
        </div>
      </div>
    </section>
  );
}
