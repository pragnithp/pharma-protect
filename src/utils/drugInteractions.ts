// Sample drug interaction data
// In a real application, this would come from a medical API

export interface Drug {
  id: string;
  name: string;
}

export interface Interaction {
  id: string;
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
  recommendation: string;
  drugs: string[]; // drug ids that cause this interaction
}

// Sample drug database
// Updated Sample drug database with 10 additional real drugs
const drugDatabase: Drug[] = [
  { id: 'd1', name: 'Aspirin' },
  { id: 'd2', name: 'Ibuprofen' },
  { id: 'd3', name: 'Paracetamol' },
  { id: 'd4', name: 'Lisinopril' },
  { id: 'd5', name: 'Amoxicillin' },
  { id: 'd6', name: 'Atorvastatin' },
  { id: 'd7', name: 'Metformin' },
  { id: 'd8', name: 'Omeprazole' },
  { id: 'd9', name: 'Simvastatin' },
  { id: 'd10', name: 'Warfarin' },
  { id: 'd11', name: 'Clopidogrel' },
  { id: 'd12', name: 'Levothyroxine' },
  { id: 'd13', name: 'Losartan' },
  { id: 'd14', name: 'Albuterol' },
  { id: 'd15', name: 'Gabapentin' },
  { id: 'd16', name: 'Fluoxetine' },
  { id: 'd17', name: 'Sertraline' },
  { id: 'd18', name: 'Hydrochlorothiazide' },
  { id: 'd19', name: 'Furosemide' },
  { id: 'd20', name: 'Prednisone' },
  { id: 'd21', name: 'Amlodipine' },
  { id: 'd22', name: 'Tamsulosin' },
  { id: 'd23', name: 'Cetirizine' },
  { id: 'd24', name: 'Phenytoin' },
  { id: 'd25', name: 'Montelukast' },
  { id: 'd26', name: 'Diphenhydramine' }, // New drug
  { id: 'd27', name: 'Metoprolol' },     // New drug
  { id: 'd28', name: 'Ciprofloxacin' },   // New drug
  { id: 'd29', name: 'Prednisolone' },    // New drug
  { id: 'd30', name: 'Fexofenadine' },    // New drug
  { id: 'd31', name: 'Naproxen' },        // New drug
  { id: 'd32', name: 'Ezetimibe' },       // New drug
  { id: 'd33', name: 'Doxycycline' },     // New drug
  { id: 'd34', name: 'Ranitidine' },      // New drug
  { id: 'd35', name: 'Trazodone' },       // New drug
  { id: 'd36', name: 'Digoxin' },
  { id: 'd37', name: 'Sildenafil' },
  { id: 'd38', name: 'Methotrexate' },
  { id: 'd39', name: 'Verapamil' },
  { id: 'd40', name: 'Erythromycin' },
  { id: 'd41', name: 'Fluconazole' },
  { id: 'd42', name: 'Lorazepam' },
  { id: 'd43', name: 'Amiodarone' },
  // { id: 'd44', name: 'Cimetidine' },
  // { id: 'd45', name: 'Atenolol' },
  // { id: 'd46', name: 'Fentanyl' },
  // { id: 'd47', name: 'Diazepam' },
  // { id: 'd48', name: 'Carbamazepine' },
  // { id: 'd49', name: 'Ketoconazole' },
  // { id: 'd50', name: 'Rifampin' },
  // { id: 'd51', name: 'Hydroxychloroquine' },
  // { id: 'd52', name: 'Quetiapine' },
  // { id: 'd53', name: 'Loratadine' },
  // { id: 'd54', name: 'Alprazolam' },
  // { id: 'd55', name: 'Clarithromycin' },
];

