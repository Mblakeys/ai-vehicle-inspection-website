import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

// Import images
import fleetImage from '../assets/fleet_management.png';

const FleetLease = () => {
  return (
    <div>
      <SEO 
        title="AI Fleet & Lease Vehicle Inspections | Consistent Automotive"
        description="Automate your fleet condition monitoring, reduce vehicle downtime, and ensure brand standards with our AI inspection platform for UK fleets."
        keywords="fleet maintenance software, vehicle condition reporting, lease vehicle inspection, rental car inspection software, UK fleet management"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Know the Condition of Every Vehicle in Your Fleet. 
                <span className="text-primary"> Instantly.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automate your vehicle condition monitoring to reduce costs, ensure compliance, 
                and maximize the lifespan of your assets.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <HubspotForm portalId="8524574" formId="91b686c7-1449-45fe-a321-792d6f0223ef" />
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={fleetImage} 
                alt="UK Fleet Management" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections for the Fleet & Lease page can be added here */}

    </div>
  );
};

export default FleetLease;

