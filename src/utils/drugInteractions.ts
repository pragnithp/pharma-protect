
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
];

// Sample interaction database
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