// Updated Sample interaction database with new interactions
const interactionDatabase: Interaction[] = [
  {
    id: 'i1',
    severity: 'moderate',
    description: 'Increased risk of gastrointestinal bleeding when aspirin is combined with ibuprofen.',
    recommendation: 'Take these medications at least 8 hours apart or consider alternative pain relievers.',
    drugs: ['d1', 'd2'],
  },
  {
    id: 'i2',
    severity: 'severe',
    description: 'Warfarin and aspirin combination increases the risk of serious bleeding.',
    recommendation: 'This combination should generally be avoided unless specifically directed by a healthcare provider with careful monitoring.',
    drugs: ['d1', 'd10'],
  },
  {
    id: 'i3',
    severity: 'mild',
    description: 'Omeprazole may reduce the effectiveness of clopidogrel.',
    recommendation: 'Consider alternative acid-reducing medications such as famotidine.',
    drugs: ['d8', 'd11'],
  },
  {
    id: 'i4',
    severity: 'moderate',
    description: 'Simvastatin levels may be increased when taken with omeprazole, increasing the risk of side effects.',
    recommendation: 'Monitor for muscle pain and consider dose adjustment if necessary.',
    drugs: ['d8', 'd9'],
  },
  {
    id: 'i5',
    severity: 'moderate',
    description: 'Levothyroxine absorption may be decreased when taken with omeprazole.',
    recommendation: 'Take levothyroxine at least 4 hours before or after omeprazole.',
    drugs: ['d8', 'd12'],
  },
  {
    id: 'i6',
    severity: 'mild',
    description: 'Lisinopril and metformin may both lower blood sugar, potentially causing hypoglycemia.',
    recommendation: 'Monitor blood sugar levels closely when using these medications together.',
    drugs: ['d4', 'd7'],
  },
  {
    id: 'i7',
    severity: 'severe',
    description: 'Warfarin and clopidogrel combination significantly increases bleeding risk.',
    recommendation: 'This combination should be avoided unless prescribed by a specialist with very careful monitoring.',
    drugs: ['d10', 'd11'],
  },
  {
    id: 'i8',
    severity: 'moderate',
    description: 'Fluoxetine may increase the levels of warfarin, increasing the risk of bleeding.',
    recommendation: 'Close monitoring of INR (International Normalized Ratio) is recommended.',
    drugs: ['d16', 'd10'],
  },
  {
    id: 'i9',
    severity: 'mild',
    description: 'Cetirizine and sertraline may increase the sedative effects when combined.',
    recommendation: 'Use caution when driving or operating machinery.',
    drugs: ['d23', 'd17'],
  },
  {
    id: 'i10',
    severity: 'severe',
    description: 'Hydrochlorothiazide and furosemide may increase the risk of severe electrolyte imbalance when combined.',
    recommendation: 'Monitor electrolyte levels closely and adjust dosages as necessary.',
    drugs: ['d18', 'd19'],
  },
  // New interactions for added drugs
  {
    id: 'i11',
    severity: 'moderate',
    description: 'Diphenhydramine may increase the sedative effect of trazodone.',
    recommendation: 'Avoid operating heavy machinery or driving when using these drugs together.',
    drugs: ['d26', 'd35'],
  },
  {
    id: 'i12',
    severity: 'mild',
    description: 'Metoprolol and ciprofloxacin may increase the blood pressure-lowering effects of metoprolol.',
    recommendation: 'Monitor blood pressure regularly.',
    drugs: ['d27', 'd28'],
  },
  {
    id: 'i13',
    severity: 'moderate',
    description: 'Prednisolone and naproxen may increase the risk of gastrointestinal irritation or bleeding.',
    recommendation: 'Avoid long-term use of these drugs together unless advised by a doctor.',
    drugs: ['d29', 'd31'],
  },
  {
    id: 'i14',
    severity: 'severe',
    description: 'Fexofenadine and ranitidine may increase the sedative effects.',
    recommendation: 'Use caution when engaging in activities requiring alertness.',
    drugs: ['d30', 'd34'],
  },
  {
    id: 'i15',
    severity: 'mild',
    description: 'Ezetimibe and simvastatin together may increase the risk of muscle pain or weakness.',
    recommendation: 'Monitor for signs of muscle damage and report any unusual symptoms.',
    drugs: ['d32', 'd9'],
  },
  {
    id: 'i16',
    severity: 'moderate',
    description: 'Doxycycline and metoprolol may increase the risk of low blood pressure.',
    recommendation: 'Monitor blood pressure closely during co-administration.',
    drugs: ['d33', 'd27'],
  },
  {
    id: 'i17',
    severity: 'moderate',
    description: 'Fluoxetine and Sertraline, both SSRIs, may increase the risk of serotonin syndrome when used together.',
    recommendation: 'Avoid concurrent use unless specifically directed by a healthcare provider with careful monitoring for serotonin syndrome symptoms.',
    drugs: ['d16', 'd17']
  },
  {
    id: 'i18',
    severity: 'moderate',
    description: 'Fluoxetine may increase the hypotensive effects of Amlodipine, leading to potential dizziness or fainting.',
    recommendation: 'Monitor blood pressure closely and adjust Amlodipine dose if necessary.',
    drugs: ['d16', 'd21']
  },
  {
    id: 'i19',
    severity: 'severe',
    description: 'Fluoxetine can increase the plasma levels of Phenytoin, increasing the risk of Phenytoin toxicity.',
    recommendation: 'Monitor Phenytoin levels closely and adjust the dose as needed. Consider alternative antidepressants.',
    drugs: ['d16', 'd24']
  },
  {
    id: 'i20',
    severity: 'moderate',
    description: 'Hydrochlorothiazide and Amlodipine may enhance hypotensive effects, increasing the risk of low blood pressure.',
    recommendation: 'Monitor blood pressure regularly and adjust doses if hypotension occurs.',
    drugs: ['d18', 'd21']
  },
  {
    id: 'i21',
    severity: 'moderate',
    description: 'Furosemide and Prednisone may increase the risk of electrolyte imbalances, particularly hypokalemia.',
    recommendation: 'Monitor electrolyte levels, especially potassium, and consider potassium supplementation if needed.',
    drugs: ['d19', 'd20']
  },
  {
    id: 'i22',
    severity: 'moderate',
    description: 'Prednisone and Prednisolone, both corticosteroids, may increase the risk of systemic side effects like hyperglycemia and immunosuppression  immunosuppression when used together.',
    recommendation: 'Use the lowest effective dose and monitor for corticosteroid-related side effects.',
    drugs: ['d20', 'd29']
  },
  {
    id: 'i23',
    severity: 'moderate',
    description: 'Tamsulosin and Amlodipine may enhance hypotensive effects, increasing the risk of orthostatic hypotension.',
    recommendation: 'Monitor for dizziness and advise the patient to rise slowly from sitting or lying positions.',
    drugs: ['d21', 'd22']
  },
  {
    id: 'i24',
    severity: 'moderate',
    description: 'Cetirizine and Diphenhydramine, both antihistamines, may cause additive sedative effects.',
    recommendation: 'Advise patients to avoid activities requiring mental alertness, such as driving, when taking these drugs together.',
    drugs: ['d23', 'd26']
  },
  {
    id: 'i25',
    severity: 'moderate',
    description: 'Phenytoin may decrease the efficacy of Montelukast by inducing its metabolism.',
    recommendation: 'Monitor asthma control and consider alternative leukotriene modifiers if needed.',
    drugs: ['d24', 'd25']
  },
  {
    id: 'i26',
    severity: 'moderate',
    description: 'Metoprolol and Amlodipine may enhance blood pressure-lowering effects, increasing the risk of hypotension.',
    recommendation: 'Monitor blood pressure closely and adjust doses as needed.',
    drugs: ['d21', 'd27']
  },
  {
    id: 'i27',
    severity: 'severe',
    description: 'Ciprofloxacin may increase the risk of tendon rupture when combined with Prednisone or Prednisolone.',
    recommendation: 'Avoid this combination if possible. If unavoidable, monitor for signs of tendon pain or swelling.',
    drugs: ['d28', 'd20', 'd29']
  },
  {
    id: 'i28',
    severity: 'moderate',
    description: 'Fexofenadine and Cetirizine, both antihistamines, may cause additive drowsiness or sedation.',
    recommendation: 'Advise caution with activities requiring alertness and consider using a single antihistamine.',
    drugs: ['d23', 'd30']
  }
];


