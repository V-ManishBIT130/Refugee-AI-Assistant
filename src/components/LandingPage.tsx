import { useState } from 'react';
import type { Language } from '../App.tsx';

interface LandingPageProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onStartAssessment: () => void;
}

const translations = {
  en: {
    welcome: 'Welcome to Refugee Health Assistant',
    subtitle: 'Your trusted health companion',
    startAssessment: 'Start Health Assessment',
    selectLanguage: 'Select Language'
  },
  hi: {
    welcome: 'शरणार्थी स्वास्थ्य सहायक में आपका स्वागत है',
    subtitle: 'आपका विश्वसनीय स्वास्थ्य साथी',
    startAssessment: 'स्वास्थ्य मूल्यांकन शुरू करें',
    selectLanguage: 'भाषा चुनें'
  },
  ar: {
    welcome: 'مرحباً بك في مساعد الصحة للاجئين',
    subtitle: 'رفيقك الصحي الموثوق',
    startAssessment: 'ابدأ التقييم الصحي',
    selectLanguage: 'اختر اللغة'
  },
  bn: {
    welcome: 'শরণার্থী স্বাস্থ্য সহায়কে আপনাকে স্বাগতম',
    subtitle: 'আপনার বিশ্বস্ত স্বাস্থ্য সাথী',
    startAssessment: 'স্বাস্থ্য মূল্যায়ন শুরু করুন',
    selectLanguage: 'ভাষা নির্বাচন করুন'
  }
};

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
  { code: 'bn' as Language, name: 'বাংলা', flag: '🇧🇩' }
];

const LandingPage = ({ selectedLanguage, onLanguageChange, onStartAssessment }: LandingPageProps) => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const t = translations[selectedLanguage];

  return (
    <div className="landing-page">
      <header className="header">
        <div className="trust-indicators">
          <span className="unhcr-logo">🛡️ UNHCR Partner</span>
          <span className="privacy-notice">🔒 Anonymous & Secure</span>
        </div>
      </header>

      <div className="hero-section">
        <h1 className="welcome-title">{t.welcome}</h1>
        <p className="subtitle">{t.subtitle}</p>
        
        <div className="language-selector">
          <button 
            className="language-btn"
            onClick={() => setShowLanguageSelector(!showLanguageSelector)}
          >
            {languages.find(lang => lang.code === selectedLanguage)?.flag} {t.selectLanguage}
          </button>
          
          {showLanguageSelector && (
            <div className="language-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${selectedLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setShowLanguageSelector(false);
                  }}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          className="start-assessment-btn"
          onClick={onStartAssessment}
        >
          {t.startAssessment}
        </button>
      </div>

      <div className="features-preview">
        <div className="feature-card">
          <span className="feature-icon">🏥</span>
          <h3>Health Assessment</h3>
          <p>Quick symptom checker</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>Find Services</h3>
          <p>Locate nearby clinics</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📚</span>
          <h3>Health Resources</h3>
          <p>Educational materials</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;