import type { Language } from '../App.tsx';

interface ResourcesProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  en: {
    title: 'Health Resources & Education',
    subtitle: 'Learn about health, rights, and available services',
    healthEducation: 'Health Education',
    rights: 'Your Rights',
    services: 'Available Services',
    guides: 'Step-by-Step Guides',
    faq: 'Frequently Asked Questions',
    back: 'Back to Home',
    // Health Education Cards
    preventiveCare: 'Preventive Care',
    preventiveDesc: 'Learn about vaccinations, regular check-ups, and healthy lifestyle habits.',
    mentalHealth: 'Mental Health Support',
    mentalHealthDesc: 'Resources for stress, anxiety, depression, and trauma recovery.',
    nutrition: 'Nutrition & Diet',
    nutritionDesc: 'Healthy eating guidelines and food safety for you and your family.',
    hygiene: 'Personal Hygiene',
    hygieneDesc: 'Essential hygiene practices to prevent illness and stay healthy.',
    // Rights Information
    healthRights: 'Right to Healthcare',
    healthRightsDesc: 'You have the right to medical care regardless of your status.',
    privacy: 'Privacy Rights',
    privacyDesc: 'Your medical information is confidential and protected.',
    language: 'Language Services',
    languageDesc: 'You have the right to interpretation services in healthcare.',
    // FAQ Items
    faq1: 'How do I find free healthcare?',
    faq1Answer: 'Contact local NGOs, government health centers, or UNHCR partners for free or low-cost healthcare options.',
    faq2: 'What documents do I need?',
    faq2Answer: 'While helpful, you should not be denied emergency care if you lack documentation. Bring any ID you have.',
    faq3: 'Can I get mental health support?',
    faq3Answer: 'Yes, many organizations provide free mental health services for refugees. Contact local helplines.',
    viewMore: 'View More',
    downloadGuide: 'Download Guide'
  },
  hi: {
    title: 'स्वास्थ्य संसाधन और शिक्षा',
    subtitle: 'स्वास्थ्य, अधिकार और उपलब्ध सेवाओं के बारे में जानें',
    healthEducation: 'स्वास्थ्य शिक्षा',
    rights: 'आपके अधिकार',
    services: 'उपलब्ध सेवाएं',
    guides: 'चरणबद्ध गाइड',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    back: 'होम पर वापस जाएं',
    preventiveCare: 'निवारक देखभाल',
    preventiveDesc: 'टीकाकरण, नियमित जांच और स्वस्थ जीवनशैली की आदतों के बारे में जानें।',
    mentalHealth: 'मानसिक स्वास्थ्य सहायता',
    mentalHealthDesc: 'तनाव, चिंता, अवसाद और आघात से उबरने के लिए संसाधन।',
    nutrition: 'पोषण और आहार',
    nutritionDesc: 'आपके और आपके परिवार के लिए स्वस्थ भोजन दिशानिर्देश और खाद्य सुरक्षा।',
    hygiene: 'व्यक्तिगत स्वच्छता',
    hygieneDesc: 'बीमारी को रोकने और स्वस्थ रहने के लिए आवश्यक स्वच्छता प्रथाएं।',
    healthRights: 'स्वास्थ्य देखभाल का अधिकार',
    healthRightsDesc: 'आपकी स्थिति की परवाह किए बिना आपको चिकित्सा देखभाल का अधिकार है।',
    privacy: 'गोपनीयता अधिकार',
    privacyDesc: 'आपकी चिकित्सा जानकारी गोपनीय और सुरक्षित है।',
    language: 'भाषा सेवाएं',
    languageDesc: 'स्वास्थ्य देखभाल में आपको दुभाषिया सेवाओं का अधिकार है।',
    faq1: 'मुफ्त स्वास्थ्य देखभाल कैसे पाऊं?',
    faq1Answer: 'मुफ्त या कम लागत वाले स्वास्थ्य विकल्पों के लिए स्थानीय एनजीओ, सरकारी स्वास्थ्य केंद्र या यूएनएचसीआर भागीदारों से संपर्क करें।',
    faq2: 'मुझे कौन से दस्तावेज चाहिए?',
    faq2Answer: 'हालांकि सहायक है, यदि आपके पास दस्तावेज नहीं हैं तो आपको आपातकालीन देखभाल से इनकार नहीं किया जाना चाहिए।',
    faq3: 'क्या मुझे मानसिक स्वास्थ्य सहायता मिल सकती है?',
    faq3Answer: 'हां, कई संगठन शरणार्थियों के लिए मुफ्त मानसिक स्वास्थ्य सेवाएं प्रदान करते हैं।',
    viewMore: 'और देखें',
    downloadGuide: 'गाइड डाउनलोड करें'
  },
  ar: {
    title: 'الموارد والتعليم الصحي',
    subtitle: 'تعلم عن الصحة والحقوق والخدمات المتاحة',
    healthEducation: 'التعليم الصحي',
    rights: 'حقوقك',
    services: 'الخدمات المتاحة',
    guides: 'أدلة خطوة بخطوة',
    faq: 'الأسئلة الشائعة',
    back: 'العودة إلى الصفحة الرئيسية',
    preventiveCare: 'الرعاية الوقائية',
    preventiveDesc: 'تعلم عن التطعيمات والفحوصات الدورية وعادات نمط الحياة الصحي.',
    mentalHealth: 'دعم الصحة النفسية',
    mentalHealthDesc: 'موارد للتعامل مع التوتر والقلق والاكتئاب والتعافي من الصدمات.',
    nutrition: 'التغذية والنظام الغذائي',
    nutritionDesc: 'إرشادات الأكل الصحي وسلامة الغذاء لك ولعائلتك.',
    hygiene: 'النظافة الشخصية',
    hygieneDesc: 'ممارسات النظافة الأساسية لمنع المرض والبقاء بصحة جيدة.',
    healthRights: 'الحق في الرعاية الصحية',
    healthRightsDesc: 'لك الحق في الرعاية الطبية بغض النظر عن وضعك.',
    privacy: 'حقوق الخصوصية',
    privacyDesc: 'معلوماتك الطبية سرية ومحمية.',
    language: 'خدمات اللغة',
    languageDesc: 'لك الحق في خدمات الترجمة في الرعاية الصحية.',
    faq1: 'كيف أجد الرعاية الصحية المجانية؟',
    faq1Answer: 'اتصل بالمنظمات غير الحكومية المحلية أو المراكز الصحية الحكومية أو شركاء المفوضية للحصول على خيارات رعاية صحية مجانية أو منخفضة التكلفة.',
    faq2: 'ما هي الوثائق التي أحتاجها؟',
    faq2Answer: 'رغم أنها مفيدة، لا يجب أن تُمنع من الرعاية الطارئة إذا كنت تفتقر للوثائق.',
    faq3: 'هل يمكنني الحصول على دعم الصحة النفسية؟',
    faq3Answer: 'نعم، تقدم العديد من المنظمات خدمات الصحة النفسية المجانية للاجئين.',
    viewMore: 'عرض المزيد',
    downloadGuide: 'تحميل الدليل'
  },
  bn: {
    title: 'স্বাস্থ্য সম্পদ ও শিক্ষা',
    subtitle: 'স্বাস্থ্য, অধিকার এবং উপলব্ধ সেবা সম্পর্কে জানুন',
    healthEducation: 'স্বাস্থ্য শিক্ষা',
    rights: 'আপনার অধিকার',
    services: 'উপলব্ধ সেবা',
    guides: 'ধাপে ধাপে গাইড',
    faq: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    back: 'হোমে ফিরে যান',
    preventiveCare: 'প্রতিরোধমূলক যত্ন',
    preventiveDesc: 'টিকাদান, নিয়মিত চেকআপ এবং স্বাস্থ্যকর জীবনযাত্রার অভ্যাস সম্পর্কে জানুন।',
    mentalHealth: 'মানসিক স্বাস্থ্য সহায়তা',
    mentalHealthDesc: 'মানসিক চাপ, উদ্বেগ, বিষণ্নতা এবং ট্রমা থেকে পুনরুদ্ধারের জন্য সম্পদ।',
    nutrition: 'পুষ্টি ও খাদ্য',
    nutritionDesc: 'আপনার এবং আপনার পরিবারের জন্য স্বাস্থ্যকর খাবারের নির্দেশিকা এবং খাদ্য নিরাপত্তা।',
    hygiene: 'ব্যক্তিগত স্বাস্থ্যবিধি',
    hygieneDesc: 'অসুস্থতা প্রতিরোধ এবং স্বাস্থ্যকর থাকার জন্য প্রয়োজনীয় স্বাস্থ্যবিধি অনুশীলন।',
    healthRights: 'স্বাস্থ্যসেবার অধিকার',
    healthRightsDesc: 'আপনার অবস্থা নির্বিশেষে আপনার চিকিৎসা সেবার অধিকার রয়েছে।',
    privacy: 'গোপনীয়তার অধিকার',
    privacyDesc: 'আপনার চিকিৎসা তথ্য গোপনীয় এবং সুরক্ষিত।',
    language: 'ভাষা সেবা',
    languageDesc: 'স্বাস্থ্যসেবায় আপনার দোভাষী সেবার অধিকার রয়েছে।',
    faq1: 'আমি কীভাবে বিনামূল্যে স্বাস্থ্যসেবা পেতে পারি?',
    faq1Answer: 'বিনামূল্যে বা কম খরচে স্বাস্থ্যসেবার জন্য স্থানীয় এনজিও, সরকারি স্বাস্থ্য কেন্দ্র বা ইউএনএইচসিআর অংশীদারদের সাথে যোগাযোগ করুন।',
    faq2: 'আমার কী কী কাগজপত্র প্রয়োজন?',
    faq2Answer: 'সহায়ক হলেও, কাগজপত্রের অভাব থাকলে আপনাকে জরুরি চিকিৎসা থেকে বঞ্চিত করা উচিত নয়।',
    faq3: 'আমি কি মানসিক স্বাস্থ্য সহায়তা পেতে পারি?',
    faq3Answer: 'হ্যাঁ, অনেক সংস্থা শরণার্থীদের জন্য বিনামূল্যে মানসিক স্বাস্থ্য সেবা প্রদান করে।',
    viewMore: 'আরো দেখুন',
    downloadGuide: 'গাইড ডাউনলোড করুন'
  }
};

