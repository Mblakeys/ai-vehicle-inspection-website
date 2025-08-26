import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

// Import images
import dealershipImage from '../assets/dealership_team.png';

const Dealers = () => {
  return (
    <div>
      <SEO 
        title="AI Vehicle Inspection for Car Dealerships | Consistent Automotive"
        description="Increase trade-in accuracy, build customer trust, and boost profitability with our AI-powered vehicle inspection platform for UK car dealerships."
        keywords="used car appraisal tool, trade-in software, dealership inspection app, CPO inspection software, UK car dealerships"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stop Losing Money on Trade-Ins. 
                <span className="text-primary"> Start Appraising with AI.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered inspection tool helps UK dealerships increase trade-in accuracy, 
                build customer trust, and boost profitability.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Request a Free Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <HubspotForm portalId="8524574" formId="91b686c7-1449-45fe-a321-792d6f0223ef" />
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={dealershipImage} 
                alt="UK Car Dealership" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections for the Dealers page can be added here */}

    </div>
  );
};

export default Dealers;

