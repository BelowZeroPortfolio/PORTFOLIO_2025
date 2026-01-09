'use client';

import Image from 'next/image';
import ImageLightbox from './ImageLightbox';
import { SiPhp, SiJavascript, SiMysql, SiBootstrap, SiDotnet, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiLaravel } from 'react-icons/si';
import { FaCode, FaCogs, FaAward, FaLeaf, FaRobot, FaMicrochip } from 'react-icons/fa';

// Pest Detection Image Grid Component - 1 on top, 2 on bottom
const PestDetectionImages = () => (
  <div className="flex flex-col gap-4">
    {/* Main Image - pest1 on top */}
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary-100">
      <ImageLightbox 
        src="/pest1.png" 
        alt="Pest Detection Dashboard" 
        width={600}
        height={400}
      />
    </div>
    
    {/* Bottom row - pest2 and pest3 */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-primary-100">
        <ImageLightbox 
          src="/pest2.png" 
          alt="Pest Detection Analysis" 
          width={300}
          height={200}
        />
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-primary-100">
        <ImageLightbox 
          src="/pest3.png" 
          alt="Pest Detection IoT" 
          width={300}
          height={200}
        />
      </div>
    </div>
  </div>
);

// QR Attendance Image Grid Component - 1 on top, 3 on bottom
const QRAttendanceImages = () => (
  <div className="flex flex-col gap-4">
    {/* Main Image - qr1 on top */}
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary-100">
      <ImageLightbox 
        src="/qr1.png" 
        alt="QR Attendance Dashboard" 
        width={600}
        height={400}
      />
    </div>
    
    {/* Bottom row - qr2, qr3, qr4 */}
    <div className="grid grid-cols-3 gap-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-primary-100">
        <ImageLightbox 
          src="/qr2.png" 
          alt="QR Attendance Scanning" 
          width={200}
          height={150}
        />
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-primary-100">
        <ImageLightbox 
          src="/qr3.png" 
          alt="QR Attendance Reports" 
          width={200}
          height={150}
        />
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-primary-100">
        <ImageLightbox 
          src="/qr4.png" 
          alt="QR Attendance SMS" 
          width={200}
          height={150}
        />
      </div>
    </div>
  </div>
);

// Support System Automation - Power Platform Images (3 icons in a row)
const SupportSystemImages = () => (
  <div className="flex flex-col gap-4">
    <div className="grid grid-cols-3 gap-6 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
      <div className="flex flex-col items-center gap-3 group">
        <div className="p-4 bg-white rounded-2xl shadow-lg border-2 border-primary-100 group-hover:scale-110 transition-transform duration-300">
          <Image 
            src="/power-apps.png" 
            alt="Power Apps" 
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        <span className="text-sm font-medium text-primary-700">Power Apps</span>
      </div>
      <div className="flex flex-col items-center gap-3 group">
        <div className="p-4 bg-white rounded-2xl shadow-lg border-2 border-primary-100 group-hover:scale-110 transition-transform duration-300">
          <Image 
            src="/power-automate.png" 
            alt="Power Automate" 
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        <span className="text-sm font-medium text-primary-700">Power Automate</span>
      </div>
      <div className="flex flex-col items-center gap-3 group">
        <div className="p-4 bg-white rounded-2xl shadow-lg border-2 border-primary-100 group-hover:scale-110 transition-transform duration-300">
          <Image 
            src="/power-pages.png" 
            alt="Power Pages" 
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        <span className="text-sm font-medium text-primary-700">Power Pages</span>
      </div>
    </div>
    <div className="text-center text-sm text-primary-500 font-medium">
      Microsoft Power Platform Stack
    </div>
  </div>
);

// Business Central Image - Single image
const BusinessCentralImage = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary-100">
    <ImageLightbox 
      src="/microsoft-platform.jpg" 
      alt="Microsoft Business Central" 
      width={600}
      height={400}
    />
  </div>
);

