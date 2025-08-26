import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Clock, TrendingUp, Eye, Shield, Zap, Gavel, Camera } from 'lucide-react';
import HubspotForm from '../components/HubspotForm';
import SEO from '../components/SEO';

const Remarketing = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Faster Time-to-Market",
      description: "Reduce vehicle processing time by 70% with instant AI-powered condition assessments."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Higher Conversion Rates",
      description: "Increase buyer confidence with detailed, accurate condition reports and professional imagery."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Enhanced Transparency",
      description: "Build trust with buyers through comprehensive, AI-verified condition documentation."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Risk Mitigation",
      description: "Reduce returns and disputes with accurate, standardised condition assessments."
    }
  ];

  const features = [
    "Instant vehicle condition grading and classification",
    "Professional photography with damage annotations",
    "Automated auction-ready condition reports",
    "Integration with major UK auction platforms",
    "Bulk processing for large vehicle volumes",
    "Historical condition tracking and analytics",
    "Buyer confidence scoring and recommendations",
    "Mobile-optimised inspection workflows"
  ];

  const useCases = [
    {
      title: "Digital Wholesaling",
      description: "Accelerate wholesale transactions with instant, accurate condition assessments that buyers trust.",
      benefits: ["Faster sales cycles", "Reduced physical inspections", "Higher buyer confidence"],
      icon: <Gavel className="h-6 w-6 text-primary" />
    },
    {
      title: "Auction Preparation",
      description: "Create compelling auction listings with detailed condition reports and professional imagery.",
      benefits: ["Premium pricing", "Reduced condition disputes", "Faster lot processing"],
      icon: <Camera className="h-6 w-6 text-primary" />
    },
    {
      title: "Dealer Network Sales",
      description: "Streamline B2B sales with standardised condition reports that dealers can trust.",
      benefits: ["Expanded dealer network", "Consistent quality standards", "Reduced negotiation time"],
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ];

  const marketChannels = [
    {
      channel: "Online Auctions",
      description: "BCA, Manheim, ADESA integration",
      benefits: ["Automated lot descriptions", "Condition grade mapping", "Enhanced listings"]
    },
    {
      channel: "Wholesale Platforms",
      description: "Digital wholesale marketplaces",
      benefits: ["Instant condition reports", "Buyer confidence tools", "Reduced inspection costs"]
    },
    {
      channel: "Dealer Networks",
      description: "B2B dealer sales channels",
      benefits: ["Standardised grading", "Trust building", "Faster transactions"]
    },
    {
      channel: "Export Markets",
      description: "International vehicle sales",
      benefits: ["Remote inspections", "Documentation compliance", "Quality assurance"]
    }
  ];

  return (
    <div>
      <SEO 
        title="AI Vehicle Inspection for Remarketing & Auctions | Consistent Automotive"
        description="Accelerate your remarketing operations with AI-powered vehicle inspections. Increase conversion rates, reduce time-to-market, and build buyer confidence."
        keywords="vehicle remarketing AI, auction vehicle inspection, wholesale car inspection, automotive remarketing technology, UK vehicle auctions"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">For Remarketing Professionals</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Accelerate Remarketing with AI-Powered Vehicle Inspections
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Reduce time-to-market by 70%, increase conversion rates, and maximise returns with 
                instant, accurate vehicle condition assessments for the UK remarketing industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Become a Partner
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors">
                  Watch Remarketing Demo
                </button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/src/assets/virtual_inspection.jpg" 
                alt="Virtual Vehicle Inspection for Remarketing"
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
              Why UK Remarketing Leaders Choose Our AI Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From auction houses to wholesale operations, our technology delivers measurable improvements in speed and profitability.
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

      {/* Market Channels Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Optimised for Every Remarketing Channel
            </h2>
            <p className="text-xl text-gray-600">
              Our AI technology integrates seamlessly with all major UK remarketing platforms and channels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketChannels.map((market, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{market.channel}</CardTitle>
                  <p className="text-sm text-gray-600">{market.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {market.benefits.map((benefit, benefitIndex) => (
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
              Comprehensive Remarketing Solutions
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
                Advanced Remarketing Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform provides everything you need to streamline remarketing operations and maximise vehicle values.
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
                alt="Remarketing AI Interface"
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
              Proven Results for UK Remarketing Operations
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our customers see immediate improvements in processing speed and conversion rates.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-centre">
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="opacity-90">Faster Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="opacity-90">Higher Conversion Rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="opacity-90">Reduced Disputes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">£25K</div>
              <div className="opacity-90">Monthly Value Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Success Story</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  "We've increased our auction conversion rates by 45%"
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  "The AI inspection platform has revolutionised our remarketing operation. We can now 
                  process 500+ vehicles per week with consistent, accurate condition reports that buyers 
                  trust. Our time-to-market has improved dramatically."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">Rachel Thompson</div>
                    <div className="text-gray-600">Operations Director, Premier Remarketing UK</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-centre">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600">Vehicles/Week</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <div className="text-sm text-gray-600">Higher Conversions</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3 Days</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">£180K</div>
                  <div className="text-sm text-gray-600">Monthly Revenue Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integration with Your Existing Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects with all major UK auction houses, wholesale platforms, and remarketing systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">BCA</div>
              </div>
            </div>
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">Manheim</div>
              </div>
            </div>
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">ADESA</div>
              </div>
            </div>
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">Cox</div>
              </div>
            </div>
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">Aston</div>
              </div>
            </div>
            <div className="text-centre">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-gray-900">More...</div>
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
                Ready to Accelerate Your Remarketing Operations?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join leading UK remarketing companies who are already increasing conversion rates 
                and reducing time-to-market with our AI-powered inspection platform.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Rapid Deployment</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>UK Market Expertise</span>
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
                  <CardTitle>Become a Partner</CardTitle>
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

export default Remarketing;

