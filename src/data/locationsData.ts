export interface LocationItem {
  id: string;
  name: string;
  region: 'Central & Capital' | 'North Coastal' | 'Heritage & Hinterland';
  tagline: string;
  propertyFocus: string[];
  description: string;
  connectivity: string;
}

export const GOA_LOCATIONS: LocationItem[] = [
  {
    id: 'panaji',
    name: 'Panaji',
    region: 'Central & Capital',
    tagline: 'Capital City & Administrative Center',
    propertyFocus: ['Commercial Offices', 'City Apartments', 'Heritage Buildings'],
    description: 'The vibrant heart of Goa featuring historic Latin quarters, waterfront promenades along the Mandovi, and prestigious administrative headquarters.',
    connectivity: 'Central hub, 35 mins from Dabolim & 45 mins from MOPA Airport'
  },
  {
    id: 'patto-plaza',
    name: 'Patto Plaza',
    region: 'Central & Capital',
    tagline: 'Premier Commercial & Corporate Hub',
    propertyFocus: ['Grade-A Corporate Offices', 'Banking & Retail Hubs', 'Commercial Suites'],
    description: 'Goa’s foremost corporate commercial hub housing leading financial institutions, corporate headquarters, and Gera Imperium towers.',
    connectivity: 'Adjoining Panaji KTC Bus Terminal and national highway connectivity'
  },
  {
    id: 'miramar',
    name: 'Miramar',
    region: 'Central & Capital',
    tagline: 'Prime Seaside Residential Enclave',
    propertyFocus: ['Sea-Facing Residences', 'Luxury Penthouses', 'Exclusive Gated Communities'],
    description: 'An upscale coastal residential neighborhood known for serene beachfront living, renowned educational institutions, and diplomatic residences.',
    connectivity: '5 mins from Panaji city center along Dayanand Bandodkar Marg'
  },
  {
    id: 'dona-paula',
    name: 'Dona Paula',
    region: 'Central & Capital',
    tagline: 'Prestigious Coastal Promontory',
    propertyFocus: ['Cliffside Luxury Villas', 'High-End Sea View Condos', 'Boutique Estates'],
    description: 'Goa’s most sought-after VIP residential promontory, offering panoramic vistas of the Arabian Sea, Raj Bhavan, and the Zuari-Mandovi confluence.',
    connectivity: '12 mins from Panaji city center and proximity to Dona Paula jetty'
  },
  {
    id: 'porvorim',
    name: 'Porvorim',
    region: 'Heritage & Hinterland',
    tagline: 'Legislative Capital & Modern Residential Corridor',
    propertyFocus: ['Gated Villa Communities', 'Modern Residential Towers', 'Retail High Streets'],
    description: 'The seat of Goa’s Legislative Assembly across the Mandovi river, offering seamless urban infrastructure, premier shopping, and high residential demand.',
    connectivity: 'Directly linked to Panaji via Atal Setu and Mandovi bridges'
  },
  {
    id: 'assagao',
    name: 'Assagao',
    region: 'Heritage & Hinterland',
    tagline: 'The Valley of Flowers & Luxury Designer Villas',
    propertyFocus: ['Portuguese Heritage Estates', 'Ultra-Luxury Designer Villas', 'Boutique Hospitality'],
    description: 'An enchanting village renowned for shaded avenues, restored Indo-Portuguese mansions, Michelin-caliber gastronomy, and prime luxury demand.',
    connectivity: '10 mins to Anjuna/Vagator beaches and 30 mins to MOPA Airport'
  },
  {
    id: 'anjuna',
    name: 'Anjuna',
    region: 'North Coastal',
    tagline: 'Iconic North Coastline & Lifestyle Hub',
    propertyFocus: ['Beachside Villas', 'Boutique Hospitality Assets', 'Commercial Dining Spaces'],
    description: 'A world-famous coastal destination blending vibrant lifestyle, clifftop cafes, and high-yielding holiday rental villas.',
    connectivity: 'Coastal arterial road access and 35 mins to MOPA Airport'
  },
  {
    id: 'vagator',
    name: 'Vagator',
    region: 'North Coastal',
    tagline: 'Dramatic Cliffs & High-Yield Hospitality',
    propertyFocus: ['Cliff-Edge Luxury Residences', 'Resort Plots', 'Boutique Hotel Properties'],
    description: 'Framed by Chapora Fort and dramatic red-rock cliffs, Vagator is a premier hotspot for lifestyle travelers and luxury holiday home buyers.',
    connectivity: 'Direct access to Siolim-Chopdem bridge and North Goa coastal spine'
  },
  {
    id: 'candolim',
    name: 'Candolim',
    region: 'North Coastal',
    tagline: 'Prime Beachfront Strip & Established Resort Belt',
    propertyFocus: ['Resort Apartments', 'Holiday Homes', 'Retail & Commercial Showrooms'],
    description: 'An established high-end coastal promenade offering sustained residential rental demand and thriving retail high-street corridors.',
    connectivity: 'Direct connectivity to Panaji and Calangute coastal belt'
  },
  {
    id: 'calangute',
    name: 'Calangute',
    region: 'North Coastal',
    tagline: 'Goa’s Commercial Beach Flagship',
    propertyFocus: ['Hospitality Real Estate', 'Commercial Retail Assets', 'Rental Holiday Flats'],
    description: 'Goa’s flagship tourism epicenter with unmatched footfall, vibrant commercial activity, and high asset turnover.',
    connectivity: 'Prime North Goa coastal belt highway connectivity'
  },
  {
    id: 'siolim',
    name: 'Siolim',
    region: 'Heritage & Hinterland',
    tagline: 'Scenic Chapora Riverfront & Tropical Sanctuaries',
    propertyFocus: ['Riverfront Villas', 'Private Estates', 'Eco-Luxury Residences'],
    description: 'A picturesque riverfront village balancing authentic Goan serenity with rapid access to Morjim and the northern beaches.',
    connectivity: 'Connecting gateway between Bardez and Pernem talukas'
  },
  {
    id: 'morjim',
    name: 'Morjim',
    region: 'North Coastal',
    tagline: 'Tranquil Olive Ridley Coast & Emerging Luxury Corridor',
    propertyFocus: ['Beachfront Land Parcels', 'Modernist Coastal Villas', 'Exclusive Resorts'],
    description: 'Known as the Turtle Beach, Morjim offers pristine sandy stretches, tranquil sea views, and strong capital appreciation potential.',
    connectivity: '25 mins from the new MOPA International Airport (GGX)'
  },
  {
    id: 'sangolda',
    name: 'Sangolda',
    region: 'Heritage & Hinterland',
    tagline: 'Refined Heritage Village & Central Bardez Living',
    propertyFocus: ['Restored Goan Mansions', 'Independent Bungalows', 'Boutique Commercial'],
    description: 'A charming inland enclave adorned with ancestral estates, artisan lifestyle boutiques, and quiet residential lanes close to Porvorim.',
    connectivity: '8 mins to Porvorim and 15 mins to Panaji city center'
  },
  {
    id: 'parra',
    name: 'Parra',
    region: 'Heritage & Hinterland',
    tagline: 'Scenic Palm Avenues & Quintessential Goan Countryside',
    propertyFocus: ['Luxury Villa Developments', 'Verdant Country Homes', 'Plotted Developments'],
    description: 'Famed for its palm-lined avenues and verdant fields, Parra is a tranquil residential haven situated minutes from Assagao and coastal belts.',
    connectivity: '5 mins to Mapusa city and 12 mins to Anjuna coastline'
  }
];
