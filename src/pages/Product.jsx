import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faWhatsapp, faYoutube, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import img1 from "../assets/img1.png";
import c5 from "../assets/c5.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import child from "../assets/child.png";
import products from "../assets/products.png";

export default function ProductDetailsPage() {
  const byPrefixAndName = {
      fab: {
        'facebook': faFacebook,
        'whatsapp': faWhatsapp,
        'youtube': faYoutube,
        'twitter': faTwitter
      },
      fas: {
      'heart': faHeart
    }
    };
  const img = [img1,c5,m3,m4,child];
  const location = useLocation();
  const selectedImage = location.state?.image || 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=500&auto=format&fit=crop';
  const selectedTitle = location.state?.title || 'فستان ازرق عصري';
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorited, setIsFavorited] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'أحمد جلال',
      date: '9 أغسطس 2026',
      text: 'منتج رائع، التعبئة والتغليف كانت جيدة أيضاً! مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.'
    },
    {
      id: 2,
      name: 'سارة خالد',
      date: '12 أغسطس 2026',
      text: 'المنتج ممتاز والخامة ممتازة جدًا، أنصح بشرائه.'
    },
    {
      id: 3,
      name: 'محمود علي',
      date: '15 أغسطس 2026',
      text: 'التوصيل كان سريعًا والمنتج مطابق للوصف تمامًا.'
    }
  ]);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    message: '',
    email: '',
    phone: ''
  });
  

  return (
    <div className="min-h-screen bg-white font-sans text-right animate-fadeIn" dir="rtl">
      
      <Header />

      <section className=" py-16 text-center relative overflow-hidden" style={{ backgroundImage: `url(${products})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 opacity-10  [background-size:16px_16px]"></div>
              <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-3">تسوق أحدث المنتجات العصرية</h1>
                <div className="flex justify-center items-center gap-2 text-sm text-gray-500 font-medium">
                  <a href="#" className="hover:text-cyan-500">الرئيسية</a>
                  <span className="text-gray-400">/</span>
                  <span className="text-cyan-600 font-bold">المنتج الواحد</span>
                </div>
              </div>
      </section>

      {/* 3. Product Details Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Right Side: Product Images */}
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 aspect-square max-h-[500px] flex items-center justify-center shadow-sm">
              <img 
                src={selectedImage}
                alt="Main Product"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {[selectedImage, selectedImage, selectedImage, selectedImage, selectedImage].map((thumb, thumbIndex) => (
                <div key={thumbIndex} className={`border-2 rounded-xl overflow-hidden aspect-square cursor-pointer bg-gray-50 hover:border-cyan-500 transition ${thumbIndex === 0 ? 'border-cyan-500' : 'border-gray-100'}`}>
                  <img 
                    src={thumb}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Side: Product Info */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800">{selectedTitle}</h2>
            
            {/* Prices & Rating */}
            <div className="flex items-center gap-6 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-cyan-600">1500 ج.م</span>
                <span className="text-sm text-gray-400 line-through">2000 ج.م</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 border-r pr-6 border-gray-200">
                <span className="text-amber-400 text-sm">⭐⭐⭐⭐⭐</span>
                <span>(10 تقييمات)</span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm text-gray-500 leading-relaxed">
              مثل هذا النص أو العديد من النصوص الأخرى، إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. يمكن استخدام هذا النص في معالجة وتصميم وتنسيق المساحات الرسومية المحددة.
            </p>

            {/* Options: Color */}
            <div className="space-y-2">
              <span className="text-sm font-bold text-gray-700 block">اللون :</span>
              <div className="flex gap-3">
                {['bg-blue-600', 'bg-slate-800', 'bg-rose-500'].map((color, idx) => (
                  <button key={idx} className={`w-8 h-8 rounded-full border-2 ${idx === 0 ? 'border-cyan-500 ring-2 ring-cyan-200' : 'border-transparent'} ${color}`}></button>
                ))}
              </div>
            </div>

            {/* Options: Weight / Size */}
            <div className="space-y-2">
              <span className="text-sm font-bold text-gray-700 block">الوزن :</span>
              <div className="flex gap-2">
                {['2 كيلو', '3 كيلو', '5 كيلو'].map((weight, idx) => (
                  <button key={idx} className={`border px-4 py-1.5 text-xs font-bold rounded-lg transition ${idx === 0 ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-gray-200 text-gray-600 hover:border-cyan-500'}`}>
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to List */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 hover:bg-gray-100 font-bold text-gray-600">+</button>
                <span className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border-x">{quantity}</span>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-gray-100 font-bold text-gray-600">-</button>
              </div>
              <button
                type="button"
                onClick={() => setIsFavorited((fav) => !fav)}
                className={`text-xs font-bold flex items-center gap-1.5 bg-gray-50 px-4 py-2.5 rounded-lg border border-gray-100 transition ${
                  isFavorited ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <span><FontAwesomeIcon icon={byPrefixAndName.fas['heart']} /></span> اضف للمفضلة
              </button>
            </div>

            {/* Purchase Action Button */}
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-cyan-100 transition duration-300 transform active:scale-[0.98]">
              اشتري الآن
            </button>

            {/* Social Share */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-500">شارك عبر مواقع التواصل:</span>
              <div className="flex gap-2 text-sm">
                <a href="#" className="w-10 h-10 rounded-full bg-cyan/20 text-cyan-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['twitter']} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue/20 text-blue-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-red/20 text-red-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['youtube']} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-green/20 text-green-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['whatsapp']} /></a>
                </div>
            </div>

          </div>
        </div>

        {/* 4. Tabs Section (Description, Specs, Reviews) */}
        <section className="mt-16 border-t border-gray-100 pt-8">
          <div className="flex justify-center gap-8 border-b border-gray-100 text-sm font-bold text-gray-500 mb-8">
            <button onClick={() => setActiveTab('description')} className={`pb-3 transition ${activeTab === 'description' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'hover:text-cyan-500'}`}>الوصف</button>
            <button onClick={() => setActiveTab('specs')} className={`pb-3 transition ${activeTab === 'specs' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'hover:text-cyan-500'}`}>معلومات إضافية</button>
            <button onClick={() => setActiveTab('reviews')} className={`pb-3 transition ${activeTab === 'reviews' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'hover:text-cyan-500'}`}>تقييمات المنتج</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Reviews List (Takes 2 Cols) */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-bold text-gray-800 text-base mb-4">{reviews.length} تقييمات</h3>
              {reviews.map((rev) => (
                <div key={rev.id} className="flex gap-4 p-4 border border-gray-50 rounded-xl bg-white shadow-sm">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-gray-800">{rev.name}</h4>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <div className="text-amber-400 text-xs">⭐⭐⭐⭐⭐</div>
                    <p className="text-xs text-gray-500 leading-relaxed pt-1">
                      {rev.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Review Form (Takes 1 Col) */}
            <div className="lg:col-span-1 bg-gray-50/70 border border-gray-100 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-gray-800 text-sm">اضف تقييم</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>تقييمك:</span>
                <span className="text-amber-400 text-sm cursor-pointer">⭐⭐⭐⭐⭐</span>
              </div>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!reviewForm.name.trim() || !reviewForm.message.trim()) return;

                  const newReview = {
                    id: Date.now(),
                    name: reviewForm.name.trim(),
                    date: 'الآن',
                    text: reviewForm.message.trim()
                  };

                  setReviews((prev) => [newReview, ...prev]);
                  setReviewForm({ name: '', message: '', email: '', phone: '' });
                }}
              >
                <input
                  type="text"
                  placeholder="اكتب الاسم هنا"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-cyan-500"
                />
                <textarea
                  rows="4"
                  placeholder="اكتب مراجعتك هنا"
                  value={reviewForm.message}
                  onChange={(e) => setReviewForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-cyan-500"
                ></textarea>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="text"
                    placeholder="رقم الهاتف"
                    value={reviewForm.phone}
                    onChange={(e) => setReviewForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold py-2.5 rounded-lg transition">
                  اضف الآن
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* 5. Bottom Section: Related Products */}
        <section className="border-t border-gray-100 mt-16 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-xl font-black text-gray-800 relative inline-block pb-2 after:content-[''] after:w-12 after:h-0.5 after:bg-cyan-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
              منتجات مشابهة
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {img.map((img,item) => (
              <div key={item} className="group border border-gray-100 rounded-xl p-3 bg-white hover:shadow-md transition text-right relative text-xs">
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-2 aspect-square">
                  <img 
                    src={img}
                    alt="Similar Product" 
                    className="w-full h-full object-cover  transition duration-300"
                  />
                </div>
                <div className="flex text-amber-400 text-[10px]">⭐⭐⭐⭐⭐</div>
                <h4 className="font-bold text-gray-700 truncate mt-1">بلوزة قطنية بيضاء كلاسيك</h4>
                <p className="text-cyan-600 font-extrabold mt-1">320 ج.م</p>
                <div className="flex gap-0.5 pt-1.5 text-[8px] text-gray-400">
                  {['XL', 'L', 'M', 'S'].map(s => <span key={s} className="border px-1 rounded">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 6. Footer Section */}
      <Footer />

    </div>
  );
}