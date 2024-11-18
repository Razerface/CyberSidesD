import React from 'react';
import { Layout, Palette, Code, Database, Globe, Smartphone, Shield, Zap, MessageSquare, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Create intuitive and engaging user experiences that keep your customers coming back.',
    features: ['SEO for Google', 'SSL', 'Content Writing', 'Hosting', 'Maintenence'],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Development',
    description: 'Build robust and scalable web applications tailored to your specific needs.',
    features: ['Frontend Development', 'Backend Development', 'API Integration', 'Database Design', 'Security Implementation', 'Custom apps'],
  },
  // Add more services...
];

const comparisonTable = {
  headers: ['Feature', 'Small Business Ready', 'Business Growth', 'Enterprise Growth'],
  rows: [
    ['Custom Design', '✓', '✓', '✓'],
    ['Responsive Layout', '✓', '✓', '✓'],
    ['SEO Optimization', '✓', '✓', '✓'],
    ['Content Management', '-', '✓', '✓'],
    ['E-commerce Integration', '-', '✓', '✓'],
    ['Custom Features', '-', '-', '✓'],
    ['Priority Support', '-', '-', '✓'],
  ]
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Services Header */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs.
            From design to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-indigo-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr>
                  {comparisonTable.headers.map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-sm text-gray-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}