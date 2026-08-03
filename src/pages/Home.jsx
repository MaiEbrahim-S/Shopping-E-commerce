import { useState } from 'react';
import Header from "../component/Header";
import { Link } from 'react-router-dom';
import heroImage from "../assets/Heroz.png"; // Import the hero image
import childc from "../assets/childrenclothes.png";
import c1 from "../assets/c1.png";
import c3 from "../assets/c3.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import img1 from "../assets/img1.png";
import child from "../assets/child.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, faWhatsapp, faYoutube, faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight,faPhone,faCar,faWallet,faGift,faHeart } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
    const byPrefixAndName = {
  fas: {
    'chevron-left': faChevronLeft,
    'chevron-right': faChevronRight,
    'mobile-screen': faPhone,
    'car-side': faCar,
    'wallet': faWallet,
    'gift': faGift,
    'heart': faHeart,
  },
  fab: {
    'facebook': faFacebook,
    'whatsapp': faWhatsapp,
    'youtube': faYoutube,
    'twitter': faTwitter
  }
};

const heroImages = [heroImage, c3, child, m3, l1, c1, l3];
const images = [c3, child, m3, m4, c1, c3, c1, img1];
const ima2 = [child, m3, c1];
const [activeHeroIndex, setActiveHeroIndex] = useState(0);
const [favoriteGrid, setFavoriteGrid] = useState(() => Array(images.length).fill(false));
const [favoriteSmall, setFavoriteSmall] = useState(() => Array(ima2.length).fill(false));

  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <Header />
     
      {/* 2. Hero Section */}
      <section className="bg-cyan-50 py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 max-w-lg z-10">
            <span className="text-black text-2xl  tracking-wide mr-20 block">براندات نسائي عالمية</span>
            <h1 className="text-3xl md:text-5xl font-black text-black leading-tight mr-8">
              أحدث أدوات الجمال <br />
            </h1>
            <span className="text-black text-2xl  tracking-wide mr-20 block">براندات نسائي عالمية</span>
            <Link to="/products" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105 mr-25 mt-4">
              اكتشف الان
            </Link>
            
            </div>

          {/* Image Content */}
          <div className="relative flex justify-center">
            {/* Soft background shape */}
            <div className="absolute inset-0 bg-cyan-200/40 rounded-full filter blur-xl w-72 h-72 md:w-96 md:h-96 mx-auto my-auto -z-10"></div>
            <img 
              src={heroImages[activeHeroIndex]} 
              alt="Hero Model" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        {/* Slider Dots */}
        <div className="w-full flex justify-center items-center my-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveHeroIndex((index) => (index === 0 ? heroImages.length - 1 : index - 1))}
              className="w-10 h-10 rounded-full bg-cyan-400 cursor-pointer text-white flex items-center justify-center shadow-sm hover:bg-cyan-500 transition-colors"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fas['chevron-left']} className="text-xs" />
            </button>

            <div className="flex gap-2 items-center justify-center">
              {heroImages.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setActiveHeroIndex(dotIndex)}
                  className={`w-3.5 h-3.5 rounded-full transition ${
                    activeHeroIndex === dotIndex ? 'bg-cyan-500' : 'bg-gray-200 hover:bg-cyan-300'
                  }`}
                  aria-label={`Slide ${dotIndex + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveHeroIndex((index) => (index === heroImages.length - 1 ? 0 : index + 1))}
              className="w-10 h-10 rounded-full border border-cyan-300 bg-white text-cyan-400 flex items-center justify-center shadow-sm hover:bg-cyan-50 transition-colors"
            >
              <FontAwesomeIcon icon={byPrefixAndName.fas['chevron-right']} className="text-xs" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Features Features Info Bar */}
      <section className="border-y border-gray-100 py-6 bg-gray-50/50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl bg-gray-150 text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['car-side']} /></span>
            <h4 className="font-bold text-gray-800 text-sm">توصيل مجاني</h4>
            <p className="text-xs text-gray-500">للطلبات أكثر من 200 جنيه</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl bg-gray-150 text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['mobile-screen']} /></span>
            <h4 className="font-bold text-gray-800 text-sm">دعم فني</h4>
            <p className="text-xs text-gray-500">دعم علي مدار الساعة</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl bg-gray-150 text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['wallet']} /></span>
            <h4 className="font-bold text-gray-800 text-sm">إسترجاع الاموال</h4>
            <p className="text-xs text-gray-500">استرداد امن لاموالك او الاستبدال</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl bg-gray-150 text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['gift']} /></span>
            <h4 className="font-bold text-gray-800 text-sm">عروض مميزة</h4>
            <p className="text-xs text-gray-500">خصومات كبيرة علي منتجاتنا</p>
            
          </div>
        </div>
      </section>

      {/* 4. Category Banners (Split 50/50) */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        {/* Kids Clothing Banner */}
        <div className="bg-cyan-100 rounded-xl p-8 flex items-center justify-between overflow-hidden relative min-h-[180px]">
          <div className="space-y-2 p-15 z-10">
            <img 
            src={childc} 
            alt="Kids Fashion" 
            className="w-32 h-full object-cover absolute left-10 bottom-0 mix-blend-multiply"
          />
            <h3 className="text-sm md:text-3xl font-bold text-black ">ملابس الأطفال</h3>
            <p className=" text-xl font-bold text-black">خصم 35%</p>
            <a href="#" className="text-xs font-bold text-black underline block pt-2">تسوّق الآن</a>
          </div>
          
        </div>

        {/* Girls Dresses Banner */}
        <div className="bg-pink-100 rounded-xl p-8 flex items-center justify-between overflow-hidden relative min-h-[180px]">
          <div className="space-y-2 p-15 z-10">
             <img 
            src={child} 
            alt="Girls Fashion" 
            className="w-32 h-full object-cover absolute left-10 bottom-0 mix-blend-multiply"
          />
            <p className=" text-sm font-bold text-black">خصم كبير</p>
            <h3 className="text-xl md:text-2xl font-bold text-black">ملابس رجالي</h3>
            <a href="#" className="text-xs font-bold text-black underline block pt-2">تسوّق الآن</a>
          </div>
         
        </div>
      </section>

      {/* 5. Main Products Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-500 relative inline-block pb-2 after:content-[''] after:w-12 after:h-1 after:bg-cyan-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            أحدث المنتجات
          </h2>
        </div>

        {/* Products Grid (8 Items Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((imagepath,item) => (
            <div key={item} className="group border border-gray-300 rounded-xl p-3 bg-white  transition relative">
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => {
                  setFavoriteGrid((prev) => {
                    const next = [...prev];
                    next[item] = !next[item];
                    return next;
                  });
                }}
                className={`absolute top-5 left-5 z-10 bg-white/90 p-1.5 rounded-full cursor-pointer shadow-sm text-xs transition ${
                  favoriteGrid[item] ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} />
              </button>
              
              {/* Image Container */} 
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-3 aspect-square relative">
                <img 
                  src={imagepath}
                  alt="Product"
                  className="w-full h-full "
                />
              </div>

              {/* Details */}
              <div className="space-y-1 text-center md:text-right flex justify-between">
                <div>
                <div className="flex justify-center md:justify-start text-amber-400 text-xs">⭐⭐⭐⭐⭐</div>
                <h3 className="text-sm font-bold text-gray-700 truncate">بلوزة قطنية بيضاء كاجوال</h3>
                <div className="flex justify-center md:justify-start gap-1 pt-2">
                  {['XL', 'L', 'M', 'S'].map(size => (
                    <span key={size} className="text-[10px] border border-gray-200 px-1 py-0.5 rounded text-gray-500 hover:border-cyan-500 hover:text-cyan-500 cursor-pointer">{size}</span>
                  ))}
                </div>
                </div>
                <div className="flex items-center justify-center w-1/7 flex-col md:justify-start gap-2">
                  <span className="text-cyan-600 font-extrabold text-sm">500 ج.م</span>
                  <span className="text-gray-400 line-through text-xs">800ج.م</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-cyan-100 my-12 relative overflow-hidden min-h-[260px] flex items-center">
  <div className="container mx-auto px-10 grid md:grid-cols-3 items-center w-full py-8 text-center">
    
    <div className="hidden md:flex justify-start">
      <img 
        src={c3} 
        alt="Flash Sale Kid Right" 
        className="h-80 object-contain mix-blend-multiply"
      />
    </div>

    <div className="flex flex-col items-center justify-center z-10 space-y-4">
      <span className="text-black font-bold text-3xl block">أكبر خصم على الإطلاق</span>
      <h2 className="text-3xl md:text-5xl font-bold text-purple-500">احدث ملابس الاطفال</h2>
      
      {/* الـ Timer Counter */}
      <div className="flex justify-center gap-4 text-purple-500 font-bold pt-2">
        <div className="backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
          <div className="text-3xl font-bold text-black">00</div>
          <div className="text-3xl text-black">يوم</div>
        </div>
        <div className="backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
          <div className="text-3xl font-bold text-black">00</div>
          <div className="text-3xl text-black">ساعة</div>
        </div>
        <div className="backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
          <div className="text-3xl font-bold text-black">00</div>
          <div className="text-3xl text-black">دقيقة</div>
        </div>
        <div className="backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
          <div className="text-3xl font-bold text-black">00</div>
          <div className="text-3xl text-purple-500">ثانية</div>
        </div>
      </div>

      <Link to="/products" className="bg-purple-800 hover:bg-purple-900 text-white text-sm font-bold px-8 py-2.5 rounded-full mt-4 transition shadow-md inline-block text-center">
        تسوق الآن
      </Link>
    </div>

    
    <div className="hidden md:flex justify-end">
      <img 
        src={c1} 
        alt="Flash Sale Kid Left" 
        className="h-64 object-contain mix-blend-multiply"
      />
    </div>
  </div>
</section>
      {/* 7. Sidebar Category + Carousel Section */}
      <section className="container mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        
        {/* Right Sidebar Menu */}
        <div className="md:col-span-1 border border-cyan-100 rounded-xl overflow-hidden bg-white shadow-sm h-fit">
          <div className="bg-cyan-500 text-white font-bold p-4 text-center">تسوق عبر الفئات</div>
          <ul className="divide-y divide-gray-100 text-gray-700 text-sm font-medium">
            <li className="p-3.5 hover:bg-cyan-50 hover:text-cyan-600 transition cursor-pointer pr-6">رجالي</li>
            <li className="p-3.5 hover:bg-cyan-50 hover:text-cyan-600 transition cursor-pointer pr-6">حريمي</li>
            <li className="p-3.5 hover:bg-cyan-50 hover:text-cyan-600 transition cursor-pointer pr-6">أطفال</li>
            <li className="p-3.5 hover:bg-cyan-50 hover:text-cyan-600 transition cursor-pointer pr-6">الإكسسوارات</li>
            <li className="p-3.5 hover:bg-cyan-50 hover:text-cyan-600 transition cursor-pointer pr-6">العاب</li>
          </ul>
        </div>

        {/* Left Side Small Products Slider Display */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          {ima2.map((image,item) => (
            <div key={item} className="border border-gray-100 rounded-xl p-3 bg-white text-center md:text-right relative">
              <button
                type="button"
                onClick={() => {
                  setFavoriteSmall((prev) => {
                    const next = [...prev];
                    next[item] = !next[item];
                    return next;
                  });
                }}
                className={`absolute top-5 left-5 z-10 bg-white/90 p-1.5 rounded-full cursor-pointer shadow-sm text-xs transition ${
                  favoriteSmall[item] ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} />
              </button>
      
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                <img 
                  src={image}
                  alt="Product item" 
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-1 text-center md:text-right flex justify-between">
                <div>
                <div className="flex justify-center md:justify-start text-amber-400 text-xs">⭐⭐⭐⭐⭐</div>
                <h3 className="text-sm font-bold text-gray-700 truncate">بلوزة قطنية بيضاء كاجوال</h3>
                <div className="flex justify-center md:justify-start gap-1 pt-2">
                  {['XL', 'L', 'M', 'S'].map(size => (
                    <span key={size} className="text-[10px] border border-gray-200 px-1.5 py-0.5 rounded text-gray-500 hover:border-cyan-500 hover:text-cyan-500 cursor-pointer">{size}</span>
                  ))}
                </div>
                </div>
                <div className="flex items-center justify-center flex-col md:justify-start gap-2">
                  <span className="text-cyan-600 font-extrabold text-sm">500 ج.م</span>
                  <span className="text-gray-400 line-through text-xs">800ج.م</span>
                </div>
              </div>
          </div>
          ))}
        </div>
      </section>

      {/* 8. Brands Logo Section */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
         <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-500 relative inline-block pb-2 after:content-[''] after:w-12 after:h-1 after:bg-cyan-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            البرندات
          </h2>
        </div>
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-300">
          <span className=" w-30 h-30 text-gray-700"><img src={p1} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p2} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p3} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p4} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p5} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p1} /></span>
          <span className=" w-30 h-30 text-gray-700"><img src={p3} /></span>
          
        </div>
      </section>

      {/* 9. Blog / Instagram Style Triple Image Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 text-center">
            <img src={l1} alt="Blog 1" className="rounded-xl w-full h-80 object-cover shadow-sm" />
            <p className="text-xs font-bold text-gray-700 pt-3">استمتعي بأجمل صيحات الموضة في العبايات</p>
          </div>
          <div className="space-y-2 text-center">
             <p className="text-xs font-bold text-gray-700 pt-3">احصلي على أفضل الإكسسوارات النسائية المميزة</p>
            <img src={l2} alt="Blog 2" className="rounded-xl w-full h-80 object-cover shadow-sm" />
            </div>
          <div className="space-y-2 text-center">
            <img src={l3} alt="Blog 3" className="rounded-xl w-full h-80 object-cover shadow-sm" />
            <p className="text-xs font-bold text-gray-700 pt-3">مع اجمل صيحات الموضة والجينز</p>
          </div>
        </div>
      </section>
      
  

      {/* 10. Footer Section */}
      <Footer />
          

    </div>
  );
}