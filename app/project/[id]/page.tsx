import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const projectsData: Record<string, any> = {
  'mdrrmo-emergency-response': {
    title: "MDRRMO Emergency Response System",
    description: "Built comprehensive emergency response platform with Laravel admin dashboard and React Native mobile app. Features real-time incident reporting with GPS tracking, team coordination, in-app chat, and push notifications.",
    overview: "Developed a full-stack emergency response coordination system for the Municipal Disaster Risk Reduction and Management Office (MDRRMO). The platform consists of a Laravel-based admin dashboard for dispatchers and a React Native mobile application for field responders, enabling seamless communication and real-time incident management during emergency situations.",
    challenge: "Emergency response teams needed a modern solution to replace manual radio communication and paper-based reporting. The system had to work reliably in areas with poor connectivity, provide real-time location tracking, and enable instant communication between dispatchers and field teams.",
    solution: "Architected a dual-platform solution with a web dashboard for command center operations and a mobile app for field responders. Implemented WebSocket connections for real-time updates, offline-first architecture for the mobile app, and integrated GPS tracking with live map visualization. Added report limiting to prevent spam and ensure data quality.",
    impact: [
      "Reduced emergency response coordination time",
      "Enabled real-time tracking of rescue teams in the field",
      "Improved communication between dispatchers and responders",
      "Digitized incident reporting and documentation"
    ],
    images: ["/rescue1.png", "/rescue2.png"],
    features: [
      "Real-time Emergency Coordination",
      "GPS Location & Live Maps",
      "In-App Chat System",
      "Push Notifications",
      "Team Management",
      "Incident Reporting with Photos",
      "Report Limiting & Validation",
      "WebSocket-based Updates",
      "Offline Support"
    ],
    techStack: ["Laravel 11", "React Native", "Expo", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    year: "2026",
    company: "Rescue Coordination Platform"
  },
  'pest-detection': {
    title: "Pest Detection Web App",
    description: "Built using PHP, Tailwind, MySQL, Ngrok, YOLOv8, and IoT sensors to monitor and log pests with a real-time dashboard. Delivers AI-powered pest detection with live monitoring capabilities.",
    overview: "Developed an AI-powered pest detection system for agricultural monitoring. The platform integrates IoT sensors with YOLOv8 computer vision to automatically detect and classify pests in real-time, providing farmers with instant alerts and detailed analytics through a web dashboard.",
    challenge: "Traditional pest monitoring requires manual inspection, which is time-consuming and often detects infestations too late. Farmers needed an automated solution that could provide early warnings and accurate pest identification.",
    solution: "Implemented a computer vision system using YOLOv8 for real-time pest detection, connected to IoT sensors deployed in the field. Built a PHP-based dashboard for monitoring, logging, and analyzing pest activity patterns. Used Ngrok for secure remote access to the system.",
    impact: [
      "Automated pest detection and classification",
      "Early warning system for pest infestations",
      "Reduced manual inspection time",
      "Data-driven pest management decisions"
    ],
    images: ["/pest1.png", "/pest2.png", "/pest3.png"],
    features: [
      "AI-Powered Detection",
      "Real-time Dashboard",
      "IoT Sensors Integration",
      "Pest Monitoring & Logging",
      "Automated Alerts",
      "Historical Data Analysis"
    ],
    techStack: ["PHP", "Tailwind CSS", "MySQL", "YOLOv8", "IoT"],
    year: "2025",
    company: "Lexite PH"
  },
  'qr-attendance': {
    title: "QR Attendance System",
    description: "Developed Laravel-based platform with QR code scanning and SMS alerts on check-in/out. Full-stack solution following coding standards to enhance operational efficiency.",
    overview: "Created a comprehensive attendance management system for organizations to track employee check-ins and check-outs using QR code technology. The platform automatically sends SMS notifications to designated contacts when employees scan in or out, providing real-time attendance monitoring.",
    challenge: "Manual attendance tracking was prone to errors and time theft. Organizations needed a reliable, automated system that could verify attendance and notify supervisors in real-time.",
    solution: "Built a Laravel-based platform with QR code generation and scanning capabilities. Integrated SMS API for instant notifications on check-in/out events. Implemented comprehensive reporting features for attendance analytics and export functionality.",
    impact: [
      "Eliminated manual attendance tracking errors",
      "Real-time attendance notifications via SMS",
      "Improved accountability and punctuality",
      "Streamlined payroll processing"
    ],
    images: ["/qr1.png", "/qr2.png", "/qr3.png", "/qr4.png"],
    features: [
      "QR Code Scanning",
      "SMS Integration",
      "Attendance Reports",
      "Real-time Notifications",
      "Employee Management",
      "Export to Excel/PDF"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    year: "2025",
    company: "Lexite PH"
  },
  'support-system': {
    title: "Support System Automation",
    description: "Developed a ticket support system using Power Automate, Forms, SharePoint, and Teams. Reduced average response time by 40% and increased issue resolution efficiency by 35% across the team.",
    overview: "Designed and implemented an automated ticket support system using Microsoft Power Platform to streamline IT support operations. The system integrates Power Automate workflows, Microsoft Forms for ticket submission, SharePoint for data storage, and Teams for notifications.",
    challenge: "The support team was overwhelmed with email-based requests, leading to missed tickets, slow response times, and poor tracking. There was no centralized system to manage and prioritize support requests.",
    solution: "Created an automated workflow using Power Automate that captures form submissions, creates tickets in SharePoint, assigns them based on category, and sends notifications to the appropriate team members via Teams. Implemented SLA tracking and automated escalation for overdue tickets.",
    impact: [
      "40% reduction in average response time",
      "35% improvement in issue resolution efficiency",
      "Eliminated lost or missed support requests",
      "Better workload distribution across team"
    ],
    images: ["/power-apps.png", "/power-automate.png", "/power-pages.png"],
    features: [
      "Workflow Automation",
      "Team Collaboration",
      "Automated Ticket Assignment",
      "SLA Tracking",
      "Teams Integration",
      "Real-time Notifications"
    ],
    techStack: ["Power Automate", "Power Apps", "Power Pages", "SharePoint", "Microsoft Teams"],
    year: "2025",
    company: "NinjaTribe Axilara"
  },
  'business-central': {
    title: "Business Central & Sales Enterprise Sync",
    description: "Synced Microsoft Business Central with Sales Enterprise using AL programming, reducing manual work by 50%. Coordinated with clients to deliver seamless, effective solutions.",
    overview: "Developed a custom integration between Microsoft Business Central ERP and Sales Enterprise CRM using AL programming language. The solution automates data synchronization between both systems, eliminating manual data entry and ensuring consistency across platforms.",
    challenge: "The client was manually transferring data between Business Central and their Sales Enterprise system, leading to errors, delays, and inconsistent information. This manual process consumed significant staff time and created data integrity issues.",
    solution: "Programmed custom AL extensions for Business Central to automatically sync customer data, sales orders, and inventory information with Sales Enterprise. Implemented error handling, conflict resolution, and scheduled synchronization jobs. Worked closely with the client to map data fields and define business rules.",
    impact: [
      "50% reduction in manual data entry work",
      "Eliminated data synchronization errors",
      "Real-time data consistency across systems",
      "Improved sales team productivity"
    ],
    images: ["/microsoft-platform.jpg"],
    features: [
      "System Integration",
      "AL Programming",
      "Automated Data Sync",
      "Error Handling",
      "Client Coordination",
      "Custom Business Logic"
    ],
    techStack: ["C#", "AL", "Power Automate", "ASP.NET", "Business Central"],
    year: "2025",
    company: "NinjaTribe Axilara"
  },
  'hackathon': {
    title: "Hackathon Winning Solution",
    description: "Led team as Lead Developer in Bago City College BSIS Hackathon 2024, architecting innovative solutions and achieving 2nd place. Earned Programmer of the Year 2025 award.",
    overview: "Led a team of developers as Lead Developer in the Bago City College BSIS Hackathon 2024, where we built an innovative web application that secured 2nd place. The project showcased technical excellence and creative problem-solving, contributing to my recognition as Programmer of the Year 2025.",
    challenge: "The hackathon presented a time-constrained challenge requiring rapid prototyping, team coordination, and delivery of a functional solution within 24 hours. We needed to balance innovation with practical implementation.",
    solution: "Architected a full-stack web application using PHP and JavaScript, with LeafletJS for interactive mapping features. Coordinated team efforts, delegated tasks effectively, and ensured code quality while meeting tight deadlines. Implemented responsive design with Tailwind CSS for optimal user experience.",
    impact: [
      "2nd place finish in competitive hackathon",
      "Recognized as Programmer of the Year 2025",
      "Demonstrated leadership and technical skills",
      "Delivered functional prototype in 24 hours"
    ],
    images: ["/hackathon.jpg"],
    features: [
      "Team Leadership",
      "Problem Solving",
      "Innovative Architecture",
      "Rapid Prototyping",
      "Interactive Maps",
      "Responsive Design"
    ],
    techStack: ["PHP", "JavaScript", "LeafletJS", "Tailwind CSS", "HTML5", "CSS3"],
    year: "2024",
    company: "Bago City College"
  }
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container-max section-padding py-6 md:py-12">
        <Link 
          href="/#work"
          className="inline-block text-sm text-primary-600 hover:text-primary-900 mb-8 md:mb-12"
        >
          ← Back
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-3">
            {project.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm text-primary-500 mb-8">
            <span>{project.company}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          {/* Images Grid - Smaller and at the top */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-[4/3] bg-primary-50">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
          
          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Overview</h2>
              <p className="text-base text-primary-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Challenge</h2>
              <p className="text-base text-primary-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Solution</h2>
              <p className="text-base text-primary-700 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Impact</h2>
              <ul className="space-y-2 text-primary-700">
                {project.impact.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-2 text-primary-700">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary-900 mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { id: 'mdrrmo-emergency-response' },
    { id: 'pest-detection' },
    { id: 'qr-attendance' },
    { id: 'support-system' },
    { id: 'business-central' },
    { id: 'hackathon' }
  ];
}
