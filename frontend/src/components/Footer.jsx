import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'MF Ceilings', path: '/services/mf-ceilings' },
    { name: 'Dry Lining', path: '/services/dry-lining' },
    { name: 'Spray Plastering', path: '/services/spray-plastering' },
    { name: 'Painting & Decorating', path: '/services/painting-decorating' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const sitemapPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'MF Ceilings', path: '/services/mf-ceilings' },
    { name: 'Dry Lining', path: '/services/dry-lining' },
    { name: 'Spray Plastering', path: '/services/spray-plastering' },
    { name: 'Painting & Decorating', path: '/services/painting-decorating' },
    { name: 'Our Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#3a4450] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-slate-300 mb-4">
              Professional MF ceilings, dry lining, spray plastering and decorating services with {businessInfo.experience} of trade experience.
            </p>
            <div className="flex items-start gap-2 text-slate-300 mb-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>Serving Poole, Bournemouth & {businessInfo.location}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone size={18} />
                <div>
                  <div>{businessInfo.contactName}</div>
                  <div className="text-sm">{businessInfo.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>{businessInfo.email}</span>
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={`https://wa.me/${businessInfo.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-pink-600 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={businessInfo.social.yell}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-yellow-600 p-2 rounded-full transition-colors flex items-center justify-center"
                  aria-label="Yell"
                >
                  <span className="text-xs font-bold">Y!</span>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h3 className="text-lg font-bold mb-4 text-center">Sitemap</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sitemapPages.map((page, index) => (
              <React.Fragment key={page.path}>
                <Link
                  to={page.path}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {page.name}
                </Link>
                {index < sitemapPages.length - 1 && (
                  <span className="text-slate-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p className="mt-2">Professional Plasterers in Poole, Bournemouth & Dorset</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
