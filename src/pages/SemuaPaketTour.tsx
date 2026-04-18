import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeUp } from '../components/FadeUp';

const packageCards = [
  {
    title: 'Eksotisme Derawan',
    duration: '3 Hari 2 Malam',
    price: 'Rp 2.500.000',
    rating: '4.9',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhI9-DJRbBB6F-gh-p33vwYIMPqJ97AZlH9qOk4vXDe0PUw-CaUbdgKvSV3qbkXbpXe3Y62ZPU0x-p7GxLjmiJuViX8llQXbddV-JFOe1yNZjkKRUpCmZtWYdg77pbT6KjGgybBZg6G0x8UqXdY2Yfg6ctPY7JARhKMOKSwF5vPqSOMWTxz5vrohDtF3cQ01hvuK3atkw1uPC-0PE8Y0SQSDGs1XwQ0Glnre5Ab2oER6uht3-lp-jhdP8ozowWSvQ08UeK4n8fsn0',
    alt: 'Pantai tropis eksotis di Derawan',
  },
  {
    title: 'Misteri Toraja',
    duration: '4 Hari 3 Malam',
    price: 'Rp 3.200.000',
    rating: '4.8',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzLiVhAcjH--HUkxTAT7D5nsCTzOY11EIbqAvWxnU08-PLL_pWRIWKC1Jg4lkx71iAYxwtAQA3Z3oAkPV1kC2PqF7aKj-7A0ReiVFWyYYG3a8oi5ndTRhHu7SJgXnIj02Dt9SEuj4lCBFAeReHF90SOVEeO_7qcs7fA2Y5QQzDUJmufXI1fxIPezym5vq4vY2u_fV6ob4-81-H7oGGt4-mFWYe3t4xxu_sTnkWNfmPKDK1QsnlxG9zUmkPyVMFi3EuFpSiH0mgz1U',
    alt: 'Rumah adat Toraja',
  },
  {
    title: 'Sunrise Bromo',
    duration: '2 Hari 1 Malam',
    price: 'Rp 1.150.000',
    rating: '4.9',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiHIA9jTi-CUJEZTFFU6fCYqxfuyyG9OIQ8Ex7LxIRGt9Tj9iTAasZurqLrrdiqNMvW9zo5ivS-c8MUqK3U2KZjcRxFo318mYPwgR7FGphG5-A9q176p6BnFRc9dM6FNdo3-ksRjEVn3jbLLnFzdbf1LHdfdkkWNK3TTF0W0E9jIM46NxahVs7GagPcgOO0-1D7sNyvZg52I_tw9Eass4tdPpFkeaacxU2fddZ-eM4eqgCWT4m_EIgyZXHY35623Iyrl2yeboGqEY',
    alt: 'Sunrise Bromo',
  },
  {
    title: 'Jelajah Komodo',
    duration: '3 Hari 2 Malam',
    price: 'Rp 3.800.000',
    rating: '5.0',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCucWJbpQ0bXODwbpu9KFE6IuaSkAakkhyQYFxrLfDoMMruH8dBjnlUzRJD131wQhwLlDyZ74FbPqXNHAOWWYYrX6Lc_6U2s6JRExPQk_KwuQ-sHw94KMOiNBMgmanbqVVZs5xTr8L_nJnXOp75aC0NvzksfkIY7bvHc83zbiQG1VwYqbaM9vZehFMQ9rvl90zyp253Z1au-GnclqiF9nl3J0B7s5yVDxmkNh1Jer1JrK2ldbn6Xn0ygd3nxWZ_8gcg6BGTKOVdmfw',
    alt: 'Jelajah Komodo',
  },
];

