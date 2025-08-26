import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Clock, TrendingDown, BarChart3, Shield, Zap, Truck, Calendar } from 'lucide-react';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

const FleetLease = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Automated Daily Checks",
      description: "Replace time-consuming manual inspections with 5-minute smartphone assessments across your entire fleet."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-primary" />,
      title: "30% Cost Reduction",
      description: "Reduce maintenance costs through predictive insights and proactive intervention strategies."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Real-Time Analytics",
      description: "Monitor fleet condition across all locations with comprehensive dashboards and reporting."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Compliance Assurance",
      description: "Maintain regulatory compliance with automated documentation and audit trails."
    }
  ];

  const features = [
    "Multi-location fleet monitoring and reporting",
    "Predictive maintenance scheduling and alerts",
    "Automated compliance documentation for MOT and safety",
    "Real-time condition tracking across vehicle types",
    "Integration with fleet management systems",
    "Driver self-inspection capabilities",
    "Maintenance cost optimisation analytics",
    "Vehicle lifecycle management insights"
  ];

  const useCases = [
    {
      title: "Daily Fleet Inspections",
      description: "Streamline daily vehicle checks with consistent, AI-powered condition assessments.",
      benefits: ["Reduced inspection time", "Consistent documentation", "Early issue detection"],
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Predictive Maintenance",
      description: "Identify maintenance needs before they become costly breakdowns.",
      benefits: ["Reduced downtime", "Lower repair costs", "Extended vehicle life"],
      icon: <BarChart3 className="h-6 w-6 text-primary" />
    },
    {
      title: "Multi-Location Management",
      description: "Centralised monitoring and reporting across all fleet locations.",
      benefits: ["Standardised processes", "Centralised reporting", "Improved oversight"],
      icon: <Truck className="h-6 w-6 text-primary" />
    }
  ];

  const fleetTypes = [
    {
      type: "Commercial Delivery",
      description: "Vans, trucks, and logistics vehicles",
      benefits: ["Route optimisation", "Fuel efficiency", "Delivery reliability"]
    },
    {
      type: "Construction & Plant",
      description: "Heavy machinery and construction vehicles",
      benefits: ["Safety compliance", "Equipment longevity", "Project efficiency"]
    },
    {
      type: "Corporate Fleet",
      description: "Company cars and executive vehicles",
      benefits: ["Employee safety", "Brand protection", "Cost control"]
    },
    {
      type: "Rental & Leasing",
      description: "Short and long-term rental vehicles",
      benefits: ["Asset protection", "Customer satisfaction", "Revenue optimisation"]
    }
  ];

  return (
    <div>
      <SEO 
        title="AI Vehicle Inspection for Fleet & Lease Management | Consistent Automotive"
        description="Revolutionise your fleet operations with AI-powered vehicle inspections. Reduce costs, improve compliance, and optimise vehicle lifecycles across the UK."
        keywords="fleet management AI inspection, vehicle fleet monitoring, lease vehicle inspection, commercial fleet technology, UK fleet management"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">For Fleet & Lease Managers</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transform Fleet Management with AI-Powered Inspections
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Reduce costs by 30%, improve compliance, and optimise vehicle lifecycles with 
                automated condition monitoring across your entire UK fleet operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Schedule a Consultation
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors">
                  Watch Fleet Demo
                </button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/src/assets/fleet_management.png" 
                alt="Fleet Management Dashboard"
                className="w-full max-w-lg mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why UK Fleet Managers Choose Our AI Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From London logistics to Scottish construction fleets, our technology delivers measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-centre">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for Every Fleet Type
            </h2>
            <p className="text-xl text-gray-600">
              Our AI technology adapts to your specific fleet requirements and operational challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetTypes.map((fleet, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{fleet.type}</CardTitle>
                  <p className="text-sm text-gray-600">{fleet.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {fleet.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Streamline Every Aspect of Fleet Operations
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {useCase.icon}
                    <CardTitle className="text-xl ml-3">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Advanced Fleet Management Capabilities
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive platform provides everything you need to optimise fleet operations and reduce costs.
              </p>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/src/assets/ai_interface_demo.png" 
                alt="Fleet Management Interface"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Results for UK Fleet Operations
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our customers achieve significant cost savings and operational improvements within 90 days.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-centre">
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="opacity-90">Maintenance Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="opacity-90">Faster Inspections</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="opacity-90">Improved Vehicle Utilisation</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Success Story</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  "We've reduced our maintenance costs by £50,000 annually"
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  "The AI inspection platform has transformed how we manage our 200-vehicle delivery fleet. 
                  We now catch issues before they become expensive problems, and our drivers love how 
                  quick and easy the inspections are."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">James Mitchell</div>
                    <div className="text-gray-600">Fleet Manager, UK Logistics Ltd</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-centre">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">200</div>
                  <div className="text-sm text-gray-600">Vehicles Monitored</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">£50K</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-gray-600">Downtime Reduction</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3 Min</div>
                  <div className="text-sm text-gray-600">Average Inspection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Optimise Your Fleet Operations?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join leading UK fleet managers who are already saving costs and improving efficiency 
                with our AI-powered inspection platform.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Quick Implementation</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>UK Support Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Proven ROI</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <HubspotForm portalId="8524574" formId="91b686c7-1449-45fe-a321-792d6f0223ef" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetLease;

