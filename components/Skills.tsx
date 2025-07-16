import React from 'react';
import Image from 'next/image';
import { 
  SiPhp, 
  SiSharp, 
  SiJavascript, 
  SiMysql, 
  SiHtml5,
  SiDotnet,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiFramer
} from 'react-icons/si';
import { HiLightBulb, HiStar, HiAcademicCap, HiSparkles, HiCode, HiCog } from 'react-icons/hi';

// Skills organized by proficiency tiers with enhanced data
const skillTiers = {
  proficient: [
    {
      name: "PHP & Web Development",
      description: "Full-stack web applications with modern PHP frameworks",
      icon: <SiPhp className="w-6 h-6 md:w-8 md:h-8 text-[#777BB4]" />,
      iconBg: "bg-white"
    },
    {
      name: "C# & ASP.NET Framework",
      description: "Enterprise applications and web services development",
      icon: <Image src="/c%23.png" alt="C#" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />,
      iconBg: "bg-white"
    },
    {
      name: "JavaScript & Frontend",
      description: "Interactive web applications and modern UI development",
      icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8 text-[#F7DF1E]" />,
      iconBg: "bg-white"
    },
    {
      name: "MySQL & Database Design",
      description: "Database architecture and optimization strategies",
      icon: <SiMysql className="w-6 h-6 md:w-8 md:h-8 text-[#4479A1]" />,
      iconBg: "bg-white"
    },
    {
      name: "HTML/CSS & Tailwind",
      description: "Responsive design and modern CSS frameworks",
      icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8 text-[#06B6D4]" />,
      iconBg: "bg-white"
    },
    {
      name: "Problem Solving & Debugging",
      description: "Analytical thinking and systematic troubleshooting",
      icon: <HiLightBulb className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />,
      iconBg: "bg-white"
    }
  ],
  learning: [
    {
      name: "Power Apps",
      description: "Low-code business application development",
      icon: <Image src="/power-apps.png" alt="Power Apps" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />,
      iconBg: "bg-white"
    },
    {
      name: "Power Pages",
      description: "Modern website creation and management",
      icon: <Image src="/power-pages.png" alt="Power Pages" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />,
      iconBg: "bg-white"
    },
    {
      name: "Power Automate",
      description: "Workflow automation and process optimization",
      icon: <Image src="/power-automate.png" alt="Power Automate" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />,
      iconBg: "bg-white"
    },
    // Added technologies
    {
      name: "Next.js 14+",
      description: "React framework for production",
      icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8 text-black" />,
      iconBg: "bg-white"
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8 text-[#3178C6]" />,
      iconBg: "bg-white"
    },
    {
      name: "React",
      description: "Modern UI component library",
      icon: <SiReact className="w-6 h-6 md:w-8 md:h-8 text-[#61DAFB]" />,
      iconBg: "bg-white"
    },
    {
      name: "Framer Motion",
      description: "Animation and motion library",
      icon: <SiFramer className="w-6 h-6 md:w-8 md:h-8 text-black" />,
      iconBg: "bg-white"
    }
  ]
};

// Portfolio tech stack with enhanced styling
const portfolioTechStack = [
  {
    name: "Next.js 14+",
    description: "React framework for production",
    icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8 text-black" />
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
    icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8 text-[#3178C6]" />
  },
  {
    name: "React",
    description: "Modern UI component library",
    icon: <SiReact className="w-6 h-6 md:w-8 md:h-8 text-[#61DAFB]" />
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8 text-[#06B6D4]" />
  },
  {
    name: "Framer Motion",
    description: "Animation and motion library",
    icon: <SiFramer className="w-6 h-6 md:w-8 md:h-8 text-black" />
  }
];

const SkillCard = ({ skill, tier }: { skill: any; tier: string }) => {
  const tierConfig = {
    proficient: {
      badge: "Proficient", 
      badgeColor: "bg-yellow-200",
      badgeText: "text-primary-700"
    },
    learning: {
      badge: "Learning",
      badgeColor: "bg-blue-200",
      badgeText: "text-primary-700"
    }
  };

  const config = tierConfig[tier as keyof typeof tierConfig];

  return (
    <div className="group bg-white p-6 rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50/30 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/20 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          <div className={`p-4 ${skill.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            {skill.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                {skill.name}
              </h3>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${config.badgeColor} ${config.badgeText} shadow-sm`}>
                {config.badge}
              </span>
            </div>
            <p className="text-sm text-primary-600 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TierSection = ({ title, skills, tier, icon, description }: { 
  title: string; 
  skills: any[]; 
  tier: string; 
  icon: React.ReactNode;
  description: string;
}) => (
  <div className="mb-16">
    <div className="flex items-center mb-8">
      <div className="p-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl mr-4 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary-900 mb-2">{title}</h3>
        <p className="text-primary-600">{description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} tier={tier} />
      ))}
    </div>
  </div>
);

const TechStackCard = ({ tech }: { tech: any }) => (
  <div className="group bg-white p-6 rounded-xl border border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary-50/30 to-transparent rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>
    
    <div className="relative z-10">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary-50 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
          {tech.icon}
        </div>
      </div>
      <h4 className="font-bold text-primary-900 mb-2">{tech.name}</h4>
      <p className="text-sm text-primary-600">{tech.description}</p>
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 text-primary-700 text-sm font-medium mb-6 hover:shadow-md transition-all duration-300">
            <HiCode className="w-4 h-4 mr-2" />
            Technical Expertise
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive toolkit organized by proficiency level, showcasing my expertise 
            across various technologies and frameworks with continuous learning and growth.
          </p>
        </div>

        {/* Skills by Tier */}
        <div className="mb-20">
          <TierSection 
            title="Proficient Level" 
            skills={skillTiers.proficient} 
            tier="proficient" 
            icon={<HiAcademicCap className="w-6 h-6 text-primary-600" />}
            description="Technologies I've mastered and skills I'm confident with in development"
          />
          
          <TierSection 
            title="Currently Learning" 
            skills={skillTiers.learning} 
            tier="learning" 
            icon={<HiSparkles className="w-6 h-6 text-primary-600" />}
            description="Emerging technologies I'm exploring and expanding my knowledge in"
          />
        </div>

        {/* Portfolio Tech Stack */}
        <div className="bg-primary-50 p-8 md:p-12 rounded-3xl border border-primary-200 shadow-lg">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-700 text-sm font-medium mb-4">
              <HiCog className="w-4 h-4 mr-2" />
              Built With Modern Stack
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              This Portfolio's Technology Stack
            </h3>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Showcasing the latest web development technologies and best practices used to create this portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {portfolioTechStack.map((tech) => (
              <TechStackCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-4 animate-pulse"></div>
            <span className="text-primary-700 font-semibold text-sm md:text-base">
              {skillTiers.proficient.length + skillTiers.learning.length}+ Technologies • Always Learning & Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 