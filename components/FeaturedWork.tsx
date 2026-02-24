'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SiLaravel, SiReact, SiPhp, SiTailwindcss, SiMysql, SiJavascript, SiDotnet, SiTypescript, SiPostgresql, SiExpo, SiHtml5, SiCss3 } from 'react-icons/si';
import { FaRobot, FaMicrochip, FaLeaf } from 'react-icons/fa';

const techIconMap: Record<string, JSX.Element> = {
  'Laravel 11': <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
  'React Native': <SiReact className="w-4 h-4 text-[#61DAFB]" />,
  'Expo': <SiExpo className="w-4 h-4 text-[#000020]" />,
  'Supabase': <span className="text-xs font-semibold text-[#3ECF8E]">SB</span>,
  'PostgreSQL': <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
  'Tailwind CSS': <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
  'TypeScript': <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
  'PHP': <SiPhp className="w-4 h-4 text-[#777BB4]" />,
  'YOLOv8': <FaRobot className="w-4 h-4 text-[#00D4AA]" />,
  'IoT': <FaMicrochip className="w-4 h-4 text-[#00979D]" />,
  'MySQL': <SiMysql className="w-4 h-4 text-[#4479A1]" />,
  'Laravel': <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
  'Power Automate': <span className="text-xs">⚡</span>,
  'Power Apps': <span className="text-xs">📱</span>,
  'Power Pages': <span className="text-xs">📄</span>,
  'SharePoint': <span className="text-xs">📊</span>,
  'Microsoft Teams': <span className="text-xs">👥</span>,
  'C#': <span className="text-xs font-semibold text-[#239120]">C#</span>,
  'AL': <span className="text-xs font-semibold text-primary-700">AL</span>,
  'ASP.NET': <SiDotnet className="w-4 h-4 text-[#512BD4]" />,
  'JavaScript': <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
  'LeafletJS': <FaLeaf className="w-4 h-4 text-[#199900]" />,
  'HTML5': <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
  'CSS3': <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
  'Chart.js': <span className="text-xs font-semibold text-[#FF6384]">📊</span>,
  'EmailJS': <span className="text-xs">📧</span>,
  'Semaphore API': <span className="text-xs">💬</span>,
  'Apache': <span className="text-xs font-semibold text-[#D22128]">A</span>,
};

const projects = [
  {
    id: 'mdrrmo-emergency-response',
    title: "MDRRMO Emergency Response System",
    subtitle: "Rescue Coordination Platform",
    image: "/rescue1.png",
    year: "2026",
    category: "Full Stack",
    techStack: ["Laravel 11", "React Native", "Expo", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 'ememhs-guidance-system',
    title: "EMEMHS Guidance System",
    subtitle: "School Management & SMS Notifications",
    image: "/ememhs1.png",
    year: "2025",
    category: "Full Stack",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js", "Semaphore API"]
  },
  {
    id: 'pest-detection',
    title: "Pest Detection Web App",
    subtitle: "AI & IoT Integration",
    image: "/pest1.png",
    year: "2025",
    category: "AI/IoT",
    techStack: ["PHP", "Tailwind CSS", "MySQL", "YOLOv8", "IoT"]
  },
  {
    id: 'qr-attendance',
    title: "QR Attendance System",
    subtitle: "Automated Attendance Tracking",
    image: "/qr1.png",
    year: "2025",
    category: "Full Stack",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"]
  },
  {
    id: 'support-system',
    title: "Support System Automation",
    subtitle: "Workflow Automation",
    image: "/power-apps.png",
    year: "2025",
    category: "Low-Code",
    techStack: ["Power Automate", "Power Apps", "Power Pages", "SharePoint", "Microsoft Teams"]
  },
  {
    id: 'business-central',
    title: "Business Central & Sales Enterprise Sync",
    subtitle: "ERP Integration",
    image: "/microsoft-platform.jpg",
    year: "2025",
    category: "Integration",
    techStack: ["C#", "AL", "Power Automate", "ASP.NET"]
  },
  {
    id: 'hackathon',
    title: "Hackathon Winning Solution",
    subtitle: "2nd Place Winner",
    image: "/hackathon.jpg",
    year: "2024",
    category: "Full Stack",
    techStack: ["PHP", "JavaScript", "LeafletJS", "Tailwind CSS", "HTML5", "CSS3"]
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50/30">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary-600 mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            Selected Work
          </h2>
          <p className="text-base text-primary-600 max-w-2xl">
            Real-world projects showcasing full-stack development, AI integration, and business automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/project/${project.id}`}
              className="group block"
            >
              {/* Card Container */}
              <article className="h-full flex flex-col bg-white border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-primary-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-700">
                    {project.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col p-5">
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-primary-900 mb-1 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-500">{project.subtitle}</p>
                  </div>
                  
                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap items-center gap-2 mt-auto pt-3 border-t border-primary-100">
                    {project.techStack.slice(0, 5).map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center justify-center w-7 h-7 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors"
                        title={tech}
                      >
                        {techIconMap[tech]}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-xs text-primary-500 font-medium">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
