import { createContext,  useState, useEffect } from 'react';
import { auth } from '../firebase'; // استدعاء ملف الإعدادات
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // دالة تسجيل الدخول
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // دالة إنشاء حساب جديد
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, signup }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// export const useAuth = () => useContext(AuthContext);