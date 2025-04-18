import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, 
  Search, 
  X, 
  AlertTriangle, 
  AlertCircle, 
  Info 
} from 'lucide-react';
import { 
  Command, 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { 
  Drug, 
  Interaction, 
  searchDrugs, 
  getInteractions 
} from '@/utils/drugInteractions';
import AlternativeDrugSuggestions from './AlternativeDrugSuggestions';

const DrugInteractionChecker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Drug[]>([]);
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (searchQuery) {
      const results = searchDrugs(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const addDrug = (drug: Drug) => {
    if (!selectedDrugs.some(d => d.id === drug.id)) {
      const newSelectedDrugs = [...selectedDrugs, drug];
      setSelectedDrugs(newSelectedDrugs);
      setSearchQuery('');
      
      toast({
        description: `${drug.name} added to your list`,
        duration: 2000,
      });
    }
  };

  const removeDrug = (drugId: string) => {
    setSelectedDrugs(selectedDrugs.filter(d => d.id !== drugId));
    
    if (isChecked) {
      setInteractions([]);
      setIsChecked(false);
    }
  };

  const checkInteractions = () => {
    if (selectedDrugs.length < 2) {
      toast({
        title: "Please select at least two drugs",
        description: "Drug interactions occur between two or more medications",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const drugIds = selectedDrugs.map(d => d.id);
      const foundInteractions = getInteractions(drugIds);
      setInteractions(foundInteractions);
      setIsLoading(false);
      setIsChecked(true);

      if (foundInteractions.length === 0) {
        toast({
          title: "No interactions found",
          description: "No known interactions between the selected drugs",
        });
      } else {
        toast({
          title: `${foundInteractions.length} interaction${foundInteractions.length > 1 ? 's' : ''} found`,
          description: "Review the potential interactions below",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const renderSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'mild':
        return <Info className="text-blue-500" />;
      case 'moderate':
        return <AlertTriangle className="text-amber-500" />;
      case 'severe':
        return <AlertCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const getSeverityTextClass = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'text-blue-500';
      case 'moderate':
        return 'text-amber-500';
      case 'severe':
        return 'text-red-500';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="pharma-input flex items-center cursor-text"
            >
              <Search className="w-5 h-5 text-muted-foreground mr-2" />
              {selectedDrugs.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedDrugs.map((drug) => (
                    <Badge 
                      key={drug.id}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-1"
                    >
                      {drug.name}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDrug(drug.id);
                        }}
                        className="ml-1 rounded-full hover:bg-muted p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                  <span className="text-muted-foreground">
                    Add another medication...
                  </span>
                </div>
              ) : (
                <span className="text-muted-foreground">
                  Search and add medications...
                </span>
              )}
            </div>
          </div>

          <Button 
            onClick={checkInteractions} 
            className="pharma-button w-full"
            disabled={selectedDrugs.length < 2 || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking Interactions...
              </span>
            ) : (
              'Get Interactions'
            )}
          </Button>
        </div>

        {isChecked && (
          <div className="animate-fade-in space-y-6">
            {interactions.length > 0 ? (
              <>
                <h3 className="text-lg font-medium">
                  Found {interactions.length} potential interaction{interactions.length > 1 ? 's' : ''}
                </h3>
                <div className="space-y-4">
                  {interactions.map((interaction) => (
                    <Card key={interaction.id} className="pharma-card overflow-hidden">
                      <div className={`w-full h-1 ${
                        interaction.severity === 'mild' ? 'bg-blue-500' :
                        interaction.severity === 'moderate' ? 'bg-amber-500' : 'bg-red-500'
                      }`} />
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              {renderSeverityIcon(interaction.severity)}
                              <CardTitle className={`capitalize ${getSeverityTextClass(interaction.severity)}`}>
                                {interaction.severity} Interaction
                              </CardTitle>
                            </div>
                            <CardDescription className="mt-1">
                              Between {interaction.drugs.map(id => {
                                const drug = selectedDrugs.find(d => d.id === id);
                                return drug ? drug.name : '';
                              }).filter(Boolean).join(' and ')}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">{interaction.description}</p>
                        <Separator className="my-4" />
                        <div>
                          <h4 className="font-medium mb-2">Recommendation:</h4>
                          <p className="text-muted-foreground">{interaction.recommendation}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/30 pt-4">
                        <p className="text-xs text-muted-foreground">
                          Always consult with your healthcare provider before making any changes to your medication regimen.
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {interactions.some(i => i.severity === 'severe') && (
                  <AlternativeDrugSuggestions 
                    drugIds={selectedDrugs.map(d => d.id)} 
                  />
                )}
              </>
            ) : (
              <Card className="pharma-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    No Interactions Found
                  </CardTitle>
                  <CardDescription>
                    No known interactions between the selected medications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    While no interactions were found in our database, always consult with your healthcare provider or pharmacist about your medication regimen.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <div className="pharma-input flex items-center">
          <Search className="w-5 h-5 text-muted-foreground mr-2" />
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for medications..."
            className="flex-1 bg-transparent focus:outline-none"
          />
        </div>
        
        {searchQuery && (
          <div className="mt-2 max-h-[300px] overflow-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-1">
                {searchResults.map((drug) => (
                  <div
                    key={drug.id}
                    onClick={() => {
                      addDrug(drug);
                      setIsSearchOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between cursor-pointer"
                  >
                    <span>{drug.name}</span>
                    <Check className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center">
                <p className="text-muted-foreground">No medications found</p>
              </div>
            )}
          </div>
        )}
      </CommandDialog>
    </div>
  );
};

export default DrugInteractionChecker;
