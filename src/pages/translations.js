// pages/api/translations.js
import enTranslations from '../../locales/en';
import arTranslations from '../../locales/ar';
import kuTranslations from '../../locales/ku';

const translations = {
  en: enTranslations,
  ar: arTranslations,
  ku: kuTranslations
};

export default function handler(req, res) {
  const { lang } = req.query;
  
  if (!translations[lang]) {
    return res.status(404).json({ error: 'Language not found' });
  }

  res.status(200).json(translations[lang]);
}