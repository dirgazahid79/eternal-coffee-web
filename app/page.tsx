export default function Home() {
  const menuCategories = [
    {
      title: "The Basics (Coffee)",
      items: [
        { name: "Latte", price: "23K / 25K / 30K" },
        { name: "Cappuccino", price: "25K / 27K / 32K" },
        { name: "Double Shot Iced Shaken", price: "27K" },
        { name: "Caffe Mocha", price: "29K / 33K" },
        { name: "Americano", price: "17K / 17K / 22K" },
        { name: "Piccolo", price: "27K" },
      ],
    },
    {
      title: "The Flavored",
      items: [
        { name: "Vanilla / Caramel / Hazelnut Latte", price: "27K / 28K / 36K" },
        { name: "Spanish Latte", price: "27K / 35K" },
        { name: "★ Pandan Latte", price: "27K / 35K" },
        { name: "★ Classic Aren Latte", price: "20K / 26K" },
        { name: "Mild Aren Latte", price: "20K / 26K" },
        { name: "★ Salted Caramel Latte", price: "29K / 37K" },
        { name: "Creme Brulee Latte", price: "29K / 37K" },
        { name: "Baileys Latte", price: "30K / 38K" },
        { name: "Nutella Latte", price: "35K / 45K" },
        { name: "★ Biscoff Latte", price: "33K / 42K" },
        { name: "★ Avocado Coffee", price: "35K / 45K" },
        { name: "Tiramisu Latte", price: "35K / 45K" },
      ],
    },
    {
      title: "Non Coffee",
      items: [
        { name: "Matcha Latte", price: "27K / 28K / 35K" },
        { name: "★ Signature Ceremonial Matcha", price: "47K" },
        { name: "Hojicha Latte", price: "29K / 30K / 38K" },
        { name: "Chocolate", price: "26K / 27K / 35K" },
        { name: "Red Velvet Latte", price: "27K / 28K / 36K" },
        { name: "Eternal Milk Tea", price: "20K / 25K" },
        { name: "Rum Regal Latte", price: "28K / 36K" },
        { name: "★ Avocado Latte", price: "29K / 37K" },
        { name: "Mint Choco", price: "30K / 39K" },
        { name: "★ Cookies N Cream", price: "33K / 42K" },
        { name: "★ Biscoff Bomb", price: "33K / 42K" },
        { name: "★ Coco & Hazel", price: "33K / 42K" },
        { name: "The OG Fresh Milk", price: "25K / 31K" },
      ],
    },
    {
      title: "Mocktail",
      items: [
        { name: "★ Reddish Pit", price: "25K / 30K" },
        { name: "Minty Forest", price: "29K / 36K" },
        { name: "Fly To The Sky", price: "29K / 36K" },
        { name: "★ Watermelon Breeze", price: "33K" },
        { name: "Triple Peach", price: "27K" },
      ],
    },
    {
      title: "Tea & Others",
      items: [
        { name: "Tea", price: "16K / 18K / 21K" },
        { name: "Lemon Tea", price: "20K / 22K / 27K" },
        { name: "Peach / Strawberry Tea", price: "22K / 27K" },
        { name: "Lychee Tea", price: "24K / 29K" },
        { name: "★ Rosy Mint", price: "24K / 29K" },
        { name: "Bottled Mineral Water", price: "11K" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* NAVBAR SECTION */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200 top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-stone-900 cursor-pointer">
            <a href="#beranda">ETERNAL<span className="text-amber-600">.</span></a>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600 tracking-wide">
            <a href="#beranda" className="hover:text-amber-600 transition-colors">BERANDA</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">MENU</a>
            <a href="#fasilitas" className="hover:text-amber-600 transition-colors">FASILITAS</a>
          </div>
        </div>
      </nav>

      {/* HERO / BERANDA SECTION */}
      <section 
        id="beranda" 
        className="relative pt-44 pb-32 px-6 text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/kafe.jpg')` 
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            ETERNAL<span className="text-amber-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-200">
            Lebih Dari <span className="text-amber-400 font-semibold">Sekadar Kopi.</span>
          </p>
          <p className="mt-4 text-stone-300 max-w-lg mx-auto mb-10 leading-relaxed">
            Ruang nyaman untuk setiap inspirasimu. Nikmati perpaduan sempurna antara kopi pilihan dan ruang produktif untuk menemani hari-harimu.
          </p>

          {/* Tombol Google Maps dengan Warna Signature Coklat Kopi */}
          <div>
            <a 
              href="https://maps.google.com/?q=Ruko+Maxwell+Gading+Serpong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#8D5B4C] hover:bg-[#73473C] text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105 border border-[#A47164]"
            >
              📍 Buka Lokasi di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-stone-900">Our Menu</h2>
          <p className="text-stone-500 mt-2">Harga tertera untuk ukuran Hot / Ice / Large (sesuai ketersediaan)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:border-amber-400 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-[#8D5B4C] border-b border-stone-100 pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-stone-50 pb-2 last:border-0">
                    <span className={`font-medium ${item.name.includes('★') ? 'text-amber-900 font-bold' : 'text-stone-700'}`}>
                      {item.name}
                    </span>
                    <span className="text-stone-500 text-sm ml-4 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section id="fasilitas" className="bg-white py-20 px-6 border-y border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-stone-900">Fasilitas Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">🔌</div>
              <div className="font-medium text-stone-800">Colokan Tersedia</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">📶</div>
              <div className="font-medium text-stone-800">WiFi Super Cepat</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">❄️</div>
              <div className="font-medium text-stone-800">Full AC</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">🛋️</div>
              <div className="font-medium text-stone-800">Tempat Nyaman</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">💨</div>
              <div className="font-medium text-stone-800">Indoor Smoking</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="text-3xl mb-3">🏛️</div>
              <div className="font-medium text-stone-800">Restaurant Lt. 2</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="font-bold text-2xl text-white mb-2 tracking-tighter">ETERNAL<span className="text-amber-500">.</span></div>
        <p className="mb-2">Ruko Maxwell, Gading Serpong</p>
        <p className="mb-6">Buka 24 Jam</p>
        
        {/* Link & Logo Instagram */}
        <div className="mb-6">
          <a 
            href="https://www.instagram.com/eternalcoffee.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-stone-300 hover:text-amber-400 transition-colors bg-stone-800 px-5 py-2.5 rounded-full border border-stone-700"
          >
            <svg className="w-5 h-5 fill-current text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-medium">@eternalcoffee.id</span>
          </a>
        </div>

        <p className="text-sm text-stone-500">&copy; 2026 Eternal Caffe & Gelato. All rights reserved.</p>
      </footer>
    </main>
  );
}