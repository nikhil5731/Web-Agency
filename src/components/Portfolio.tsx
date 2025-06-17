'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with advanced features, payment integration, and admin dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'A stunning corporate website with modern design, animations, and excellent user experience.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'A secure and user-friendly mobile banking application with biometric authentication.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Biometrics'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Restaurant Management',
    category: 'Web Application',
    description: 'Complete restaurant management system with ordering, inventory, and analytics.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Creative portfolio website with smooth animations and interactive elements.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    category: 'Web Application',
    description: 'Collaborative task management application with real-time updates and team features.',
    image: '/api/placeholder/600/400',
    technologies: ['Angular', 'Express.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  }
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here&apos;s a selection of our recent work, showcasing our commitment to quality and innovation.
            Each project is crafted with attention to detail and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white rounded-full text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white rounded-full text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
} 