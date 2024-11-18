import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}

export default function ServiceCard({ title, price, features, icon }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/project</span>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
            • {feature}
          </li>
        ))}
      </ul>

      <Link 
        to="/contact" 
        className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}