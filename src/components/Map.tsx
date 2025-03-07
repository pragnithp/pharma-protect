
import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pharmacy, getNearbyPharmacies } from '@/utils/drugInteractions';

const Map: React.FC = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null);
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading pharmacies from an API
    setIsLoading(true);
    setTimeout(() => {
      const nearbyPharmacies = getNearbyPharmacies();
      setPharmacies(nearbyPharmacies);
      setIsLoading(false);
      
      // Set the first pharmacy as selected by default
      if (nearbyPharmacies.length > 0) {
        setSelectedPharmacy(nearbyPharmacies[0]);
      }
    }, 1000);
    
    // Try to get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log('Unable to retrieve your location');
        }
      );
    }
  }, []);

  // In a real app, this would use a mapping library like Google Maps or Mapbox
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map Placeholder (In a real app, this would be an actual map) */}
        <div className="bg-pharma-gray-light rounded-xl overflow-hidden shadow-sm border border-pharma-gray/20 min-h-[300px] md:min-h-[400px] relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse-soft text-center">
                <div className="w-16 h-16 rounded-full bg-pharma-blue/20 mx-auto flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-pharma-blue/60" />
                </div>
                <p className="mt-4 text-muted-foreground">Loading map...</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
              <div className="z-10 text-center px-6">
                <Button className="bg-white text-pharma-blue hover:bg-white/90 shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Interactive Map
                </Button>
                <p className="mt-4 text-white text-shadow-sm">
                  In a complete implementation, an interactive map would display here showing nearby pharmacies.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pharmacies List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Nearby Pharmacies</h3>
            {currentLocation && (
              <Button variant="outline" size="sm" className="text-xs">
                <MapPin className="w-3 h-3 mr-1" /> Use My Location
              </Button>
            )}
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="h-5 bg-pharma-gray/20 rounded w-3/4"></div>
                    <div className="h-4 bg-pharma-gray/20 rounded w-1/2 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-pharma-gray/20 rounded w-full"></div>
                    <div className="h-4 bg-pharma-gray/20 rounded w-2/3 mt-2"></div>
                    <div className="h-8 bg-pharma-gray/20 rounded w-full mt-4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {pharmacies.map((pharmacy) => (
                <Card 
                  key={pharmacy.id} 
                  className={`pharma-card cursor-pointer transition-all ${
                    selectedPharmacy?.id === pharmacy.id 
                      ? 'ring-2 ring-pharma-blue/50' 
                      : 'hover:bg-pharma-gray-light/50'
                  }`}
                  onClick={() => setSelectedPharmacy(pharmacy)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{pharmacy.name}</span>
                      {selectedPharmacy?.id === pharmacy.id && (
                        <span className="w-2 h-2 rounded-full bg-pharma-blue"></span>
                      )}
                    </CardTitle>
                    <CardDescription>{pharmacy.address}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-foreground">
                      <Phone className="w-4 h-4 mr-2 text-pharma-blue" />
                      <a href={`tel:${pharmacy.phone}`} className="hover:text-pharma-blue">
                        {pharmacy.phone}
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 min-w-[120px]"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        Get Directions
                      </Button>
                      
                      {pharmacy.website && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 min-w-[120px]"
                          asChild
                        >
                          <a 
                            href={pharmacy.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Visit Website
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
