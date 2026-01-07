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
      title: 'MF Ceiling Contractors in Poole & Dorset',
      intro: 'Professional MF ceiling installers serving Poole, Bournemouth, and across Dorset. MF (metal frame) ceilings are ideal for creating level, modern ceilings and concealing services such as pipes, ductwork and cabling. Dorset Spray Plastering & Painting supply and install MF ceiling systems for domestic and commercial projects throughout Poole, Bournemouth, Christchurch, and Dorset.',
      whatWeProvide: [
        'Complete MF ceiling frameworks and suspended ceiling systems',
        'Bulkheads, feature ceilings, and decorative ceiling designs',
        'Integration with lighting layouts and recessed lighting',
        'Professional boarding, jointing and finishing',
        'Commercial MF ceilings for offices, retail spaces and hospitality venues',
        'Residential MF ceilings for new builds and renovations'
      ],
      benefits: [
        'Smooth, level ceilings with professional finish',
        'Space to run services and building infrastructure',
        'Excellent acoustic and fire performance when specified correctly',
        'Suitable for new builds, refurbishments, office fit outs and commercial projects',
        'Fast installation by experienced MF ceiling contractors',
        'Fully insured MF ceiling specialists in Poole and Dorset'
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
      title: 'Spray Plastering Contractors in Poole & Dorset',
      intro: 'Professional spray plastering services in Poole, Bournemouth and throughout Dorset. Spray plastering (also known as machine plastering) is a fast, efficient method to achieve consistent, high-quality finishes on large areas of walls and ceilings. Our spray plasterers are ideal for new builds, refurbishments and commercial spaces in Poole and Dorset where speed and quality are both essential.',
      whatWeProvide: [
        'Airless spray plastering application by qualified spray plasterers',
        'Machine mixed plaster for consistent quality and finish',
        'Professional hand finishing for clean edges and corners',
        'Thorough preparation and protection of surfaces and floors',
        'Commercial spray plastering for offices, retail and hospitality',
        'Residential spray plastering for new builds and renovations in Poole & Dorset'
      ],
      benefits: [
        'Faster application than traditional plastering on large areas',
        'Consistent, smooth spray finish plaster throughout',
        'Shorter drying times compared to hand plastering',
        'Ready for decorating once fully dry',
        'Professional spray plastering contractors with {businessInfo.experience} experience',
        'Suitable for both domestic and commercial spray plastering projects in Poole'
      ]
    },
    'painting-decorating': {
      title: 'Painters and Decorators in Poole & Dorset',
      intro: 'Professional painters and decorators serving Poole, Bournemouth, Christchurch and throughout Dorset. Once plastering is complete, we provide complete painting and decorating services, giving you a single point of contact from structure to finished room. Our experienced painters offer interior painting for residential, commercial and new build projects across Poole and Dorset.',
      whatWeProvide: [
        'Professional mist coats on new plaster',
        'Quality emulsion application to walls and ceilings',
        'Woodwork painting including doors, frames and skirting boards',
        'Feature walls and custom colour schemes',
        'Commercial painting for offices, retail and hospitality venues',
        'Residential painting and decorating for homes across Poole & Dorset'
      ],
      benefits: [
        'Trade quality paints and professional materials',
        'Durable, long-lasting finish by experienced painters',
        'Complete project management from plastering to final decoration',
        'Thorough preparation for superior, professional results',
        'Trusted painters and decorators in Poole with {businessInfo.experience} experience',
        'Fully insured painting contractors serving Dorset'
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
          <div className="mb-16">
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
            <p className="text-lg text-slate-600">
              Every project follows our proven process: initial consultation, detailed quote, careful planning, expert execution, and thorough quality checks before handover.
            </p>
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
