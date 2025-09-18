import type { Language } from '../App.tsx';

interface TriageResultsProps {
  data: any;
  language: Language;
  onFindServices: () => void;
  onBack: () => void;
}

const translations = {
  en: {
    title: 'Your Health Assessment Results',
    riskLevel: 'Risk Level',
    low: 'Low Risk',
    medium: 'Medium Risk',
    high: 'High Risk',
    recommendations: 'Recommendations',
    nextSteps: 'Next Steps',
    findServices: 'Find Healthcare Services',
    back: 'Back to Assessment',
    lowRiskDesc: 'Your symptoms suggest low risk. Monitor your condition and seek care if symptoms worsen.',
    mediumRiskDesc: 'Your symptoms require attention. Consider visiting a healthcare provider within the next few days.',
    highRiskDesc: 'Your symptoms require immediate attention. Please seek medical care as soon as possible.',
    generalTips: 'General Health Tips',
    tip1: 'Stay hydrated and get adequate rest',
    tip2: 'Take medications as prescribed',
    tip3: 'Monitor your symptoms regularly',
    emergencyNote: 'If you experience severe symptoms, call emergency services immediately.'
  },
  hi: {
    title: 'आपके स्वास्थ्य मूल्यांकन के परिणाम',
    riskLevel: 'जोखिम स्तर',
    low: 'कम जोखिम',
    medium: 'मध्यम जोखिम',
    high: 'उच्च जोखिम',
    recommendations: 'सिफारिशें',
    nextSteps: 'अगले कदम',
    findServices: 'स्वास्थ्य सेवाएं खोजें',
    back: 'मूल्यांकन पर वापस जाएं',
    lowRiskDesc: 'आपके लक्षण कम जोखिम का संकेत देते हैं। अपनी स्थिति पर नज़र रखें।',
    mediumRiskDesc: 'आपके लक्षणों पर ध्यान देने की आवश्यकता है। कुछ दिनों में डॉक्टर से मिलें।',
    highRiskDesc: 'आपके लक्षणों को तत्काल ध्यान की आवश्यकता है। कृपया जल्द से जल्द चिकित्सा सेवा लें।',
    generalTips: 'सामान्य स्वास्थ्य सुझाव',
    tip1: 'पानी पिएं और पर्याप्त आराम करें',
    tip2: 'निर्धारित दवाएं लें',
    tip3: 'अपने लक्षणों की नियमित निगरानी करें',
    emergencyNote: 'यदि आप गंभीर लक्षणों का अनुभव करते हैं, तो तुरंत आपातकालीन सेवाओं को कॉल करें।'
  },
  ar: {
    title: 'نتائج تقييمك الصحي',
    riskLevel: 'مستوى المخاطر',
    low: 'خطر منخفض',
    medium: 'خطر متوسط',
    high: 'خطر عالي',
    recommendations: 'التوصيات',
    nextSteps: 'الخطوات التالية',
    findServices: 'البحث عن الخدمات الصحية',
    back: 'العودة إلى التقييم',
    lowRiskDesc: 'تشير أعراضك إلى خطر منخفض. راقب حالتك واطلب الرعاية إذا ساءت الأعراض.',
    mediumRiskDesc: 'تتطلب أعراضك الانتباه. فكر في زيارة مقدم رعاية صحية خلال الأيام القليلة القادمة.',
    highRiskDesc: 'تتطلب أعراضك اهتماماً فورياً. يرجى طلب الرعاية الطبية في أقرب وقت ممكن.',
    generalTips: 'نصائح صحية عامة',
    tip1: 'حافظ على الترطيب واحصل على راحة كافية',
    tip2: 'تناول الأدوية حسب الوصفة',
    tip3: 'راقب أعراضك بانتظام',
    emergencyNote: 'إذا كنت تعاني من أعراض شديدة، اتصل بخدمات الطوارئ فوراً.'
  },
  bn: {
    title: 'আপনার স্বাস্থ্য মূল্যায়নের ফলাফল',
    riskLevel: 'ঝুঁকির মাত্রা',
    low: 'কম ঝুঁকি',
    medium: 'মাঝারি ঝুঁকি',
    high: 'উচ্চ ঝুঁকি',
    recommendations: 'সুপারিশ',
    nextSteps: 'পরবর্তী পদক্ষেপ',
    findServices: 'স্বাস্থ্যসেবা খুঁজুন',
    back: 'মূল্যায়নে ফিরে যান',
    lowRiskDesc: 'আপনার লক্ষণগুলি কম ঝুঁকির ইঙ্গিত দেয়। আপনার অবস্থা পর্যবেক্ষণ করুন।',
    mediumRiskDesc: 'আপনার লক্ষণগুলির দিকে মনোযোগ দেওয়া প্রয়োজন। আগামী কয়েক দিনে একজন চিকিৎসকের সাথে দেখা করুন।',
    highRiskDesc: 'আপনার লক্ষণগুলির তাৎক্ষণিক মনোযোগ প্রয়োজন। অনুগ্রহ করে যত তাড়াতাড়ি সম্ভব চিকিৎসা সেবা নিন।',
    generalTips: 'সাধারণ স্বাস্থ্য পরামর্শ',
    tip1: 'হাইড্রেটেড থাকুন এবং পর্যাপ্ত বিশ্রাম নিন',
    tip2: 'নির্ধারিত ওষুধ সেবন করুন',
    tip3: 'নিয়মিত আপনার লক্ষণগুলি পর্যবেক্ষণ করুন',
    emergencyNote: 'যদি আপনি গুরুতর লক্ষণগুলি অনুভব করেন, অবিলম্বে জরুরি সেবায় কল করুন।'
  }
};

