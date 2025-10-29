'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: <Mail className="text-primary-600 w-6 h-6" />,
    title: "Email",
    description: "Send me an email anytime",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  {
    icon: <Phone className="text-primary-600 w-6 h-6" />,
    title: "Phone",
    description: "Mon - Fri from 9am to 6pm",
    value: "+1 (234) 567-890",
    link: "tel:+1234567890"
  },
  {
    icon: <MapPin className="text-primary-600 w-6 h-6" />,
    title: "Location",
    description: "Based in",
    value: "Your City, Country",
    link: "#"
  },
  {
    icon: <Clock className="text-primary-600 w-6 h-6" />,
    title: "Response Time",
    description: "Usually within",
    value: "24 hours",
    link: "#"
  }
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Ready to start your next project? Let's talk about how I can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 text-center group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className="text-primary-600 font-medium">{method.value}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's work together
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  I'm always interested in new opportunities and challenges. 
                  Whether you have a project in mind or just want to say hello, 
                  I'd love to hear from you!
                </p>
                
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="text-primary-600 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Why work with me?</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• 5+ years of professional experience</li>
                        <li>• Full-stack development expertise</li>
                        <li>• Modern tech stack and best practices</li>
                        <li>• Clean, maintainable code</li>
                        <li>• Responsive and user-focused design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">What's your typical response time?</h4>
                    <p className="text-gray-600 text-sm">
                      I usually respond within 24 hours during weekdays. For urgent inquiries, please call me directly.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Do you work remotely?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, I'm available for remote work and have experience collaborating with distributed teams.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">What types of projects do you take on?</h4>
                    <p className="text-gray-600 text-sm">
                      I work on web applications, e-commerce sites, dashboards, and custom software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Me Here</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in Your City, but available for remote work worldwide.
            </p>
          </div>
          
          {/* Simple Map Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-4xl mx-auto">
            <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Your City, Country</p>
                <p className="text-gray-600 text-sm">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}