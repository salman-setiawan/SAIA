import { useLanguage } from './LanguageContext';
import { cardSpecs, paragraphSmallText, textHeading1, textSmall } from '../data/uiStyle'
import Button from './Button'

const CardPricing = ({ price, desc, benefit, cta, deal }) => {
  const { language } = useLanguage();

  return (
    <div className={`${cardSpecs} relative`}>
      {deal &&
        <div className={`absolute -top-4.5 right-6 pl-2 pr-3 py-1.5 bg-blue-600 rounded-md w-fit ${textSmall} font-semibold shadow-lg shadow-black/30 flex items-center gap-x-1.5`}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}> check_circle </span> {deal}
        </div>
      }
      <div className="h-[360px] flex flex-col justify-between">
        <div className='space-y-0.5'>
          <div className={`${textHeading1} pt-4`}>{price}</div>
          <div className={`${paragraphSmallText} pr-4`}>{desc}</div>
        </div>
        <div className="flex flex-col gap-y-6">
          {benefit?.length > 0 && (
            <div className="flex flex-col gap-y-1.5">
              {benefit.map((item, idx) => (
                <div key={idx} className={`p-2 rounded-lg bg-[#0c0c0c]/70 ${textSmall} font-medium flex items-center gap-x-2`}>
                  <span className="material-symbols-outlined text-[#A8E6CF]" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}> check_circle </span>
                  <span>{item?.[language] || item?.en || ''}</span>
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