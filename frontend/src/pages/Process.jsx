import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { processSteps, businessInfo } from '../data/mock';

const Process = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Working Process
            </h1>
            <p className="text-xl text-slate-200">
              A clear, straightforward approach from first contact through to project completion
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-blue-200 hidden sm:block" />
                )}
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What to Expect at Each Stage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 Detail */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Initial Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Share your project details via phone, email or contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Provide any plans, drawings or photos you have</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Let us know your preferred timescales</span>
                </li>
              </ul>
            </div>

            {/* Step 2 Detail */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Survey & Quote</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">We arrange a convenient time to visit the site</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Take measurements and assess access requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Provide a detailed written quote with clear pricing</span>
                </li>
              </ul>
            </div>

            {/* Step 3 Detail */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Schedule & Prepare</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Confirm start dates and working hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Discuss access, parking and site facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Order materials with appropriate lead times</span>
                </li>
              </ul>
            </div>

            {/* Step 4 Detail */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Carry Out Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Protect floors and furnishings before starting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Complete work to agreed specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">Maintain communication throughout the project</span>
                </li>
              </ul>
            </div>

            {/* Step 5 Detail */}
            <div className="bg-white rounded-lg p-8 shadow-sm md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sign Off & Completion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600">Walk through completed work together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600">Address any final touches or adjustments</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600">Leave site clean and tidy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600">Provide any care instructions if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Our Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clear Communication</h3>
              <p className="text-slate-600">
                You know what's happening at every stage with no surprises or hidden costs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Method</h3>
              <p className="text-slate-600">
                Refined over 24 years to deliver consistent results and customer satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Standards</h3>
              <p className="text-slate-600">
                Every project completed to the same high standards regardless of size.
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
                <div>{businessInfo.contactName}: {businessInfo.phone}</div>
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

export default Process;
