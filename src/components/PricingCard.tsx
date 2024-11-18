import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`
      relative rounded-2xl p-8 
      ${isPopular ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white text-gray-600 shadow-lg'}
    `}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}

      <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'} mb-4`}>
        {title}
      </h3>
      
      <div className="mb-6">
        <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
          {price}
        </span>
        <span className={isPopular ? 'text-indigo-100' : 'text-gray-500'}>/month</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className={`w-5 h-5 ${isPopular ? 'text-indigo-200' : 'text-indigo-600'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors block text-center
          ${isPopular 
            ? 'bg-white text-indigo-600 hover:bg-gray-100' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
      >
        Get Started
      </Link>
    </div>
  );
}