import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { faqs } from '../data/mock';

const FAQs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3a4450] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-200">
              Common questions about our plastering, ceilings and decorating services
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-slate-50 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              If you can't find the answer you're looking for, please get in touch. We're happy to discuss your specific requirements and provide detailed advice on the best approach for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Quotes</h3>
              <p className="text-slate-600">
                All quotes are provided free of charge with no obligation to proceed.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">24 Years Experience</h3>
              <p className="text-slate-600">
                Proven track record across domestic and commercial projects.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Insured</h3>
              <p className="text-slate-600">
                Comprehensive insurance cover for all the work we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
