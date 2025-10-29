'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github, ArrowLeft, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="h-64 bg-gray-200 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        
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
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProjects = useMemo(() => {
    let filtered = filter === 'featured' 
      ? projects.filter(project => project.featured)
      : projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [filter, searchTerm]);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600">
              A collection of my work showcasing various technologies and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === 'featured'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm 
                  ? `No projects match "${searchTerm}". Try adjusting your search.`
                  : 'No projects match your filter criteria.'
                }
              </p>
              <Button 
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 text-center">
            <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
                  <div className="text-gray-600">Total Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-600">Featured Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {new Set(projects.flatMap(p => p.technologies)).size}
                  </div>
                  <div className="text-gray-600">Technologies Used</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}