// Hackathon Image - Single image
const HackathonImage = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary-100">
    <ImageLightbox 
      src="/hackathon.jpg" 
      alt="Hackathon Winning Solution" 
      width={600}
      height={400}
    />
  </div>
);

const techIconMap: Record<string, JSX.Element> = {
  'PHP': <SiPhp className="w-5 h-5 text-[#777BB4]" />,
  'Laravel': <SiLaravel className="w-5 h-5 text-[#FF2D20]" />,
  'JavaScript': <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />,
  'C#': <Image src="/csharp.png" alt="C#" width={24} height={24} className="w-6 h-6" />,
  'MySQL': <SiMysql className="w-5 h-5 text-[#4479A1]" />,
  'Bootstrap': <SiBootstrap className="w-5 h-5 text-[#7952B3]" />,
  'ASP.NET': <SiDotnet className="w-5 h-5 text-[#512BD4]" />,
  'Power Apps': <Image src="/power-apps.png" alt="Power Apps" width={24} height={24} className="w-6 h-6" />,
  'Power Automate': <Image src="/power-automate.png" alt="Power Automate" width={24} height={24} className="w-6 h-6" />,
  'Power Pages': <Image src="/power-pages.png" alt="Power Pages" width={24} height={24} className="w-6 h-6" />,
  'LeafletJS': <FaLeaf className="w-5 h-5 text-[#199900]" />,
  'Google Maps': <SiJavascript className="w-5 h-5 text-[#4285F4]" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  'HTML5': <SiHtml5 className="w-5 h-5 text-[#E34F26]" />,
  'CSS3': <SiCss3 className="w-5 h-5 text-[#1572B6]" />,
  'Git': <SiGit className="w-5 h-5 text-[#F05032]" />,
  'YOLOv8': <FaRobot className="w-5 h-5 text-[#00D4AA]" />,
  'IoT': <FaMicrochip className="w-5 h-5 text-[#00979D]" />,
};

const categoryIconMap: Record<string, JSX.Element> = {
  'Full Stack Development': <FaCode className="w-4 h-4 text-primary-500 mr-1" />,
  'Low-Code Development': <FaCogs className="w-4 h-4 text-primary-500 mr-1" />,
  'Software Development': <FaCode className="w-4 h-4 text-primary-500 mr-1" />,
  'AI & IoT Integration': <FaRobot className="w-4 h-4 text-primary-500 mr-1" />,
  'Business Automation': <FaCogs className="w-4 h-4 text-primary-500 mr-1" />,
};

