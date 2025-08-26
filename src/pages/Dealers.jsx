import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Clock, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

const Dealers = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "5-Minute Inspections",
      description: "Complete comprehensive vehicle assessments in under 5 minutes using just a smartphone camera."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "95% Accuracy Rate",
      description: "AI-powered damage detection with industry-leading accuracy, reducing disputes and increasing customer trust."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Enhanced Customer Experience",
      description: "Transparent, instant appraisals that customers can see and understand, building trust and satisfaction."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Consistent Valuations",
      description: "Eliminate human bias and subjectivity with standardised, AI-driven condition assessments."
    }
  ];

  const features = [
    "Real-time damage detection and classification",
    "Automated condition grading (Excellent, Good, Fair, Poor)",
    "Detailed photo documentation with annotations",
    "Integration with DMS and inventory management systems",
    "Instant market valuation based on condition",
    "Comprehensive inspection reports for customers",
    "Historical data tracking for vehicle lifecycle",
    "Mobile-first design for showroom floor use"
  ];

  const useCases = [
    {
      title: "Trade-In Appraisals",
      description: "Streamline your trade-in process with instant, accurate vehicle condition assessments that customers trust.",
      benefits: ["Faster appraisal process", "Reduced customer wait times", "Increased trade-in volume"]
    },
    {
      title: "Used Vehicle Listings",
      description: "Create compelling listings with detailed condition reports and professional photography.",
      benefits: ["Higher conversion rates", "Reduced returns", "Premium pricing justification"]
    },
    {
      title: "CPO Programmes",
      description: "Ensure consistent quality standards across your certified pre-owned inventory.",
      benefits: ["Quality assurance", "Brand protection", "Customer confidence"]
    }
  ];

  return (
    <div>
      <SEO 
        title="AI Vehicle Inspection for Car Dealerships | Consistent Automotive"
        description="Transform your dealership's trade-in and used car operations with AI-powered vehicle inspections. Increase accuracy, reduce costs, and build customer trust."
        keywords="car dealership AI inspection, trade-in appraisal technology, used car inspection, automotive AI, dealership efficiency"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">For Car Dealerships</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stop Losing Money on Trade-Ins. Start Appraising with AI.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered inspection tool helps UK dealerships increase trade-in accuracy, 
                build customer trust, and boost profitability with 5-minute smartphone assessments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Request a Free Demo
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors">
                  Watch Demo Video
                </button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/src/assets/hero_ai_inspection.png" 
                alt="AI Vehicle Inspection for Dealerships"
                className="w-full max-w-lg mx-auto lg:mx-0"
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
              Why UK Dealerships Choose Our AI Inspection Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your trade-in process and used car operations with technology that delivers results.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for Every Dealership Need
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Advanced Features Built for Dealership Success
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform includes everything you need to revolutionise your vehicle inspection process.
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
                alt="AI Inspection Interface"
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
              Proven ROI for UK Dealerships
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our customers see measurable results within the first month of implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-centre">
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="opacity-90">Faster Inspections</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="opacity-90">Increase in Trade-In Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">£15K</div>
              <div className="opacity-90">Average Monthly Savings</div>
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
                Ready to Transform Your Dealership Operations?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of UK dealerships already using AI to improve their trade-in process, 
                increase customer satisfaction, and boost profitability.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Quick Setup</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>UK Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Request a Free Demo</CardTitle>
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

export default Dealers;

