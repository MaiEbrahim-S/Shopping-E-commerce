import { Link } from 'react-router-dom'

export default function AuthMenu() {
  return (
    <div className="max-w-[260px] mx-auto bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-3 font-sans text-right relative overflow-hidden" dir="rtl">
      <div className="space-y-0.5">
        
        {/* 1. خيار: تسجيل الدخول */}
        <Link
          to="/login"
          className="w-full flex items-center justify-start py-3 px-4 text-[#48cae4] font-bold text-sm relative group rounded-xl bg-cyan-50 hover:bg-cyan-100 transition"
        >
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#48cae4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[13px]">تسجيل الدخول</span>
          </div>
          <span className="absolute right-0 top-1/4 h-1/2 w-[3px] bg-[#48cae4] rounded-l"></span>
        </Link>

        {/* 2. خيار: تسجيل جديد */}
        <Link
          to="/signup"
          className="w-full flex items-center justify-start py-3 px-4 text-gray-700 hover:bg-gray-50/50 font-bold text-sm rounded-xl transition"
        >
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[13px]">تسجيل جديد</span>
          </div>
        </Link>

      </div>
    </div>
  )
}