const Resources = ({ language, onBack }: ResourcesProps) => {
  const t = translations[language];

  const healthEducationCards = [
    {
      id: 'preventive',
      icon: '💉',
      title: t.preventiveCare,
      description: t.preventiveDesc,
      color: '#28a745'
    },
    {
      id: 'mental',
      icon: '🧠',
      title: t.mentalHealth,
      description: t.mentalHealthDesc,
      color: '#6f42c1'
    },
    {
      id: 'nutrition',
      icon: '🥗',
      title: t.nutrition,
      description: t.nutritionDesc,
      color: '#fd7e14'
    },
    {
      id: 'hygiene',
      icon: '🧼',
      title: t.hygiene,
      description: t.hygieneDesc,
      color: '#20c997'
    }
  ];

  const rightsInfo = [
    {
      icon: '🏥',
      title: t.healthRights,
      description: t.healthRightsDesc
    },
    {
      icon: '🔒',
      title: t.privacy,
      description: t.privacyDesc
    },
    {
      icon: '🗣️',
      title: t.language,
      description: t.languageDesc
    }
  ];

  const faqItems = [
    {
      question: t.faq1,
      answer: t.faq1Answer
    },
    {
      question: t.faq2,
      answer: t.faq2Answer
    },
    {
      question: t.faq3,
      answer: t.faq3Answer
    }
  ];

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <button className="back-btn" onClick={onBack}>
          ← {t.back}
        </button>
      </div>

      {/* Health Education Section */}
      <section className="health-education">
        <h2>📚 {t.healthEducation}</h2>
        <div className="education-cards">
          {healthEducationCards.map(card => (
            <div 
              key={card.id} 
              className="education-card"
              style={{ borderLeft: `4px solid ${card.color}` }}
            >
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
              </div>
              <p>{card.description}</p>
              <button className="card-action-btn">
                {t.viewMore} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Rights Information */}
      <section className="rights-section">
        <h2>⚖️ {t.rights}</h2>
        <div className="rights-cards">
          {rightsInfo.map((right, index) => (
            <div key={index} className="rights-card">
              <span className="rights-icon">{right.icon}</span>
              <h3>{right.title}</h3>
              <p>{right.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Guides */}
      <section className="guides-section">
        <h2>📋 {t.guides}</h2>
        <div className="guides-list">
          <div className="guide-item">
            <span className="guide-icon">📝</span>
            <div className="guide-content">
              <h3>How to Register for Healthcare</h3>
              <p>Step-by-step process to register with local health services</p>
              <button className="download-btn">{t.downloadGuide}</button>
            </div>
          </div>
          <div className="guide-item">
            <span className="guide-icon">💊</span>
            <div className="guide-content">
              <h3>Getting Your Medications</h3>
              <p>Guide to accessing prescription medications and pharmacy services</p>
              <button className="download-btn">{t.downloadGuide}</button>
            </div>
          </div>
          <div className="guide-item">
            <span className="guide-icon">🤱</span>
            <div className="guide-content">
              <h3>Maternal & Child Health</h3>
              <p>Essential care information for mothers and children</p>
              <button className="download-btn">{t.downloadGuide}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>❓ {t.faq}</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <h2>🔗 Quick Links</h2>
        <div className="links-grid">
          <a href="#" className="quick-link">
            <span>🌐</span>
            <span>UNHCR Health Guidelines</span>
          </a>
          <a href="#" className="quick-link">
            <span>📞</span>
            <span>Health Helpline Directory</span>
          </a>
          <a href="#" className="quick-link">
            <span>🏥</span>
            <span>Hospital Locator</span>
          </a>
          <a href="#" className="quick-link">
            <span>💊</span>
            <span>Pharmacy Network</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;