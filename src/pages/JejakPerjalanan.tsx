import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FadeUp } from "../components/FadeUp";

type TripStatus = "Selesai" | "Berjalan" | "Segera Berangkat";

interface TripHistoryItem {
  id: number;
  title: string;
  destination: string;
  month: string;
  duration: string;
  participants: number;
  status: TripStatus;
  category: string;
  rating: string;
  photoCount: number;
  highlights: string[];
  summary: string;
  image: string;
}

const tripHistory: TripHistoryItem[] = [
  {
    id: 1,
    title: "Open Trip Bromo Midnight",
    destination: "Bromo, Jawa Timur",
    month: "April 2026",
    duration: "2 Hari 1 Malam",
    participants: 24,
    status: "Berjalan",
    category: "Gunung",
    rating: "4.9",
    photoCount: 186,
    highlights: ["Penanjakan", "Bukit Teletubbies", "Pasir Berbisik"],
    summary:
      "Trip sunrise favorit dengan itinerary padat, jeep private, dan dokumentasi grup yang selalu penuh momen seru.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiHIA9jTi-CUJEZTFFU6fCYqxfuyyG9OIQ8Ex7LxIRGt9Tj9iTAasZurqLrrdiqNMvW9zo5ivS-c8MUqK3U2KZjcRxFo318mYPwgR7FGphG5-A9q176p6BnFRc9dM6FNdo3-ksRjEVn3jbLLnFzdbf1LHdfdkkWNK3TTF0W0E9jIM46NxahVs7GagPcgOO0-1D7sNyvZg52I_tw9Eass4tdPpFkeaacxU2fddZ-eM4eqgCWT4m_EIgyZXHY35623Iyrl2yeboGqEY",
  },
  {
    id: 2,
    title: "Sailing Komodo Escape",
    destination: "Labuan Bajo, NTT",
    month: "April 2026",
    duration: "3 Hari 2 Malam",
    participants: 18,
    status: "Segera Berangkat",
    category: "Bahari",
    rating: "5.0",
    photoCount: 214,
    highlights: ["Pulau Padar", "Pink Beach", "Taka Makassar"],
    summary:
      "Paket premium dengan kapal phinisi, sunset dinner, dan itinerary island hopping yang paling sering repeat order.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCucWJbpQ0bXODwbpu9KFE6IuaSkAakkhyQYFxrLfDoMMruH8dBjnlUzRJD131wQhwLlDyZ74FbPqXNHAOWWYYrX6Lc_6U2s6JRExPQk_KwuQ-sHw94KMOiNBMgmanbqVVZs5xTr8L_nJnXOp75aC0NvzksfkIY7bvHc83zbiQG1VwYqbaM9vZehFMQ9rvl90zyp253Z1au-GnclqiF9nl3J0B7s5yVDxmkNh1Jer1JrK2ldbn6Xn0ygd3nxWZ_8gcg6BGTKOVdmfw",
  },
  {
    id: 3,
    title: "Fun Trip Yogyakarta Heritage",
    destination: "Yogyakarta",
    month: "Maret 2026",
    duration: "3 Hari 2 Malam",
    participants: 31,
    status: "Selesai",
    category: "Budaya",
    rating: "4.8",
    photoCount: 173,
    highlights: ["Malioboro", "Prambanan", "Merapi Lava Tour"],
    summary:
      "Trip rombongan yang kuat di sisi budaya dan kuliner, cocok untuk komunitas dan outing kantor.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP8BwnAaP8fD26LEblSY3AapqvSDzfOwIOyEvuUJfKU5HMW0gPNA49d7hCcfYln7nleBzBghDqBz9wqx3Tu41AeKrf0Nm_Nx3o-z-WUDUdatbnnsNQyYhYQ501pkKv4W5skG0DbQ3ngEjJxcfcn4NnGPJCDzMvZbmLUKeWAlrm0a3YgylPeGJHaix_jcTXvpbH_st6vkTlrYXQ8XUQun9eEsjIt2Frni8zE4Ryu6-TRmBmv_jeiec1Xnmx_wslucyi-c2K_XTFly0",
  },
  {
    id: 4,
    title: "Eksotisme Derawan",
    destination: "Derawan, Kalimantan Timur",
    month: "Maret 2026",
    duration: "4 Hari 3 Malam",
    participants: 16,
    status: "Selesai",
    category: "Bahari",
    rating: "4.9",
    photoCount: 205,
    highlights: ["Pulau Maratua", "Danau Kakaban", "Sangalaki"],
    summary:
      "Snorkeling, island hopping, dan agenda santai yang selalu menghasilkan dokumentasi visual paling ramai.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhI9-DJRbBB6F-gh-p33vwYIMPqJ97AZlH9qOk4vXDe0PUw-CaUbdgKvSV3qbkXbpXe3Y62ZPU0x-p7GxLjmiJuViX8llQXbddV-JFOe1yNZjkKRUpCmZtWYdg77pbT6KjGgybBZg6G0x8UqXdY2Yfg6ctPY7JARhKMOKSwF5vPqSOMWTxz5vrohDtF3cQ01hvuK3atkw1uPC-0PE8Y0SQSDGs1XwQ0Glnre5Ab2oER6uht3-lp-jhdP8ozowWSvQ08UeK4n8fsn0",
  },
  {
    id: 5,
    title: "Private Trip Raja Ampat",
    destination: "Raja Ampat, Papua Barat",
    month: "Februari 2026",
    duration: "5 Hari 4 Malam",
    participants: 12,
    status: "Selesai",
    category: "Bahari",
    rating: "5.0",
    photoCount: 248,
    highlights: ["Piaynemo", "Telaga Bintang", "Misool"],
    summary:
      "Itinerary eksklusif untuk grup kecil dengan pace santai, resort view deck, dan pengalaman bahari kelas premium.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Explore Sumba Timur",
    destination: "Sumba, NTT",
    month: "Februari 2026",
    duration: "4 Hari 3 Malam",
    participants: 20,
    status: "Selesai",
    category: "Landscape",
    rating: "4.8",
    photoCount: 191,
    highlights: ["Bukit Wairinding", "Pantai Walakiri", "Savanna Puru Kambera"],
    summary:
      "Trip visual-heavy dengan kombinasi bukit, kuda liar, dan golden hour yang sangat kuat untuk konten.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Misteri Toraja",
    destination: "Toraja, Sulawesi Selatan",
    month: "Januari 2026",
    duration: "4 Hari 3 Malam",
    participants: 22,
    status: "Selesai",
    category: "Budaya",
    rating: "4.7",
    photoCount: 154,
    highlights: ["Kete Kesu", "Londa", "Negeri di Atas Awan Lolai"],
    summary:
      "Perjalanan yang kuat secara cerita, budaya lokal, dan pengalaman homestay dengan interaksi warga yang hangat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzLiVhAcjH--HUkxTAT7D5nsCTzOY11EIbqAvWxnU08-PLL_pWRIWKC1Jg4lkx71iAYxwtAQA3Z3oAkPV1kC2PqF7aKj-7A0ReiVFWyYYG3a8oi5ndTRhHu7SJgXnIj02Dt9SEuj4lCBFAeReHF90SOVEeO_7qcs7fA2Y5QQzDUJmufXI1fxIPezym5vq4vY2u_fV6ob4-81-H7oGGt4-mFWYe3t4xxu_sTnkWNfmPKDK1QsnlxG9zUmkPyVMFi3EuFpSiH0mgz1U",
  },
  {
    id: 8,
    title: "Weekend Escape Belitung",
    destination: "Belitung",
    month: "Desember 2025",
    duration: "3 Hari 2 Malam",
    participants: 27,
    status: "Selesai",
    category: "Bahari",
    rating: "4.8",
    photoCount: 167,
    highlights: ["Pulau Lengkuas", "Tanjung Tinggi", "Island Hopping"],
    summary:
      "Pilihan trip pendek yang ringan dan efisien, cocok untuk first timer dengan hasil foto yang tetap maksimal.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Cultural Escape Bali",
    destination: "Bali",
    month: "November 2025",
    duration: "4 Hari 3 Malam",
    participants: 35,
    status: "Selesai",
    category: "Budaya",
    rating: "4.9",
    photoCount: 228,
    highlights: ["Ubud", "Kintamani", "Uluwatu"],
    summary:
      "Perpaduan budaya, pemandangan, dan kuliner yang cocok untuk grup besar serta corporate retreat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmGNQUERPn9zgKkDD0D5nANT7fKbdouwkWwFFh1HNYatXHTSJFwUnVOr9M8CNIyTOJ1fzDKd4-_78ulXH-lAVqrACpAXpXPHX-XH4JEahAqBJNkJ2Ds95DGEbXrgo0a8USeYHhaKkfsJT6C5XpdA3_xixA0eiLVS8zTElthCsCFX1rJVG-fuxxu2Czjo4T3YO7O25laCOgZckx_5UYzahqgHe_RxlXu30gypTsfHV2GTumfJGHCdaeVVw17QcQty2Th0CLtfVCdbw",
  },
  {
    id: 10,
    title: "Highland Adventure Dieng",
    destination: "Dieng, Jawa Tengah",
    month: "Oktober 2025",
    duration: "2 Hari 1 Malam",
    participants: 29,
    status: "Selesai",
    category: "Gunung",
    rating: "4.7",
    photoCount: 139,
    highlights: ["Sikunir", "Kawah Sikidang", "Telaga Warna"],
    summary:
      "Favorit untuk perjalanan singkat dengan suhu sejuk, spot sunrise padat, dan biaya yang sangat efisien.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    title: "Jelajah Lombok Mandalika",
    destination: "Lombok, NTB",
    month: "September 2025",
    duration: "3 Hari 2 Malam",
    participants: 25,
    status: "Selesai",
    category: "Bahari",
    rating: "4.8",
    photoCount: 182,
    highlights: ["Mandalika", "Bukit Merese", "Gili Trawangan"],
    summary:
      "Trip kombinasi pantai dan bukit yang paling seimbang untuk pasangan, keluarga kecil, dan grup konten.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    title: "Adventure Tumpak Sewu",
    destination: "Lumajang, Jawa Timur",
    month: "Agustus 2025",
    duration: "2 Hari 1 Malam",
    participants: 19,
    status: "Selesai",
    category: "Landscape",
    rating: "4.9",
    photoCount: 145,
    highlights: ["Air Terjun Tumpak Sewu", "Goa Tetes", "View Point Panorama"],
    summary:
      "Trip petualangan untuk peserta aktif dengan trek menantang dan salah satu view air terjun terbaik di Indonesia.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { label: "Total Perjalanan", value: `${tripHistory.length}+` },
  {
    label: "Peserta Terlayani",
    value: `${tripHistory.reduce((sum, trip) => sum + trip.participants, 0)}+`,
  },
  {
    label: "Dokumentasi Tersimpan",
    value: `${tripHistory.reduce((sum, trip) => sum + trip.photoCount, 0)}+`,
  },
  { label: "Rata-rata Rating", value: "4.8/5" },
];

const categorySummary = [
  ...new Set(tripHistory.map((trip) => trip.category)),
].map((category) => ({
  category,
  total: tripHistory.filter((trip) => trip.category === category).length,
}));

const latestTrip = tripHistory[0];

function getStatusClassName(status: TripStatus) {
  if (status === "Berjalan") {
    return "bg-secondary-fixed text-on-secondary-fixed-variant";
  }

  if (status === "Segera Berangkat") {
    return "bg-tertiary-fixed text-on-tertiary-fixed-variant";
  }

  return "bg-surface-container text-on-surface";
}

export function JejakPerjalanan() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="grow">
        <section className="relative overflow-hidden border-b border-outline-variant/20 bg-linear-to-br from-surface via-surface-container-low to-secondary-fixed/40">
          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-0 top-28 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <FadeUp>
              <div className="max-w-3xl">
                <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Arsip perjalanan dan dokumentasi trip
                </span>
                <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-6xl">
                  Jejak perjalanan yang terus bertambah dari satu trip ke trip
                  berikutnya.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
                  Halaman ini sekarang dibuat seperti arsip trip, bukan sekadar
                  galeri. Jadi ketika data perjalanan makin banyak, tampilannya
                  tetap enak dibaca, mudah discan, dan nanti gampang disambung ke
                  backend otomatis.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur-md ambient-shadow"
                  >
                    <p className="text-2xl font-bold text-on-surface md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <FadeUp>
            <div className="overflow-hidden rounded-[28px] bg-primary text-on-primary ambient-shadow">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[320px]">
                  <img
                    alt={latestTrip.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={latestTrip.image}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      Highlight terbaru
                    </span>
                    <h2 className="max-w-xl font-headline text-3xl font-bold leading-tight text-white md:text-4xl">
                      {latestTrip.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 md:text-base">
                      {latestTrip.summary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/70">Destinasi</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {latestTrip.destination}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/70">Jadwal</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {latestTrip.month}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/70">Peserta</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {latestTrip.participants} orang
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/70">Dokumentasi</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {latestTrip.photoCount} foto
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                      Highlight itinerary
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {latestTrip.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <FadeUp>
              <aside className="top-24 h-fit rounded-[24px] border border-outline-variant/20 bg-surface-container-low p-6 lg:sticky">
                <div className="border-b border-outline-variant/20 pb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    Ringkasan arsip
                  </p>
                  <h3 className="mt-3 font-headline text-2xl font-bold text-on-surface">
                    Banyak trip, tetap rapi
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Struktur ini enak untuk nanti diisi data backend, karena
                    tinggal map daftar trip, summary, status, dan kategori.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {categorySummary.map((item) => (
                    <div
                      key={item.category}
                      className="flex items-center justify-between rounded-2xl bg-surface-container-lowest px-4 py-3"
                    >
                      <span className="text-sm font-medium text-on-surface">
                        {item.category}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                        {item.total} trip
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-primary p-5 text-on-primary">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                    Next step
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Nanti bagian ini bisa dihubungkan ke filter backend:
                    kategori, bulan, status, pagination, sampai detail album.
                  </p>
                </div>
              </aside>
            </FadeUp>

            <div>
              <FadeUp>
                <div className="mb-8 flex flex-col gap-4 rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                      Arsip trip terbaru
                    </p>
                    <h2 className="mt-2 font-headline text-3xl font-bold text-on-surface">
                      Semua jejak perjalanan
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-secondary-fixed px-4 py-2 text-sm font-medium text-on-secondary-fixed-variant">
                      {tripHistory.filter((trip) => trip.status === "Berjalan").length} trip
                      berjalan
                    </span>
                    <span className="rounded-full bg-tertiary-fixed px-4 py-2 text-sm font-medium text-on-tertiary-fixed-variant">
                      {tripHistory.filter((trip) => trip.status === "Segera Berangkat").length} trip
                      upcoming
                    </span>
                    <span className="rounded-full bg-surface-container px-4 py-2 text-sm font-medium text-on-surface">
                      {tripHistory.filter((trip) => trip.status === "Selesai").length} trip
                      selesai
                    </span>
                  </div>
                </div>
              </FadeUp>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {tripHistory.map((trip, index) => (
                  <FadeUp key={trip.id} delay={index * 0.04}>
                    <article className="group overflow-hidden rounded-[26px] border border-outline-variant/20 bg-surface-container-lowest ambient-shadow">
                      <div className="relative h-60 overflow-hidden">
                        <img
                          alt={trip.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={trip.image}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClassName(
                              trip.status,
                            )}`}
                          >
                            {trip.status}
                          </span>
                          <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {trip.category}
                          </span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-sm text-white/75">{trip.month}</p>
                            <h3 className="font-headline text-2xl font-bold text-white">
                              {trip.title}
                            </h3>
                          </div>
                          <div className="rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-on-surface">
                            {trip.rating}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-3 text-sm text-on-surface-variant">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-2">
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                            {trip.destination}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-2">
                            <span className="material-symbols-outlined text-[18px]">
                              schedule
                            </span>
                            {trip.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-2">
                            <span className="material-symbols-outlined text-[18px]">
                              groups
                            </span>
                            {trip.participants} peserta
                          </span>
                        </div>

                        <p className="mt-5 text-sm leading-6 text-on-surface-variant">
                          {trip.summary}
                        </p>

                        <div className="mt-5">
                          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                            Spot utama
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {trip.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="rounded-full border border-outline-variant/40 px-3 py-1.5 text-sm text-on-surface"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-5">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                              Dokumentasi
                            </p>
                            <p className="mt-1 text-lg font-bold text-on-surface">
                              {trip.photoCount} foto tersimpan
                            </p>
                          </div>
                          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary transition-transform group-hover:scale-105">
                            Lihat cerita trip
                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
