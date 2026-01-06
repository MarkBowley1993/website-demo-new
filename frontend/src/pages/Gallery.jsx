import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-slate-700 font-medium">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <div className="relative">
              <button
                className="absolute -top-12 right-0 text-white text-4xl hover:text-slate-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full rounded-lg"
              />
              <div className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </div>
            </div>
          </div>
        </div>
      )}

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
