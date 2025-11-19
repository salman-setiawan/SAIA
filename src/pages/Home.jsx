import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import CardPricing from '../components/CardPricing';
import { textHeading1, textHeading2, textMicro, textRegular, textSemi, textSmall } from '../data/uiStyle';
import Button from '../components/Button';
import CardBenefit from '../components/CardBenefit';
import CardFeature from '../components/CardFeature';
import CardUserflow from '../components/CardUserflow';
import DataHome from '../data/dataHome';
import TypingText from '../motion/TypingText';
import ParallaxWithModel from '../motion/ParallaxWithModel';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      <div className="flex flex-col gap-y-6 w-full lg:w-[980px] pt-20 pb-10 px-5">
        <div className="flex flex-col gap-y-3">
          <div className={`${textHeading1} max-w-[360px] md:max-w-full leading-11`}>
            {language === "en" ? (
              <>Want to <span className="bg-gradient-to-r from-[#CAC8FF] to-[#7A76FD] bg-clip-text text-transparent">
                <TypingText words={words[language]} />
              </span>
              <span className="block">your business?</span></>
            ) : (
              <>Ingin <span className="bg-gradient-to-r from-[#CAC8FF] to-[#7A76FD] bg-clip-text text-transparent">
                <TypingText words={words[language]} />
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

        <div className="flex flex-row gap-x-8">
          {DataHome.indicatorSection.map((item, index) => (
            <div key={index} className='max-w-[110px] sm:max-w-full'>
              <div className={textHeading2}>{item.indicator}</div>
              <div className={`${textSemi} ${textSmall} font-medium`}>
                {item.desc[language]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <ParallaxWithModel />

      {/* Feature Section */}
      <div className="flex flex-col gap-y-6 w-full lg:w-[980px] py-10 px-5">
        <div className="flex flex-col">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.featureSection.head[language]}
          </div>
          <div className={`${textRegular} text-justify md:text-center ${textSemi}`}>
            {DataHome.featureSection.desc[language]}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {DataHome.featureSection.feature.map((f, index) => (
            <CardFeature
              key={index}
              label={f.head[language]}
              desc={f.desc[language]}
            />
          ))}
        </div>
      </div>

      {/* Benefit Section */}
      <div className="flex flex-col gap-y-6 w-full lg:w-[980px] py-16 px-5">
        <div className="flex flex-col gap-y-1">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.benefitSection.head[language]}
          </div>
          <div className={`${textRegular} text-justify md:text-center ${textSemi}`}>
            {DataHome.benefitSection.desc[language]}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {DataHome.benefitSection.benefit.map((b, index) => (
            <CardBenefit
              key={index}
              icon={b.icon}
              label={b.head[language]}
              desc={b.desc[language]}
            />
          ))}
        </div>
      </div>

      {/* Userflow Section */}
      <div className="flex flex-col gap-y-6 w-full py-16">
        <div className="flex flex-col gap-y-1 w-full lg:w-[980px] px-5 mx-auto">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.clientflowSection.head[language]}
          </div>
          <div className={`${textRegular} text-justify md:text-center ${textSemi}`}>
            {DataHome.clientflowSection.head[language]}
          </div>
        </div>

        <div className="w-full bg-[#282828] pt-8 pb-2">
          <div className="flex gap-x-4 px-5 pb-4 overflow-x-auto w-full lg:w-[980px] mx-auto">
            {DataHome.clientflowSection.flow.map((flow, index) => (
              <CardUserflow
                key={index}
                num={index + 1}
                label={flow.head[language]}
                desc={flow.desc[language]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col gap-y-6 w-full lg:w-[980px] py-8 px-5">

        <div className="flex flex-col gap-y-4">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.pricingSection.head[language]}
          </div>

          <div className="flex flex-wrap gap-2 md:justify-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          {selected.packages.map((p, index) => (
            <CardPricing
              key={index}
              price={typeof p.price === 'string' ? p.price : p.price[language]}
              desc={p.desc[language]}
              benefit={p.benefit}
              cta={p.cta[language]}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col gap-y-6 w-full justify-center lg:w-[980px] py-16 px-5">
        <div className="flex flex-col gap-y-2">
          <div className={`${textHeading2} md:text-center`}>
            {DataHome.ctaSection.head[language]}
          </div>
          <div className={`flex text-justify md:text-center md:justify-center w-full  ${textSemi}`}>
            <div className="md:max-w-[715px]">
              {DataHome.ctaSection.desc[language]}
            </div>
          </div>
        </div>
        <div className="flex md:justify-center">
          <Button label={DataHome.ctaSection.cta[0][language]} width="w-fit" />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      <div className={`${textMicro} ${textSemi} py-3`}>Avelora @ 2025. All right reserved.</div>
    </div>
  );
};

export default Home;
