import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { faMagnifyingGlass, faUser, faHeart, faCartShopping ,faHouse} from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const [isHeartActive, setIsHeartActive] = useState(false);
    const { t, i18n } = useTranslation();
    const byPrefixAndName = {
  fas: {
    'magnifying-glass': faMagnifyingGlass,
    'user': faUser,
    'heart': faHeart,
    'cart-shopping': faCartShopping,
    'house': faHouse
  }
};

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };
  return (
    <>
    {/* 1. Header / Navigation */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo & Menu */}
          <div className="flex items-center gap-8">
            <div className="text-black  text-xl tracking-wider flex items-center gap-1">Smart Shop
              <span className="w-1 h-1 bg-cyan-500 text-cyan-500 mb-6 align-middle "><FontAwesomeIcon icon={byPrefixAndName.fas['house']} /></span>
              
            </div>
            <nav className="hidden md:flex items-center gap-6 text-black font-medium text-l">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-cyan-500 border-b-2 border-cyan-500 pb-1'
                    : 'text-black hover:text-cyan-500 transition'
                }
              >
                {t('home')}
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-cyan-500 border-b-2 border-cyan-500 pb-1'
                    : 'text-black hover:text-cyan-500 transition'
                }
              >
                {t('products')}
              </NavLink>
              <a href="#" className="hover:text-cyan-500 transition">{t('services')}</a>
              <a href="#" className="hover:text-cyan-500 transition">{t('about')}</a>
              <a href="#" className="hover:text-cyan-500 transition">{t('terms')}</a>
              <a href="#" className="hover:text-cyan-500 transition">{t('blog')}</a>
              <a href="#" className="hover:text-cyan-500 transition">{t('contact')}</a>
            </nav>
          </div>

          {/* Icons (Left Side) */}
          <div className="flex items-center gap-4 text-black">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-cyan-600 transition hover:border-cyan-500 hover:text-cyan-500"
            >
              {t('change_lang')}
            </button>
            <Link to="/search" className="hover:text-cyan-500">
            <FontAwesomeIcon icon={byPrefixAndName.fas['magnifying-glass']} />
          </Link>
            <Link to="/profile" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={byPrefixAndName.fas['user']} />
            </Link>
            <button
              onClick={() => setIsHeartActive((active) => !active)}
              className={`${isHeartActive ? 'text-red-500' : 'text-black hover:text-red-500'} transition`}
            >
              <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} />
            </button>
            <Link to="/cardthis" className="hover:text-cyan-500 relative inline-flex items-center">
              <span className="absolute -top-1 -right-2 bg-cyan-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
              <FontAwesomeIcon icon={byPrefixAndName.fas['cart-shopping']} />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}