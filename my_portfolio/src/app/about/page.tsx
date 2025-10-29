import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Download, Mail, Calendar, Award, School } from 'lucide-react';

const timeline = [
  {
    year: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    description: "Leading development of web applications using modern technologies."
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Startup XYZ",
    description: "Developed and maintained multiple client projects and internal tools."
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Created responsive websites and web applications for various clients."
  }
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    year: "2014 - 2018",
    icon: <School className="w-6 h-6" />
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "Code Academy",
    year: "2018",
    icon: <Award className="w-6 h-6" />
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Learn more about my journey, skills, and passion for web development.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Hello! I'm a passionate full-stack developer with over 5 years of experience 
                  building web applications. My journey began in college where I discovered 
                  my love for programming and problem-solving.
                </p>
                
                <p className="text-lg text-gray-600">
                  I specialize in modern web technologies including React, Next.js, TypeScript, 
                  Node.js, and cloud platforms. I'm passionate about creating efficient, 
                  scalable, and user-friendly applications that solve real-world problems.
                </p>
                
                <p className="text-lg text-gray-600">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, hiking in the mountains, or reading tech blogs to 
                  stay updated with the latest industry trends.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild variant="primary">
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <School className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Web Development</h4>
                    <p className="text-gray-600">
                      Building responsive, performant web applications using modern frameworks and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">UI/UX Design</h4>
                    <p className="text-gray-600">
                      Creating intuitive user interfaces with focus on user experience and accessibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Consulting</h4>
                    <p className="text-gray-600">
                      Helping businesses choose the right technology stack and architecture for their needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <span className="text-primary-600 font-medium">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1">{item.title}</h3>
                      <p className="text-gray-700 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-primary-600 mb-2">{edu.school}</p>
                      <p className="text-gray-600">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}