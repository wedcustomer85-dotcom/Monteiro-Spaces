import { useState } from 'react';
import { MapPin, Navigation, ArrowRight, Check, Compass } from 'lucide-react';
import { GOA_LOCATIONS, LocationItem } from '../data/locationsData';

interface LocationsSectionProps {
  onSelectLocation: (locationName: string) => void;
}

type RegionFilter = 'All' | 'Central & Capital' | 'North Coastal' | 'Heritage & Hinterland';

export default function LocationsSection({ onSelectLocation }: LocationsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<RegionFilter>('All');
  const [activeLocationId, setActiveLocationId] = useState<string>('patto-plaza');

  const filteredLocations = selectedFilter === 'All'
    ? GOA_LOCATIONS
    : GOA_LOCATIONS.filter((loc) => loc.region === selectedFilter);

  const activeLocation = GOA_LOCATIONS.find((l) => l.id === activeLocationId) || GOA_LOCATIONS[0];

  return (
    <section id="locations" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
            <span>Micro-Market Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>Covering 14 Prime North Goa Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
            Explore Strategic North Goa Property Locations
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From the bustling commercial avenues of Patto Plaza and Panaji to high-value coastal belts and serene heritage valleys, we provide hyper-local insights exclusively across North Goa’s most coveted sectors.
          </p>
        </div>

        {/* Visual Landscape Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-md mb-12 border border-slate-200 bg-slate-900">
          <div className="h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/src/assets/images/goa_locations_showcase_1794321358056.jpg"
              alt="Panoramic view of Panaji, Mandovi river and coastal North Goa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                North Goa Real Estate Territory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">From Panaji & Patto Plaza to North Goa Coastlines</h3>
            </div>
            <div className="text-xs text-slate-300 max-w-sm">
              Deep on-ground relationships with Goan landowners, legacy families, and corporate developers.
            </div>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          {(['All', 'Central & Capital', 'North Coastal', 'Heritage & Hinterland'] as RegionFilter[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                selectedFilter === filter
                  ? 'bg-[#0B192C] text-white shadow-sm'
                  : 'bg-[#F8F9FA] text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {filter === 'All' ? 'All Locations (14)' : filter}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLocations.map((loc: LocationItem) => {
            const isSelected = loc.id === activeLocationId;
            return (
              <div
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`cursor-pointer rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 bg-white ${
                  isSelected
                    ? 'border-[#0B192C] shadow-md ring-2 ring-[#0B192C]/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-[#C5A880] uppercase tracking-wider block">
                        {loc.region}
                      </span>
                      <h4 className="text-lg font-bold text-[#0B192C] flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                        <span>{loc.name}</span>
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-700 mb-2.5">
                    {loc.tagline}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {loc.description}
                  </p>

                  {/* Property Focus */}
                  <div className="mb-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                      Primary Asset Focus
                    </span>
                    <div className="space-y-1">
                      {loc.propertyFocus.map((focus, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#C5A880] shrink-0" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connectivity highlight */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mb-5 bg-[#F8F9FA] p-2.5 rounded-md">
                    <Navigation className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{loc.connectivity}</span>
                  </div>
                </div>

                {/* Enquiry Action */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectLocation(loc.name);
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#F8F9FA] hover:bg-[#C5A880] hover:text-[#0B192C] rounded-md border border-slate-200 hover:border-[#C5A880] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Enquire for {loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Location Deep Dive Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B192C] text-white rounded-xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-1">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span>Spotlight on {activeLocation.name}</span>
            </div>
            <h4 className="text-xl font-bold mb-2">{activeLocation.tagline}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Seeking specific plot sizes, commercial footfall data, or villa inventory in {activeLocation.name}? Our Patto Plaza advisory desk maintains active off-market listings and verified ownership profiles.
            </p>
          </div>
          <button
            onClick={() => onSelectLocation(activeLocation.name)}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#C5A880] hover:bg-[#d8bc94] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Request Brief for {activeLocation.name}
          </button>
        </div>
      </div>
    </section>
  );
}
