import Image from 'next/image';
import Link from 'next/link';
import { SiPhp, SiJavascript, SiMysql, SiBootstrap, SiDotnet, SiTailwindcss, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import { FaCode, FaCogs, FaAward, FaArrowRight, FaLeaf } from 'react-icons/fa';

const techIconMap: Record<string, JSX.Element> = {
  'PHP': <SiPhp className="w-5 h-5 text-[#777BB4]" />,
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
};

const categoryIconMap: Record<string, JSX.Element> = {
  'Full Stack Development': <FaCode className="w-4 h-4 text-primary-500 mr-1" />,
  'Low-Code Development': <FaCogs className="w-4 h-4 text-primary-500 mr-1" />,
  'Software Development': <FaCode className="w-4 h-4 text-primary-500 mr-1" />,
};

const projects = [
  {
    id: 1,
    title: "Hackathon Winning Solution",
    category: "Full Stack Development",
    description: "Led team as Lead Developer in Bago City College BSIS Hackathon 2024, architecting innovative solutions and achieving 2nd place",
    image: "/api/placeholder/600/400",
    tags: ["Team Leadership", "PHP", "JavaScript", "LeafletJS", "Tailwind CSS", "HTML5", "CSS3", "Problem Solving"],
    metrics: "🏆 2nd Place Winner and Programmer of the Year 2025",
    year: "2024"
  },
  {
    id: 2,
    title: "Microsoft Power Platform Solutions",
    category: "Low-Code Development",
    description: "Built automated workflows and business applications using Power Apps, Power Automate, and Power Pages during SDTP training",
    image: "/api/placeholder/600/400",
    tags: ["Power Apps", "Power Automate", "Power Pages", "Automation"],
    metrics: "Certified SDTP Graduate",
    year: "2024-2025"
  },
  {
    id: 3,
    title: "Academic Programming Projects",
    category: "Software Development Training Program",
    description: "Developed multiple applications using PHP, C#, and JavaScript, earning Programmer of the Year Award for exceptional coding skills",
    image: "/api/placeholder/600/400",
    tags: [
      "C#",
      "ASP.NET",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "Software Testing",
      "OOP",
      "Problem Solving"
    ],
    metrics: "SDTP Trainee",
    year: "2021-2025"
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
            A showcase of programming projects where I&apos;ve applied technical skills to build efficient solutions and deliver measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            // Separate tech stack tags from others
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
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md">
                      <Image
                        src={index === 0 ? "/hackathon.jpg" : index === 1 ? "/microsoft-platform.jpg" : index === 2 ? "/sdtp.jpg" : project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className={`aspect-[4/3] object-cover ${index === 1 ? 'p-10' : ''}`}
                        priority={index === 0}
                      />
                    </div>
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

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-base md:text-lg text-primary-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
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

                    {/* CTA Button - Match black CTA from About */}
                    <Link 
                      href={`/case-study/${project.id}`}
                      className="inline-flex w-fit items-center gap-2 px-7 py-3 text-base font-medium rounded-full bg-primary-900 text-white hover:bg-primary-800 transition-all"
                    >
                      View Details
                      <FaArrowRight className="w-4 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link href="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 