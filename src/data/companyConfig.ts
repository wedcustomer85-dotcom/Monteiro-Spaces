export const COMPANY_INFO = {
  name: 'Monteiro Spaces Real Estate Pvt Ltd',
  shortName: 'Monteiro Spaces',
  founder: 'Mr. Emsley Monteiro',
  founderRole: 'Founder / Director',
  address: {
    unit: 'Unit 608, Gera Imperium I',
    area: 'Patto Plaza',
    city: 'Panaji',
    state: 'Goa',
    pin: '403001',
    full: 'Unit 608, Gera Imperium I, Patto Plaza, Panaji, Goa – 403001'
  },
  contact: {
    phoneOffice: '+91 93261 11933',
    phoneMobile: '+91 93261 11933',
    email: 'MonteiroSpaces.Goa@gmail.com',
    whatsappNumber: '919326111933',
    workingHours: 'Monday – Saturday: 9:30 AM – 6:00 PM (IST)'
  },
  coordinates: {
    lat: 15.4989,
    lng: 73.8378,
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757833075677!2d73.8356113!3d15.4989167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0866b1a20ff%3A0x87a552b7c6fa713b!2sGera%20Imperium%201%2C%20Patto%20Plaza%2C%20Panaji%2C%20Goa%20403001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Gera+Imperium+I+Patto+Plaza+Panaji+Goa+403001'
  }
};

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
