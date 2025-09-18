import { useState } from 'react';
import type { Language } from '../App.tsx';

interface HealthAssessmentProps {
  language: Language;
  onComplete: (data: AssessmentData) => void;
  onBack: () => void;
}

interface AssessmentData {
  demographics: {
    age: string;
    gender: string;
    countryOfOrigin: string;
  };
  symptoms: string[];
  painLevel: number;
  urgency: string;
}

const translations = {
  en: {
    title: 'Health Assessment',
    step1: 'Basic Information',
    step2: 'Current Symptoms',
    step3: 'Pain Level',
    step4: 'Urgency',
    age: 'Age',
    gender: 'Gender',
    country: 'Country of Origin',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    selectSymptoms: 'Select your symptoms:',
    painScale: 'Rate your pain (1-10):',
    urgencyLevel: 'How urgent is your condition?',
    low: 'Low - Can wait',
    medium: 'Medium - Within days',
    high: 'High - Need help soon',
    next: 'Next',
    back: 'Back',
    complete: 'Complete Assessment'
  },
  hi: {
    title: 'स्वास्थ्य मूल्यांकन',
    step1: 'बुनियादी जानकारी',
    step2: 'वर्तमान लक्षण',
    step3: 'दर्द का स्तर',
    step4: 'तात्कालिकता',
    age: 'उम्र',
    gender: 'लिंग',
    country: 'मूल देश',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    selectSymptoms: 'अपने लक्षण चुनें:',
    painScale: 'अपने दर्द को रेट करें (1-10):',
    urgencyLevel: 'आपकी स्थिति कितनी गंभीर है?',
    low: 'कम - इंतजार कर सकते हैं',
    medium: 'मध्यम - कुछ दिनों में',
    high: 'उच्च - जल्दी मदद चाहिए',
    next: 'अगला',
    back: 'वापस',
    complete: 'मूल्यांकन पूरा करें'
  },
  ar: {
    title: 'التقييم الصحي',
    step1: 'المعلومات الأساسية',
    step2: 'الأعراض الحالية',
    step3: 'مستوى الألم',
    step4: 'الإلحاح',
    age: 'العمر',
    gender: 'الجنس',
    country: 'بلد المنشأ',
    male: 'ذكر',
    female: 'أنثى',
    other: 'آخر',
    selectSymptoms: 'اختر أعراضك:',
    painScale: 'قيم ألمك (1-10):',
    urgencyLevel: 'ما مدى إلحاح حالتك؟',
    low: 'منخفض - يمكن الانتظار',
    medium: 'متوسط - خلال أيام',
    high: 'عالي - أحتاج مساعدة قريباً',
    next: 'التالي',
    back: 'العودة',
    complete: 'إكمال التقييم'
  },
  bn: {
    title: 'স্বাস্থ্য মূল্যায়ন',
    step1: 'মৌলিক তথ্য',
    step2: 'বর্তমান লক্ষণ',
    step3: 'ব্যথার মাত্রা',
    step4: 'জরুরি অবস্থা',
    age: 'বয়স',
    gender: 'লিঙ্গ',
    country: 'মূল দেশ',
    male: 'পুরুষ',
    female: 'মহিলা',
    other: 'অন্যান্য',
    selectSymptoms: 'আপনার লক্ষণগুলি নির্বাচন করুন:',
    painScale: 'আপনার ব্যথা রেট করুন (১-১০):',
    urgencyLevel: 'আপনার অবস্থা কতটা জরুরি?',
    low: 'কম - অপেক্ষা করতে পারেন',
    medium: 'মধ্যম - কয়েক দিনের মধ্যে',
    high: 'উচ্চ - শীঘ্রই সাহায্য প্রয়োজন',
    next: 'পরবর্তী',
    back: 'ফিরে যান',
    complete: 'মূল্যায়ন সম্পূর্ণ করুন'
  }
};

