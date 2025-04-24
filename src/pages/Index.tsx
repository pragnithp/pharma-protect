
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import DrugInteractionChecker from '@/components/DrugInteractionChecker';
import Map from '@/components/Map';
import AnalyticsSection from '@/components/AnalyticsSection';
import BlogSection from '@/components/BlogSection';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading and then show the content with animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="pharma-chip mb-4">Medication Safety Tool</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Check for potential
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pharma-blue to-pharma-blue-dark"> drug interactions</span>
              </h1>
            </div>
            
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Enter your medications below to identify potential interactions and stay informed about your health.
            </p>
            
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="#interaction-checker" 
                className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-pharma-blue transition-colors"
              >
                Scroll to start
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-[5%] w-64 h-64 bg-pharma-blue/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-[5%] w-96 h-96 bg-pharma-green/5 rounded-full filter blur-3xl"></div>
        </div>
      </section>
      
      {/* Drug Interaction Checker Section */}
      <section id="interaction-checker" className="py-20 bg-pharma-gray-light/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="pharma-chip mb-4">Drug Checker</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Check Your Medication Interactions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter the names of your medications to identify potential interactions. Our tool checks against a comprehensive database of known drug interactions.
            </p>
          </div>
          
          <DrugInteractionChecker />
        </div>
      </section>
      
      {/* Pharmacy Map Section */}
      <section id="find-pharmacy" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="pharma-chip mb-4">Nearby Pharmacies</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Pharmacies Near You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Locate nearby pharmacies where you can fill your prescriptions and speak with pharmacists about potential drug interactions.
            </p>
          </div>
          
          <Map />
        </div>
      </section>
      
      {/* Analytics Section */}
      <section id="analytics" className="py-20 bg-pharma-gray-light/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="pharma-chip mb-4">Data Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Drug Interaction Analytics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore data visualizations about common drug interactions, severity distributions, and affected body systems.
            </p>
          </div>
          
          <AnalyticsSection />
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="pharma-chip mb-4">Knowledge Center</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Articles & Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest articles about medication safety, common interactions, and best practices for managing your prescriptions.
            </p>
          </div>
          
          <BlogSection />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-pharma-blue flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-white"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <span className="font-semibold text-lg">Pharma-Protect</span>
              </div>
              <p className="text-background/70 text-sm">
                A tool for checking drug interactions and finding nearby pharmacies.
              </p>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#interaction-checker" className="text-background/70 hover:text-background transition-colors">Interaction Checker</a></li>
                  <li><a href="#find-pharmacy" className="text-background/70 hover:text-background transition-colors">Find Pharmacy</a></li>
                  <li><a href="#analytics" className="text-background/70 hover:text-background transition-colors">Analytics</a></li>
                  <li><a href="#blog" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Pharmacies</h4>
                <ul className="space-y-2">
                  <li><a href="https://www.medplusmart.com/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">MedPlus</a></li>
                  <li><a href="https://www.apollopharmacy.in/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">Apollo Pharmacy</a></li>
                  <li><a href="https://www.netmeds.com/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">Netmeds</a></li>
                  <li><a href="https://pharmeasy.in/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">PharmEasy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-background/70 hover:text-background transition-colors">Disclaimer</a></li>
                  <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/10 mt-12 pt-6 text-center text-background/50 text-sm">
            <p>
              Disclaimer: This tool is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider.
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Pharma-Protect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
