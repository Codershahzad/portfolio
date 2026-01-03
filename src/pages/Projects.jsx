import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Button from '../components/Button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filters = ['all', 'react', 'nextjs', 'fullstack'];

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-olive">Projects</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === filterItem
                  ? 'bg-olive text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-maroon transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-olive transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-olive-light/10 text-olive-dark text-xs font-medium rounded-full border border-olive-light/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="ghost" size="sm" fullWidth className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" size="sm" fullWidth className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-olive-light/10 to-maroon-light/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-olive-light/20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern web technologies.
            </p>
            <a href="/contact">
              <Button variant="primary" size="lg">
                Start a Project
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;