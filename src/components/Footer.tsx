import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 w-full border-t border-slate-100 dark:border-slate-800 font-['Plus_Jakarta_Sans'] text-sm mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold text-blue-900 dark:text-blue-100 text-primary">
          Jelajahi Indonesia
        </div>
        <p className="text-slate-500 dark:text-slate-500 text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} Jelajahi Indonesia. Curating the Horizon of the Archipelago.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="#" className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">Syarat &amp; Ketentuan</Link>
          <Link to="#" className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">Kebijakan Privasi</Link>
          <Link to="#" className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">Bantuan</Link>
          <Link to="#" className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
