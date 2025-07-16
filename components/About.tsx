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
            Blending logic and artistry to craft digital experiences that inspire and connect.
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
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-primary-800 mb-4">Visual Storyteller. Code Poet. Innovator.</h3>
              <div className="prose prose-base md:prose-lg text-primary-600 leading-relaxed space-y-4 md:space-y-6 max-w-none">
                <p>
                  With a camera in one hand and a keyboard in the other, I see the world as a canvas for both code and creativity.<br/>
                  Currently pursuing my Bachelor of Science in Information Systems at Bago City College, I’ve transformed my passion for technology into a journey of visual storytelling—whether through lines of code or the lens of a camera.
                </p>
                <p>
                  I thrive on crafting digital experiences that are as elegant as they are functional. My toolkit spans from classic languages like <span className="font-semibold">PHP</span> and <span className="font-semibold">C#</span> to the cutting edge of <span className="font-semibold">Microsoft Power Platform</span>, empowering me to build solutions that are efficient, scalable, and visually compelling.
                </p>
                <p>
                  Rooted in Pulupandan, Negros Occidental, I’m always exploring new ways to blend logic with artistry. When I’m not coding, you’ll find me collaborating with creative minds, capturing moments, and staying ahead of the latest tech trends.
                </p>
                <p>
                  <span className="italic">Let’s create something unforgettable—where every pixel and every line of code tells a story.</span>
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
} 