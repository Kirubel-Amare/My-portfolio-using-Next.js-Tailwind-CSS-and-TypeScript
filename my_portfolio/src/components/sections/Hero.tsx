import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                KIRUEL AMARE
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-600">
                Full-Stack Developer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                I create modern, responsive web applications using cutting-edge technologies.
                Passionate about clean code, user experience, and bringing ideas to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button asChild variant="secondary" size="lg">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kirubel-Amare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-sky-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-sky-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="mailto:your.akirubel8@gmail.com"
                className="p-3 bg-white hover:bg-sky-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end pl-100 ">
            <div className="relative group ">
              <div className="bg-gradient-to-br from-primary-100 to-primary-100 rounded-3xl p-2 shadow-2xl flex items-center justify-center transition-transform duration-700 ">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="w-[600px] h-[700px] bg-gray-200 rounded-2xl overflow-hidden relative transition-transform duration-200 group-hover:shadow-1xl">
                    <img
                      src="/images/photo.jpg"
                      alt="Kirubel Amare"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle gradient shine animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>  
    </section>
  );
};
