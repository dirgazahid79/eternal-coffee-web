import React from 'react';

export default function Home() {
  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 lg:px-24 bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="font-bold text-2xl tracking-tighter">ETERNAL.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-amber-700 transition">Cerita Kami</a>
          <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
          <a href="#fasilitas" className="hover:text-amber-700 transition">Fasilitas</a>
        </div>
        <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm hover:bg-stone-700">
          Hubungi Kami
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:px-24 flex flex-col items-center text-center bg-stone-200">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-stone-900">
          Lebih Dari <span className="text-amber-700">Sekadar Kopi.</span>
        </h1>
        <p className="text-lg lg:text-xl text-stone-600 max-w-2xl mb-10">
          Ruang nyaman untuk setiap inspirasimu. Nikmati perpaduan sempurna antara kopi pilihan dan gelato premium untuk menemani hari-harimu.
        </p>
        <a href="#menu" className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition">
          Eksplor Menu Kami
        </a>
      </section>

      {/* TENTANG KAMI */}
      <section id="about" className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ruang Hangat di Tengah Kesibukan</h2>
          <p className="text-stone-600 leading-relaxed">
            Kami membangun Eternal bukan hanya sebagai tempat ngopi, tapi sebagai ruang di mana produktivitas dan kenyamanan bertemu. Dari mahasiswa yang mengejar *deadline* hingga profesional yang mencari ketenangan, kami hadir menyajikan racikan kopi terbaik dan gelato autentik untuk mengisi energimu kembali.
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-6 lg:px-24 bg-stone-100">
        <h2 className="text-3xl font-bold text-center mb-12">Signature Kami</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Coffee */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Coffee</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">Eternal Aren Latte</span>
                <span className="text-amber-700 font-bold">25k</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Caramel Macchiato</span>
                <span className="text-amber-700 font-bold">30k</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Americano (Hot/Ice)</span>
                <span className="text-amber-700 font-bold">20k</span>
              </li>
            </ul>
          </div>
          {/* Gelato */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Artisan Gelato</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">Pistachio Delight</span>
                <span className="text-amber-700 font-bold">35k</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Dark Chocolate Belgian</span>
                <span className="text-amber-700 font-bold">30k</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Strawberry Cheesecake</span>
                <span className="text-amber-700 font-bold">30k</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FASILITAS SECTION */}
      <section id="fasilitas" className="py-20 px-6 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Didesain Untuk Produktivitas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-3xl mb-3">⚡</div>
            <div className="font-medium">Colokan Tersedia</div>
          </div>
          <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-3xl mb-3">📶</div>
            <div className="font-medium">WiFi Super Cepat</div>
          </div>
          <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-3xl mb-3">❄️</div>
            <div className="font-medium">Full AC</div>
          </div>
          <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
            <div className="text-3xl mb-3">🛋️</div>
            <div className="font-medium">Tempat Nyaman</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="font-bold text-2xl text-white mb-4 tracking-tighter">ETERNAL.</div>
        <p className="mb-2">Jl. Contoh Alamat No. 123, Tangerang</p>
        <p className="mb-8">Buka Setiap Hari: 09:00 - 23:00</p>
        <p className="text-sm">© 2026 Eternal Caffe & Gelato. All rights reserved.</p>
      </footer>
    </main>
  );
}