import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { businessInfo, submitContactForm } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    contactMethod: 'phone'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast({
          title: "Enquiry Submitted",
          description: result.message,
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
          contactMethod: 'phone'
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your enquiry. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact Dorset Spray Plastering & Painting
            </h1>
            <p className="text-xl text-slate-200">
              For quotes, site visits and general enquiries, use the details below or complete the contact form
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                We aim to respond to all enquiries within one working day. For urgent matters, please call us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Monday - Friday: 7am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-lg text-blue-600 hover:text-blue-700 font-medium break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
                    <p className="text-slate-600">
                      {businessInfo.location} and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="mt-10 bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-xl">What Happens Next?</h3>
                <ol className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                    <span>We'll review your enquiry and contact you within one working day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span>If needed, we'll arrange a site visit to assess the work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span>You'll receive a detailed written quote with clear pricing</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Project Address</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Where is the work needed?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the work you need (e.g., MF ceilings, dry lining, spray plastering, decorating)"
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    We aim to respond to all enquiries within one working day
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need to Speak to Someone Now?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            For immediate assistance or urgent enquiries, give us a call
          </p>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors"
          >
            <Phone size={24} />
            {businessInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
