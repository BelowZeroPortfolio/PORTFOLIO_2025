import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-32">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Personal */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/me.jpg"
                alt="Carl Navid Cata-an professional graduation photo"
                width={320}
                height={320}
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Quote */}
            <div className="bg-primary-50 p-6 md:p-8 rounded-2xl">
              <blockquote className="text-base md:text-lg text-primary-700 font-medium italic">
&ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
              </blockquote>
              <cite className="text-sm text-primary-500 mt-2 block">— Steve Jobs</cite>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8 md:space-y-12">
            {/* About Text */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-primary-900 mb-6 md:mb-8">
                About Me
              </h2>
              
              <div className="prose prose-base md:prose-lg text-primary-600 leading-relaxed space-y-4 md:space-y-6">
                <p>
                  I&apos;m a dedicated programmer currently pursuing my Bachelor of Science in Information Systems 
                  at Bago City College. My passion for coding has led me to excel in multiple programming 
                  languages and earn recognition as Programmer of the Year.
                </p>
                
                <p>
                  I believe great code should be efficient, scalable, and maintainable. My experience spans 
                  from traditional programming with PHP and C# to modern low-code solutions with Microsoft 
                  Power Platform, allowing me to choose the best tools for each challenge.
                </p>
                
                <p>
                  From Pulupandan, Negros Occidental, I&apos;m constantly learning and growing in the tech field. 
                  When I&apos;m not coding, I enjoy collaborating with teams, solving complex problems, and 
                  staying updated with the latest programming trends and technologies.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
} 