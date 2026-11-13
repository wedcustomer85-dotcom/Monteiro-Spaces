import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import LocationsSection from './components/LocationsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRequirement, setModalRequirement] = useState('');
  const [modalLocation, setModalLocation] = useState('');

  const handleOpenConsultation = (requirement = '', location = '') => {
    setModalRequirement(requirement);
    setModalLocation(location);
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setModalRequirement(`Service: ${serviceTitle}`);
    setModalLocation('');
    setModalOpen(true);
  };

  const handleSelectLocation = (locationName: string) => {
    setModalRequirement('');
    setModalLocation(locationName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#0B192C]">
      {/* Top Bar Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-grow">
        {/* Split-Layout Hero Section with Quick Enquiry Panel */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* About Monteiro Spaces & Founder Introduction */}
        <AboutSection />

        {/* 7 Core Services with Icon Cards & CTAs */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Explore 14 Goa Locations */}
        <LocationsSection onSelectLocation={handleSelectLocation} />

        {/* Why Choose Us: 6 Core Pillars */}
        <WhyChooseUsSection />

        {/* Our 4-Step Advisory Process */}
        <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Contact & Enquiry with Google Maps & WhatsApp Integration */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* Reusable Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialRequirement={modalRequirement}
        initialLocation={modalLocation}
      />
    </div>
  );
}
