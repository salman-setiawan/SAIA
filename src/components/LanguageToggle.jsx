import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const isEnglish = language === 'en';

  const switchLanguage = () => {
    if (setLanguage) {
      setLanguage(isEnglish ? 'id' : 'en');
    } else {
      toggleLanguage();
    }
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="relative flex gap-x-1 min-w-[60px] items-center gap-1 rounded-full border border-white/8 bg-white/5 px-1 py-1 text-[11px] font-semibold tracking-wide text-white transition-all duration-300"
      aria-label="Toggle language"
      aria-pressed={isEnglish}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-white text-black transition-all duration-300"
        style={{
          left: isEnglish ? '4px' : 'calc(50%)',
          right: isEnglish ? 'calc(50%)' : '4px',
        }}
      />
      <span className={`relative z-10 flex-1 w-[28px] rounded-full text-center transition-colors ${isEnglish ? 'text-black' : 'text-white/50'}`}> EN </span>
      <span className={`relative z-10 flex-1 w-[28px] rounded-full text-center transition-colors ${!isEnglish ? 'text-black' : 'text-white/50'}`}> ID </span>
    </button>
  );
};

export default LanguageToggle;
