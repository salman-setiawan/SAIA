import { useLanguage } from './LanguageContext';
import { baseNeutral100, cardSpecs, paragraphSmallText, textHeading1, textSmall } from '../data/uiStyle'
import Button from './Button'

const CardPricing = ({ price, desc, benefit, cta }) => {
  const { language } = useLanguage();

  return (
    <div className={cardSpecs}>
      <div className="h-[360px] flex flex-col justify-between">
        <div className='space-y-1'>
          <div className={`${textHeading1} mt-2`}>{price}</div>
          <div className={`${paragraphSmallText} pr-4`}>{desc}</div>
        </div>
        <div className="flex flex-col gap-y-6">
          {benefit?.length > 0 && (
            <div className="flex flex-col gap-y-1.5">
              {benefit.map((item, idx) => (
                <div key={idx} className={`p-2 rounded-lg ${baseNeutral100} ${textSmall} font-medium flex items-center gap-x-2`}>
                  <span
                    className="material-symbols-outlined text-[#A8E6CF]"
                    style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}
                  >
                    check
                  </span>
                  <span>{item[language]}</span>
                </div>
              ))}
            </div>
          )}
          <Button width='w-full' label={cta} />
        </div>
      </div>
    </div>
  )
}

export default CardPricing