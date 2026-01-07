import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, services, testimonials } from '../data/mock';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#3a4450] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://customer-assets.emergentagent.com/job_88d0e87c-203a-489e-a732-0f3b5ef378f7/artifacts/2jduwmot_image.png"
            alt="Professional plastering work"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Plasterers in Poole & Dorset | Spray Plastering, MF Ceilings & Painting Contractors
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-8">
              Expert plastering services in Poole, Bournemouth, and across Dorset. Specialists in spray plastering, MF ceilings, dry lining, and interior painting with {businessInfo.experience} of experience.
            </p>
            <ul className="space-y-3 mb-10 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <span>MF ceilings, bulkheads and feature ceilings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <span>Dry lining and partition walls</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <span>Airless spray plastering for smooth finishes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <span>Interior painting and decorating</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
              <div className="flex items-center gap-4 text-sm">
                <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone size={18} />
                  <span className="font-medium">{businessInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Trusted Plastering Contractors in Poole, Bournemouth & Dorset
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Dorset Spray Plastering & Painting are professional plasterers serving Poole, Bournemouth, Christchurch, Wimborne, Wareham, Ferndown and throughout Dorset. With {businessInfo.experience} of hands-on experience, we provide complete <Link to="/services" className="text-blue-600 hover:text-blue-700 underline">plastering and decorating services</Link> from <Link to="/services/mf-ceilings" className="text-blue-600 hover:text-blue-700 underline">MF ceilings</Link> and <Link to="/services/dry-lining" className="text-blue-600 hover:text-blue-700 underline">dry lining</Link> through to <Link to="/services/spray-plastering" className="text-blue-600 hover:text-blue-700 underline">spray plastering</Link> and final <Link to="/services/painting-decorating" className="text-blue-600 hover:text-blue-700 underline">painting and decorating</Link>.
            </p>
            <p className="text-lg text-slate-600">
              Whether you need plasterers for a single room or complete property finishing contractors for residential, commercial, or new build projects in Poole and Dorset, we focus on reliable workmanship, clear communication and delivering on time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Professional Plastering & Decorating Services in Poole & Dorset
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete interior finishing services for residential, commercial and new build projects across Poole, Bournemouth and Dorset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {IconComponent && <IconComponent className="text-blue-600" size={28} />}
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Why Choose Dorset Spray Plastering & Painting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{businessInfo.experience} Experience</h3>
              <p className="text-slate-600">
                Practical trade experience on domestic and commercial projects across Dorset.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.Package className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Package</h3>
              <p className="text-slate-600">
                MF ceilings, dry lining, spray plastering and painting delivered by one contractor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.Sparkles className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Quality Finishes</h3>
              <p className="text-slate-600">
                Smooth, clean surfaces ready for decoration and handover.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reliable & Tidy</h3>
              <p className="text-slate-600">
                We protect your property, work to agreed schedules and tidy up before we leave.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clear Pricing</h3>
              <p className="text-slate-600">
                Straightforward quotes with no hidden extras.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideIcons.Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Insured</h3>
              <p className="text-slate-600">
                All work is covered by appropriate trade insurance for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <LucideIcons.Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Plasterers Serving Poole, Bournemouth & Across Dorset
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-8">
            As experienced plasterers based in Dorset, we provide professional plastering, spray plastering, MF ceiling installation, and painting services throughout the region.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Poole</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Bournemouth</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Christchurch</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Wimborne</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Wareham</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Ferndown</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Dorchester</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Swanage</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Blandford</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="font-semibold text-slate-900">Across Dorset</p>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-8">
            Looking for <strong>plasterers near me in Poole</strong> or <strong>painters and decorators in Dorset</strong>? <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline">Contact us</Link> to discuss your project.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready To Discuss Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For a free, no obligation quote on MF ceilings, dry lining, spray plastering or painting and decorating, get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <div className="flex flex-col gap-2">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-lg font-semibold hover:text-blue-200 transition-colors">
                <Phone size={20} />
                <div>
                  <div>{businessInfo.contactName}: {businessInfo.phone}</div>
                </div>
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

export default Home;
