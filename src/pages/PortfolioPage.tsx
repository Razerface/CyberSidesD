import React from 'react';
import { ExternalLink, Code, Palette, Globe } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced filtering and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&h=500',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    category: 'E-commerce'
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and medical records.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=500',
    tags: ['React', 'Express', 'PostgreSQL'],
    link: '#',
    category: 'Healthcare'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tour capabilities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=500',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#',
    category: 'Real Estate'
  },
  {
    title: 'Educational Platform',
    description: 'Online learning management system with live classes and course tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&h=500',
    tags: ['React', 'Firebase', 'WebRTC'],
    link: '#',
    category: 'Education'
  },
  {
    title: 'Restaurant Management',
    description: 'Complete restaurant management solution with online ordering and reservations.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=500',
    tags: ['Vue.js', 'Node.js', 'MySQL'],
    link: '#',
    category: 'Hospitality'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Workout planning and progress tracking application with social features.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=500',
    tags: ['React Native', 'GraphQL', 'MongoDB'],
    link: '#',
    category: 'Health & Fitness'
  }
];

const processSteps = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Design',
    description: 'We create beautiful, intuitive designs that engage users and reflect your brand identity.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Development',
    description: 'Our expert developers bring designs to life using the latest technologies and best practices.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Deployment',
    description: 'We ensure your project is properly deployed and optimized for performance.'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Portfolio Header */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <a href={project.link} className="text-indigo-600 hover:text-indigo-700">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'].map((tech, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <span className="font-semibold text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}