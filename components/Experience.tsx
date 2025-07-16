import React from 'react';
import { HiAcademicCap, HiCode, HiCalendar, HiLocationMarker, HiStar } from 'react-icons/hi';
import { GiTrophy } from 'react-icons/gi';

const achievements = [
  {
    title: "BSIS Student & Lead Developer",
    company: "Bago City College",
    location: "Bago City, Philippines",
    period: "2021 - 2025", 
    duration: "4 Years",
    description: "Bachelor of Science in Information Systems student, led hackathon team to 2nd place victory as Lead Developer. Managed team coordination, technical architecture, and project delivery.",
    badge: "👨‍💻 Lead Developer",
    badgeColor: "from-blue-500 to-indigo-600",
    badgeText: "text-white",
    icon: <HiCode className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-100",
    highlights: ["Team Leadership", "Hackathon Success", "Project Management"],
    impact: "Led team to 2nd place in college hackathon competition"
  },
  {
    title: "Programmer of the Year Award", 
    company: "Bago City College",
    location: "Bago City, Philippines",
    period: "2025",
    duration: "Academic Year",
    description: "Recognized for exceptional coding skills, innovative problem-solving, and significant contributions to school projects. Demonstrated leadership in programming competitions and technical excellence.",
    badge: "🏆 Award Winner",
    badgeColor: "from-amber-500 to-yellow-600",
    badgeText: "text-white",
    icon: <GiTrophy className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-100",
    highlights: ["Technical Excellence", "Innovation", "Leadership"],
    impact: "Recognized as the top programmer among all students"
  },
  {
    title: "Software Development Training Program",
    company: "SDTP 2024-2025",
    location: "Microsoft Philippines",
    period: "2024 - 2025",
    duration: "5 Months",
    description: "Completed intensive training in coding, debugging, and collaborative development. Gained expertise in Microsoft Power Platform tools including Power Apps, Power Automate, and Power Pages.",
    badge: "🎓 Certified Graduate",
    badgeColor: "from-emerald-500 to-green-600",
    badgeText: "text-white",
    icon: <HiAcademicCap className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-100",
    highlights: ["Power Platform Expertise", "Collaborative Development", "Professional Certification"],
    impact: "Achieved professional certification in Microsoft Power Platform development"
  }
];

const AchievementCard = ({ achievement, index, isEven }: { achievement: any; index: number; isEven: boolean }) => (
  <div className="w-full lg:w-full">
    <div className="group bg-white p-6 md:p-8 rounded-2xl border border-primary-200 hover:border-primary-300 hover:shadow-xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/15 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-start space-x-4 mb-6">
          <div className={`p-3 ${achievement.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0`}>
            {achievement.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-3">
              <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                <HiCalendar className="w-3 h-3 mr-1" />
                {achievement.period}
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                {achievement.duration}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors mb-2">
              {achievement.title}
            </h3>
          </div>
        </div>

        {/* Company & Location */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
            <span className="text-primary-700 font-semibold">{achievement.company}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <HiLocationMarker className="w-4 h-4 mr-1" />
            <span className="text-sm">{achievement.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-primary-700 leading-relaxed mb-6 text-base">
          {achievement.description}
        </p>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary-800 mb-3 flex items-center">
            <HiStar className="w-4 h-4 mr-2 text-primary-600" />
            Key Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievement.highlights.map((highlight: string, idx: number) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200">
          <p className="text-sm text-primary-700 font-medium">
            <span className="font-semibold text-primary-800">Impact:</span> {achievement.impact}
          </p>
        </div>

        {/* Achievement Badge */}
        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${achievement.badgeColor} ${achievement.badgeText} text-sm font-semibold rounded-full shadow-sm`}>
          {achievement.badge}
        </div>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 text-primary-700 text-sm font-medium mb-6 hover:shadow-md transition-all duration-300">
            <HiStar className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Experience & Achievements
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            A timeline of key milestones and achievements that showcase my growth as a developer, 
            highlighting significant accomplishments and continuous commitment to excellence in programming.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 hidden lg:block"></div>
          
          {/* Achievements */}
          <div className="space-y-12 lg:space-y-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="relative flex items-center"
              >
                {/* Timeline Connector for Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Mobile Timeline Dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full border-4 border-white lg:hidden shadow-lg"></div>
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-transparent lg:hidden"></div>
                
                {/* Content Card */}
                <div className={`w-full lg:w-6/12 ${index % 2 === 0 ? 'lg:pr-12 lg:mr-auto' : 'lg:pl-12 lg:ml-auto'}`}>
                  <AchievementCard 
                    achievement={achievement} 
                    index={index} 
                    isEven={index % 2 === 0} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-4 animate-pulse"></div>
            <span className="text-primary-700 font-semibold text-sm md:text-base">
              {achievements.length} Major Achievements • Continuous Growth & Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 