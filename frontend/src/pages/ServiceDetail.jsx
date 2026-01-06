import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { businessInfo, services } from '../data/mock';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceDetails = {
    'mf-ceilings': {
      title: 'MF Ceiling Contractors in Dorset',
      intro: 'MF ceilings are ideal for creating level, modern ceilings and for concealing services such as pipes, ductwork and cabling. Dorset Spray Plastering & Painting supplies and installs MF ceiling systems for domestic and commercial projects across Dorset.',
      whatWeProvide: [
        'Full MF ceiling frameworks',
        'Bulkheads and feature ceilings',
        'Integration with lighting layouts',
        'Boarding, jointing and finishing'
      ],
      benefits: [
        'Smooth, level ceilings',
        'Space to run services',
        'Good acoustic and fire performance when specified correctly',
        'Suitable for new builds, refurbishments and office fit outs'
      ]
    },
    'dry-lining': {
      title: 'Dry Lining Services in Dorset',
      intro: 'We provide dry lining for walls and ceilings, creating smooth surfaces ready for plastering and decorating.',
      whatWeProvide: [
        'Dry lining to timber or metal stud',
        'Insulated plasterboard where required',
        'Partition walls and room layouts',
        'Taping, jointing and preparation for finishing'
      ],
      benefits: [
        'Accurate setting out and fixing',
        'Clean joints ready for spray plaster or paint',
        'Coordination with other trades on site',
        'Fast installation for quick project turnaround'
      ]
    },
    'spray-plastering': {
      title: 'Spray Plastering Contractors in Dorset',
      intro: 'Spray plastering is a fast, efficient way to achieve a consistent finish on large areas of walls and ceilings. It is ideal for new builds, refurbishments and commercial spaces where speed and quality are both important.',
      whatWeProvide: [
        'Airless spray application',
        'Machine mixed plaster for consistent quality',
        'Hand finishing for clean edges and corners',
        'Preparation and protection of surfaces and floors'
      ],
      benefits: [
        'Faster application than traditional plastering on large areas',
        'Consistent, smooth finish',
        'Shorter drying times in many cases',
        'Ready for decorating once fully dry'
      ]
    },
    'painting-decorating': {
      title: 'Interior Painting and Decorating',
      intro: 'Once plastering is complete, we can carry the job through to final decoration, giving you a single point of contact from structure to finished room.',
      whatWeProvide: [
        'Mist coats on new plaster',
        'Emulsion to walls and ceilings',
        'Woodwork painting, including doors, frames and skirting',
        'Feature walls and colour changes'
      ],
      benefits: [
        'Trade quality paints and materials',
        'Professional finish that lasts',
        'Complete project management from plaster to paint',
        'Thorough preparation for superior results'
      ]
    }
  };

  const details = serviceDetails[serviceId];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {details.title}
            </h1>
            <p className="text-xl text-slate-200">
              Professional {service.title.toLowerCase()} services across {businessInfo.location}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: '400px', objectPosition: 'center' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 mb-6">
                {details.intro}
              </p>
              <p className="text-lg text-slate-600">
                With {businessInfo.experience} of experience, we deliver professional results that meet the highest standards of workmanship.
              </p>
            </div>
          </div>

          {/* What We Provide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.whatWeProvide.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-slate-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-lg text-slate-600 mb-6">
              Every project follows our proven process: initial consultation, detailed quote, careful planning, expert execution, and thorough quality checks before handover.
            </p>
            <Button asChild variant="outline">
              <Link to="/process">View Our Full Process</Link>
            </Button>
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

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== serviceId)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  to={`/services/${relatedService.id}`}
                  className="group block bg-slate-50 rounded-lg p-6 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                    {relatedService.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {relatedService.shortDescription.substring(0, 100)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
