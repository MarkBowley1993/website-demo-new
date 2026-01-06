import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { businessInfo } from '../data/mock';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Dorset Spray Plastering & Painting
            </h1>
            <p className="text-xl text-slate-200">
              Professional internal finishing services backed by {businessInfo.experience} of trade experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-lg w-full"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              >
                <source src="https://customer-assets.emergentagent.com/job_88d0e87c-203a-489e-a732-0f3b5ef378f7/artifacts/zotfb6ae_AQN_UidcIPGk9F0FKfjKfRqUp8LAYgCgWGJOtCjNOt9zhh09E1oJwRhfPwFG9JB7QFbKJbBMyJq-TCV4F_PN4_M.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 mb-4">
                Dorset Spray Plastering & Painting provides specialist MF ceilings, dry lining, spray plastering and decorating services with over {businessInfo.experience} of experience in the trade. We support homeowners, landlords, builders and commercial clients who want reliable workmanship and a high standard of finish.
              </p>
              <p className="text-lg text-slate-600">
                Operating across {businessInfo.location}, we have built our reputation on delivering quality finishes, maintaining clear communication throughout projects, and ensuring every job is completed to the highest standards.
              </p>
            </div>
          </div>

          {/* Our Experience */}
          <div className="bg-slate-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Experience</h2>
            <p className="text-lg text-slate-600 mb-4">
              Across two decades we have worked on everything from small domestic rooms to full property refurbishments and commercial fit outs. That experience means we can advise on the right systems and finishes for your project, coordinate with other trades and keep disruption to a minimum.
            </p>
            <p className="text-lg text-slate-600">
              Our portfolio includes work for private homeowners, property developers, landlords managing multiple properties, and commercial businesses requiring professional fit-outs. We understand the unique requirements of each sector and tailor our approach accordingly.
            </p>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Clear Communication</h3>
                  <p className="text-slate-600">
                    We keep you informed at every stage, from initial quote through to project completion. No jargon, just honest advice and regular updates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Punctuality & Reliability</h3>
                  <p className="text-slate-600">
                    We show up when we say we will and work to agreed timescales. Your time is valuable and we respect that.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Site Protection & Cleanliness</h3>
                  <p className="text-slate-600">
                    We protect floors and furnishings, manage dust as much as possible and leave the site ready for the next stage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Trade Coordination</h3>
                  <p className="text-slate-600">
                    We work seamlessly alongside other trades on site, ensuring your project progresses smoothly without delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Standards Section */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Health, Safety and Standards</h2>
            <p className="text-lg text-slate-600 mb-4">
              All work is carried out in line with current best practice and manufacturer guidance. We use quality materials and proven methods so that ceilings and walls stay solid and finishes last.
            </p>
            <p className="text-lg text-slate-600">
              We maintain appropriate insurance cover for all the work we undertake, and proof of cover can be provided on request. Health and safety is taken seriously on every project, regardless of size.
            </p>
          </div>

          {/* Coverage Area */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving Dorset and Beyond</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Based in {businessInfo.location}, we serve clients throughout the county and surrounding areas. Our experience includes work in towns and villages across the region, as well as larger commercial projects in urban centres.
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
    </div>
  );
};

export default About;
