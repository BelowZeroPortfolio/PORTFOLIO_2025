import Image from 'next/image';
import Link from 'next/link';
import { SiPhp, SiJavascript, SiMysql, SiBootstrap, SiDotnet, SiTailwindcss, SiHtml5, SiCss3, SiGithub } from 'react-icons/si';
import { FaArrowLeft, FaExternalLinkAlt, FaUsers, FaTrophy, FaLightbulb, FaCode, FaChartLine, FaGraduationCap, FaDatabase, FaServer, FaDesktop, FaBook, FaPlay, FaDownload, FaCloud } from 'react-icons/fa';

const techStack = [
  { name: 'C#', icon: <Image src="/csharp.png" alt="C#" width={24} height={24} className="w-6 h-6" />, color: '#68217A', category: 'Backend' },
  { name: 'ASP.NET', icon: <SiDotnet className="w-6 h-6 text-[#512BD4]" />, color: '#512BD4', category: 'Framework' },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" />, color: '#7952B3', category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />, color: '#F7DF1E', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />, color: '#06B6D4', category: 'Frontend' },
  { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" />, color: '#1572B6', category: 'Frontend' },
  { name: 'GitHub', icon: <SiGithub className="w-6 h-6 text-[#181717]" />, color: '#181717', category: 'Version Control' },
];

const projectMetrics = [
  { label: 'Extensive Training', value: '5 months', icon: <FaGraduationCap className="w-5 h-5" /> },
  { label: 'Projects Completed', value: '15+', icon: <FaCode className="w-5 h-5" /> },
];

const sdtpTrainingModules = [
  {
    title: "Programming Fundamentals",
    topics: ["While and Until Loops", "Conditional Statements", "Variables and Data Types", "Functions and Methods"],
    icon: <FaCode className="w-5 h-5" />,
    color: "blue"
  },
  {
    title: "Web Development",
    topics: ["HTML5 & CSS3", "Bootstrap Grid System", "Tailwind CSS", "Favicon Implementation"],
    icon: <FaDesktop className="w-5 h-5" />,
    color: "green"
  },
  {
    title: "JavaScript Programming",
    topics: ["Functions and Events", "Ternary Operators", "DOM Manipulation", "Interactive Applications"],
    icon: <SiJavascript className="w-5 h-5" />,
    color: "yellow"
  },
  {
    title: "Version Control & Deployment",
    topics: ["Git Installation", "GitHub Repository Management", "Vercel Deployment", "Netlify Deployment"],
    icon: <SiGithub className="w-5 h-5" />,
    color: "purple"
  },
  {
    title: "C# Development",
    topics: ["Console Applications", "Object-Oriented Programming", "ASP.NET Core MVC", "Database Integration"],
    icon: <FaServer className="w-5 h-5" />,
    color: "indigo"
  },
  {
    title: "Software Testing",
    topics: ["Defect Identification", "Bug Hunting", "Test Case Design", "Quality Assurance"],
    icon: <FaPlay className="w-5 h-5" />,
    color: "red"
  }
];

const academicProjects = [
  {
    title: "UI UX Activity",
    description: "UI UX Activity",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["UI UX Activity", "Borrowing system", "Fine calculation"],
    image: "/uiux.png",
    link: "/projects/student-management-system"
  },
  {
    title: "E-commerce Platform Rebranding",
    description: "Full-featured online shopping platform with payment integration and inventory management",
    tech: ["C#", "ASP.NET", "MySQL"],
    features: ["Shopping cart", "Payment processing", "Admin dashboard"],
    image: "/penguin.jpg",
    link: "https://cataan-penguinasia.vercel.app/"
  },
  {
    title: "Inventory Management System",
    description: "Digital library solution for book tracking, borrowing, and catalog management",
    tech: ["C#", "ASP.NET", "MySQL", "Bootstrap"],
    features: ["Inventory Management", "Borrowing system", "Fine calculation"],
    image: "/library.png",
    link: "/projects/library-management-system"
  },
  {
    title: "Personal Portfolio",
    description: "Digital library solution for book tracking, borrowing, and catalog management",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Personal Portfolio", "Borrowing system", "Fine calculation"],
    image: "/personal.jpg",
    link: "https://carlnavid.vercel.app/"
  },
  {
    title: "SME CRM",
    description: "Business inventory tracking system with barcode scanning and reporting capabilities",
    tech: ["C#", "ASP.NET", "MySQL"],
    features: ["CRM", "Inventory Management", "Analytics dashboard"],
    image: "/tech_inno.png",
    link: "https://bizzconnect.somee.com/"
  }
];

export default function AcademicProjectsCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-max section-padding py-8">
          <Link href="/#work" className="inline-flex items-center text-purple-200 hover:text-white transition-colors mb-6">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Academic Programming Projects
            </h1>
            
            <p className="text-xl text-purple-200 leading-relaxed mb-8">
              A comprehensive portfolio of software development projects demonstrating mastery of multiple 
              programming languages, frameworks, and database systems.
            </p>
            
            {/* Project Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-purple-200 mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-purple-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-max section-padding py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Project Overview</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-primary-700 leading-relaxed mb-6">
                  The Software Development Training Program (SDTP) at Bago City College provided a comprehensive, hands-on learning experience in modern software development. The program emphasized practical application of concepts through real-world projects, covering a wide range of technologies such as C#, ASP.NET, MySQL, Bootstrap, JavaScript, Tailwind CSS, and Git.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Through instructor-led sessions, collaborative activities, and guided exercises, I gained valuable skills in full-stack development, version control, software testing, and problem-solving. The SDTP fostered a strong foundation in both technical and professional skills, preparing me for real-world software engineering challenges.
                </p>
              </div>
              <div className="relative w-full">
                <Image
                  src="/tech.jpg"
                  alt="Programmer of the Year award medal"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* SDTP Training Program */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">SDTP Training Program</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Software Development Training Program</h3>
              <p className="text-lg text-blue-700 leading-relaxed mb-6">
                As part of our comprehensive software development training program, I participated in an intensive 
                curriculum covering modern web development, programming fundamentals, and industry best practices. 
                The program provided hands-on experience with cutting-edge technologies and real-world project development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                    <FaBook className="w-5 h-5 mr-2" />
                    Training Duration
                  </h4>
                  <p className="text-blue-700">Comprehensive 5-month intensive program covering full-stack development</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                    <FaGraduationCap className="w-5 h-5 mr-2" />
                    Certification
                  </h4>
                  <p className="text-blue-700">SDTP Graduate with specialized focus on modern web technologies</p>
                </div>
              </div>
            </div>

            {/* Training Modules */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdtpTrainingModules.map((module, index) => (
                <div key={index} className="bg-white border border-primary-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-${module.color}-100 text-${module.color}-600 mr-3`}>
                      {module.icon}
                    </div>
                    <h4 className="font-bold text-primary-800">{module.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-sm text-primary-700">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Learning Highlights */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-800 mb-6">Key Learning Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-3">Programming Concepts</h4>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-green-700 mb-2"><strong>While vs Until Loops:</strong></p>
                    <p className="text-xs text-green-600 mb-2">• While loop: Runs while condition is true</p>
                    <p className="text-xs text-green-600">• Until loop: Runs until condition becomes true</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-green-700 mb-2"><strong>Favicon Implementation:</strong></p>
                    <p className="text-xs text-green-600">Browser tab icon creation and implementation for web applications</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-3">Development Tools</h4>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-green-700 mb-2"><strong>Version Control:</strong></p>
                    <p className="text-xs text-green-600">Git installation, GitHub repository management, and collaborative development</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-green-700 mb-2"><strong>Deployment:</strong></p>
                    <p className="text-xs text-green-600">Vercel and Netlify deployment for modern web applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Resources & Materials */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-6">Training Resources & Materials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                    <FaDownload className="w-5 h-5 mr-2" />
                    Documentation & Guides
                  </h4>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Bootstrap Grid System & Introduction PDFs
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      ASP.NET Core MVC Comprehensive Guide
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Git Installation & GitHub Setup Tutorials
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Deployment Guides for Vercel & Netlify
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                    <FaPlay className="w-5 h-5 mr-2" />
                    Hands-on Projects
                  </h4>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Tailwind CSS Demo Applications
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      JavaScript Functions & Events Projects
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      C# Console Applications & Tic Tac Toe Game
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      ASP.NET Core MVC CRUD Operations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          Academic Projects Gallery
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-primary-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col animate-fadeIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={project.image || "/award.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-primary-600 mb-4">{project.description}</p>
                  <Link
                    href={project.link || "/case-study/3"}
                    className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-all text-sm font-medium w-fit"
                    target={project.link && project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link && project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    View Project
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">The Challenge</h2>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Academic Excellence Requirements</h3>
              <p className="text-lg text-purple-700 leading-relaxed mb-6">
                The academic program required demonstrating proficiency across multiple programming paradigms 
                and technologies while solving real-world problems. The challenges included:
              </p>
              <ul className="space-y-3 text-purple-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mastering multiple programming languages and frameworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developing full-stack applications with database integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Creating user-friendly interfaces with responsive design
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implementing secure and scalable software solutions
                </li>
              </ul>
            </div>
          </section>

          {/* Solution Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Web Development Excellence</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  Developed comprehensive web applications using PHP and MySQL, focusing on user experience, 
                  data security, and scalable architecture.
                </p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• MVC architecture implementation</li>
                  <li>• Secure authentication systems</li>
                  <li>• Responsive Bootstrap design</li>
                  <li>• Database optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Enterprise Solutions</h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  Built robust applications using C# and ASP.NET Framework, demonstrating enterprise-level 
                  development skills and best practices.
                </p>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Object-oriented programming</li>
                  <li>• Web services and APIs</li>
                  <li>• Data validation and security</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Database Design</h3>
                <p className="text-purple-700 leading-relaxed mb-4">
                  Designed and implemented efficient database schemas using MySQL, ensuring data integrity, 
                  performance, and scalability.
                </p>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Normalized database design</li>
                  <li>• Stored procedures and triggers</li>
                  <li>• Data backup and recovery</li>
                  <li>• Query optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">User Interface Design</h3>
                <p className="text-amber-700 leading-relaxed mb-4">
                  Created intuitive and responsive user interfaces using Bootstrap and modern CSS techniques, 
                  ensuring excellent user experience across all devices.
                </p>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• Mobile-first responsive design</li>
                  <li>• Accessibility compliance</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Modern UI/UX principles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Technical Implementation</h2>
            
            {/* Tech Stack */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white border border-primary-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-3">{tech.icon}</div>
                    <div className="text-sm font-medium text-primary-700 mb-1">{tech.name}</div>
                    <div className="text-xs text-primary-500">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Projects */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Sample Academic Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {academicProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-primary-800 mb-3">{project.title}</h4>
                    <p className="text-sm text-primary-700 mb-4">{project.description}</p>
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-primary-600 mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary-600 mb-2">Key Features:</div>
                      <ul className="text-xs text-primary-700 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Multi-Technology Mastery</h3>
                <p className="text-primary-700 mb-3">
                  Learning and implementing solutions across different programming paradigms and frameworks.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Developed a systematic learning approach, creating projects 
                    that progressively increased in complexity while applying best practices across all technologies.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Database Performance</h3>
                <p className="text-primary-700 mb-3">
                  Optimizing database queries and ensuring efficient data handling for large datasets.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Implemented proper indexing strategies, optimized SQL queries, 
                    and used stored procedures to improve database performance and maintainability.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: User Experience Design</h3>
                <p className="text-primary-700 mb-3">
                  Creating intuitive interfaces that work seamlessly across different devices and browsers.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Used Bootstrap framework with custom CSS, implemented responsive 
                    design principles, and conducted user testing to ensure optimal user experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

         

          {/* Lessons Learned */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Lessons Learned</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Technical Growth</h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Versatility in multiple technologies enhances problem-solving capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Database design fundamentals are crucial for scalable applications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    User experience design significantly impacts application adoption
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Professional Development</h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consistent quality and innovation lead to recognition and opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Continuous learning and skill development are essential for growth
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Building a diverse portfolio demonstrates adaptability and expertise
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl p-12">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
              Let&apos;s leverage my diverse technical expertise to create innovative solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-8 py-4 bg-primary-900 text-white font-semibold rounded-full hover:bg-primary-800 transition-colors"
              >
                Let&apos;s Connect
                <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/#work" 
                className="inline-flex items-center px-8 py-4 border border-primary-300 text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-colors"
              >
                View More Projects
                <FaArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 