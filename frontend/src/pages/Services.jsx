import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services, businessInfo } from '../data/mock';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Plastering & Decorating Services in Poole & Dorset
            </h1>
            <p className="text-xl text-slate-200">
              Complete interior finishing services from expert plasterers and painters serving Poole, Bournemouth, Christchurch and across Dorset. Specialists in spray plastering, MF ceilings, dry lining and professional painting.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      {IconComponent && <IconComponent className="text-blue-600" size={32} />}
                      <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-slate-600 text-lg mb-6">{service.shortDescription}</p>
                    <Button asChild>
                      <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Single contractor for all your internal finishing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Efficient Process</h3>
              <p className="text-slate-600">
                Streamlined workflow from ceilings through to decoration means faster project completion with consistent quality throughout.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Single Point of Contact</h3>
              <p className="text-slate-600">
                One contractor managing all stages means better coordination, clear accountability and simpler communication.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consistent Standards</h3>
              <p className="text-slate-600">
                All work completed by our experienced team ensures consistent quality across every aspect of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready To Discuss Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For a free, no obligation quote on MF ceilings, dry lining, spray plastering or decorating, get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <div className="flex flex-col gap-2">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-lg font-semibold hover:text-blue-200 transition-colors">
                <Phone size={20} />
                {businessInfo.phone}
              </a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Mail size={18} />
                {businessInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
