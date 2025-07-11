import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Hackathon Winning Solution",
    category: "Full Stack Development",
    description: "Led team as Lead Developer in Bago City College BSIS Hackathon 2024, architecting innovative solutions and achieving 2nd place",
    image: "/api/placeholder/600/400",
    tags: ["Team Leadership", "PHP", "JavaScript", "Problem Solving"],
    metrics: "🏆 2nd Place Winner",
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
    category: "Software Development",
    description: "Developed multiple applications using PHP, C#, and JavaScript, earning Programmer of the Year Award for exceptional coding skills",
    image: "/api/placeholder/600/400",
    tags: ["PHP", "C#", "ASP.NET", "MySQL", "Bootstrap"],
    metrics: "🏆 Programmer of the Year 2025",
    year: "2021-2025"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 md:py-20 lg:py-32 bg-primary-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-primary-900 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-primary-600 leading-relaxed">
            A showcase of programming projects where I&apos;ve applied technical skills to build 
            efficient solutions and deliver measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                  {index === 0 ? (
                    <Image
                      src="/hackathon.jpg"
                      alt="Hackathon team photo with certificates"
                      width={600}
                      height={400}
                      className="aspect-[4/3] object-cover"
                      priority
                    />
                  ) : index === 1 ? (
                    <Image
                      src="/microsoft-platform.jpg"
                      alt="Microsoft Power Platform overview showing Power Apps, Power Automate, and Power Pages"
                      width={600}
                      height={400}
                      className="aspect-[4/3] object-cover p-12"
                    />
                  ) : index === 2 ? (
                    <Image
                      src="/award.jpg"
                      alt="Programmer of the Year award medal"
                      width={600}
                      height={400}
                      className="aspect-[4/3] object-cover"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-primary-400 font-medium">Project Image</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
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
                <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
                  📈 {project.metrics}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href={`/case-study/${project.id}`}
                  className="inline-flex items-center text-primary-900 font-medium hover:text-primary-700 transition-colors group"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
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