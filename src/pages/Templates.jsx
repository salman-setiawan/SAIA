import React from 'react'
import { useLanguage } from '../components/LanguageContext';
import { textHeading1, textHeading3, textMicro, textRegular, textSemi, textTiny } from '../data/uiStyle'
import DataTemplates from '../data/dataTemplates';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Templates = () => {
  const { language } = useLanguage();

  // Ambil kategori dari heroSection
  const categories = DataTemplates.heroSection.categories.map((c, idx) => ({
    id: idx,
    label: c
  }));

  // Multi-select state
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  // Mapping kategori ke slug yang dipakai pada template
  const categoryMap = { 0: "Default", 1: "Landing Page", 2: "Company Profile", 3: "Online Shop" };

  const toggleCategory = (id) => {
    if (id === 0) {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const filteredTemplates =
    selectedCategories.length === 0
      ? DataTemplates.templatesSection.templates
      : DataTemplates.templatesSection.templates.filter(t => selectedCategories.includes(Number(Object.keys(categoryMap).find(key => categoryMap[key] === t.category))));

  return (
    <div className="flex flex-col justify-center items-center">
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col gap-y-6 w-full lg:max-w-[1080px] pt-20 pb-10 px-4">
        <div className="flex flex-col gap-y-4">
          <div className={`${textHeading1} max-w-[360px] leading-11`}>
            {DataTemplates.heroSection.title[language]}
          </div>

          <div className={`${textRegular} text-justify max-w-[560px] ${textSemi}`}>
            {DataTemplates.heroSection.desc[language]}
          </div>

        </div>
        {/* Button Filter Category */}
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <Button
              key={category.id}
              type="multi"
              active={selectedCategories.length === 0 && category.id === 0 ? true : selectedCategories.includes(category.id)}
              label={category.label[language]}
              width="w-fit"
              onClick={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Template Collections */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full md:px-1 pt-4 gap-1 pb-12 max-w-[1880px]">
        {filteredTemplates.map((t, index) => (
          <div key={index} className="space-y-3 p-4 md:p-2.5 hover:bg-neutral-900 cursor-pointer md:rounded">
            <div className="relative bg-neutral-800 rounded-md overflow-hidden h-[360px] flex justify-center items-center">
              {t.image}
              <div className={`absolute bottom-2 left-2 ${textTiny} font-medium py-1 px-1.5 rounded bg-blue-900 w-fit`}>{t.category}</div>
            </div>
            <div className="space-y-0.5 pb-2 pl-0.5">
              <div className={textHeading3}>{t.name[language]}</div>
              <div className={`${textSemi} text-justify`}>{t.desc[language]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />
      <div className={`${textMicro} ${textSemi} py-3`}>Aevenic @ 2025. All right reserved.</div>
    </div>
  )
}

export default Templates
