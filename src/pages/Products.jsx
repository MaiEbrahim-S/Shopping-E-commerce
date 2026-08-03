import Header from "../component/Header";
import Footer from "../component/Footer";
import products from "../assets/products.png"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import c1 from "../assets/c1.png";
import c3 from "../assets/c3.png";
import m3 from "../assets/m3.png";
import c5 from "../assets/c5.png";
import m4 from "../assets/m4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/img1.png";
import child from "../assets/child.png";
import l3 from "../assets/l3.jpg";

export default function ProductCatalogPage() {
  const { i18n } = useTranslation();
  const pageDir = i18n.dir(i18n.language);
  const images = [img1, c1,c3];
  const imag = [img1 , m3,m4,child,img1,c1,c3,img1,l3];
  const img = [img1,c5,m3,m4,child];
  const byPrefixAndName = {
    fas: {
      'arrow-left': faArrowLeft,
      'arrow-right': faArrowRight,
      'heart': faHeart,
    }
  }

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      <Header />

      <div dir={pageDir} lang={i18n.language}>
      {/* 2. Hero Banner / Breadcrumbs */}
      <section className=" py-16 text-center relative overflow-hidden" style={{ backgroundImage: `url(${products})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-10  [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-3">تسوق أحدث المنتجات العصرية</h1>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-cyan-500">الرئيسية</a>
            <span className="text-gray-400">/</span>
            <span className="text-cyan-600 font-bold">المنتجات</span>
          </div>
        </div>
      </section>

      {/* 3. Main Content Container (Sidebar + Grid) */}
      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* RIGHT SIDEBAR - FILTERS */}
        <aside className="lg:col-span-1 space-y-8 order-first lg:order-last bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit">
          
          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3 flex items-center justify-between">
              <span>الفئات</span>
              <span className="text-xs text-gray-400">▼</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between hover:text-cyan-500 cursor-pointer"><span>الاكسسوارات</span> <span className="text-xs text-gray-400">(8)</span></li>
              <li className="flex justify-between hover:text-cyan-500 cursor-pointer text-cyan-500 font-bold"><span>ملابس</span> <span className="text-xs text-cyan-400">(12)</span></li>
              <li className="flex justify-between hover:text-cyan-500 cursor-pointer"><span>الالكترونيات</span> <span className="text-xs text-gray-400">(5)</span></li>
              <li className="flex justify-between hover:text-cyan-500 cursor-pointer"><span>أدوات</span> <span className="text-xs text-gray-400">(3)</span></li>
              <li className="flex justify-between hover:text-cyan-500 cursor-pointer"><span>أحذية</span> <span className="text-xs text-gray-400">(7)</span></li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4 flex items-center justify-between">
              <span>السعر</span>
              <span className="text-xs text-gray-400">▼</span>
            </h3>
            <div className="px-2">
              <div className="h-1.5 bg-gray-200 rounded-full relative">
                <div className="absolute left-1/4 right-1/4 h-full bg-cyan-500 rounded-full"></div>
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-cyan-500 rounded-full cursor-pointer shadow-sm"></div>
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-cyan-500 rounded-full cursor-pointer shadow-sm"></div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                <span>10 ج.م</span>
                <span>1500  ج.م</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">المقاس</h3>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className={`border px-3 py-1 rounded text-xs font-bold transition ${size === 'M' ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-gray-200 text-gray-600 hover:border-cyan-500'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">الون</h3>
            <div className="flex gap-2">
              {['bg-red-500', 'bg-blue-500', 'bg-yellow-400', 'bg-purple-600', 'bg-green-500'].map((color, idx) => (
                <span key={idx} className={`w-5 h-5 rounded-full cursor-pointer ring-offset-2 hover:ring-2 ring-cyan-500 ${color}`}></span>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">العلامة التجارية</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['نايكي', 'أديداس', 'زارا', 'بوما', 'تومي'].map((brand, idx) => (
                <li key={idx} className="flex items-center gap-2 cursor-pointer hover:text-cyan-500">
                  <input type="checkbox" className="rounded border-gray-300 text-cyan-500 focus:ring-cyan-400" id={`brand-${idx}`} />
                  <label htmlFor={`brand-${idx}`} className="cursor-pointer">{brand}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products Sidebar Section */}
          <div>
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">عناصر مميزة</h3>
            <div className="space-y-4">
              {images.map((images,fItem) => (
                <div key={fItem} className="flex items-center gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <img src={images} alt="Featured" className="w-14 h-14 object-cover rounded-lg bg-gray-50" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-700">قميص كاجوال عصري ومميز</h4>
                    <p className="text-cyan-600 font-extrabold text-xs">300 ج.م</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* LEFT MAIN GRID - PRODUCTS */}
        <section className="lg:col-span-3 space-y-6">
          
          {/* Top Bar Control (Grid Switch, Sorting) */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex gap-1">
                <button className="p-1.5 bg-cyan-100 text-cyan-600 rounded">📊</button>
                <button className="p-1.5 hover:bg-gray-100 rounded">☰</button>
              </div>
              <span className="text-xs font-medium">مشاهدة 1 - 9 من أصل 24 منتج</span>
            </div>
            
            <div className="flex items-center gap-3">
              <select className="border border-gray-200 rounded-lg text-xs p-2 bg-gray-50 font-medium text-gray-600 focus:outline-none focus:border-cyan-500">
                <option>ترتيب حسب: الأحدث</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
              </select>
            </div>
          </div>

          {/* Products Catalog 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imag.map((imag,item) => (
              <Link
                key={item}
                to="/product"
                state={{ image: imag, title: "بلوزة قطنية بيضاء فاخرة" }}
                className="group block border border-gray-100 rounded-xl p-3 bg-white transition relative"
              >
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-5 left-5 z-10 text-gray-400 hover:text-red-500 bg-white/80 p-1.5 rounded-full shadow-sm text-xs"
                >
                  <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} />
                </button>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-3 aspect-square relative">
                  <img 
                    src={imag}
                    alt="Product Catalog Item"
                    className="w-full h-full object-cover transition duration-300"
                  />
                </div>

                <div className="space-y-1 text-right">
                  <div className="flex text-amber-400 text-xs">⭐⭐⭐⭐⭐</div>
                  <h3 className="text-sm font-bold text-gray-700 truncate">بلوزة قطنية بيضاء فاخرة</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600 font-extrabold text-sm">350 ج.م</span>
                    <span className="text-gray-400 line-through text-xs">500 ج.م</span>
                  </div>
                  <div className="flex gap-1 pt-2">
                    {['XL', 'L', 'M', 'S'].map(size => (
                      <span key={size} className="text-[10px] border  border-gray-200 px-1.5 py-0.5 rounded text-gray-500">{size}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-6">
            <button className="w-8 h-8 flex items-center justify-center border rounded-lg text-gray-400 hover:border-cyan-500 hover:text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['arrow-left']} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg font-bold bg-cyan-500 text-white shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center border rounded-lg font-bold text-gray-600 hover:border-cyan-500 hover:text-cyan-500">2</button>
            <button className="w-8 h-8 flex items-center justify-center border rounded-lg font-bold text-gray-600 hover:border-cyan-500 hover:text-cyan-500">3</button>
            <button className="w-8 h-8 flex items-center justify-center border rounded-lg text-gray-400 hover:border-cyan-500 hover:text-cyan-500"><FontAwesomeIcon icon={byPrefixAndName.fas['arrow-right']} /></button>
          </div>

        </section>
      </main>

      {/* 4. Bottom Section: Similar / Related Products */}
      <section className="container mx-auto px-4 py-12 border-t border-gray-100 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-xl font-black text-gray-800 relative inline-block pb-2 after:content-[''] after:w-12 after:h-0.5 after:bg-cyan-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            منتجات مشابهة
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {img.map((img,item) => (
            <div key={item} className="border border-gray-100 rounded-xl p-3 bg-white text-right relative text-xs">
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-2 aspect-square">
                <img 
                  src={img} 
                  alt="Similar Product" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex text-amber-400 text-[10px]">⭐⭐⭐⭐⭐</div>
              <h4 className="font-bold text-gray-700 truncate mt-1">بلوزة قطنية بيضاء كلاسيك</h4>
              <p className="text-cyan-600 font-extrabold mt-1">320 ج.م</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer Section */}
      </div>
      <Footer />
    </div>
  );
}