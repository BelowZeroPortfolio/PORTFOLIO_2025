import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaUsers, FaTrophy, FaLightbulb, FaCode, FaChartLine, FaCogs, FaRocket, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const powerPlatformTools = [
  { name: 'Power Apps', icon: <Image src="/power-apps.png" alt="Power Apps" width={32} height={32} className="w-8 h-8" />, description: 'Low-code app development' },
  { name: 'Power Automate', icon: <Image src="/power-automate.png" alt="Power Automate" width={32} height={32} className="w-8 h-8" />, description: 'Workflow automation' },
  { name: 'Power Pages', icon: <Image src="/power-pages.png" alt="Power Pages" width={32} height={32} className="w-8 h-8" />, description: 'Website creation' },
];

const projectMetrics = [
  { label: 'Trainee', value: 'SDTP', icon: <FaCode className="w-5 h-5" /> },
  { label: 'Tools', value: 'Automation', icon: <FaTrophy className="w-5 h-5" /> },
  { label: 'Platforms Learned', value: '3 Tools', icon: <FaCogs className="w-5 h-5" /> },
];

export default function PowerPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-max section-padding py-8">
          <Link href="/#work" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4">
              <FaCogs className="w-4 h-4 mr-2 text-blue-300" />
              Microsoft Power Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Microsoft Power Platform Solutions
            </h1>
            
            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              Comprehensive training and development in Microsoft's low-code platform, mastering Power Apps, 
              Power Automate, and Power Pages to create efficient business solutions and workflows.
            </p>
            
            {/* Project Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-blue-200 mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-blue-300">{metric.label}</div>
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
                  During the Software Development Training Program (SDTP) 2024-2025, I immersed myself in 
                  Microsoft's Power Platform ecosystem, developing expertise in low-code development and 
                  business process automation.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  The training focused on creating practical business applications that streamline operations, 
                  automate workflows, and enhance productivity through Microsoft's integrated platform solutions.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/microsoft-platform.jpg"
                  alt="Microsoft Power Platform overview showing Power Apps, Power Automate, and Power Pages"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl p-8"
                />
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">The Challenge</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Business Process Automation Needs</h3>
              <p className="text-lg text-blue-700 leading-relaxed mb-6">
                Modern businesses face challenges with manual processes, data silos, and inefficient workflows. 
                The Power Platform training addressed these common business problems:
              </p>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Manual data entry and repetitive tasks consuming valuable time
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Disconnected systems and lack of integrated workflows
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited technical resources for custom application development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Need for rapid solution deployment without extensive coding
                </li>
              </ul>
            </div>
          </section>

          {/* Solution Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Our Solution</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <Image src="/power-apps.png" alt="Power Apps" width={64} height={64} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Power Apps</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  Developed custom business applications using Power Apps' intuitive drag-and-drop interface, 
                  creating responsive apps that work across web and mobile platforms.
                </p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Canvas and model-driven apps</li>
                  <li>• Custom connectors and data integration</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Real-time collaboration features</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <Image src="/power-automate.png" alt="Power Automate" width={64} height={64} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Power Automate</h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  Created automated workflows and business processes using Power Automate, eliminating 
                  manual tasks and improving operational efficiency.
                </p>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Automated approval workflows</li>
                  <li>• Data synchronization between systems</li>
                  <li>• Email notifications and alerts</li>
                  <li>• Scheduled task automation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  <Image src="/power-pages.png" alt="Power Pages" width={64} height={64} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">Power Pages</h3>
                <p className="text-purple-700 leading-relaxed mb-4">
                  Built modern, responsive websites using Power Pages, enabling businesses to create 
                  professional web presence with integrated business data.
                </p>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Professional website templates</li>
                  <li>• Customer portal development</li>
                  <li>• Content management system</li>
                  <li>• SEO-optimized pages</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Technical Implementation</h2>
            
            {/* Power Platform Tools */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Power Platform Tools Mastered</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {powerPlatformTools.map((tool, index) => (
                  <div key={index} className="bg-white border border-primary-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">{tool.icon}</div>
                    <div className="text-lg font-bold text-primary-800 mb-2">{tool.name}</div>
                    <div className="text-sm text-primary-600">{tool.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Platform Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Data Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• Dataverse for data storage</li>
                    <li>• SharePoint integration</li>
                    <li>• SQL Server connectivity</li>
                    <li>• External data connectors</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Application Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• Power Apps for UI/UX</li>
                    <li>• Power Automate for workflows</li>
                    <li>• Power Pages for web presence</li>
                    <li>• Custom connectors</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Integration Layer</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• Microsoft 365 integration</li>
                    <li>• Azure services connectivity</li>
                    <li>• Third-party API connections</li>
                    <li>• Real-time data synchronization</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-3">Security & Governance</h4>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li>• Role-based access control</li>
                    <li>• Data loss prevention</li>
                    <li>• Compliance monitoring</li>
                    <li>• Audit trails</li>
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
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Complex Workflow Design</h3>
                <p className="text-primary-700 mb-3">
                  Designing intricate business processes with multiple approval levels and conditional logic.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Used Power Automate's visual designer with conditional branches, 
                    parallel processing, and error handling to create robust, scalable workflows.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: Data Integration Complexity</h3>
                <p className="text-primary-700 mb-3">
                  Connecting multiple data sources and ensuring real-time synchronization across platforms.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Implemented custom connectors and used Dataverse as the central 
                    data hub, with Power Automate triggers for real-time data updates.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Challenge: User Experience Optimization</h3>
                <p className="text-primary-700 mb-3">
                  Creating intuitive, responsive applications that work seamlessly across all devices.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Solution:</strong> Leveraged Power Apps' responsive design features, implemented 
                    custom themes, and used mobile-first design principles for optimal user experience.
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
                    Low-code platforms accelerate development without sacrificing functionality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integration capabilities are crucial for enterprise solutions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    User experience design is essential even in low-code environments
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-primary-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Business Value</h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rapid prototyping enables faster stakeholder feedback
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automation significantly reduces operational costs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scalable solutions support business growth and evolution
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-12">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
              Let's leverage Microsoft Power Platform to streamline your operations and boost productivity.
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