'use client';

import { useState } from 'react';
import { Skill } from '@/types';
import { Code2, Server, Settings, Zap } from 'lucide-react';

const skills: Skill[] = [
  { name: 'JavaScript', level: 94, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 82, category: 'backend' },
  { name: 'PostgreSQL', level: 78, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
];

const categories = [
  { id: 'all' as const, name: 'All Skills', icon: <Zap className="w-5 h-5" /> },
  { id: 'frontend' as const, name: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
  { id: 'backend' as const, name: 'Backend', icon: <Server className="w-5 h-5" /> },
  { id: 'tools' as const, name: 'Tools', icon: <Settings className="w-5 h-5" /> },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-800 font-semibold text-lg">{skill.name}</span>
        <span className="text-primary-600 font-bold text-lg">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${isHovered ? skill.level : 0}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = skills.filter(skill => 
    activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-100">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            My Skills
          </div>
          <h2 className="text-section font-bold text-gray-900 mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life and create amazing digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-in-left">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Always Learning & Growing
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
                Currently diving deeper into cloud architecture, AI integration, and performance optimization.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {['React Native', 'GraphQL', 'Python', 'Machine Learning'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};