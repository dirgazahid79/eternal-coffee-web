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
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200 top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-stone-900 cursor-pointer">
            <a href="#beranda">ETERNAL.</a>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600 tracking-wide">
            <a href="#beranda" className="hover:text-amber-600 transition-colors">BERANDA</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">MENU</a>
            <a href="#fasilitas" className="hover:text-amber-600 transition-colors">FASILITAS</a>
            <a href="#lokasi" className="hover:text-amber-600 transition-colors">LOKASI</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="bg-stone-900 text-stone-50 pt-36 pb-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
          ETERNAL.
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-stone-300">
          Lebih Dari <span className="text-amber-500 font-semibold">Sekadar Kopi.</span>
        </p>
        <p className="mt-4 text-stone-400 max-w-lg mx-auto">
          Ruang nyaman untuk setiap inspirasimu. Nikmati perpaduan sempurna antara kopi pilihan dan ruang produktif untuk menemani hari-harimu.
        </p>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-stone-900">Our Menu</h2>
          <p className="text-stone-500 mt-2">Harga tertera untuk ukuran Hot / Ice / Large (sesuai ketersediaan)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold mb-6 text-amber-600 border-b pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-stone-50 pb-2 last:border-0">
                    <span className={`font-medium ${item.name.includes('★') ? 'text-stone-900 font-bold' : 'text-stone-700'}`}>
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
      <section id="fasilitas" className="bg-white py-20 px-6 border-y border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Fasilitas Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔌</div>
              <div className="font-medium">Colokan Tersedia</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📶</div>
              <div className="font-medium">WiFi Super Cepat</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">❄️</div>
              <div className="font-medium">Full AC</div>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🛋️</div>
              <div className="font-medium">Tempat Nyaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / LOKASI SECTION */}
      <footer id="lokasi" className="bg-stone-900 text-stone-400 py-16 text-center">
        <div className="font-bold text-2xl text-white mb-4 tracking-tighter">ETERNAL.</div>
        <p className="mb-2 text-stone-300 font-medium text-lg">Ruko Maxwell, Gading Serpong</p>
        <p className="mb-6 text-stone-400">Buka 24 Jam</p>
        
        {/* Tombol Google Maps */}
        <div className="mb-8">
          <a 
            href="https://maps.google.com/?q=Ruko+Maxwell+Gading+Serpong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            📍 Buka di Google Maps
          </a>
        </div>

        <p className="text-sm text-stone-500">&copy; 2026 Eternal Caffe & Gelato. All rights reserved.</p>
      </footer>
    </main>
  );
}