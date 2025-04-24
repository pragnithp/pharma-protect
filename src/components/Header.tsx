
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, MapPin, Menu, Search, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface PharmacyLink {
  name: string;
  url: string;
}

const pharmacyLinks: PharmacyLink[] = [
  { name: 'MedPlus', url: 'https://www.medplusmart.com/' },
  { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/' },
  { name: 'Wellness Forever', url: 'https://www.wellnessforever.com/' },
  { name: 'Netmeds', url: 'https://www.netmeds.com/' },
  { name: 'PharmEasy', url: 'https://pharmeasy.in/' },
];

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-pharma-blue-dark flex items-center justify-center">
            <Search className="text-white w-5 h-5" />
          </div>
          <span className="font-semibold text-xl">Pharma-Protect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#interaction-checker" className="text-foreground/80 hover:text-pharma-blue transition-colors">
            Interaction Checker
          </a>
          <a href="#find-pharmacy" className="text-foreground/80 hover:text-pharma-blue transition-colors">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Find Pharmacy
            </span>
          </a>
          <a href="#analytics" className="text-foreground/80 hover:text-pharma-blue transition-colors">
            Analytics
          </a>
          <a href="#blog" className="text-foreground/80 hover:text-pharma-blue transition-colors">
            Blog
          </a>
        </nav>

        {/* Pharmacy Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {pharmacyLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-foreground/70 hover:text-pharma-blue transition-colors"
            >
              {link.name} <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-foreground/50">Navigation</h3>
                <div className="flex flex-col gap-3">
                  <a href="#interaction-checker" className="flex items-center gap-3 text-foreground hover:text-pharma-blue transition-colors">
                    <Search className="w-4 h-4" />
                    Interaction Checker
                  </a>
                  <a href="#find-pharmacy" className="flex items-center gap-3 text-foreground hover:text-pharma-blue transition-colors">
                    <MapPin className="w-4 h-4" />
                    Find Pharmacy
                  </a>
                  <a href="#analytics" className="flex items-center gap-3 text-foreground hover:text-pharma-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                    Analytics
                  </a>
                  <a href="#blog" className="flex items-center gap-3 text-foreground hover:text-pharma-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                    Blog
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground/50">Pharmacy Links</h3>
                <div className="flex flex-col gap-3">
                  {pharmacyLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-foreground hover:text-pharma-blue transition-colors"
                    >
                      {link.name} <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
