import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ملفات الترجمة
const resources = {
  en: {
    translation: {
      "hero_title": "Shop the Latest Trendy Products",
      "home": "Home",
      "products": "Products",
      "services": "Services",
      "about": "About us",
      "terms": "Terms and Conditions",
      "blog": "Blog",
      "contact": "Contact us",
      "change_lang": "العربية"
    }
  },
  ar: {
    translation: {
      "hero_title": "تسوق أحدث المنتجات العصرية",
      "home": "الرئيسية",
      "products": "المنتجات",
      "services": "الخدمات",
      "about": "نبذة عنا",
      "terms": "الشروط و الأحكام",
      "blog": "المدونة",
      "contact": "اتصل بنا",
      "change_lang": "English"
    }
  }
};

i18n
  .use(LanguageDetector) // يكتشف لغة المتصفح تلقائياً
  .use(initReactI18next) // يربطها مع React
  .init({
    resources,
    fallbackLng: 'ar', // اللغة الاحتياطية لو معرفش يلقط اللغة
    interpolation: {
      escapeValue: false // React يحمينا بالفعل من الـ XSS
    }
  });

export default i18n;