import React from 'react';
import Calendly from '../components/Calendly';
import SEO from '../components/SEO';

const Booking = () => {
  return (
    <div>
      <SEO 
        title="Book a Demo | Consistent Automotive"
        description="Schedule a live demo of our AI vehicle inspection platform and see how it can transform your business."
        keywords="book a demo, schedule a meeting, contact us, AI vehicle inspection demo"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Schedule a Live Demo
            </h1>
            <p className="text-xl text-gray-600">
              Choose a time that works for you, and we'll give you a personalized tour of our AI vehicle inspection platform.
            </p>
          </div>
          <Calendly url="https://calendly.com/marcus-blakemore/30min" />
        </div>
      </section>
    </div>
  );
};

export default Booking;

