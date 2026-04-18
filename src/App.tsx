/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Beranda } from './pages/Beranda';
import { TentangKami } from './pages/TentangKami';
import { SemuaPaketTour } from './pages/SemuaPaketTour';
import { JejakPerjalanan } from './pages/JejakPerjalanan';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/paket-tour" element={<SemuaPaketTour />} />
        <Route path="/jejak-perjalanan" element={<JejakPerjalanan />} />
        {/* Route for /kontak could fallback to jejak-perjalanan or beranda for now */}
        <Route path="/kontak" element={<JejakPerjalanan />} />
      </Routes>
    </BrowserRouter>
  );
}