// Function to search for drugs by name
export const searchDrugs = (query: string): Drug[] => {
  if (!query) return [];
  const normalizedQuery = query.toLowerCase().trim();
  return drugDatabase.filter(drug => 
    drug.name.toLowerCase().includes(normalizedQuery)
  );
};

// Function to get drug by ID
export const getDrugById = (id: string): Drug | undefined => {
  return drugDatabase.find(drug => drug.id === id);
};

// Function to get interactions between multiple drugs
export const getInteractions = (drugIds: string[]): Interaction[] => {
  if (drugIds.length < 2) return [];
  
  return interactionDatabase.filter(interaction => {
    // Check if at least two of the selected drugs are involved in this interaction
    const matchingDrugs = interaction.drugs.filter(id => drugIds.includes(id));
    return matchingDrugs.length >= 2;
  });
};

// Get analytics data for charts
export interface AnalyticsData {
  interactionsBySeverity: { name: string; value: number }[];
  topInteractingDrugs: { name: string; value: number }[];
  interactionsBySystem: { name: string; value: number }[];
}

export const getAnalyticsData = (): AnalyticsData => {
  return {
    interactionsBySeverity: [
      { name: 'Mild', value: 25 },
      { name: 'Moderate', value: 45 },
      { name: 'Severe', value: 30 },
    ],
    topInteractingDrugs: [
      { name: 'Warfarin', value: 35 },
      { name: 'Aspirin', value: 28 },
      { name: 'Clopidogrel', value: 22 },
      { name: 'Omeprazole', value: 15 },
      { name: 'Ibuprofen', value: 12 },
    ],
    interactionsBySystem: [
      { name: 'Cardiovascular', value: 40 },
      { name: 'Gastrointestinal', value: 25 },
      { name: 'Central Nervous System', value: 20 },
      { name: 'Respiratory', value: 10 },
      { name: 'Other', value: 5 },
    ],
  };
};

