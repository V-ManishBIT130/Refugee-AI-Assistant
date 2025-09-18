import type { Language } from '../App.tsx';

interface EmergencyProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  en: {
    title: 'Emergency Help',
    subtitle: 'Get immediate assistance',
    callEmergency: 'Call Emergency Services',
    emergencyNumber: '112',
    police: 'Police: 100',
    fire: 'Fire: 101',
    ambulance: 'Ambulance: 108',
    helplines: 'Crisis Helplines',
    mentalHealth: 'Mental Health: 9152987821',
    womenHelp: 'Women Helpline: 1091',
    childHelp: 'Child Helpline: 1098',
    location: 'Share Your Location',
    shareLocation: 'Share Current Location',
    nearestHospital: 'Nearest Hospital',
    hospitalInfo: 'KEM Hospital - 2.1 km away',
    emergencyContacts: 'Emergency Contacts',
    addContact: 'Add Emergency Contact',
    symptoms: 'Critical Symptoms',
    symptom1: '🫀 Chest pain or pressure',
    symptom2: '🧠 Sudden confusion or trouble speaking',
    symptom3: '🫁 Difficulty breathing',
    symptom4: '🩸 Severe bleeding',
    symptom5: '🤕 Head injury or unconsciousness',
    warning: 'If you are experiencing any of these symptoms, call emergency services immediately.',
    back: 'Back to Home'
  },
  hi: {
    title: 'आपातकालीन सहायता',
    subtitle: 'तत्काल सहायता प्राप्त करें',
    callEmergency: 'आपातकालीन सेवाओं को कॉल करें',
    emergencyNumber: '112',
    police: 'पुलिस: 100',
    fire: 'फायर: 101',
    ambulance: 'एम्बुलेंस: 108',
    helplines: 'संकट हेल्पलाइन',
    mentalHealth: 'मानसिक स्वास्थ्य: 9152987821',
    womenHelp: 'महिला हेल्पलाइन: 1091',
    childHelp: 'बाल हेल्पलाइन: 1098',
    location: 'अपना स्थान साझा करें',
    shareLocation: 'वर्तमान स्थान साझा करें',
    nearestHospital: 'निकटतम अस्पताल',
    hospitalInfo: 'केईएम अस्पताल - 2.1 किमी दूर',
    emergencyContacts: 'आपातकालीन संपर्क',
    addContact: 'आपातकालीन संपर्क जोड़ें',
    symptoms: 'गंभीर लक्षण',
    symptom1: '🫀 सीने में दर्द या दबाव',
    symptom2: '🧠 अचानक भ्रम या बोलने में कठिनाई',
    symptom3: '🫁 सांस लेने में कठिनाई',
    symptom4: '🩸 गंभीर रक्तस्राव',
    symptom5: '🤕 सिर की चोट या बेहोशी',
    warning: 'यदि आप इनमें से किसी भी लक्षण का अनुभव कर रहे हैं, तो तुरंत आपातकालीन सेवाओं को कॉल करें।',
    back: 'होम पर वापस जाएं'
  },
  ar: {
    title: 'المساعدة الطارئة',
    subtitle: 'احصل على المساعدة الفورية',
    callEmergency: 'اتصل بخدمات الطوارئ',
    emergencyNumber: '112',
    police: 'الشرطة: 100',
    fire: 'الإطفاء: 101',
    ambulance: 'الإسعاف: 108',
    helplines: 'خطوط المساعدة في الأزمات',
    mentalHealth: 'الصحة النفسية: 9152987821',
    womenHelp: 'خط مساعدة النساء: 1091',
    childHelp: 'خط مساعدة الأطفال: 1098',
    location: 'شارك موقعك',
    shareLocation: 'شارك الموقع الحالي',
    nearestHospital: 'أقرب مستشفى',
    hospitalInfo: 'مستشفى كيم - 2.1 كم',
    emergencyContacts: 'جهات الاتصال الطارئة',
    addContact: 'أضف جهة اتصال طارئة',
    symptoms: 'الأعراض الحرجة',
    symptom1: '🫀 ألم أو ضغط في الصدر',
    symptom2: '🧠 ارتباك مفاجئ أو صعوبة في الكلام',
    symptom3: '🫁 صعوبة في التنفس',
    symptom4: '🩸 نزيف شديد',
    symptom5: '🤕 إصابة في الرأس أو فقدان الوعي',
    warning: 'إذا كنت تعاني من أي من هذه الأعراض، اتصل بخدمات الطوارئ فوراً.',
    back: 'العودة إلى الصفحة الرئيسية'
  },
  bn: {
    title: 'জরুরি সাহায্য',
    subtitle: 'তাৎক্ষণিক সহায়তা পান',
    callEmergency: 'জরুরি সেবায় কল করুন',
    emergencyNumber: '112',
    police: 'পুলিশ: 100',
    fire: 'ফায়ার সার্ভিস: 101',
    ambulance: 'অ্যাম্বুলেন্স: 108',
    helplines: 'সংকট হেল্পলাইন',
    mentalHealth: 'মানসিক স্বাস্থ্য: 9152987821',
    womenHelp: 'নারী হেল্পলাইন: 1091',
    childHelp: 'শিশু হেল্পলাইন: 1098',
    location: 'আপনার অবস্থান শেয়ার করুন',
    shareLocation: 'বর্তমান অবস্থান শেয়ার করুন',
    nearestHospital: 'নিকটতম হাসপাতাল',
    hospitalInfo: 'কেইএম হাসপাতাল - ২.১ কিমি দূরে',
    emergencyContacts: 'জরুরি যোগাযোগ',
    addContact: 'জরুরি যোগাযোগ যোগ করুন',
    symptoms: 'গুরুতর লক্ষণ',
    symptom1: '🫀 বুকে ব্যথা বা চাপ',
    symptom2: '🧠 হঠাৎ বিভ্রান্তি বা কথা বলতে সমস্যা',
    symptom3: '🫁 শ্বাস নিতে কষ্ট',
    symptom4: '🩸 মারাত্মক রক্তক্ষরণ',
    symptom5: '🤕 মাথায় আঘাত বা অজ্ঞান হওয়া',
    warning: 'যদি আপনি এই লক্ষণগুলির কোনোটি অনুভব করেন, অবিলম্বে জরুরি সেবায় কল করুন।',
    back: 'হোমে ফিরে যান'
  }
};

