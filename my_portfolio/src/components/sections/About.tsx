import { Button } from '@/components/ui/Button';
import { Code, Palette, Database, Cloud, Rocket, Users, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with React, Next.js, and modern CSS.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications and RESTful APIs with Node.js and cloud services.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Designing user-centered interfaces with focus on usability, accessibility, and aesthetics.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'DevOps & Deployment',
    description: 'Deploying and maintaining applications in cloud environments with CI/CD pipelines.',
    color: 'from-orange-500 to-red-500'
  }
];

const stats = [
  { icon: <Rocket className="w-6 h-6" />, value: '20+', label: 'Projects Completed' },
  { icon: <Users className="w-6 h-6" />, value: '15+', label: 'Happy Clients' },
  { icon: <Target className="w-6 h-6" />, value: '3+', label: 'Years Experience' },
  { icon: <Zap className="w-6 h-6" />, value: '10+', label: 'Technologies' }
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-100">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse">
              
            </div>
            About Me
          </div>
          <h2 className="text-section font-bold text-gray-900 mb-4">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies 
            and a love for creating exceptional digital experiences that make an impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm a dedicated <strong className="text-primary-600">full-stack developer</strong> with 
                over 3 years of experience building web applications. My journey started in college where I 
                discovered my passion for turning complex problems into elegant solutions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in the <strong className="text-primary-600">MERN stack</strong> and have extensive 
                experience with modern frameworks like Next.js, TypeScript, and cloud platforms. I believe in 
                writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                <strong className="text-primary-600"> open-source projects</strong>, or sharing knowledge through 
                technical writing and mentorship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild variant="primary" size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Let's Work Together
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover p-6 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-3xl p-8 border border-primary-100 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-primary-100">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};