import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../component/Footer';
import Header from '../component/Header';
import products from "../assets/products.png"; 
import w1 from "../assets/w1.png";
import img1 from "../assets/img1.png";
import c5 from "../assets/c5.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import child from "../assets/child.png";

export default function Cartbasket() {

  const byPrefixAndName = {
    fas: {
      'heart': faHeart
    }
  };
  // 1. بيانات المنتجات داخل السلة بناءً على التصميم المرفق
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'فستان أبيض عصري', color: 'أبيض', weight: '2 كيلو', price: 2500, quantity: 1, image:w1 },
    { id: 2, name: 'فستان أبيض عصري', color: 'أبيض', weight: '2 كيلو', price: 2500, quantity: 1, image:w1 },
    { id: 3, name: 'فستان أبيض عصري', color: 'أبيض', weight: '2 كيلو', price: 2500, quantity: 1, image:w1 },
    { id: 4, name: 'فستان أبيض عصري', color: 'أبيض', weight: '2 كيلو', price: 2500, quantity: 1, image:w1 },
  ]);

  // 2. بيانات قسم المنتجات المشابهة في الأسفل
  const similarProducts = [
    { id: 101, name: 'بلوزة قطنية بيضاء', price: 800, oldPrice: 900, rating: 5, sizes: ['XS', 'S', 'M', 'L', 'XL'], image: img1 },
    { id: 102, name: 'بلوزة قطنية بيضاء', price: 800, oldPrice: 900, rating: 5, sizes: ['XS', 'S', 'M', 'L', 'XL'], image: c5 },
    { id: 103, name: 'بلوزة قطنية بيضاء', price: 800, oldPrice: 900, rating: 5, sizes: ['XS', 'S', 'M', 'L', 'XL'], image: m3 },
    { id: 104, name: 'بلوزة قطنية بيضاء', price: 800, oldPrice: 900, rating: 5, sizes: ['XS', 'S', 'M', 'L', 'XL'], image: m4 },
    { id: 105, name: 'بلوزة قطنية بيضاء', price: 800, oldPrice: 900, rating: 5, sizes: ['XS', 'S', 'M', 'L', 'XL'], image: child },
  ];

  // دوال التحكم بالكمية والحذف
  const increaseQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // حساب الإجمالي
  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      
      <Header />
      <section className=" py-16 text-center relative overflow-hidden" style={{ backgroundImage: `url(${products})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 opacity-10  [background-size:16px_16px]"></div>
              <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-3">تسوق أحدث المنتجات العصرية</h1>
                <div className="flex justify-center items-center gap-2 text-sm text-gray-500 font-medium">
                  <a href="#" className="hover:text-cyan-500">الرئيسية</a>
                  <span className="text-gray-400">/</span>
                  <span className="text-cyan-600 font-bold">السلة</span>
                </div>
              </div>
            </section>

      {/* ====== 3. محتوى السلة الرئيسي (Main Content) ====== */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-black text-gray-800 mb-6">سلة التسوق</h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold mb-4">سلة المشتريات فارغة حالياً</p>
            <button className="bg-[#48cae4] text-white font-bold text-xs px-6 py-2.5 rounded-xl">تصفح المنتجات</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* أ) جدول وجسم المنتجات (يمين الشاشة) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 overflow-x-auto">
                <table className="w-full min-w-[600px] text-right border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-bold text-xs">
                      <th className="pb-3 pt-1 w-[40%]">المنتج</th>
                      <th className="pb-3 pt-1">السعر</th>
                      <th className="pb-3 pt-1 text-center">الكمية</th>
                      <th className="pb-3 pt-1">المجموع</th>
                      <th className="pb-3 pt-1 w-8"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="group hover:bg-gray-50/30 transition">
                        {/* تفاصيل المنتج والصورة */}
                        <td className="py-4 flex items-center gap-4">
                          <div className="w-16 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-bold text-gray-800 text-xs tracking-wide">{item.name}</h4>
                            <p className="text-[11px] text-gray-400 font-medium">اللون: {item.color}</p>
                            <p className="text-[11px] text-gray-400 font-medium">الوزن: {item.weight}</p>
                          </div>
                        </td>
                        {/* السعر المفرد */}
                        <td className="py-4 text-xs font-bold text-gray-700">
                          {item.price} ج.م
                        </td>
                        {/* متحكم الكمية */}
                        <td className="py-4">
                          <div className="flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50/50 w-24 h-8 mx-auto overflow-hidden">
                            <button onClick={() => increaseQty(item.id)} className="px-2.5 hover:bg-gray-200 text-gray-500 font-bold transition">+</button>
                            <span className="flex-grow text-center text-xs font-bold text-gray-700 bg-white h-full flex items-center justify-center border-x">{item.quantity}</span>
                            <button onClick={() => decreaseQty(item.id)} className="px-2.5 hover:bg-gray-200 text-gray-500 font-bold transition">-</button>
                          </div>
                        </td>
                        {/* الإجمالي للمنتج */}
                        <td className="py-4 text-xs font-black text-gray-800">
                          {item.price * item.quantity} ج.م
                        </td>
                        {/* زر الحذف X */}
                        <td className="py-4 text-center">
                          <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 font-bold text-sm transition px-1">
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* أزرار مسح السلة ومواصلة التسوق أسفل الجدول */}
              <div className="flex justify-between items-center px-2">
                <button onClick={clearCart} className="text-xs font-bold text-gray-400 hover:text-red-500 transition">
                  مسح السلة
                </button>
                <button className="text-xs font-bold text-[#48cae4] hover:underline transition">
                  واصل التسوق
                </button>
              </div>
            </div>

            {/* ب) قسم تفاصيل الحساب والكوبون (يسار الشاشة) */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xl space-y-5">
              
              {/* حقل الكوبون */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700">الكوبون</label>
                <p className="text-[11px] text-gray-400 font-medium">أدخل رمز الكوبون الخاص بك إذا كان لديك واحد.</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="رمز الكوبون" className="flex-grow border border-gray-200 rounded-xl px-3 py-2 text-xs text-right focus:outline-none focus:border-[#48cae4]" />
                  <button className="bg-[#48cae4] text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-cyan-500 transition">تأكيد الكوبون</button>
                </div>
              </div>

              {/* حقل الملحوظة */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700">ملحوظة</label>
                <p className="text-[11px] text-gray-400 font-medium">إضافة ملحوظة للبائع</p>
                <textarea rows="3" placeholder="أكتب ملحوظتك هنا..." className="w-full border border-gray-200 rounded-xl p-3 text-xs text-right focus:outline-none focus:border-[#48cae4] resize-none"></textarea>
              </div>

              {/* مجاميع الحساب المالي */}
              <div className="border-t border-gray-100 pt-4 space-y-2.5">
                <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                  <span>المجموع الفرعي</span>
                  <span>{subTotal} ج.م</span>
                </div>
                <div className="flex justify-between items-center text-xs font-black text-gray-800">
                  <span>المجموع الإجمالي</span>
                  <span>{subTotal} ج.م</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium pt-1">الشحن والضرائب محسوبة عند الدفع</p>
              </div>

              {/* أزرار الدفع والتحديث */}
              <div className="space-y-2 pt-2">
                <button className="w-full bg-[#48cae4] text-white font-black text-xs py-3 rounded-xl hover:bg-cyan-500 shadow-md shadow-cyan-100 transition active:scale-95">
                  الدفع
                </button>
                <button className="w-full border border-[#48cae4] text-[#48cae4] font-bold text-xs py-3 rounded-xl hover:bg-cyan-50/50 transition">
                  تحديث السلة
                </button>
              </div>

            </div>

          </div>
        )}
      </main>

      {/* ====== 4. قسم منتجات مشابهة (Similar Products) ====== */}
      <section className="container mx-auto px-4 py-12 border-t border-gray-50">
        <h3 className="text-center font-black text-gray-800 text-base mb-8 tracking-wide">منتجات مشابهة</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {similarProducts.map((product) => (
            <div key={product.id} className="border border-gray-100 rounded-2xl p-3 bg-white hover:shadow-lg hover:shadow-gray-100/50 transition duration-300 relative group flex flex-col justify-between">
              
              {/* أيقونة المفضلة (قلب) فوق كارت المنتج */}
              <button className="absolute top-5 left-5 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-300 shadow-sm hover:text-red-500 transition text-xs">
                <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} />
              </button>

              {/* صورة المنتج */}
              <div className="w-full h-60 rounded-xl overflow-hidden bg-gray-50 mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500" />
              </div>

              {/* بيانات المسمى والسعر والتقييم */}
              <div className="space-y-1 text-right flex-grow flex flex-col justify-end">
                <div className="flex justify-start text-[10px] text-amber-400">
                  {'★'.repeat(product.rating)}
                </div>
                <h4 className="font-bold text-gray-700 text-xs truncate">{product.name}</h4>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="text-[#48cae4] font-black text-xs">{product.price} ج.م</span>
                  <span className="text-gray-300 line-through text-[10px] font-bold">{product.oldPrice} ج.م</span>
                </div>
                
                {/* مقاسات المنتج */}
                <div className="flex flex-row-reverse justify-end gap-1 pt-1.5">
                  {product.sizes.map((size, idx) => (
                    <span key={idx} className={`text-[9px] font-bold w-4 h-4 rounded border flex items-center justify-center ${idx === 0 ? 'bg-[#48cae4] text-white border-[#48cae4]' : 'text-gray-400 border-gray-200'}`}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}