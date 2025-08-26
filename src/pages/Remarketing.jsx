import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

// Import images
import remarketingImage from '../assets/virtual_inspection.jpg';

const Remarketing = () => {
  return (
    <div>
      <SEO 
        title="AI Vehicle Inspection for Remarketing | Consistent Automotive"
        description="Accelerate your vehicle-to-market timeline, create consistent condition reports, and increase buyer confidence with our AI inspection platform for UK remarketing."
        keywords="automotive remarketing UK, wholesale vehicle inspection, auction condition reports, digital remarketing platform, UK vehicle auctions"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                From Inspection to Auction in Minutes, 
                <span className="text-primary"> Not Days.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Accelerate your vehicle-to-market timeline, create consistent condition reports, 
                and increase buyer confidence with our AI inspection platform.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Become a Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <HubspotForm portalId="8524574" formId="91b686c7-1449-45fe-a321-792d6f0223ef" />
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={remarketingImage} 
                alt="UK Vehicle Remarketing" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections for the Remarketing page can be added here */}

    </div>
  );
};

export default Remarketing;

