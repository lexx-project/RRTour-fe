import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function Beranda() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="hero image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1BC0kY2CdgpiobEZXE2vN4D_7fyVthwRvnrGhw-wNaxYF9xMDwcCUGsDwbiOafLQStGAk6A3muw3JsFbRnBbV86PXd9VqqN_8jKZgv_hqKxxdOLJp0jHyITXHh67fhQK-u6FV2_3MTYC5io31eeMwKIM7tU_4bJaVUTW8ITpRLHkvDvC4OLIzSq1vyPYDaT1h7vXNQ-uU1fDhldQPpA_XDBS1G3O0ZTrwaWpNb4QJxGXsTHjWcpDajSXenqLL0MCi3nq1dW9OTQ"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-secondary tracking-tighter mb-6 drop-shadow-lg leading-tight">
            Jelajahi Keindahan<br/>
            <span className="text-secondary-fixed">Indonesia</span> Bersama Kami
          </h1>
          <p className="text-lg md:text-xl text-on-secondary/90 font-body mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Rencanakan liburan impian Anda dengan paket tour terbaik dan pelayanan profesional yang dikurasi khusus untuk pengalaman tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/paket-tour" className="bg-tertiary-container text-on-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-tertiary hover:scale-105 transition-all shadow-[0_8px_32px_rgba(25,27,34,0.15)] flex items-center gap-2">
              <span>Lihat Paket Tour</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Packages */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-4 tracking-tight">Paket Populer Kami</h2>
            <div className="w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(25,27,34,0.04)] group">
              <div className="relative h-64 overflow-hidden">
                <img alt="Bromo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpUEEoMqjqbok-VpE5MB1ALtOHGMdxlmDhWjk5UdbE0HsQBOdtDhMNB_n7cT8bbwjDg_x4GxXK_yq2gVqav8bqRCHEWwRljewIl-D-3FZDxaUnF23wYcIrrnkqfa_9NZ_-5wIbHvmrjZe6n_awTk8z01Agmk_s8IqSjZonwJSPR7AweAdv2K0ZaogM-7-Y5f9Wkxz3CwNl-mMUpRV_TwII0uguYzd0CodUBamYtJR7_8MU9h4k-1dhr8vWyLClIZeWkU95IxSkoFQ"/>
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-primary font-bold tracking-wide uppercase">
                  3 Hari 2 Malam
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">Open Trip Bromo</h3>
                <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Nikmati keindahan sunrise spektakuler di Penanjakan dan petualangan jeep melintasi lautan pasir berbisik.</p>
                <div className="flex justify-between items-end border-t border-outline-variant/20 pt-6 mt-auto">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-1">Mulai dari</p>
                    <p className="text-lg font-bold text-primary">Rp 1.500.000</p>
                  </div>
                  <button className="text-primary hover:text-primary-container transition-colors p-2 rounded-full hover:bg-primary/5">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(25,27,34,0.04)] group translate-y-4">
              <div className="relative h-64 overflow-hidden">
                <img alt="Bali" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGNQUERPn9zgKkDD0D5nANT7fKbdouwkWwFFh1HNYatXHTSJFwUnVOr9M8CNIyTOJ1fzDKd4-_78ulXH-lAVqrACpAXpXPHX-XH4JEahAqBJNkJ2Ds95DGEbXrgo0a8USeYHhaKkfsJT6C5XpdA3_xixA0eiLVS8zTElthCsCFX1rJVG-fuxxu2Czjo4T3YO7O25laCOgZckx_5UYzahqgHe_RxlXu30gypTsfHV2GTumfJGHCdaeVVw17QcQty2Th0CLtfVCdbw"/>
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-primary font-bold tracking-wide uppercase">
                  4 Hari 3 Malam
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">Private Tour Bali</h3>
                <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Eksplorasi budaya otentik, pantai tersembunyi, dan kuliner lezat pulau dewata secara eksklusif.</p>
                <div className="flex justify-between items-end border-t border-outline-variant/20 pt-6 mt-auto">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-1">Mulai dari</p>
                    <p className="text-lg font-bold text-primary">Rp 3.200.000</p>
                  </div>
                  <button className="text-primary hover:text-primary-container transition-colors p-2 rounded-full hover:bg-primary/5">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(25,27,34,0.04)] group">
              <div className="relative h-64 overflow-hidden">
                <img alt="Labuan Bajo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUiX0VSqZJur5AJfdYonqb8IolGXtMCZt6Luie3yupDbgCYKPlrYA5f64-3WjNKURzH_TmHw_gpAmSvnjfOCqdniq8cmWq71GVy6SagsshmCWNP_qO-GJXEGO1I5mzGTy4mOxACJYM_6MjDXfw4ExRm06rFWsqbEhega7e00fdJ7SXOgepDiIn0v5Mak5IbGEiv2qaQGD6CsXNn2csqWSY-73DmvVH1X__J2_P0EMfbEf0LJukhrqhZpWaSL3BtzippiRWICE5Rs8"/>
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-primary font-bold tracking-wide uppercase">
                  5 Hari 4 Malam
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">Explore Labuan Bajo</h3>
                <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Sailing trip premium mengunjungi Pulau Padar, bertemu Komodo, dan snorkeling di Pink Beach.</p>
                <div className="flex justify-between items-end border-t border-outline-variant/20 pt-6 mt-auto">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-1">Mulai dari</p>
                    <p className="text-lg font-bold text-primary">Rp 4.500.000</p>
                  </div>
                  <button className="text-primary hover:text-primary-container transition-colors p-2 rounded-full hover:bg-primary/5">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-4 tracking-tight">Kenapa Memilih Kami?</h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary-fixed rounded-full flex items-center justify-center mb-6 text-primary shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>person_celebrate</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Pemandu Profesional</h3>
              <p className="text-on-surface-variant font-body max-w-xs">Guide lokal berpengalaman yang siap memberikan wawasan mendalam tentang destinasi Anda.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary-fixed rounded-full flex items-center justify-center mb-6 text-primary shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>sell</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Harga Terbaik</h3>
              <p className="text-on-surface-variant font-body max-w-xs">Paket perjalanan premium dengan nilai terbaik tanpa biaya tersembunyi untuk pengalaman maksimal.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary-fixed rounded-full flex items-center justify-center mb-6 text-primary shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Keamanan Terjamin</h3>
              <p className="text-on-surface-variant font-body max-w-xs">Keselamatan Anda adalah prioritas kami dengan asuransi perjalanan dan protokol keamanan standar tinggi.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
