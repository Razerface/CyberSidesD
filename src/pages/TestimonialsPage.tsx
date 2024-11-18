import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'WebCraft Pro transformed our online presence completely. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Growth Solutions',
    content: 'The team at WebCraft Pro delivered beyond our expectations. Our new website has significantly improved our conversion rates.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200'
  },
  // Add more testimonials...
];

const caseStudies = [
  {
    title: 'E-commerce Revolution',
    client: 'Fashion Forward',
    results: {
      'Sales Increase': '156%',
      'Conversion Rate': '12.4%',
      'Mobile Traffic': '68%'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400'
  },
  // Add more case studies...
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Testimonials Header */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about
            their experience working with WebCraft Pro.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">Client: {study.client}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{value}</div>
                        <div className="text-sm text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}