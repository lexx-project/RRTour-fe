import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-nav full-width top-0 sticky z-50 no-border bg-surface-container-low/10 shadow-sm dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-blue-100 text-primary">
          Jelajahi Indonesia
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={`${isActive('/') ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors'}`}
          >
            Beranda
          </Link>
          <Link
            to="/tentang-kami"
            className={`${isActive('/tentang-kami') ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors'}`}
          >
            Tentang Kami
          </Link>
          <Link
            to="/paket-tour"
            className={`${isActive('/paket-tour') ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors'}`}
          >
            Paket Tour
          </Link>
          <Link
            to="/jejak-perjalanan"
            className={`${isActive('/jejak-perjalanan') ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors'}`}
          >
            Jejak Perjalanan
          </Link>
          <Link
            to="/kontak"
            className={`${isActive('/kontak') ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors'}`}
          >
            Kontak
          </Link>
        </div>
        <button className="hidden md:flex bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium hover:bg-slate-50/50 dark:hover:bg-slate-800/50 scale-95 active:scale-90 transition-transform btn-gradient">
          Pesan Sekarang
        </button>
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
