'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Globe, Zap, Shield } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Beautiful, responsive designs that captivate your audience and reflect your brand identity.',
    features: ['UI/UX Design', 'Responsive Layouts', 'Brand Integration', 'User Experience']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Database Design']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users on any device.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Progressive Web Apps']
  },
  {
    icon: Globe,
    title: 'E-commerce',
    description: 'Complete online store solutions that drive sales and provide seamless shopping experiences.',
    features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimize your website for speed, SEO, and user experience to maximize conversions.',
    features: ['Speed Optimization', 'SEO Services', 'Analytics Setup', 'Conversion Optimization']
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally.',
    features: ['Security Updates', 'Content Updates', 'Technical Support', 'Performance Monitoring']
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital world.
            From concept to launch, we're with you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
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
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  )
} 