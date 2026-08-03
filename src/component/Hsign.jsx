import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function UserProfileMenu() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const displayName = currentUser?.displayName || currentUser?.email?.split('@')[0] || 'المستخدم';
  const email = currentUser?.email || 'لا يوجد بريد مسجل';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('فشل تسجيل الخروج:', error);
    }
  };

  return (
    <div className="max-w-[320px] mx-auto bg-white rounded-2xl shadow-xl shadow-gray-100/70 p-5 font-sans text-right relative overflow-hidden" dir="rtl">
      
      {/* 1. جزء الحساب (Header) */}
      <div className="flex items-center gap-3 pb-4">
        
        {/* الأيقونة الشخصية (Avatar) باللون الأسود كما بالصورة */}
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        {/* الاسم والبريد الإلكتروني */}
        <div className="space-y-0.5 overflow-hidden">
          <h3 className="font-bold text-gray-800 text-sm">مرحبا {displayName}</h3>
          <p className="text-[11px] text-gray-400 font-medium truncate tracking-wide">
            {email}
          </p>
        </div>

      </div>

      {/* خط فاصل رمادي خفيف */}
      <hr className="border-gray-100 my-2" />

      {/* 2. قائمة عناصر التحكم (Navigation Links) */}
      <div className="space-y-1 pt-2">
        
        {/* العنصر الأول: لوحة التحكم */}
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center justify-between py-3.5 px-3 rounded-lg font-bold text-sm transition relative ${
            activeTab === 'dashboard' ? 'text-[#48cae4]' : 'text-gray-800 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* أيقونة لوحة التحكم (Grid Layout Icon) */}
            <svg className={`w-5 h-5 ${activeTab === 'dashboard' ? 'text-[#48cae4]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
            </svg>
            <span>لوحة التحكم</span>
          </div>
          {/* الخط الأزرق الجانبي عند النشاط */}
          {activeTab === 'dashboard' && <span className="absolute right-0 top-1/4 h-1/2 w-1 bg-[#48cae4] rounded-l"></span>}
        </button>

        {/* العنصر الثاني: تفاصيل الحساب */}
        <button
          onClick={() => setActiveTab('account-details')}
          className={`w-full flex items-center justify-between py-3.5 px-3 rounded-lg font-bold text-sm transition relative ${
            activeTab === 'account-details' ? 'text-[#48cae4]' : 'text-gray-800 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* أيقونة تفاصيل الحساب (User ID Icon) */}
            <svg className={`w-5 h-5 ${activeTab === 'account-details' ? 'text-[#48cae4]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a3 3 0 100-6 3 3 0 000 6zm6-3h2m0 2h-2" />
            </svg>
            <span>تفاصيل الحساب</span>
          </div>
          {/* الخط الأزرق الجانبي عند النشاط */}
          {activeTab === 'account-details' && <span className="absolute right-0 top-1/4 h-1/2 w-1 bg-[#48cae4] rounded-l"></span>}
        </button>

        {/* العنصر الثالث: تسجيل الخروج */}
        <button
          onClick={() => setActiveTab('logout')}
          className={`w-full flex items-center justify-between py-3.5 px-3 rounded-lg font-bold text-sm transition relative ${
            activeTab === 'logout' ? 'text-red-500' : 'text-gray-800 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* أيقونة تسجيل الخروج (Logout/Exit Icon) */}
            <svg className={`w-5 h-5 ${activeTab === 'logout' ? 'text-red-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>تسجيل الخروج</span>
          </div>
          {/* الخط الجانبي عند اختيار تسجيل الخروج */}
          {activeTab === 'logout' && <span className="absolute right-0 top-1/4 h-1/2 w-1 bg-red-500 rounded-l"></span>}
        </button>

      </div>

      <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm text-gray-700">
        <button
          onClick={() => navigate('/')}
          className="mb-3 w-full rounded-lg bg-cyan-500 px-3 py-2 text-sm font-bold text-white transition hover:bg-cyan-600"
        >
          العودة إلى الصفحة الرئيسية
        </button>

        {activeTab === 'dashboard' && (
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">أهلاً بك مرة أخرى</p>
            <p className="text-xs text-gray-500">يمكنك إدارة حسابك من هنا.</p>
          </div>
        )}

        {activeTab === 'account-details' && (
          <div className="space-y-2 text-right">
            <p className="font-semibold text-gray-800">تفاصيل الحساب</p>
            <div className="text-xs text-gray-600 space-y-1">
              <p><span className="font-semibold">الاسم:</span> {displayName}</p>
              <p><span className="font-semibold">البريد:</span> {email}</p>
              <p><span className="font-semibold">الحالة:</span> مسجل الدخول</p>
            </div>
          </div>
        )}

        {activeTab === 'logout' && (
          <div className="space-y-3 text-right">
            <p className="font-semibold text-gray-800">هل تريد تسجيل الخروج؟</p>
            <button
              onClick={handleLogout}
              className="w-full rounded-lg bg-red-500 px-3 py-2 text-sm font-bold text-white transition hover:bg-red-600"
            >
              تسجيل الخروج
            </button>
          </div>
        )}
      </div>
    </div>
  );
}