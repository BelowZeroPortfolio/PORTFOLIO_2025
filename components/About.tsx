import Image from 'next/image';
import Link from 'next/link';
import { HiUser } from 'react-icons/hi';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-32 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6">
            <HiUser className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            Who I Am
          </h2>
          <p className="text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
            Building efficient, practical solutions that drive real-world results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Tagline */}
          <div className="flex flex-col items-center lg:items-start justify-center h-full w-full">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-md mx-auto">
              <Image
                src="/me.jpg"
                alt="Carl Navid Cata-an professional graduation photo"
                width={400}
                height={500}
                className="object-cover rounded-2xl w-full h-full"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {/* Tagline under image */}
            <div className="mt-6 w-full">
              <div className="bg-primary-50 border border-primary-100 rounded-xl shadow-sm px-6 py-4">
                <blockquote className="text-base md:text-lg text-primary-700 font-bold italic text-center lg:text-left">
                  Determination is all you need. <br /><span className="not-italic text-primary-400 font-light text-sm">-Carl Navid Cata-an</span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8 md:space-y-12 flex flex-col justify-center">
            <div>
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-primary-800 mb-4">Web Developer. Problem Solver. Innovator.</h3>
              <div className="prose prose-base md:prose-lg text-primary-600 leading-relaxed space-y-4 md:space-y-6 max-w-none">
                <p>
                  Web Developer skilled in building user-friendly applications, with hands-on experience in software development, web technologies, and systems analysis. Passionate about creating efficient, practical solutions and collaborating on projects that drive real-world results.
                </p>
                <p>
                  A fresh graduate with a Bachelor of Science in Information Systems from Bago City College (2021-2025), with relevant coursework in Systems Analysis, Database Management, and Information Systems Management. My toolkit spans from <span className="font-semibold">PHP</span>, <span className="font-semibold">C#</span>, and <span className="font-semibold">JavaScript</span> to the cutting edge of <span className="font-semibold">Microsoft Power Platform</span> and <span className="font-semibold">AL programming</span> in Business Central.
                </p>
                <p>
                  Currently working as a Web Developer at Lexite PH, building AI and IoT-integrated solutions including a Pest Detection Web App and QR Attendance System. Previously developed business automation solutions at NinjaTribe Axilara using Microsoft Business Central and Power Platform tools.
                </p>
                <p>
                  <span className="italic">Let&apos;s build something great together—efficient, scalable, and impactful.</span>
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-4 rounded-xl">
                <div className="text-sm text-primary-500 mb-1">Languages</div>
                <div className="font-semibold text-primary-800">English, Tagalog</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-xl">
                <div className="text-sm text-primary-500 mb-1">Location</div>
                <div className="font-semibold text-primary-800">Pulupandan, Neg. Occ.</div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
} 
