import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, role, company, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>

      <p className="text-gray-600 mb-6">{content}</p>

      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}