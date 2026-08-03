import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 3, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 4, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 5, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 6, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
    { id: 7, name: 'جاكت جلد أسود', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => navigate('/')} />
      <div className="fixed inset-x-0 top-8 mx-auto w-full max-w-md px-4 z-50">
        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 max-h-[calc(100vh-4rem)] overflow-hidden flex flex-col font-sans text-right" dir="rtl">
          <div className="p-4 border-b border-gray-100 flex justify-end items-center bg-white">
            <button
              onClick={() => navigate('/')}
              className="text-gray-800 hover:text-black font-black text-xl p-2 transition"
            >
              ✕
            </button>
          </div>

          <div className="divide-y divide-gray-100 flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 text-gray-400 space-y-2">
                <span className="text-4xl block">🛒</span>
                <p className="text-sm">السلة فارغة حالياً</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between gap-4 bg-white hover:bg-gray-50/50 transition">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-black hover:text-red-500 font-bold text-base transition px-2"
                  >
                    X
                  </button>

                  <div className="flex items-center border border-cyan-100 rounded bg-cyan-50/30 h-8 overflow-hidden">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2.5 py-1 text-cyan-600 font-bold hover:bg-cyan-100/50 transition"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold text-gray-700 h-full flex items-center bg-white border-x border-cyan-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2.5 py-1 text-cyan-600 font-bold hover:bg-cyan-100/50 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex-grow space-y-0.5 text-right">
                    <h3 className="text-sm font-bold text-gray-800 tracking-wide">{item.name}</h3>
                    <div className="text-xs text-cyan-500 font-medium">
                      {item.price * item.quantity}
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="bg-[#48cae4] p-5 flex items-center justify-between gap-4 sticky bottom-0 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
              <button className="bg-white hover:bg-gray-50 text-black font-black text-sm px-8 py-2 rounded shadow-sm transition active:scale-95">
                ادفع
              </button>
              <div className="text-white text-right font-bold text-base flex items-center gap-1.5">
                <span>المجموع :</span>
                <span className="text-lg font-black">{totalPrice} جنية</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
