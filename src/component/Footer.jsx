import { Link } from 'react-router-dom';
import {
  faFacebook, faWhatsapp, faYoutube, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
     const byPrefixAndName = {
      fab: {
        'facebook': faFacebook,
        'whatsapp': faWhatsapp,
        'youtube': faYoutube,
        'twitter': faTwitter
      }
    };
  return (
    <>
     <footer className="bg-cyan-500 text-white pt-12 pb-6 text-center">
        <div className="container mx-auto px-4 space-y-6">
          {/* Footer Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium opacity-90">
            <Link to="/" className="hover:underline">الرئيسية</Link>
            <Link to="/products" className="hover:underline">المنتجات</Link>
            <Link to="/cart" className="hover:underline">السلة</Link>
            <a href="#" className="hover:underline">نبذة عنا</a>
            <a href="#" className="hover:underline">الشروط والأحكام</a>
            <a href="#" className="hover:underline">اتصل بنا</a>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex justify-center gap-4 text-lg">
            <a href="#" className="w-10 h-10 rounded-full bg-cyan/20 text-cyan-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['twitter']} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue/20 text-blue-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-red/20 text-red-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['youtube']} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-green/20 text-green-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['whatsapp']} /></a>
          </div>

          <p className="text-xs font-bold tracking-wide text-cyan-100">ابق على تواصل</p>
          <hr className="border-cyan-500/50 max-w-md mx-auto" />
          <p className="text-[11px] text-cyan-200 opacity-80">جميع الحقوق محفوظة لموقعنا © {new Date().getFullYear()}</p>
        </div>
      </footer>

    
    </>
  )
}

export default Footer