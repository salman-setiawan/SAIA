import React from 'react'
import { useLanguage } from '../components/LanguageContext';
import { textHeading1, textHeading2, textMicro, textRegular, textSemi } from '../data/uiStyle';
import DataHome from '../data/dataHome';
import CardPricing from '../components/CardPricing';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Models from './Models';
import DataPricing from '../data/dataPricing';

const Pricing = () => {
  const { language } = useLanguage();

  const services = [...DataPricing.pricingSection.services].sort((a, b) => a.id - b.id);

  const [activeService, setActiveService] = React.useState(
    services[0].id
  );

  const selected = services.find(s => s.id === activeService);

  return (
    <div className="flex flex-col justify-center items-center">
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col gap-y-6 w-full lg:max-w-[1140px] pt-20 pb-12 px-4">
        <div className="flex flex-col gap-y-4">
          <div className={`${textHeading1} max-w-[360px] leading-11`}>
            {DataPricing.heroSection.title[language]}
          </div>

          <div className={`${textRegular} text-justify max-w-[560px] ${textSemi}`}>
            {DataPricing.heroSection.desc[language]}
          </div>
        </div>

        <div className="flex gap-x-2">
          {DataPricing.heroSection.cta.map((c, index) => (
            <Button key={index} label={c[language]} width="w-fit" />
          ))}
        </div>
      </div>

      {/* Pricing UI Image */}
      <div className="relative flex justify-center items-center w-full mx-auto bg-[#141414] h-[640px]">
        <div className="">Contoh UI (berisi contoh template yang menyesuaikan active button)</div>
      </div>

      <div className="flex flex-col gap-y-4 sm:gap-y-10 w-full lg:max-w-[1140px] py-6 px-4">

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

        {/* Pricing Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {selected.packages.map((p, index) => (
            <CardPricing
              key={index}
              deal={p.deal?.[language]}
              range={p.range?.[language]}
              price={typeof p.price === 'string' ? p.price : p.price[language]}
              desc={p.desc?.[language]}
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
          <div className="absolute inset-x-1 -top-22 scale-[0.8] rounded-2xl overflow-hidden">
            <Models />
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
  )
}

export default Pricing