import React from 'react'
import { useLanguage } from '../components/LanguageContext';
import CardPricing from '../components/CardPricing'
import { textHeading1, textHeading2, textRegular } from '../data/uiStyle';
import Button from '../components/Button';
import CardBenefit from '../components/CardBenefit';
import CardFeature from '../components/CardFeature';

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className={`flex w-full justify-center`}>
      <div className="flex flex-col px-5 w-full lg:w-[1080px]">
        {/* Hero Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading1} md:text-center`}>
              {language === 'en' ? "Hero Section" : "Hero Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi! Mulai dari company profile, landing page, sampai toko online semua bisa kamu dapatkan dengan mudah dan tanpa ribet." : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi! Mulai dari company profile, landing page, sampai toko online semua bisa kamu dapatkan dengan mudah dan tanpa ribet."}
            </div>
          </div>
          <div className="flex gap-x-2 md:justify-center">
            <Button label={language === 'en' ? 'Order Now' : 'Order Sekarang'} width='w-fit' />
            <Button label={language === 'en' ? 'Order Now' : 'Order Sekarang'} width='w-fit' />
          </div>
        </div>
        {/* Feature Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading2} md:text-center`}>
              {language === 'en' ? "Feature Section" : "Feature Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!" : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!"}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <CardFeature 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
            <CardFeature 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
            <CardFeature 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
          </div>
        </div>
        {/* Benefit Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading2} md:text-center`}>
              {language === 'en' ? "Benefit Section" : "Benefit Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!" : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!"}
            </div>
          </div>
          <div className="columns-1 md:columns-2 space-y-2 gap-x-2">
            <CardBenefit 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
            <CardBenefit 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
            <CardBenefit 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
            <CardBenefit 
              label='This is Label'
              desc='Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!'
            />
          </div>
        </div>
        {/* Userlow Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading2} md:text-center`}>
              {language === 'en' ? "Userflow Section" : "Userflow Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!" : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!"}
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading2} md:text-center`}>
              {language === 'en' ? "Pricing Section" : "Pricing Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!" : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!"}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <CardPricing 
              price='Rp. 1.500.000'
              desc={language === 'en' ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              cta={language === 'en' ? 'Order Now' : 'Order Sekarang'}
            />
            <CardPricing 
              price='Rp. 1.500.000'
              desc={language === 'en' ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              cta={language === 'en' ? 'Order Now' : 'Order Sekarang'}
            />
            <CardPricing 
              price='Rp. 1.500.000'
              desc={language === 'en' ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              cta={language === 'en' ? 'Order Now' : 'Order Sekarang'}
            />
          </div>
        </div>
        {/* CTA Section */}
        <div className="flex flex-col justify-center py-16 gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className={`${textHeading2} md:text-center`}>
              {language === 'en' ? "CTA Section" : "CTA Section"}
            </div>
            <div className={`${textRegular} text-justify md:text-center`}>
              {language === 'en' ? "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi! Mulai dari company profile, landing page, sampai toko online semua bisa kamu dapatkan dengan mudah dan tanpa ribet." : "Kami siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi! Mulai dari company profile, landing page, sampai toko online semua bisa kamu dapatkan dengan mudah dan tanpa ribet."}
            </div>
          </div>
          <div className="flex md:justify-center"><Button label={language === 'en' ? 'Order Now' : 'Order Sekarang'} width='w-fit' /></div>
        </div>
      </div>
    </div>
  )
}

export default Home