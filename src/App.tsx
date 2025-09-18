import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage.tsx';
import HealthAssessment from './components/HealthAssessment.tsx';
import TriageResults from './components/TriageResults.tsx';
import ServiceLocator from './components/ServiceLocator.tsx';
import Emergency from './components/Emergency.tsx';
import Resources from './components/Resources.tsx';

export type Language = 'en' | 'hi' | 'ar' | 'bn';
export type Screen = 'landing' | 'assessment' | 'results' | 'services' | 'emergency' | 'resources';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [assessmentData, setAssessmentData] = useState<any>(null);

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <LandingPage
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            onStartAssessment={() => setCurrentScreen('assessment')}
          />
        );
      case 'assessment':
        return (
          <HealthAssessment
            language={selectedLanguage}
            onComplete={(data: any) => {
              setAssessmentData(data);
              setCurrentScreen('results');
            }}
            onBack={() => setCurrentScreen('landing')}
          />
        );
      case 'results':
        return (
          <TriageResults
            data={assessmentData}
            language={selectedLanguage}
            onFindServices={() => setCurrentScreen('services')}
            onBack={() => setCurrentScreen('assessment')}
          />
        );
      case 'services':
        return (
          <ServiceLocator
            language={selectedLanguage}
            onBack={() => setCurrentScreen('results')}
          />
        );
      case 'emergency':
        return (
          <Emergency
            language={selectedLanguage}
            onBack={() => setCurrentScreen('landing')}
          />
        );
      case 'resources':
        return (
          <Resources
            language={selectedLanguage}
            onBack={() => setCurrentScreen('landing')}
          />
        );
      default:
        return <LandingPage selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} onStartAssessment={() => setCurrentScreen('assessment')} />;
    }
  };

  return (
    <div className="App">
      {/* Emergency Button - Always Visible */}
      <button
        className="emergency-btn"
        onClick={() => setCurrentScreen('emergency')}
      >
        🚨 Emergency
      </button>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button onClick={() => setCurrentScreen('landing')} className={currentScreen === 'landing' ? 'active' : ''}>
          🏠 Home
        </button>
        <button onClick={() => setCurrentScreen('assessment')} className={currentScreen === 'assessment' ? 'active' : ''}>
          📋 Assessment
        </button>
        <button onClick={() => setCurrentScreen('services')} className={currentScreen === 'services' ? 'active' : ''}>
          🏥 Services
        </button>
        <button onClick={() => setCurrentScreen('resources')} className={currentScreen === 'resources' ? 'active' : ''}>
          📚 Resources
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderCurrentScreen()}
      </main>
    </div>
  );
}

export default App;