function FilterPanel() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-on-surface font-headline">Filter</h2>
        <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">restart_alt</span>
          Reset
        </button>
      </div>

      <div className="mb-8">
        <h3
          className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4 font-label"
          style={{ letterSpacing: '0.05em' }}
        >
          Tujuan
        </h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center bg-surface-container-lowest group-hover:border-primary transition-colors">
              <span
                className="material-symbols-outlined text-[16px] text-surface-container-lowest opacity-0 transition-opacity"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
            <span className="text-on-surface text-sm font-medium">Pantai & Pulau</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-primary flex items-center justify-center bg-primary transition-colors">
              <span
                className="material-symbols-outlined text-[16px] text-on-primary transition-opacity"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
            <span className="text-on-surface text-sm font-medium">Gunung & Alam</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center bg-surface-container-lowest group-hover:border-primary transition-colors">
              <span
                className="material-symbols-outlined text-[16px] text-surface-container-lowest opacity-0 transition-opacity"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
            <span className="text-on-surface text-sm font-medium">Budaya & Sejarah</span>
          </label>
        </div>
      </div>

      <div className="mb-8">
        <h3
          className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4 font-label"
          style={{ letterSpacing: '0.05em' }}
        >
          Durasi
        </h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-secondary-fixed text-on-secondary-fixed-variant transition-colors hover:bg-primary hover:text-on-primary">
            2 Hari
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-on-primary transition-colors">
            3 Hari
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-secondary-fixed text-on-secondary-fixed-variant transition-colors hover:bg-primary hover:text-on-primary">
            4 Hari
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-secondary-fixed text-on-secondary-fixed-variant transition-colors hover:bg-primary hover:text-on-primary">
            1 Minggu
          </button>
        </div>
      </div>

      <div>
        <h3
          className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4 font-label"
          style={{ letterSpacing: '0.05em' }}
        >
          Anggaran (IDR)
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="relative flex-1 input-glow rounded-md transition-all">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                Rp
              </span>
              <input
                className="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-md text-sm text-on-surface focus:outline-none"
                placeholder="Min"
                type="text"
                defaultValue="1.000.000"
              />
            </div>
            <span className="text-on-surface-variant">-</span>
            <div className="relative flex-1 input-glow rounded-md transition-all">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                Rp
              </span>
              <input
                className="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-md text-sm text-on-surface focus:outline-none"
                placeholder="Max"
                type="text"
                defaultValue="5.000.000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SemuaPaketTour() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (!isMobileFilterOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileFilterOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <header className="pt-24 pb-12 px-6 md:px-8 max-w-7xl mx-auto w-full">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 font-headline"
          style={{ letterSpacing: '-0.02em' }}
        >
          Semua Paket Tour
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl font-body">
          Temukan destinasi impian Anda di seluruh pelosok nusantara. Dari pegunungan
          megah hingga pantai perawan, kami kurasi pengalaman terbaik untuk Anda.
        </p>
      </header>

      <main className="grow flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 md:px-8 pb-24 max-w-7xl mx-auto w-full items-start">
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hidden lg:block w-full lg:w-72 shrink-0 sticky top-28 self-start"
        >
          <FilterPanel />
        </motion.aside>

        <div className="flex-1 w-full">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(true)}
                className="inline-flex lg:hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Buka Filter
              </button>
              <p className="text-on-surface-variant font-medium">
                Menampilkan <span className="text-primary font-bold">12</span> paket tour
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-sm text-on-surface-variant">Urutkan:</span>
              <button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors">
                Rekomendasi
                <span className="material-symbols-outlined text-[18px]">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packageCards.map((card, index) => (
              <FadeUp key={card.title} delay={index * 0.1}>
                <article className="bg-surface-container-lowest rounded-xl overflow-hidden card-card flex flex-col group cursor-pointer ambient-shadow">
                  <div className="card-img-container relative h-64 w-full">
                    <img alt={card.alt} className="w-full h-full object-cover" src={card.image} />
                    <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <span
                        className="material-symbols-outlined text-[16px] text-tertiary-container"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-sm font-bold text-on-surface">{card.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary font-headline">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      {card.duration}
                    </p>
                    <div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-on-surface-variant uppercase tracking-wider font-label mb-1">
                          Mulai dari
                        </p>
                        <p className="text-lg font-bold text-on-surface">{card.price}</p>
                      </div>
                      <button className="bg-surface-container-low text-primary px-4 py-2 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center gap-2">
                        Detail
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary font-bold transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant/20 text-on-surface hover:bg-surface-container-low transition-colors font-medium">
              2
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant/20 text-on-surface hover:bg-surface-container-low transition-colors font-medium">
              3
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {isMobileFilterOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
              aria-label="Tutup filter"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[82vh] rounded-t-[28px] bg-surface p-4 shadow-[0_-20px_60px_rgba(15,23,42,0.18)] lg:hidden"
            >
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-outline-variant/70" />
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    Filter Paket
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-on-surface">Sesuaikan pencarian</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="overflow-y-auto pb-6 max-h-[calc(82vh-92px)] pr-1">
                <FilterPanel />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
