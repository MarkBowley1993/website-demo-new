import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Create 6 placeholder items
  const placeholderItems = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Recent Projects
            </h1>
            <p className="text-xl text-slate-200">
              A selection of recent MF ceilings, dry lining, spray plastering and decorating work
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-lg font-medium">Placeholder</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Project Types We Handle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Residential</h3>
              <p className="text-slate-600 mb-4">
                Home renovations, extensions, new builds and property refurbishments for homeowners and landlords.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial</h3>
              <p className="text-slate-600 mb-4">
                Office fit outs, retail spaces, hospitality venues and commercial property developments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">New Build</h3>
              <p className="text-slate-600 mb-4">
                Complete internal finishing packages for new residential and commercial construction projects.
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

export default Gallery;
