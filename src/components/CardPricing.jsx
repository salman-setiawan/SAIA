import { useLanguage } from './LanguageContext';
import { cardSpecs, paragraphSmallText, textHeading1, textSmall } from '../data/uiStyle'
import Button from './Button'

const CardPricing = ({ price, desc, benefit, cta, deal, range }) => {
  const { language } = useLanguage();

  return (
    <div className={`${cardSpecs} relative`}>
      {deal &&
        <>
          <style>
            {`@keyframes auroraMove {
                0% { background-position: 0% 0%, 100% 100%, 50% 0%; }
                33% { background-position: 80% 20%, 20% 80%, 60% 40%; }
                66% { background-position: 20% 60%, 80% 30%, 40% 90%; }
                100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
              }`}
          </style>
          <div
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(22, 96, 255, 0.55), transparent 70%),
                radial-gradient(circle at 20% 30%, rgba(37, 22, 255, 0.55), transparent 70%)
              `,
              backgroundSize: '300% 300%',
              animation: 'auroraMove 4s ease-in-out infinite'
            }}
            className="absolute sm:-top-4.5 right-3 pl-2 pr-3 py-1.5 rounded-md w-fit shadow-lg shadow-black/30 flex items-center gap-x-1.5 backdrop-blur-sm text-[14px] font-medium"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}>
              check_circle
            </span>
            {deal}
          </div>
        </>
      }

      <div className="flex flex-col gap-4">
        <div className='space-y-1'>
          <div>
            <div className='text-[13px] h-[28px] flex items-end'>{range}</div>
            <div className={`${textHeading1}`}>{price}</div>
          </div>
          <div className={`${paragraphSmallText} pr-4 lg:h-[84px]`}>{desc}</div>
        </div>
        <div className="flex flex-col gap-y-6 pb-2">
          {benefit?.length > 0 && (
            <div className="flex flex-col gap-y-1.5">
              {benefit.map((item, idx) => {
                const label = item?.[language] || item?.en || '';
                const detail = item?.detail ? ` (${item.detail})` : '';
                const isAvailable = item?.available;

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg ${textSmall} font-medium flex items-center gap-x-2
                    ${isAvailable ? 'bg-[#0c0c0c]/70' : 'bg-[#0c0c0c]/30 opacity-60'}`}
                  >
                    <span
                      className={`material-symbols-outlined ${isAvailable ? 'text-[#A8E6CF]' : 'text-red-400'}`}
                      style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}
                    >
                      {isAvailable ? 'check_circle' : 'cancel'}
                    </span>
                    <span>{label}{detail}</span>
                  </div>
                );
              })}
            </div>
          )}
          <Button width='w-full' label={cta} />
        </div>
      </div>
    </div>
  )
}

export default CardPricing;
