import Image from 'next/image';
import Link from 'next/link';
import { SiPhp, SiJavascript, SiMysql, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';
import { FaLeaf, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaUsers, FaTrophy, FaLightbulb, FaCode, FaChartLine } from 'react-icons/fa';

const techStack = [
  { name: 'PHP', icon: <SiPhp className="w-6 h-6 text-[#777BB4]" />, color: '#777BB4' },
  { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />, color: '#F7DF1E' },
  { name: 'LeafletJS', icon: <FaLeaf className="w-6 h-6 text-[#199900]" />, color: '#199900' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />, color: '#06B6D4' },
  { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" />, color: '#1572B6' },
  { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />, color: '#4479A1' },
];

const projectMetrics = [
  { label: 'Team Size', value: '4 Members', icon: <FaUsers className="w-5 h-5" /> },
  { label: 'Development Time', value: '48 Hours', icon: <FaCode className="w-5 h-5" /> },
  { label: 'Final Position', value: '2nd Place', icon: <FaTrophy className="w-5 h-5" /> },
];

export default function HackathonCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-max section-padding py-8">
          <Link href="/#work" className="inline-flex items-center text-primary-200 hover:text-white transition-colors mb-6">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4">
              <FaTrophy className="w-4 h-4 mr-2 text-amber-400" />
              Hackathon Winner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Hackathon Winning Solution
            </h1>
            
            <p className="text-xl text-primary-200 leading-relaxed mb-8">
              A comprehensive web application that revolutionized local business discovery and community engagement, 
              earning 2nd place in the Bago City College BSIS Hackathon 2024.
            </p>
            
            {/* Project Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-primary-200 mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-primary-300">{metric.label}</div>
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
                  As the Lead Developer for our hackathon team, I orchestrated the development of an innovative 
                  web application that seamlessly integrated mapping technology with local business discovery. 
                  The project demonstrated advanced technical skills while solving real-world community challenges.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Our solution focused on creating an intuitive platform that connects local businesses with 
                  consumers through an interactive map interface, enhanced search capabilities, and community 
                  engagement features.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/hackathon.jpg"
                  alt="Hackathon team celebrating their 2nd place victory"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">The Challenge</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">Problem Statement</h3>
              <p className="text-lg text-red-700 leading-relaxed mb-6">
                Local businesses in Bago City struggled with digital visibility and customer engagement. 
                Traditional business directories were static and lacked interactive features that modern 
                consumers expect. The community needed a solution that would:
              </p>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provide real-time business location and information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enable interactive search and filtering capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Facilitate community engagement and reviews
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Create a mobile-responsive platform accessible to all users
                </li>
              </ul>
            </div>
          </section>

          {/* Solution Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Interactive Map Platform</h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  Integrated LeafletJS with Google Maps API to create a dynamic, interactive map interface 
                  that displays local businesses with real-time location data and detailed information.
                </p>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Custom map markers with business categories</li>
                  <li>• Real-time location tracking and directions</li>
                  <li>• Interactive popups with business details</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Advanced Search System</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  Developed a sophisticated search and filtering system using PHP and MySQL, enabling users 
                  to find businesses by category, location, ratings, and other criteria.
                </p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Multi-criteria search functionality</li>
                  <li>• Category-based filtering</li>
                  <li>• Rating and review system</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Responsive Design</h3>
                <p className="text-purple-700 leading-relaxed mb-4">
                  Built a fully responsive web application using Tailwind CSS, ensuring optimal user experience 
                  across all devices from mobile phones to desktop computers.
                </p>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Mobile-first responsive design</li>
                  <li>• Touch-friendly interface</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Community Features</h3>
                <p className="text-amber-700 leading-relaxed mb-4">
                  Implemented community engagement features including user reviews, ratings, and business 
                  owner dashboards for managing their listings.
                </p>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• User review and rating system</li>
                  <li>• Business owner dashboard</li>
                  <li>• Community feedback integration</li>
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
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white border border-primary-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-3">{tech.icon}</div>
                    <div className="text-sm font-medium text-primary-700">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-800 mb-6">System Architecture</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Frontend Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• HTML5 semantic structure</li>
                    <li>• CSS3 with Tailwind utilities</li>
                    <li>• JavaScript for interactivity</li>
                    <li>• LeafletJS for mapping</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Backend Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• PHP for server-side logic</li>
                    <li>• MySQL database management</li>
                    <li>• RESTful API endpoints</li>
                    <li>• Data validation & security</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Integration Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• Google Maps API integration</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Mobile-responsive design</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Real-time Map Integration</h3>
                <p className="text-primary-700 mb-3">
                  Integrating multiple mapping APIs while maintaining performance and user experience.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Implemented lazy loading for map tiles, optimized API calls, 
                    and used LeafletJS for efficient map rendering with custom markers and popups.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Database Performance</h3>
                <p className="text-primary-700 mb-3">
                  Managing large datasets of business information with fast search and filtering capabilities.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Implemented database indexing, optimized SQL queries, 
                    and used caching strategies to ensure sub-second response times for search operations.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Mobile Responsiveness</h3>
                <p className="text-primary-700 mb-3">
                  Creating a seamless experience across all device sizes and screen orientations.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Used Tailwind CSS with mobile-first approach, implemented 
                    touch-friendly interactions, and optimized map controls for mobile devices.
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
                <h3 className="text-lg font-bold text-primary-800 mb-4">Technical Insights</h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Importance of API integration planning and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Database design significantly impacts application performance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mobile-first design approach improves overall user experience
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Leadership & Teamwork</h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Effective communication is crucial for team coordination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Time management and prioritization in high-pressure environments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Balancing technical excellence with practical problem-solving
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create innovative solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-8 py-4 bg-primary-900 text-white font-semibold rounded-full hover:bg-primary-800 transition-colors"
              >
                Let's Connect
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