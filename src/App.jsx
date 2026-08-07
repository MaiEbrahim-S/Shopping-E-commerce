import './App.css'
import Home from './pages/Home'
import ProductsPage from './pages/Products'
import Cartbasket from './pages/Cartbasket'
import ProfileRouter from './pages/ProfileRouter'
import Flog from './component/Flog'
import Hsign from './component/Hsign'
import Cardthis from './component/Cardthis'
import SearchOverlay from './component/Search'
import LoginPage from './pages/Login'
import Signup from './pages/Signup'
import ProductDetailsPage from './pages/Product'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

function AppRoutes() {
  const location = useLocation()
  const isCardThisOpen = location.pathname === '/cardthis'

  return (
    <>
      <Routes location={isCardThisOpen ? { pathname: '/' } : location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cartbasket />} />
        <Route path="/search" element={<SearchOverlay />} />
        <Route path="/profile" element={<ProfileRouter />} />
        <Route path="/flog" element={<Flog />} />
        <Route path="/hsign" element={<Hsign />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {isCardThisOpen && <Cardthis />}
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/Shopping-E-commerce/">
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

