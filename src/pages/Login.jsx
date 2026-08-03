// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import loginanas from "../assets/loginanas.png";
// import {
//   faFacebook, faWhatsapp, faYoutube, faTwitter
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function LoginPage() {
//   const byPrefixAndName = {
//       fab: {
//         'facebook': faFacebook,
//         'whatsapp': faWhatsapp,
//         'youtube': faYoutube,
//         'twitter': faTwitter
//       }
//     };
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login();
//     navigate('/hsign');
//   };

//   return (
//     <div className="min-h-screen w-full bg-white flex flex-col md:flex-row font-sans" dir="ltr">
      
//       {/* ================= النصف الأيسر: نموذج تسجيل الدخول ================= */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative order-2 md:order-1">
        
//         {/* اسم المتجر / اللوجو */}
//         <div className="mb-10 md:absolute md:top-12 md:right-24">
//           <h1 className="text-3xl font-black text-gray-900 tracking-wide">
//             Smart Shop
//           </h1>
//         </div>

//         {/* جسم النموذج وعناوين الترحيب */}
//         <div className="max-w-sm w-full mx-auto space-y-6">
//           <div className="space-y-1 text-right">
//             <h2 className="text-lg font-black text-gray-800">تسجيل الدخول</h2>
//             <p className="text-xs text-gray-400 font-medium">تسجيل الدخول للمتابعة في موقعنا</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* حقل البريد الإلكتروني */}
//             <div className="relative border-b border-gray-200 focus-within:border-[#48cae4] transition-colors py-1.5 flex items-center gap-3">
//               <span className="text-gray-300 text-sm">
//                 {/* أيقونة مغلف البريد الإلكتروني */}
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </span>
//               <input
//                 type="email"
//                 placeholder="البريد الالكتروني"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent text-xs text-gray-700 placeholder-gray-300 text-right focus:outline-none"
//                 required
//               />
//             </div>

//             {/* حقل كلمة المرور */}
//             <div className="relative border-b border-gray-200 focus-within:border-[#48cae4] transition-colors py-1.5 flex items-center gap-3">
//               <span className="text-gray-300 text-sm">
//                 {/* أيقونة القفل */}
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input
//                 type="password"
//                 placeholder="كلمة المرور"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent text-xs text-gray-700 placeholder-gray-300 text-right focus:outline-none"
//                 required
//               />
//             </div>

//             {/* روابط مساعدة وزر تسجيل الدخول */}
//             <div className="flex justify-between items-center pt-2">
//               <button type="button" className="text-[11px] font-bold text-[#48cae4] hover:underline">
//                 هل نسيت كلمة المرور؟
//               </button>
              
//               <button
//                 type="submit"
//                 className="bg-[#48cae4] text-white font-black text-xs px-8 py-2.5 rounded-xl shadow-md shadow-cyan-100 hover:bg-cyan-500 transition active:scale-95"
//               >
//                 تسجيل الدخول
//               </button>
//             </div>
//           </form>

//           {/* خيارات التسجيل الاجتماعي السفلي */}
//           <div className="pt-8 space-y-4 text-center">
//             <p className="text-xs font-black text-gray-800">او سجل الدخول عبر:</p>
//             <div className="flex justify-center items-center gap-3">
              
//             <a href="#" className="w-10 h-10 rounded-full bg-cyan/20 text-cyan-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['twitter']} /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-blue/20 text-blue-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-red/20 text-red-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['youtube']} /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-green/20 text-green-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['whatsapp']} /></a>

//             </div>
//           </div>
//         </div>

//         {/* أيقونة النجمة الديكورية في الركن السفلي */}
//         <div className="absolute bottom-6 right-6 text-gray-200 text-xl select-none">✦</div>
//       </div>

//       {/* ================= النصف الأيمن: الخلفية وعناصر التبديل الجانبية ================= */}
//       <div className="w-full md:w-1/2 min-h-[300px] md:min-h-screen bg-gray-100 relative order-1 md:order-2 overflow-hidden flex items-center justify-center">
        
//         {/* صورة عارض الأزياء المعبأة بالكامل */}
//         <img 
//           src={loginanas}
//           alt="Smart Shop Fashion" 
//           className="absolute inset-0 w-full h-full object-cover grayscale-[10%] brightness-95"
//         />

//         {/* أزرار التبديل الطائرة المثبتة على الحافة المشتركة (تظهر بوضوح على الشاشات الكبيرة) */}
//         <div className="absolute -left-1 flex flex-col gap-2 z-20">
          
//           {/* زر تسجيل الدخول (النشط) */}
//           <button className="bg-[#48cae4] text-white font-black text-xs py-2.5 px-5 rounded-r-xl shadow-md transition-transform transform hover:translate-x-1">
//             تسجيل الدخول
//           </button>
          
//           {/* زر إنشاء حساب */}
//           <Link
//             to="/signup"
//             className="bg-white text-gray-700 font-bold text-xs py-2.5 px-5 rounded-r-xl border border-l-0 border-gray-100 shadow-sm transition-transform transform hover:translate-x-1 text-center"
//           >
//             انشاء حساب
//           </Link>
          
//         </div>

//         {/* تأثير تدرج داكن خفيف لتأمين وضوح الأزرار إذا لزم الأمر */}
//         <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
//       </div>

//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loginanas from "../assets/loginanas.png";
import {
  faFacebook, faWhatsapp, faYoutube, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LoginPage() {
  const byPrefixAndName = {
    fab: {
      'facebook': faFacebook,
      'whatsapp': faWhatsapp,
      'youtube': faYoutube,
      'twitter': faTwitter
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // حالة لحفظ الأخطاء
  const [loading, setLoading] = useState(false); // حالة لمنع الضغط المتكرر أثناء التحميل
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // تمرير البيانات الفوقية لدالة الـ login المربوطة بـ Firebase
      await login(email, password);
      navigate('/hsign'); // التوجيه للصفحة التالية عند نجاح العملية
    } catch (err) {
      // معالجة وإظهار الأخطاء باللغة العربية بناءً على استجابة Firebase
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
      } else if (err.code === 'auth/invalid-email') {
        setError('صيغة البريد الإلكتروني غير صحيحة.');
      } else {
        setError('فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row font-sans" dir="ltr">
      
      {/* ================= النصف الأيسر: نموذج تسجيل الدخول ================= */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative order-2 md:order-1">
        
        {/* اسم المتجر / اللوجو */}
        <div className="mb-10 md:absolute md:top-12 md:right-24">
          <h1 className="text-3xl font-black text-gray-900 tracking-wide">
            Smart Shop
          </h1>
        </div>

        {/* جسم النموذج وعناوين الترحيب */}
        <div className="max-w-sm w-full mx-auto space-y-6">
          <div className="space-y-1 text-right">
            <h2 className="text-lg font-black text-gray-800">تسجيل الدخول</h2>
            <p className="text-xs text-gray-400 font-medium">تسجيل الدخول للمتابعة في موقعنا</p>
          </div>

          {/* عرض رسالة الخطأ إذا وُجدت */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs text-right border border-red-100 font-medium">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* حقل البريد الإلكتروني */}
            <div className="relative border-b border-gray-200 focus-within:border-[#48cae4] transition-colors py-1.5 flex items-center gap-3">
              <span className="text-gray-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-700 placeholder-gray-300 text-right focus:outline-none"
                required
              />
            </div>

            {/* حقل كلمة المرور */}
            <div className="relative border-b border-gray-200 focus-within:border-[#48cae4] transition-colors py-1.5 flex items-center gap-3">
              <span className="text-gray-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-700 placeholder-gray-300 text-right focus:outline-none"
                required
              />
            </div>

            {/* روابط مساعدة وزر تسجيل الدخول */}
            <div className="flex justify-between items-center pt-2">
              <button type="button" className="text-[11px] font-bold text-[#48cae4] hover:underline">
                هل نسيت كلمة المرور؟
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="bg-[#48cae4] text-white font-black text-xs px-8 py-2.5 rounded-xl shadow-md shadow-cyan-100 hover:bg-cyan-500 transition active:scale-95 disabled:opacity-50"
              >
                {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
              </button>
            </div>
          </form>

          {/* خيارات التسجيل الاجتماعي السفلي */}
          <div className="pt-8 space-y-4 text-center">
            <p className="text-xs font-black text-gray-800">او سجل الدخول عبر:</p>
            <div className="flex justify-center items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-cyan/20 text-cyan-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['twitter']} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue/20 text-blue-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-red/20 text-red-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['youtube']} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-green/20 text-green-900 flex items-center justify-center hover:bg-white/40 transition"><FontAwesomeIcon icon={byPrefixAndName.fab['whatsapp']} /></a>
            </div>
          </div>
        </div>

        {/* أيقونة النجمة الديكورية في الركن السفلي */}
        <div className="absolute bottom-6 right-6 text-gray-200 text-xl select-none">✦</div>
      </div>

      {/* ================= النصف الأيمن: الخلفية وعناصر التبديل الجانبية ================= */}
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-screen bg-gray-100 relative order-1 md:order-2 overflow-hidden flex items-center justify-center">
        <img 
          src={loginanas}
          alt="Smart Shop Fashion" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[10%] brightness-95"
        />

        <div className="absolute -left-1 flex flex-col gap-2 z-20">
          <button className="bg-[#48cae4] text-white font-black text-xs py-2.5 px-5 rounded-r-xl shadow-md transition-transform transform hover:translate-x-1">
            تسجيل الدخول
          </button>
          
          <Link
            to="/signup"
            className="bg-white text-gray-700 font-bold text-xs py-2.5 px-5 rounded-r-xl border border-l-0 border-gray-100 shadow-sm transition-transform transform hover:translate-x-1 text-center"
          >
            انشاء حساب
          </Link>
        </div>

        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      </div>

    </div>
  );
}