// Blog article data
export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  date: string;
}

export const getBlogArticles = (): BlogArticle[] => {
  return [
    {
      id: 'blog1',
      title: 'Understanding the Dangers of NSAID Interactions',
      summary: 'NSAIDs like aspirin and ibuprofen are commonly used, but can cause serious interactions with other medications.',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Drug Safety',
      date: 'May 10, 2023',
    },
    {
      id: 'blog2',
      title: 'Anticoagulants and Their Interactions: What You Need to Know',
      summary: 'Blood thinners can interact with many common medications and even foods. Learn what to avoid.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Medication Management',
      date: 'April 22, 2023',
    },
    {
      id: 'blog3',
      title: 'The Role of Pharmacists in Preventing Drug Interactions',
      summary: "Pharmacists are often the last line of defense against harmful drug interactions. Here's how they help.",
      imageUrl: 'https://images.unsplash.com/photo-1577401152485-564236659422?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Healthcare',
      date: 'March 15, 2023',
    },
    {
      id: 'blog4',
      title: 'Food-Drug Interactions: Common Foods to Avoid with Certain Medications',
      summary: 'From grapefruit to leafy greens, some foods can significantly impact how your medications work.',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Nutrition',
      date: 'February 8, 2023',
    },
  ];
};

// Pharmacy data
export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const getNearbyPharmacies = (): Pharmacy[] => {
  return [
    {
      id: 'p1',
      name: 'MedPlus Pharmacy',
      address: '123 Health St, Medical District',
      phone: '(555) 123-4567',
      website: 'https://www.medplus.com',
      coordinates: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    {
      id: 'p2',
      name: 'Apollo Pharmacy',
      address: '456 Wellness Ave, Care Center',
      phone: '(555) 987-6543',
      website: 'https://www.apollopharmacy.com',
      coordinates: {
        lat: 37.7830,
        lng: -122.4090,
      },
    },
    {
      id: 'p3',
      name: 'CarePlus Pharmacy',
      address: '789 Treatment Blvd, Health Park',
      phone: '(555) 456-7890',
      coordinates: {
        lat: 37.7700,
        lng: -122.4300,
      },
    },
    {
      id: 'p4',
      name: 'HealthMart Pharmacy',
      address: '321 Medicine Rd, Wellness Square',
      phone: '(555) 234-5678',
      website: 'https://www.healthmart.com',
      coordinates: {
        lat: 37.7850,
        lng: -122.4250,
      },
    },
  ];
};

// Function to get alternative drugs
export const getAlternativeDrugs = (drugId: string): AlternativeDrug | null => {
  // This is a simplified example. In a real application, this would come from a medical API
  const alternativeMap: Record<string, AlternativeDrug> = {
    'd1': {
      originalDrugId: 'd1',
      alternatives: [
        { id: 'd3', name: 'Paracetamol' }
      ],
      reason: 'Paracetamol can be a safer alternative to Aspirin for pain relief when bleeding risk is a concern.'
    },
    'd10': {
      originalDrugId: 'd10',
      alternatives: [
        { id: 'd13', name: 'Losartan' },
        { id: 'd4', name: 'Lisinopril' }
      ],
      reason: 'For patients requiring anticoagulation, these medications might be suitable alternatives depending on the condition being treated.'
    },
    'd11': {
      originalDrugId: 'd11',
      alternatives: [
        { id: 'd1', name: 'Aspirin' }
      ],
      reason: 'Low-dose aspirin might be an alternative antiplatelet agent in some cases.'
    }
  };

  return alternativeMap[drugId] || null;
};
