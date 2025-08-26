import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Clock, Shield, ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

// Import images
import heroImage from './assets/hero_ai_inspection.png'
import aiInterfaceImage from './assets/ai_interface_demo.png'
import dealershipTeamImage from './assets/dealership_team.png'
import accuracyIcon from './assets/icon_accuracy.png'
import speedIcon from './assets/icon_speed.png'
import trustIcon from './assets/icon_trust.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Consistent Automotive</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                Solutions <ArrowRight className="ml-1 h-4 w-4 rotate-90" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#dealers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Dealers</a>
                <a href="#fleet" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Fleet & Lease</a>
                <a href="#remarketing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Remarketing</a>
              </div>
            </div>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About Us</a>
            <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Let's Talk</Button>
            <Button>Book a Demo</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#dealers" className="text-gray-700 hover:text-primary transition-colors">Dealers</a>
              <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors">Fleet & Lease</a>
              <a href="#remarketing" className="text-gray-700 hover:text-primary transition-colors">Remarketing</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About Us</a>
              <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Let's Talk</Button>
                <Button>Book a Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">AI-Powered Technology</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Future of Vehicle Inspections is Here. 
              <span className="text-primary"> Are You Ready?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered vehicle inspections for the UK automotive industry. 
              Accurate, efficient, and trusted by experts with over 100 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4">
                Discover Our Solutions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="AI Vehicle Inspection Technology" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: "Dealers",
      description: "Increase trade-in accuracy and build customer trust with AI-powered appraisals.",
      icon: accuracyIcon,
      features: ["Trade-in Appraisals", "Used Vehicle Listings", "CPO Programmes"]
    },
    {
      title: "Fleet & Lease", 
      description: "Automate condition monitoring and reduce costs across your entire fleet.",
      icon: speedIcon,
      features: ["Fleet Monitoring", "Daily Inspections", "Maintenance Planning"]
    },
    {
      title: "Remarketing",
      description: "Accelerate your time-to-market and maximize returns with instant inspections.",
      icon: trustIcon,
      features: ["Digital Wholesaling", "Auction Reports", "Dealer Trades"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-centre mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Stage of the Automotive Lifecycle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From dealership trade-ins to fleet management and remarketing, our AI technology 
            transforms how the UK automotive industry handles vehicle inspections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-centre">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-16 h-16 mx-auto mb-4"
                />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Capture",
      description: "User takes photos with any smartphone",
      icon: <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">📱</div>
    },
    {
      number: "2", 
      title: "Analyze",
      description: "Our AI detects and assesses any damage",
      icon: <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">🤖</div>
    },
    {
      number: "3",
      title: "Report", 
      description: "Receive a detailed, graded condition report",
      icon: <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">📊</div>
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-centre mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A Simple, 3-Step Process
          </h2>
          <p className="text-xl text-gray-600">
            Transform any smartphone into a professional vehicle inspection tool
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={aiInterfaceImage} 
              alt="AI Interface Demo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
            <Button size="lg" className="mt-8">
              See It In Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-centre mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by the UK Automotive Industry
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <blockquote className="text-2xl text-gray-700 mb-6">
              "MJB's AI inspection technology has revolutionized our trade-in process. 
              We've seen a 40% increase in accuracy and our customers love the transparency."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">General Manager, Premium Motors UK</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={dealershipTeamImage} 
              alt="UK Dealership Team" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-centre">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Transform Your Vehicle Inspections?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join the growing number of UK automotive businesses using AI to improve accuracy, 
          reduce costs, and build customer trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Book a Free Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Consistent Automotive</h3>
            <p className="text-gray-400 mb-4">
              Leading the digital transformation of vehicle inspections with over 100 years of automotive expertise.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#dealers" className="hover:text-white transition-colors">Dealers</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Fleet & Lease</a></li>
              <li><a href="#remarketing" className="hover:text-white transition-colors">Remarketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p>35 Langdale Close</p>
              <p>Macclesfield, Cheshire, SK11 7YS</p>
              <p>Tel: +44 1625 352090</p>
              <p>marcus@mjbas.co.uk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Consistent Automotive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import SEO from './components/SEO';

import Dealers from "./pages/Dealers";
import FleetLease from "./pages/FleetLease";
import Remarketing from "./pages/Remarketing";

import Analytics from "./components/Analytics";

import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import VideoModal from "./components/VideoModal";

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "SV8kjJVSvEw"; // YouTube video ID
  return (
    <Router>
      <div className="min-h-screen">
        <Analytics />
        <SEO 
          title="Consistent Automotive | AI Vehicle Inspection Technology"
          description="AI-powered vehicle inspections for the UK automotive industry. Accurate, efficient, and trusted by experts with over 100 years of experience."
          keywords="AI vehicle inspection, vehicle inspection UK, automotive AI, car inspection software, digital vehicle inspection"
        />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/solutions/dealers" element={<Dealers />} />
            <Route path="/solutions/fleet-lease" element={<FleetLease />} />
            <Route path="/solutions/remarketing" element={<Remarketing />} />
            <Route path="/book-a-demo" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
          <ServicesSection />
          <HowItWorksSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