const TriageResults = ({ data, language, onFindServices, onBack }: TriageResultsProps) => {
  const t = translations[language];
  
  // Simple risk assessment logic
  const calculateRiskLevel = () => {
    if (!data) return 'low';
    
    const { symptoms, painLevel, urgency } = data;
    
    if (urgency === 'high' || painLevel >= 8 || symptoms.includes('chest_pain') || symptoms.includes('breathing')) {
      return 'high';
    } else if (urgency === 'medium' || painLevel >= 5 || symptoms.length >= 3) {
      return 'medium';
    } else {
      return 'low';
    }
  };

  const riskLevel = calculateRiskLevel();
  const riskColors = {
    low: '#28a745',
    medium: '#ffc107',
    high: '#dc3545'
  };

  return (
    <div className="triage-results">
      <div className="results-header">
        <h2>{t.title}</h2>
      </div>

      <div className="risk-assessment">
        <div className="risk-level-card" style={{ borderColor: riskColors[riskLevel] }}>
          <h3>{t.riskLevel}</h3>
          <div 
            className={`risk-indicator risk-${riskLevel}`}
            style={{ backgroundColor: riskColors[riskLevel] }}
          >
            {t[riskLevel as keyof typeof t]}
          </div>
          <p className="risk-description">
            {t[`${riskLevel}RiskDesc` as keyof typeof t]}
          </p>
        </div>
      </div>

      <div className="recommendations-section">
        <h3>{t.recommendations}</h3>
        
        <div className="symptoms-summary">
          <h4>Your Reported Symptoms:</h4>
          <div className="symptoms-list">
            {data?.symptoms?.map((symptom: string) => (
              <span key={symptom} className="symptom-tag">
                {symptom.replace('_', ' ')}
              </span>
            )) || 'None reported'}
          </div>
          {data?.painLevel && (
            <p>Pain Level: {data.painLevel}/10</p>
          )}
        </div>

        <div className="health-tips">
          <h4>{t.generalTips}</h4>
          <ul>
            <li>{t.tip1}</li>
            <li>{t.tip2}</li>
            <li>{t.tip3}</li>
          </ul>
        </div>

        <div className="emergency-notice">
          <p>⚠️ {t.emergencyNote}</p>
        </div>
      </div>

      <div className="action-buttons">
        <button className="primary-btn" onClick={onFindServices}>
          🏥 {t.findServices}
        </button>
        <button className="secondary-btn" onClick={onBack}>
          ← {t.back}
        </button>
      </div>
    </div>
  );
};

export default TriageResults;