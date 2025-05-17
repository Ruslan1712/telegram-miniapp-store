import React from "react";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    price: "139 990 ₽",
    image: "https://re-store.ru/upload/resize_cache/iblock/e3f/500_500_140cd750bba9870f18aada2478b24840a/e3fcd18e0134f1eb8e9464a2a08d4f3c.png"
  },
  {
    id: 2,
    title: "iPhone 14",
    price: "94 990 ₽",
    image: "https://re-store.ru/upload/resize_cache/iblock/185/500_500_140cd750bba9870f18aada2478b24840a/18579a701e9175f3b108d1a6ab1d52a1.png"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">
        Магазин техники
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-xl p-4 shadow">
            <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-2" />
            <h2 className="text-sm font-semibold text-black">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.price}</p>
            <button className="w-full bg-pink-500 text-white text-sm py-1 rounded-md">
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
