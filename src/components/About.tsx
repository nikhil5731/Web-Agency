'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To create exceptional digital experiences that drive business growth and user satisfaction.'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in innovation, quality, collaboration, and delivering value to our clients.'
  },
  {
    icon: Award,
    title: 'Our Promise',
    description: 'We commit to delivering projects on time, within budget, and exceeding expectations.'
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A talented group of designers, developers, and strategists passionate about digital excellence.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: '/api/placeholder/200/200',
    description: '10+ years of experience in digital design and brand strategy.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: '/api/placeholder/200/200',
    description: 'Full-stack developer with expertise in modern web technologies.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    image: '/api/placeholder/200/200',
    description: 'User experience specialist focused on creating intuitive interfaces.'
  },
  {
    name: 'David Kim',
    role: 'Project Manager',
    image: '/api/placeholder/200/200',
    description: 'Ensures smooth project delivery and client communication.'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Agency
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2019, we've been at the forefront of digital innovation, helping businesses 
            of all sizes establish their online presence and achieve their digital goals. Our passion 
            for technology and design drives us to create solutions that not only look great but also 
            perform exceptionally.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented team brings together diverse skills and experiences to deliver 
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h4>
              
              <p className="text-purple-600 font-semibold mb-3">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-purple-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-purple-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 