import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Palette, Code, Database, Globe, Smartphone, Shield, Zap, MessageSquare, LineChart } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import ServiceCard from '../components/ServiceCard';

const pricingPlans = [
  {
    title: 'Small Business Ready Website',
    price: '$39.99',
    features: [
      '$199 Set up fee',
      '1 Email Address',
      'Monthly Backups',
      '4 Pages Website',
      'Plugin Updates',
      'One page SEO',
      'Responsive Design',
      'Basic SEO Setup',
      '1 Month Support',
      'Contact Form',
      'Includes Free Changes within 1-2 business days',
    ],
  },
  {
    title: 'Business Growth SEO Bundle',
    price: '$190',
    features: [
      '$399 Set up fee',
      'Includes everything in the Small Business Ready Website ',
      '7 Pages Website',
      'Advanced Design',
      'Full SEO Package',
      'Analytics Integration',
      'Social Media Integration',
    ],
    isPopular: true,
  },
  {
    title: 'Enterprise Growth Bundle',
    price: '$449',
    features: [
      '$999 Set up fee',
      'Includes everything in the Business Growth SEO Bundle ',
      'Unlimited Pages',
      'Custom Design',
      'Advanced SEO',
      'E-commerce Integration',
      'Custom Features',
      'Priority Support',
      'Performance Optimization',
      'Custom Forms',
    ],
  },
];

const services = [
  {
    title: 'UI/UX Design',
    price: '$299',
    features: ['Wireframing', 'Prototyping', 'User Testing'],
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: 'Custom Development',
    price: '$599',
    features: ['Frontend', 'Backend', 'API Integration'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: 'Database Design',
    price: '$399',
    features: ['Schema Design', 'Optimization', 'Migration'],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'SEO Services',
    price: '$249',
    features: ['Keyword Research', 'On-page SEO', 'Link Building'],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Additional Page',
    price: '$99',
    features: ['Per extra page'],
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'Security Audit',
    price: '$349',
    features: ['Vulnerability Scan', 'Security Report', 'Fixes'],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimization',
    price: '$299',
    features: ['Speed Analysis', 'Optimization', 'Monitoring'],
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Content Strategy',
    price: '$199',
    features: ['Content Plan', 'SEO Writing', 'Editorial Calendar'],
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: 'Analytics Setup',
    price: '$149',
    features: ['Google Analytics', 'Reports', 'Insights'],
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: 'Website Maintenance',
    price: '$99',
    features: ['Updates', 'Backups', 'Security'],
    icon: <Layout className="w-6 h-6" />,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Build Your Dream Website with CyberSide Studio
            </h1>
            <p className="text-xl text-indigo-200 mb-8">
              Professional web development solutions for businesses of all sizes.
              Transform your online presence with our expert team.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Choose Your Perfect Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Let's transform your vision into reality. Contact us today for a free consultation
            and take the first step towards your new website.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}