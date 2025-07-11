import React from 'react';

const achievements = [
  {
    title: "Software Development Training Program",
    company: "SDTP 2024-2025",
    period: "2024 - 2025",
    description: "Completed intensive training in coding, debugging, and collaborative development. Gained expertise in Microsoft Power Platform tools",
    badge: "🎓 Certified Graduate",
    badgeColor: "from-green-100 to-emerald-100 text-green-700",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#059669" strokeWidth="2" fill="none"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="#059669" strokeWidth="2" fill="none"/>
        <path d="M12 14v6.5" stroke="#059669" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Programmer of the Year Award", 
    company: "Bago City College",
    period: "2025",
    description: "Recognized for exceptional coding skills, innovative problem-solving, and significant contributions to school projects",
    badge: "🏆 Award Winner",
    badgeColor: "from-amber-100 to-yellow-100 text-amber-700",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 15l3.5-3.5L12 8l-3.5 3.5L12 15z" fill="#F59E0B"/>
        <path d="M9 22H6l6-6 6 6h-3l-4.5-4.5L9 22z" fill="#F59E0B"/>
        <circle cx="12" cy="8" r="2" fill="#F59E0B"/>
      </svg>
    )
  },
  {
    title: "BSIS Student & Lead Developer",
    company: "Bago City College",
    period: "2021 - 2025", 
    description: "Bachelor of Science in Information Systems student, led hackathon team to 2nd place victory as Lead Developer",
    badge: "👨‍💻 Lead Developer",
    badgeColor: "from-blue-100 to-indigo-100 text-blue-700",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function Experience() {
  return (
    <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Experience Highlights
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            Key milestones and achievements that showcase my growth as a developer and my 
            commitment to excellence in programming and software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 hidden lg:block"></div>
          
          {/* Achievements */}
          <div className="space-y-12 lg:space-y-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Connector for Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="group bg-white p-6 md:p-8 rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                    {/* Mobile Timeline Dot */}
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full border-4 border-white lg:hidden"></div>
                    <div className="absolute left-2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-transparent lg:hidden"></div>
                    
                    {/* Card Content */}
                    <div className="ml-6 lg:ml-0">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                            {achievement.icon}
                          </div>
                          <div>
                            <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm font-medium rounded-full mb-2">
                              {achievement.period}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                              {achievement.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Company */}
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-primary-600 font-medium">{achievement.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-primary-700 leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${achievement.badgeColor} text-sm font-medium rounded-full`}>
                        {achievement.badge}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-30 group-hover:opacity-70 transition-opacity"></div>
                  </div>
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden lg:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 