const Emergency = ({ language, onBack }: EmergencyProps) => {
  const t = translations[language];

  const handleEmergencyCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationMsg = `Emergency! I need help. My location: https://maps.google.com/?q=${latitude},${longitude}`;
          
          // You could send this to emergency services or contacts
          if (navigator.share) {
            navigator.share({
              title: 'Emergency Location',
              text: locationMsg
            });
          } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(locationMsg);
            alert('Location copied to clipboard');
          }
        },
        () => {
          alert('Unable to get your location. Please ensure location services are enabled.');
        }
      );
    }
  };

  return (
    <div className="emergency-page">
      <div className="emergency-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      {/* Main Emergency Call Button */}
      <div className="main-emergency">
        <button 
          className="main-emergency-btn"
          onClick={() => handleEmergencyCall('112')}
        >
          🚨 {t.callEmergency}
          <span className="emergency-number">{t.emergencyNumber}</span>
        </button>
      </div>

      {/* Quick Emergency Numbers */}
      <div className="emergency-numbers">
        <h3>Quick Access Numbers</h3>
        <div className="numbers-grid">
          <button 
            className="emergency-number-btn police"
            onClick={() => handleEmergencyCall('100')}
          >
            🚔 {t.police}
          </button>
          <button 
            className="emergency-number-btn fire"
            onClick={() => handleEmergencyCall('101')}
          >
            🚒 {t.fire}
          </button>
          <button 
            className="emergency-number-btn ambulance"
            onClick={() => handleEmergencyCall('108')}
          >
            🚑 {t.ambulance}
          </button>
        </div>
      </div>

      {/* Location Sharing */}
      <div className="location-section">
        <h3>{t.location}</h3>
        <button className="location-btn" onClick={handleShareLocation}>
          📍 {t.shareLocation}
        </button>
        <div className="nearest-hospital">
          <h4>{t.nearestHospital}</h4>
          <p>🏥 {t.hospitalInfo}</p>
        </div>
      </div>

      {/* Crisis Helplines */}
      <div className="helplines-section">
        <h3>{t.helplines}</h3>
        <div className="helplines-list">
          <button 
            className="helpline-btn"
            onClick={() => handleEmergencyCall('9152987821')}
          >
            🧠 {t.mentalHealth}
          </button>
          <button 
            className="helpline-btn"
            onClick={() => handleEmergencyCall('1091')}
          >
            👩 {t.womenHelp}
          </button>
          <button 
            className="helpline-btn"
            onClick={() => handleEmergencyCall('1098')}
          >
            👶 {t.childHelp}
          </button>
        </div>
      </div>

      {/* Critical Symptoms */}
      <div className="symptoms-section">
        <h3>{t.symptoms}</h3>
        <div className="symptoms-list">
          <div className="symptom-item">{t.symptom1}</div>
          <div className="symptom-item">{t.symptom2}</div>
          <div className="symptom-item">{t.symptom3}</div>
          <div className="symptom-item">{t.symptom4}</div>
          <div className="symptom-item">{t.symptom5}</div>
        </div>
        <div className="warning-message">
          ⚠️ {t.warning}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="emergency-contacts">
        <h3>{t.emergencyContacts}</h3>
        <button className="add-contact-btn">
          ➕ {t.addContact}
        </button>
        <div className="contacts-placeholder">
          <p>No emergency contacts added yet</p>
        </div>
      </div>

      <div className="emergency-footer">
        <button className="back-btn" onClick={onBack}>
          ← {t.back}
        </button>
      </div>
    </div>
  );
};

export default Emergency;