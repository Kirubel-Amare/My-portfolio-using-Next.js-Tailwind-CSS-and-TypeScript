'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services#web-dev' },
      { name: 'UI/UX Design', href: '/services#ui-ux' },
      { name: 'Consulting', href: '/services#consulting' },
      { name: 'Maintenance', href: '/services#maintenance' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Tutorials', href: '/tutorials' },
    ],
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/Kirubel-Amare",
    label: "GitHub",
    color: "hover:bg-sky-500 hover:text-white"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    color: "hover:bg-sky-500 hover:text-white"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/kirubel",
    label: "Twitter",
    color: "hover:bg-sky-500 hover:text-white"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:your.akirubel8@gmail.com",
    label: "Email",
    color: "hover:bg-sky-500 hover:text-white"
  },
];

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white relative  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Portfolio
                </h3>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full-stack developer passionate about creating amazing digital experiences. 
                Let's build something incredible together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} border border-gray-700`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="font-semibold text-white mb-6 text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span>© {currentYear} Your Name. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and lots of coffee.</span>
              </div>

              {/* Additional Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
              </div>

              {/* Back to Top */}
            
            </div>
          </div>
        </div>

        {/* Gradient Accent */}
        <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </div>
    </footer>
  );
};