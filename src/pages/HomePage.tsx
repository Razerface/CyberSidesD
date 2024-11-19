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
    features: ['Google Analytics', 'Report
