export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  iconName: string;
  shortDesc: string;
  scope: string[];
  ctaLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'buy-property',
    number: '01',
    title: 'Buy Property',
    iconName: 'Home',
    shortDesc: 'Curated acquisition advisory for prime residential villas, apartments, plots, and commercial assets across North Goa.',
    scope: [
      'Tailored requirement profiling & discreet property shortlisting',
      'On-ground physical inspections and structural assessments',
      'Comparative market valuation & strategic price negotiation'
    ],
    ctaLabel: 'Enquire to Buy'
  },
  {
    id: 'sell-property',
    number: '02',
    title: 'Sell Property',
    iconName: 'Building2',
    shortDesc: 'Discreet and targeted disposition services connecting property owners with qualified, vetted buyers in North Goa.',
    scope: [
      'Accurate asset positioning & competitive market pricing',
      'Confidential marketing to accredited private client networks',
      'Structured buyer vetting, negotiation, and closing management'
    ],
    ctaLabel: 'List Your Property'
  },
  {
    id: 'residential-leasing',
    number: '03',
    title: 'Residential Leasing',
    iconName: 'KeyRound',
    shortDesc: 'Premium rental advisory for luxury villas, penthouses, and executive residences in North Goa’s premier enclaves.',
    scope: [
      'Curated long-term tenant placement for high-net-worth owners',
      'Comprehensive tenant background and credential verification',
      'Standardized Goa lease agreements and move-in coordination'
    ],
    ctaLabel: 'Enquire for Leasing'
  },
  {
    id: 'commercial-leasing',
    number: '04',
    title: 'Commercial Leasing',
    iconName: 'Briefcase',
    shortDesc: 'Strategic workspace and retail solutions across Patto Plaza, Panaji, and key North Goa commercial high streets.',
    scope: [
      'Grade-A corporate office acquisition in Patto Plaza & Panaji',
      'High-street retail and F&B showroom site selection',
      'Lease structuring, lock-in terms, and escalation negotiations'
    ],
    ctaLabel: 'Find Commercial Space'
  },
  {
    id: 'investment-consultancy',
    number: '05',
    title: 'Investment Consultancy',
    iconName: 'TrendingUp',
    shortDesc: 'Institutional-grade real estate advisory analyzing capital appreciation, rental yield potential, and micro-market growth across North Goa.',
    scope: [
      'Data-backed micro-market viability and risk assessment',
      'Holiday home yield modeling & hospitality asset evaluation',
      'Strategic land bank acquisition with clear legal roadmaps'
    ],
    ctaLabel: 'Consult on Investments'
  },
  {
    id: 'property-valuation',
    number: '06',
    title: 'Property Valuation',
    iconName: 'Calculator',
    shortDesc: 'Objective, benchmarked valuation assessments reflecting genuine transaction realities and market conditions in North Goa.',
    scope: [
      'Recent comparable registry transaction data analysis',
      'Zoning, FAR/FSI, and development potential appraisal',
      'Independent advisory for acquisitions, disputes, or asset management'
    ],
    ctaLabel: 'Request Valuation'
  },
  {
    id: 'documentation-support',
    number: '07',
    title: 'Documentation & Transaction Support',
    iconName: 'FileCheck2',
    shortDesc: 'We do not provide this service directly. We provide the contact of experienced property lawyers and advocates, and we help in coordination if needed.',
    scope: [
      'Contacts of trusted property advocates & legal counsels in Goa',
      'Document collation and transaction coordination if needed',
      'Liaison and guidance for Sub-Registrar office appointments'
    ],
    ctaLabel: 'Request Lawyer Contacts & Coordination'
  }
];