const projects = [
  {
    id: 1,
    title: "Pest Detection Web App",
    category: "AI & IoT Integration",
    description: "Built using PHP, Tailwind, MySQL, Ngrok, YOLOv8, and IoT sensors to monitor and log pests with a real-time dashboard. Delivers AI-powered pest detection with live monitoring capabilities.",
    image: "/api/placeholder/600/400",
    tags: ["AI-Powered", "Real-time Dashboard", "IoT Sensors", "PHP", "Tailwind CSS", "MySQL", "YOLOv8", "IoT"],
    metrics: "🤖 AI & IoT Integrated Solution",
    year: "2025",
    company: "Lexite PH"
  },
  {
    id: 2,
    title: "QR Attendance System",
    category: "Full Stack Development",
    description: "Developed Laravel-based platform with QR code scanning and SMS alerts on check-in/out. Full-stack solution following coding standards to enhance operational efficiency.",
    image: "/api/placeholder/600/400",
    tags: ["SMS Integration", "QR Scanning", "Full Stack", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    metrics: "📱 Automated SMS Notifications",
    year: "2025",
    company: "Lexite PH"
  },
  {
    id: 3,
    title: "Support System Automation",
    category: "Business Automation",
    description: "Developed a ticket support system using Power Automate, Forms, SharePoint, and Teams. Reduced average response time by 40% and increased issue resolution efficiency by 35% across the team.",
    image: "/microsoft-platform.png",
    tags: ["Workflow Automation", "Team Collaboration", "Power Automate", "Power Apps"],
    metrics: "⚡ 40% Faster Response Time",
    year: "2025",
    company: "NinjaTribe Axilara"
  },
  {
    id: 4,
    title: "Business Central & Sales Enterprise Sync",
    category: "Business Automation",
    description: "Synced Microsoft Business Central with Sales Enterprise using AL programming, reducing manual work by 50%. Coordinated with clients to deliver seamless, effective solutions.",
    image: "/api/placeholder/600/400",
    tags: ["AL Programming", "System Integration", "C#", "Power Automate"],
    metrics: "📊 50% Reduction in Manual Work",
    year: "2025",
    company: "NinjaTribe Axilara"
  },
  {
    id: 5,
    title: "Hackathon Winning Solution",
    category: "Full Stack Development",
    description: "Led team as Lead Developer in Bago City College BSIS Hackathon 2024, architecting innovative solutions and achieving 2nd place. Earned Programmer of the Year 2025 award.",
    image: "/hackathon.jpg",
    tags: ["Team Leadership", "Problem Solving", "PHP", "JavaScript", "LeafletJS", "Tailwind CSS", "HTML5", "CSS3"],
    metrics: "🏆 2nd Place Winner",
    year: "2024",
    company: "Bago City College"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 md:py-20 lg:py-32 bg-primary-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 text-primary-700 text-sm font-medium mb-6">
            <FaAward className="w-4 h-4 mr-2 text-amber-500" />
            Portfolio Highlights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            A showcase of real-world projects where I&apos;ve applied technical skills to build efficient solutions and deliver measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            const techTags = project.tags.filter(tag => techIconMap[tag]);
            const otherTags = project.tags.filter(tag => !techIconMap[tag]);
            return (
              <div 
                key={project.id} 
                className="bg-white p-6 md:p-8 rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}> 
                    {project.id === 1 ? (
                      <PestDetectionImages />
                    ) : project.id === 2 ? (
                      <QRAttendanceImages />
                    ) : project.id === 3 ? (
                      <SupportSystemImages />
                    ) : project.id === 4 ? (
                      <BusinessCentralImage />
                    ) : project.id === 5 ? (
                      <HackathonImage />
                    ) : (
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-md">
                        <div className="aspect-[4/3] flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="text-6xl mb-4">
                              {project.category === 'AI & IoT Integration' ? '🤖' : 
                               project.category === 'Business Automation' ? '⚡' : 
                               project.category === 'Full Stack Development' ? '💻' : '🚀'}
                            </div>
                            <div className="text-primary-700 font-semibold">{project.company}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex flex-col h-full justify-center`}> 
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center text-sm font-medium text-primary-500 uppercase tracking-wide">
                        {categoryIconMap[project.category]}
                        {project.category}
                      </span>
                      <span className="text-sm text-primary-400">{project.year}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-primary-500 mb-4">{project.company}</p>

                    <p className="text-base md:text-lg text-primary-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6 w-fit">
                      <FaAward className="w-4 h-4 mr-2 text-amber-500" /> {project.metrics}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {otherTags.map((tag, idx) => (
                        <span
                          key={tag + idx}
                          className="border border-primary-500 px-2 py-2 rounded-full font-semibold text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {techTags.map((tag, idx) => (
                        <span
                          key={tag + idx}
                          className="px-4 py-2 bg-white border border-primary-200 text-primary-700 text-xs font-medium rounded-full flex items-center gap-2"
                        >
                          {techIconMap[tag]}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Achievements Summary */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-primary-200">
          <h3 className="text-xl font-bold text-primary-900 mb-6 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-900 mb-2">40%</div>
              <div className="text-sm text-primary-600">Faster Response Time</div>
              <div className="text-xs text-primary-400">Support System Automation</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-900 mb-2">50%</div>
              <div className="text-sm text-primary-600">Reduction in Manual Work</div>
              <div className="text-xs text-primary-400">BC & Sales Enterprise Sync</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-900 mb-2">35%</div>
              <div className="text-sm text-primary-600">Improved Resolution Efficiency</div>
              <div className="text-xs text-primary-400">Ticket Support System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
