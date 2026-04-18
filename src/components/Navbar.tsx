import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  const getLinkClassName = (path: string) =>
    isActive(path)
      ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1'
      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors';
  const mobileLinkClassName = (path: string) =>
    isActive(path)
      ? 'block w-full rounded-2xl bg-primary text-on-primary px-4 py-3 font-semibold shadow-sm'
      : 'block w-full rounded-2xl bg-surface-container-low text-on-surface px-4 py-3 font-medium transition-colors hover:bg-surface-container';

  return (
    <nav className="glass-nav full-width top-0 sticky z-50 no-border bg-surface-container-low/10 shadow-sm dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight">
      <div className="flex items-center justify-between gap-3 w-full px-4 py-3 md:px-6 max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={scrollToTop}
          className="min-w-0 flex-1 text-base leading-tight font-bold tracking-tighter text-slate-950 drop-shadow-[0_1px_10px_rgba(255,255,255,0.3)] sm:text-lg md:flex-none md:text-2xl"
        >
          <span className="block truncate md:hidden">Jelajahi ID</span>
          <span className="hidden md:block">Jelajahi Indonesia</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link
            to="/"
            onClick={scrollToTop}
            className={getLinkClassName('/')}
          >
            Beranda
          </Link>
          <Link
            to="/tentang-kami"
            onClick={scrollToTop}
            className={getLinkClassName('/tentang-kami')}
          >
            Tentang Kami
          </Link>
          <Link
            to="/paket-tour"
            onClick={scrollToTop}
            className={getLinkClassName('/paket-tour')}
          >
            Paket Tour
          </Link>
          <Link
            to="/jejak-perjalanan"
            onClick={scrollToTop}
            className={getLinkClassName('/jejak-perjalanan')}
          >
            Jejak Perjalanan
          </Link>
          <Link
            to="/kontak"
            onClick={scrollToTop}
            className={getLinkClassName('/kontak')}
          >
            Kontak
          </Link>
        </div>
        <button className="hidden md:flex bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-50/50 dark:hover:bg-slate-800/50 scale-95 active:scale-90 transition-transform btn-gradient">
          Pesan Sekarang
        </button>
        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden shrink-0 inline-flex items-center justify-center rounded-full bg-surface-container-low p-2 text-on-surface transition-colors hover:bg-surface-container"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <motion.div
              initial={{ y: -16 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="border-t border-outline-variant/30 px-5 pb-5 pt-4"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {[
                  { to: '/', label: 'Beranda' },
                  { to: '/tentang-kami', label: 'Tentang Kami' },
                  { to: '/paket-tour', label: 'Paket Tour' },
                  { to: '/jejak-perjalanan', label: 'Jejak Perjalanan' },
                  { to: '/kontak', label: 'Kontak' },
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={scrollToTop}
                      className={mobileLinkClassName(item.to)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, delay: 0.2, ease: 'easeOut' }}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary btn-gradient"
                >
                  Pesan Sekarang
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
