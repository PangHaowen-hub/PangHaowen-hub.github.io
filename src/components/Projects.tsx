import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-6"></div>
            <p className="text-slate-400 text-center max-w-2xl">
                A collection of my recent work and open source contributions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project) => (
                <div 
                    key={project.id} 
                    className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1"
                >
                    {/* Image */}
                    <div className="h-64 overflow-hidden relative">
                         {/* Overlay */}
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
