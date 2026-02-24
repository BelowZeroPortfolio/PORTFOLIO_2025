'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'mdrrmo-emergency-response',
    title: "MDRRMO Emergency Response System",
    image: "/rescue1.png",
    year: "2026"
  },
  {
    id: 'pest-detection',
    title: "Pest Detection Web App",
    image: "/pest1.png",
    year: "2025"
  },
  {
    id: 'qr-attendance',
    title: "QR Attendance System",
    image: "/qr1.png",
    year: "2025"
  },
  {
    id: 'support-system',
    title: "Support System Automation",
    image: "/power-apps.png",
    year: "2025"
  },
  {
    id: 'business-central',
    title: "Business Central & Sales Enterprise Sync",
    image: "/microsoft-platform.jpg",
    year: "2025"
  },
  {
    id: 'hackathon',
    title: "Hackathon Winning Solution",
    image: "/hackathon.jpg",
    year: "2024"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-12 md:py-20 bg-white">
      <div className="container-max section-padding">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 md:mb-12">
          Projects
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/project/${project.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-50 mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <h3 className="text-base md:text-lg font-medium text-primary-900 mb-1 group-hover:text-primary-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary-500">{project.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
