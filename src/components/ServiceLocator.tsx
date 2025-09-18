import { useState } from 'react';
import type { Language } from '../App.tsx';

interface ServiceLocatorProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  en: {
    title: 'Healthcare Services Near You',
    filterBy: 'Filter by:',
    all: 'All Services',
    government: 'Government',
    ngo: 'NGO',
    unhcr: 'UNHCR Partner',
    distance: 'Distance',
    type: 'Type',
    availability: 'Available Now',
    call: 'Call',
    directions: 'Get Directions',
    back: 'Back'
  },
  hi: {
    title: 'आपके पास स्वास्थ्य सेवाएं',
    filterBy: 'फ़िल्टर करें:',
    all: 'सभी सेवाएं',
    government: 'सरकारी',
    ngo: 'एनजीओ',
    unhcr: 'यूएनएचसीआर पार्टनर',
    distance: 'दूरी',
    type: 'प्रकार',
    availability: 'अभी उपलब्ध',
    call: 'कॉल करें',
    directions: 'दिशा निर्देश',
    back: 'वापस'
  },
  ar: {
    title: 'الخدمات الصحية بالقرب منك',
    filterBy: 'تصفية حسب:',
    all: 'جميع الخدمات',
    government: 'حكومي',
    ngo: 'منظمة غير حكومية',
    unhcr: 'شريك المفوضية',
    distance: 'المسافة',
    type: 'النوع',
    availability: 'متاح الآن',
    call: 'اتصل',
    directions: 'احصل على الاتجاهات',
    back: 'عودة'
  },
  bn: {
    title: 'আপনার কাছাকাছি স্বাস্থ্যসেবা',
    filterBy: 'ফিল্টার করুন:',
    all: 'সকল সেবা',
    government: 'সরকারি',
    ngo: 'এনজিও',
    unhcr: 'ইউএনএইচসিআর পার্টনার',
    distance: 'দূরত্ব',
    type: 'ধরন',
    availability: 'এখন উপলব্ধ',
    call: 'কল করুন',
    directions: 'দিকনির্দেশনা পান',
    back: 'ফিরে যান'
  }
};

const mockServices = [
  {
    id: 1,
    name: 'Mumbai Public Hospital',
    type: 'government',
    address: 'Bandra West, Mumbai',
    distance: '2.3 km',
    phone: '+91-22-2640-7000',
    services: ['Emergency Care', 'General Medicine', 'Surgery'],
    languages: ['English', 'Hindi', 'Marathi'],
    available: true,
    rating: 4.2
  },
  {
    id: 2,
    name: 'Refugee Health Center - UNHCR',
    type: 'unhcr',
    address: 'Andheri East, Mumbai',
    distance: '5.1 km',
    phone: '+91-22-2820-4000',
    services: ['Primary Care', 'Mental Health', 'Vaccination'],
    languages: ['English', 'Hindi', 'Arabic', 'French'],
    available: true,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Care India Medical Center',
    type: 'ngo',
    address: 'Worli, Mumbai',
    distance: '3.7 km',
    phone: '+91-22-2493-8200',
    services: ['Women Health', 'Child Care', 'Nutrition'],
    languages: ['English', 'Hindi', 'Bengali'],
    available: false,
    rating: 4.1
  },
  {
    id: 4,
    name: 'Fortis Hospital',
    type: 'private',
    address: 'Mulund West, Mumbai',
    distance: '8.2 km',
    phone: '+91-22-3966-7777',
    services: ['Emergency', 'Specialist Care', 'Diagnostics'],
    languages: ['English', 'Hindi'],
    available: true,
    rating: 4.5
  }
];

const ServiceLocator = ({ language, onBack }: ServiceLocatorProps) => {
  const [filter, setFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const t = translations[language];

  const filteredServices = filter === 'all' 
    ? mockServices 
    : mockServices.filter(service => service.type === filter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government': return '#007BFF';
      case 'unhcr': return '#0066CC';
      case 'ngo': return '#28A745';
      case 'private': return '#6C757D';
      default: return '#6C757D';
    }
  };

  return (
    <div className="service-locator">
      <div className="service-header">
        <h2>{t.title}</h2>
        <button className="back-btn" onClick={onBack}>
          ← {t.back}
        </button>
      </div>

      <div className="map-placeholder">
        <div className="map-container">
          <div className="map-overlay">
            <h3>📍 Interactive Map</h3>
            <p>Showing {filteredServices.length} healthcare facilities near you</p>
            <div className="map-pins">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="map-pin" 
                  style={{ 
                    left: `${20 + index * 15}%`, 
                    top: `${30 + index * 10}%`,
                    backgroundColor: getTypeColor(service.type)
                  }}
                  onClick={() => setSelectedService(service.id)}
                >
                  🏥
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="filters">
        <label>{t.filterBy}</label>
        <div className="filter-buttons">
          {['all', 'government', 'ngo', 'unhcr'].map(filterType => (
            <button
              key={filterType}
              className={`filter-btn ${filter === filterType ? 'active' : ''}`}
              onClick={() => setFilter(filterType)}
            >
              {t[filterType as keyof typeof t]}
            </button>
          ))}
        </div>
      </div>

      <div className="services-list">
        {filteredServices.map(service => (
          <div 
            key={service.id} 
            className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
            onClick={() => setSelectedService(service.id)}
          >
            <div className="service-header">
              <h3>{service.name}</h3>
              <span 
                className="service-type"
                style={{ backgroundColor: getTypeColor(service.type) }}
              >
                {service.type.toUpperCase()}
              </span>
            </div>
            
            <div className="service-info">
              <p className="address">📍 {service.address}</p>
              <p className="distance">🚶 {service.distance}</p>
              <p className="phone">📞 {service.phone}</p>
            </div>

            <div className="service-details">
              <div className="services-offered">
                <strong>Services:</strong>
                <div className="service-tags">
                  {service.services.map(s => (
                    <span key={s} className="service-tag">{s}</span>
                  ))}
                </div>
              </div>
              
              <div className="languages-supported">
                <strong>Languages:</strong> {service.languages.join(', ')}
              </div>
              
              <div className="availability">
                <span className={`status ${service.available ? 'available' : 'unavailable'}`}>
                  {service.available ? '🟢 ' + t.availability : '🔴 Closed'}
                </span>
                <span className="rating">⭐ {service.rating}</span>
              </div>
            </div>

            <div className="service-actions">
              <button className="action-btn call-btn">
                📞 {t.call}
              </button>
              <button className="action-btn directions-btn">
                🗺️ {t.directions}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLocator;