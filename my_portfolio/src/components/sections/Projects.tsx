import { projects } from '@/data/projects';
import { Project } from '@/types';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex space-x-4">
          {project.githubUrl && (
            <Button asChild variant="secondary" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button asChild variant="primary" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View More CTA */}
        <div className="text-center">
          <Button asChild variant="secondary" size="lg">
            <a href="/projects" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};