const symptoms = [
  { id: 'fever', icon: '🤒', nameEn: 'Fever' },
  { id: 'cough', icon: '😷', nameEn: 'Cough' },
  { id: 'headache', icon: '🤕', nameEn: 'Headache' },
  { id: 'nausea', icon: '🤢', nameEn: 'Nausea' },
  { id: 'fatigue', icon: '😴', nameEn: 'Fatigue' },
  { id: 'breathing', icon: '🫁', nameEn: 'Breathing difficulty' },
  { id: 'chest_pain', icon: '💔', nameEn: 'Chest pain' },
  { id: 'stomach_pain', icon: '🤰', nameEn: 'Stomach pain' }
];

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina',
  'Brazil', 'Bulgaria', 'Burkina Faso', 'Burma (Myanmar)', 'Burundi', 'Cambodia', 'Cameroon',
  'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Costa Rica',
  'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominican Republic', 'Ecuador',
  'Egypt', 'El Salvador', 'Eritrea', 'Estonia', 'Ethiopia', 'Finland', 'France', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Guatemala', 'Guinea', 'Haiti', 'Honduras', 'Hungary', 'Iceland',
  'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica',
  'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Liberia',
  'Libya', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malaysia', 'Mali', 'Malta', 'Mauritania',
  'Mexico', 'Moldova', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Pakistan', 'Palestine',
  'Panama', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Russia', 'Rwanda',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
  'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const HealthAssessment = ({ language, onComplete, onBack }: HealthAssessmentProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AssessmentData>({
    demographics: {
      age: '',
      gender: '',
      countryOfOrigin: ''
    },
    symptoms: [],
    painLevel: 1,
    urgency: ''
  });

  const t = translations[language];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const toggleSymptom = (symptomId: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptomId)
        ? prev.symptoms.filter(s => s !== symptomId)
        : [...prev.symptoms, symptomId]
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="assessment-step">
            <h3>{t.step1}</h3>
            <div className="form-group">
              <label>{t.age}</label>
              <input
                type="number"
                value={formData.demographics.age}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  demographics: { ...prev.demographics, age: e.target.value }
                }))}
                placeholder="25"
              />
            </div>
            <div className="form-group">
              <label>{t.gender}</label>
              <div className="radio-group">
                {['male', 'female', 'other'].map(gender => (
                  <label key={gender} className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.demographics.gender === gender}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        demographics: { ...prev.demographics, gender: e.target.value }
                      }))}
                    />
                    <span>{t[gender as keyof typeof t]}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>{t.country}</label>
              <select
                value={formData.demographics.countryOfOrigin}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  demographics: { ...prev.demographics, countryOfOrigin: e.target.value }
                }))}
              >
                <option value="">Select your country of origin</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="assessment-step">
            <h3>{t.step2}</h3>
            <p>{t.selectSymptoms}</p>
            <div className="symptoms-grid">
              {symptoms.map(symptom => (
                <button
                  key={symptom.id}
                  className={`symptom-card ${formData.symptoms.includes(symptom.id) ? 'selected' : ''}`}
                  onClick={() => toggleSymptom(symptom.id)}
                >
                  <span className="symptom-icon">{symptom.icon}</span>
                  <h4>{symptom.nameEn}</h4>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="assessment-step">
            <h3>{t.step3}</h3>
            <p>{t.painScale}</p>
            <div className="pain-scale">
              <input
                type="range"
                min="1"
                max="10"
                value={formData.painLevel}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  painLevel: parseInt(e.target.value)
                }))}
                className="pain-slider"
              />
              <div className="pain-value">{formData.painLevel}/10</div>
            </div>
          </div>
        );

      case 4:
        const urgencyOptions = [
          { 
            level: 'low', 
            title: 'Low Priority', 
            description: 'Can wait for regular appointment'
          },
          { 
            level: 'medium', 
            title: 'Medium Priority', 
            description: 'Should be seen within a few days'
          },
          { 
            level: 'high', 
            title: 'High Priority', 
            description: 'Need help soon or urgently'
          }
        ];
        
        return (
          <div className="assessment-step">
            <h3>{t.step4}</h3>
            <p>{t.urgencyLevel}</p>
            <div className="urgency-options">
              {urgencyOptions.map(option => (
                <button
                  key={option.level}
                  className={`urgency-btn urgency-${option.level} ${formData.urgency === option.level ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, urgency: option.level }))}
                >
                  <h4>{option.title}</h4>
                  <p>{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="health-assessment">
      <div className="assessment-header">
        <h2>{t.title}</h2>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">Step {currentStep} of 4</span>
      </div>

      {renderStep()}

      <div className="assessment-navigation">
        <button className="nav-btn back-btn" onClick={handleBack}>
          {t.back}
        </button>
        <button className="nav-btn next-btn" onClick={handleNext}>
          {currentStep === 4 ? t.complete : t.next}
        </button>
      </div>
    </div>
  );
};

export default HealthAssessment;