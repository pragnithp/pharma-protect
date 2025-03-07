
import React from 'react';
import { 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAnalyticsData } from '@/utils/drugInteractions';

const AnalyticsSection: React.FC = () => {
  const analyticsData = getAnalyticsData();
  
  const SEVERITY_COLORS = ['#64b5f6', '#ffb74d', '#e57373'];
  const DRUG_COLORS = ['#64b5f6', '#81c784', '#ffb74d', '#ba68c8', '#e57373'];
  const SYSTEM_COLORS = ['#64b5f6', '#81c784', '#ffb74d', '#ba68c8', '#9e9e9e'];

  return (
    <div className="w-full">
      <div className="space-y-12">
        {/* Severity Chart */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card className="pharma-card h-full">
              <CardHeader>
                <CardTitle>Drug Interactions by Severity</CardTitle>
                <CardDescription>Distribution of interactions by their severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData.interactionsBySeverity}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {analyticsData.interactionsBySeverity.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[index % SEVERITY_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-semibold">Understanding Interaction Severity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Info className="text-pharma-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-pharma-blue">Mild Interactions</h4>
                  <p className="text-muted-foreground">
                    These interactions may cause minor discomfort or slightly reduced efficacy, but rarely pose significant risks. Monitoring is usually sufficient.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <AlertTriangle className="text-amber-500 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-amber-500">Moderate Interactions</h4>
                  <p className="text-muted-foreground">
                    These interactions may cause significant discomfort or reduced efficacy. Alternative medications or adjusted dosing schedules may be needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <AlertCircle className="text-red-500 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-red-500">Severe Interactions</h4>
                  <p className="text-muted-foreground">
                    These interactions may be life-threatening or cause permanent damage. The drug combination should generally be avoided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Interacting Drugs */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Drugs with Most Interactions</h3>
            <p className="text-muted-foreground">
              Some medications are more likely to interact with other drugs due to their mechanism of action, metabolism path, or effects on the body. These medications require extra caution when combined with other treatments.
            </p>
            
            <div className="space-y-3">
              {analyticsData.topInteractingDrugs.map((drug, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Badge className="w-6 h-6 rounded-full p-0 flex items-center justify-center" style={{ backgroundColor: DRUG_COLORS[index % DRUG_COLORS.length] }}>
                    {index + 1}
                  </Badge>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{drug.name}</div>
                    <div className="w-full bg-muted rounded-full h-2 mt-1">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${(drug.value / analyticsData.topInteractingDrugs[0].value) * 100}%`,
                          backgroundColor: DRUG_COLORS[index % DRUG_COLORS.length]
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{drug.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="pharma-card">
            <CardHeader>
              <CardTitle>Top Interacting Drugs</CardTitle>
              <CardDescription>Medications with the highest number of known interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={analyticsData.topInteractingDrugs}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#64b5f6">
                      {analyticsData.topInteractingDrugs.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={DRUG_COLORS[index % DRUG_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Interactions by Body System */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="pharma-card order-2 md:order-1">
            <CardHeader>
              <CardTitle>Interactions by Body System</CardTitle>
              <CardDescription>Distribution of interactions by affected body systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsData.interactionsBySystem}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analyticsData.interactionsBySystem.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={SYSTEM_COLORS[index % SYSTEM_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-semibold">Interaction Effects by Body System</h3>
            <p className="text-muted-foreground">
              Drug interactions can affect different body systems. Understanding which systems are most commonly impacted can help healthcare providers monitor for specific side effects.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {analyticsData.interactionsBySystem.map((system, index) => (
                <div 
                  key={index}
                  className="pharma-card !p-4 border-l-4"
                  style={{ borderLeftColor: SYSTEM_COLORS[index % SYSTEM_COLORS.length] }}
                >
                  <div className="font-medium">{system.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {system.value}% of interactions
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
