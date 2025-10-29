'use client';

import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, MapPin, Phone, Clock, MessageCircle, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Send me an email anytime",
    value: "akirub8@gmail.com",
    link: "mailto:akirub8@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Mon - Fri from 9am to 6pm",
    value: "+259 955901762",
    link: "tel:+259955901762",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    description: "Based in",
    value: "Addis Ababa, Ethiopia",
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Response Time",
    description: "Usually within",
    value: "24 hours",
    link: "#",
    color: "from-orange-500 to-red-500"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-100">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            Get In Touch
          </div>
          <h2 className="text-section font-bold text-gray-900 mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to chat? I'm always interested in new opportunities 
            and challenges. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="card-hover p-6 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                  <p className="text-primary-600 font-semibold">{method.value}</p>
                </a>
              ))}
            </div>

            {/* Why Work With Me */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Why work with me?</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>5+ years of professional experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>Full-stack development expertise</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>Modern tech stack and best practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>Clean, maintainable code</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>Responsive and user-focused design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Current Availability</h3>
                  <p className="text-gray-600">
                    I'm currently available for new projects starting next month. 
                    Let's schedule a call to discuss your requirements!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};