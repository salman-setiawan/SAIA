import { useLanguage } from './LanguageContext';
import { cardSpecs, paragraphSmallText, textHeading1 } from '../data/uiStyle'
import Button from './Button'

const CardPricing = ({ price, desc, benefit, cta }) => {
  const { language } = useLanguage();

  return (
    <div className={cardSpecs}>
      <div className="flex flex-col gap-y-4">
        <div>
          <div className={textHeading1}>{price}</div>
          <div className={paragraphSmallText}>{desc}</div>
        </div>
        {benefit?.length > 0 && (
          <div className="flex flex-col gap-y-1">
            {benefit.map((item, idx) => (
              <div key={idx}>{item[language]}</div>
            ))}
          </div>
        )}
        <Button width='w-full' label={cta} />
      </div>
    </div>
  )
}

export default CardPricing