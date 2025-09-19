'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PortfolioPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce platform built with Next.js, featuring AI-powered recommendations and real-time inventory management.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AI/ML'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development',
      featured: true
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics platform with machine learning insights, real-time data visualization, and predictive modeling.',
      image: '/projects/analytics.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI Solutions',
      featured: true
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with social features, workout plans, and health integration.',
      image: '/projects/fitness.jpg',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile Apps',
      featured: false
    },
    {
      title: 'Smart Home IoT System',
      description: 'Comprehensive IoT platform for smart home automation with voice control and energy optimization.',
      image: '/projects/smarthome.jpg',
      technologies: ['IoT', 'Node.js', 'MQTT', 'React', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT Solutions',
      featured: false
    },
    {
      title: 'Blockchain Voting Platform',
      description: 'Secure, transparent voting system built on blockchain technology with cryptographic verification.',
      image: '/projects/voting.jpg',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'IPFS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Blockchain',
      featured: false
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat platform with video calling, file sharing, and end-to-end encryption.',
      image: '/projects/chat.jpg',
      technologies: ['Socket.io', 'WebRTC', 'Node.js', 'React', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Apps', 'AI Solutions', 'IoT Solutions', 'Blockchain']
  
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border-2 border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-600 opacity-20">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            All Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-600 opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      <a
                        href={project.liveUrl}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your vision to life with our expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioPage
