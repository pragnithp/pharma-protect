
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Drug, AlternativeDrug, getDrugById, getAlternativeDrugs } from '@/utils/drugInteractions';

interface AlternativeDrugSuggestionsProps {
  drugIds: string[];
}

const AlternativeDrugSuggestions: React.FC<AlternativeDrugSuggestionsProps> = ({ drugIds }) => {
  const alternatives: AlternativeDrug[] = drugIds
    .map(id => getAlternativeDrugs(id))
    .filter((alt): alt is AlternativeDrug => alt !== null);

  if (alternatives.length === 0) return null;

  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center gap-2 text-amber-600">
        <AlertTriangle className="w-5 h-5" />
        <h3 className="font-medium">Alternative Medications</h3>
      </div>
      
      <div className="grid gap-4">
        {alternatives.map((alternative) => {
          const originalDrug = getDrugById(alternative.originalDrugId);
          if (!originalDrug) return null;

          return (
            <Card key={alternative.originalDrugId} className="bg-amber-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Alternatives for {originalDrug.name}
                </CardTitle>
                <CardDescription>
                  {alternative.reason}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {alternative.alternatives.map((drug) => (
                    <Badge 
                      key={drug.id}
                      variant="secondary" 
                      className="bg-white"
                    >
                      {drug.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AlternativeDrugSuggestions;
