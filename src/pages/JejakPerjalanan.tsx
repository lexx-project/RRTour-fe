import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function JejakPerjalanan() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
              Jejak Perjalanan
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
              Kumpulan momen tak terlupakan dari perjalanan eksplorasi keindahan nusantara. Setiap potret bercerita tentang petualangan, budaya, dan senyum yang kami temui di sepanjang jalan.
            </p>
          </div>
        </section>

        {/* Gallery / Bento Grid Section */}
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <div className="bento-grid">
            {/* Item 1: Bromo (Large prominent card) */}
            <div className="bento-span-2-col bento-span-2-row relative rounded-xl overflow-hidden group ambient-shadow bg-surface-container-lowest flex flex-col justify-end">
              <img alt="Mount Bromo Sunrise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa0cWh1AHBuZMHGNBRZaRJBzZxMMYilX60spTqLzALrJnWjp3TQw767iQVhYyiSKu-lkdLttqYlSg_yEWtADiAafpaOAsf3n4mrCO8dmIGxRpbL1fFci2QuTTLlsEl1-EvMQhySi-BWQAt6a9Kt9XwrhxNkfAQRji6KF7-FgQXlmWRq46A3iubAlg8st5sPEJ9GHukeUHj_ZrQIqA_YUU7eCk9CPweQv4nHzdcskJSyWL6GsKRV7_ogxJEpL3PMZUpNy0yEgTFI4A"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="relative z-10 p-8 text-white">
                <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-md rounded-md text-xs font-bold uppercase tracking-widest mb-3">Featured Trip</span>
                <h2 className="font-headline text-3xl font-bold mb-2">Open Trip Bromo - Maret 2026</h2>
                <p className="text-white/80 line-clamp-2 md:line-clamp-none max-w-lg">
                  Menyaksikan matahari terbit keemasan dari Penanjakan, membelah lautan pasir berbisik, dan mendaki kawah yang megah. Pengalaman magis yang tak terlupakan di atap Jawa Timur.
                </p>
              </div>
            </div>

            {/* Item 2: Yogyakarta (Vertical Card) */}
            <div className="bento-span-2-row relative rounded-xl overflow-hidden group ambient-shadow bg-surface-container-lowest flex flex-col justify-end">
              <img alt="Yogyakarta Local Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8BwnAaP8fD26LEblSY3AapqvSDzfOwIOyEvuUJfKU5HMW0gPNA49d7hCcfYln7nleBzBghDqBz9wqx3Tu41AeKrf0Nm_Nx3o-z-WUDUdatbnnsNQyYhYQ501pkKv4W5skG0DbQ3ngEjJxcfcn4NnGPJCDzMvZbmLUKeWAlrm0a3YgylPeGJHaix_jcTXvpbH_st6vkTlrYXQ8XUQun9eEsjIt2Frni8zE4Ryu6-TRmBmv_jeiec1Xnmx_wslucyi-c2K_XTFly0"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="relative z-10 p-6 text-white">
                <h2 className="font-headline text-xl font-bold mb-2">Fun Trip Yogyakarta</h2>
                <p className="text-white/80 text-sm italic mb-4">
                  "Menyelami budaya lokal, dari kehangatan warga di Malioboro hingga megahnya candi saat senja. Benar-benar energi yang luar biasa!"
                </p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
              </div>
            </div>

            {/* Decorative Gallery Item 3 */}
            <div className="relative rounded-xl overflow-hidden group ambient-shadow bg-surface-container-lowest">
              <img alt="Local Guide Smile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9h0E4hpX0mb-Whb9ZT6GN8jupV4b2-e-eKAJJ4BQyonPIz17HV4aRrBywqcD0zm9fdS14SXBLJNDNIsBcdhZPGzwv8ASQyb_igEl1nJOF87INpyYcqJ2sDvzf102zQz_qrONJJbSt0fw2K1p6ZV-VzN0wNWFdr9ooHGkheCbd-G7d20-8CBk-bRSFzq15BrKVR1swaskGbf9m-kf3-4ux84v3gWKpjGwVU8veK_tw-3UFis7dOGWkGjqcHBSD_pwKwYlfl5bc0kM"/>
            </div>

            {/* Decorative Gallery Item 4 */}
            <div className="relative rounded-xl overflow-hidden group ambient-shadow bg-surface-container-lowest">
              <img alt="Beach Fun" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnCwTnh7MeYnvyfMZdCeOGuMJpQaRSUoUKVcmh5KFGrR_0XsmPJIp8Lndr3g91P-Xzjd-TZw8dNwJcoYdBb5eOGACE9cd1i3rXvSv90xuWMyk1zag8Yj28zEcaljF7n4zZktZT-COjg6Wj91nspH1KlYYRDmiMPv9ZGlcNbUMP1fOl7jy2GrdZc5GeVXfBr0Q55-Y_QNsXoWgs6Mm42NwOxqbzqH9e2Y24V54t5dSOw44nJb7nWFcbVyhG6ZDWNe4neswjrSBG81M"/>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary mb-6">Hubungi Kami</h2>
                <p className="text-on-surface-variant mb-10 text-lg">
                  Siap untuk memulai petualangan Anda selanjutnya? Tim ekspert kami siap membantu merancang perjalanan impian Anda di Nusantara.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Alamat Kantor</h3>
                      <p className="text-on-surface-variant">Jl. Sudirman No. 123, Jakarta Pusat<br/>DKI Jakarta, 10220</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Email</h3>
                      <p className="text-on-surface-variant">halo@jelajahiindonesia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Nomor WhatsApp</h3>
                      <p className="text-on-surface-variant">+62 812 3456 7890</p>
                    </div>
                  </div>
                </div>
                
                <a className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 ambient-shadow" href="#">
                  <span className="material-symbols-outlined">forum</span>
                  Chat via WhatsApp
                </a>
              </div>
              
              <div className="relative h-[600px] rounded-xl overflow-hidden ambient-shadow">
                <img alt="Sailing Boat in Indonesia" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMT1Zpqp4f0yAViDFfsHHJxFNVNybbke12y5keyrTp1x_3PMOJkZy7uDth709BSv71gq5nUOUUXxvWe64WkKXCfzz_WhCAfYeZBrta8HenJpwjfYg7gcTJ6IODEst5ZzX0wVvqVLYi-9h1wTDl5ICc89RKWmWAyIvlXTxqzaFskj7ZLIlj-zz2zv6yf7jaYIF7fTK0KT9_VsPCXUwtwxqkcfQvkZ6pPlBTquNhwyKob4p8cmbWPMR1XYmURWqZG3nU7nATpEOvs0E"/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
