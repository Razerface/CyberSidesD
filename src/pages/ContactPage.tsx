import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Contact Header */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-600">Email</h3>
                      <p className="text-gray-600">cybersidestudio@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-600">Phone</h3>
                      <p className="text-gray-600">+1 (403)483-8918</p>
                    </div>
                  
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-600 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-600">What is your typical response time?</h3>
                    <p className="text-gray-600">We usually respond within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600">Do you offer emergency support?</h3>
                    <p className="text-gray-600">Yes, we provide 24/7 emergency support for our enterprise clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}