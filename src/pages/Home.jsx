import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import CardPricing from '../components/CardPricing';
import { textHeading1, textHeading2, textMicro, textRegular, textSemi } from '../data/uiStyle';
import Button from '../components/Button';
import CardBenefit from '../components/CardBenefit';
import CardFeature from '../components/CardFeature';
import CardUserflow from '../components/CardUserflow';
import UserflowConnector from '../motion/UserflowConnector';
import DataHome from '../data/dataHome';
import TypingText from '../motion/TypingText';
import ParallaxWithModel from '../motion/ParallaxWithModel';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Models from './Models';
import AboutConnector from '../motion/AboutConnector';

const Home = () => {
  const { language } = useLanguage();

  const words = {
    en: ["Scale Up", "Digitalize"],
    id: ["Kembangkan", "Digitalisasi"]
  };

  const services = [...DataHome.pricingSection.services].sort((a, b) => a.id - b.id);

  const [activeService, setActiveService] = React.useState(
    services[0].id
  );

  const selected = services.find(s => s.id === activeService);

  return (
    <div className="flex flex-col justify-center items-center">
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col gap-y-6 w-full lg:max-w-[1140px] pt-18 pb-8 px-4">
        <div className="flex flex-col gap-y-4">
          <div className={`${textHeading1} max-w-[360px] md:max-w-full leading-11`}>
            {language === "en" ? (
              <>Want to <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                <TypingText words={words[language] || words.en} />
              </span>
              <span className="block">your business?</span></>
            ) : (
              <>Ingin <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                <TypingText words={words[language] || words.id} />
              </span>
              <span className="block">bisnis kamu?</span></>
            )}
          </div>

          <div className={`${textRegular} text-justify max-w-[560px] ${textSemi}`}>
            {DataHome.heroSection.desc[language]}
          </div>
        </div>

        <div className="flex gap-x-2">
          {DataHome.heroSection.cta.map((c, index) => (
            <Button key={index} label={c[language]} width="w-fit" />
          ))}
        </div>

        <div className="flex flex-row gap-x-8 lg:gap-x-16 pt-1">
          {DataHome.indicatorSection.map((item, index) => (
            <div key={index}>
              <div className={textHeading2}>{item.indicator}</div>
              <div className={`${textSemi} text-[13px] lg:text-[14px] font-medium`}>
                {item.desc[language]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <ParallaxWithModel />

      {/* About Section */}
      <div className="flex flex-col gap-y-8 lg:gap-y-4 w-full lg:max-w-[1140px] pt-6 lg:pt-12 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Illustration */}
          <div className="relative w-full min-h-64 md:min-h-72 max-h-[320px] rounded-md flex justify-center items-center bg-gradient-to-br from-blue-500/18 via-blue-500/8 to-transparent overflow-hidden">
            <div className="relative flex justify-center items-center z-10 max-w-[437px] max-h-[256px]">
              <AboutConnector />
              <div className="absolute top-12 left-18 py-1 px-3 rounded bg-[#0c0c0c]/50 backdrop-blur border border-blue-200/12 shadow-xl shadow-black/40">Apps</div>
              <div className="absolute bottom-12 left-20 py-1 px-3 rounded bg-[#0c0c0c]/50 backdrop-blur border border-blue-200/12 shadow-xl shadow-black/40">Solution</div>
              <div className="absolute -top-3 right-28 py-1 px-3 rounded bg-[#0c0c0c]/50 backdrop-blur border border-blue-200/12 shadow-xl shadow-black/40">Vision</div>
              <div className="absolute bottom-16 right-16 py-1 px-3 rounded bg-[#0c0c0c]/50 backdrop-blur border border-blue-200/12 shadow-xl shadow-black/40">Idea</div>
              <div className="absolute top-16 right-8 py-1 px-3 rounded bg-[#0c0c0c]/50 backdrop-blur border border-blue-200/12 shadow-xl shadow-black/40">Problem</div>
            </div>
            <div className="absolute inset-5 flex justify-center items-center z-50">
              <img src="/vite.svg" alt="" className="h-16 -rotate-16 shadow-xl shadow-black/60" />
            </div>
          </div>
          {/* Info */}
          <div className="flex flex-col gap-y-2">
            <div className={`${textHeading2}`}>
              {DataHome.aboutSection.head[language]}
            </div>
            {DataHome.aboutSection.desc.map((item, index) => (
              <div key={index} className={`${textRegular} text-justify mb-1 mr-6 ${textSemi}`}>
                {item[language]}
              </div>
            ))}
          </div>
        </div>
        {/* Benefit Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DataHome.aboutSection.benefit.map((b, index) => (
            <CardBenefit
              key={index}
              icon={b.icon}
              label={b.head[language]}
              desc={b.desc[language]}
            />
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex flex-col gap-y-6 w-full lg:max-w-[1140px] py-12 px-4">
        <div className="flex flex-col gap-y-1">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.featureSection.head[language]}
          </div>
          <div className={`${textRegular} text-justify md:text-center ${textSemi}`}>
            {DataHome.featureSection.desc[language]}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DataHome.featureSection.feature.map((f, index) => (
            <CardFeature
              key={index}
              index={index}
              label={f.head[language]}
              desc={f.desc[language]}
            />
          ))}
        </div>
      </div>

      {/* Userflow Section */}
      <div className="flex flex-col gap-y-6 w-full py-12 px-4 lg:px-0 mx-auto">
        <div className={`${textHeading2} md:text-center`}>
          {DataHome.clientflowSection.head[language]}
        </div>
        <div className="overflow-x-auto lg:overflow-x-auto lg:min-h-[770px] lg:bg-[#141414] 3xl:flex 3xl:justify-center">
          {/* Container utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 lg:relative lg:min-w-[1890px] lg:h-[680px]">
            <UserflowConnector />
            {/* Garis penghubung - hanya muncul di desktop */}
            {DataHome.clientflowSection.flow.map((flow, index) => (
              <div key={index}>
                <CardUserflow
                  index={index}
                  num={index + 1}
                  label={flow.head[language]}
                  desc={flow.desc[language]}
                  xlClassName={flow.xlClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col gap-y-14 w-full lg:max-w-[1140px] py-12 px-4">
        <div className="flex flex-col gap-y-4">
          <div className={`${textHeading2} md:text-center mb-1`}>
            {DataHome.pricingSection.head[language]}
          </div>
          {/* Service Button */}
          <div className="flex flex-wrap gap-3 md:justify-center">
            {services.map(service => (
              <Button
                key={service.id}
                type="multi"
                active={activeService === service.id}
                label={service.label[language]}
                width="w-fit"
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {selected.packages.map((p, index) => (
            <CardPricing
              key={index}
              deal={p.deal?.[language]}
              price={typeof p.price === 'string' ? p.price : p.price[language]}
              desc={p.desc[language]}
              benefit={p.benefit}
              cta={p.cta[language]}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 xl:gap-x-12 w-full lg:max-w-[1140px] pt-16 pb-20 px-4 items-center">
        <div className="relative md:hidden h-64 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]"></div>
          <div className="absolute inset-x-1 -top-22">
            <div className="scale-[0.8] rounded-2xl overflow-hidden">
              <Models />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="space-y-2">
            <div className={`${textHeading2}`}>
              {DataHome.ctaSection.head[language]}
            </div>
            <div className={`text-justify w-full ${textSemi}`}>
              {DataHome.ctaSection.desc[language]}
            </div>
          </div>
          <Button label={DataHome.ctaSection.cta[0][language]} width="w-fit" />
        </div>
        <div className="relative hidden md:flex h-80 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]"></div>
          <div className="absolute -top-23 -left-35">
            <div className="scale-[0.8] w-[1440px] rounded-2xl overflow-hidden">
              <Models />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      <div className={`${textMicro} ${textSemi} py-3`}>Avelora @ 2025. All right reserved.</div>
    </div>
  );
};

export default Home;
