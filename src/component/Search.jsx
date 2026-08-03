import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOverlay() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("جاري البحث عن:", searchQuery);
    // هنا يمكنكِ وضع دالة التوجيه لصفحة نتائج البحث لاحقاً
  };

  return (
    <div 
      className="fixed inset-0 bg-[#8ecae6] z-[9999] flex flex-col justify-center items-center px-6 sm:px-16 lg:px-32 font-sans text-right" 
      dir="rtl"
    >
      
      {/* زر الإغلاق (X) في أعلى اليسار للخروج من وضع البحث */}
      <button 
      onClick={() => navigate('/')}
      >
        ✕
      </button>

      {/* نموذج البحث الممتد */}
      <form onSubmit={handleSearchSubmit} className="w-full max-w-7xl space-y-4">
        
        {/* النص الترحيبي العُلوي */}
        <div className="text-gray-800 text-sm md:text-base font-bold tracking-wide pl-2 select-none">
          عن ماذا تبحث ؟
        </div>

        {/* حقل الإدخال مع الخط السفلي الممتد وأيقونة العدسة */}
        <div className="relative border-b-2 border-white/60 focus-within:border-white transition-colors pb-3 flex items-center justify-between gap-4">
          
          {/* حقل الكتابة */}
          <input
            type="text"
            placeholder="اكتب كلمة للبحث......"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white text-lg md:text-2xl font-medium placeholder-white/50 text-right focus:outline-none"
            autoFocus
          />

          {/* أيقونة العدسة (البحث) على اليسار تماماً كما في التصميم */}
          <button 
            type="submit" 
            className="text-white hover:scale-110 transition-transform duration-200 p-1 flex items-center justify-center flex-shrink-0"
          >
            <svg 
              className="w-6 h-6 md:w-7 md:h-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>

        </div>

      </form>

    </div>
  );
}