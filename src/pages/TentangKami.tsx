import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer } from "../components/FadeUp";

export function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl font-extrabold tracking-tight text-primary font-headline">
                Merajut Cerita di Setiap Sudut Nusantara.
              </h1>
              <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                Sejak 2015, Jelajahi Indonesia telah mendedikasikan diri untuk
                membuka tabir keindahan kepulauan Indonesia. Berawal dari
                kecintaan sekelompok pelancong lokal terhadap kekayaan alam dan
                budaya negeri, kami tumbuh menjadi kurator perjalanan elit yang
                menyatukan jiwa petualang dengan layanan profesional kelas atas.
              </p>
              <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                Kami percaya bahwa setiap perjalanan bukan sekadar memindahkan
                lokasi, melainkan sebuah transformasi jiwa. Setiap rencana
                perjalanan yang kami buat adalah karya seni yang disusun dengan
                teliti, memastikan Anda mendapatkan pengalaman autentik tanpa
                mengorbankan kenyamanan.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                alt="Tim Jelajahi Indonesia"
                className="rounded-xl w-full h-150 object-cover shadow-2xl z-10 relative transform translate-x-4 translate-y-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_MsQ2wKuQhHfiW0ZXMKriv_0Tqj918tJWkOWb6w9N5mUAZYDvodJ3ZsBXRPj5mssybQD_CywivpLeHhGtaMjvfXMEz0Ye1Umaqsf8UEyKLH9_pbub1I22P2iNhBoD4gfzmfgdFbz7mToMYZKxiWlQw7gr9dzO906zqyxk9TXFSdFbMJgaCCTGG5en716FP9gPLP7k-2uh4-ZuvXTHUuX-_Bhw6hfT6kwpmnRynpmKY9I3MaLe0oRKRRKLrASeaPxbFB0V6XXCS0"
              />
              <div className="absolute inset-0 bg-secondary-fixed rounded-xl z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary font-headline tracking-tight">
                Visi &amp; Misi Kami
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Visi */}
              <FadeUp delay={0}>
                <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow relative overflow-hidden group hover:bg-surface-bright transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <span
                    className="material-symbols-outlined text-5xl text-primary mb-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    visibility
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 text-on-surface font-headline">
                    Visi
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    Menjadi kurator perjalanan terkemuka di Indonesia yang
                    mendefinisikan ulang standar pariwisata premium, dengan
                    mengedepankan keberlanjutan, pelestarian budaya, dan
                    pengalaman eksklusif yang tak terlupakan bagi setiap
                    pelancong dari seluruh dunia.
                  </p>
                </div>
              </FadeUp>

              {/* Misi */}
              <FadeUp delay={0.15}>
                <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow relative overflow-hidden group hover:bg-surface-bright transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <span
                    className="material-symbols-outlined text-5xl text-secondary mb-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    flag
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 text-on-surface font-headline">
                    Misi
                  </h3>
                  <ul className="space-y-4 text-on-surface-variant font-body">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>
                        Menyediakan layanan perjalanan yang dipersonalisasi
                        dengan standar profesionalisme tinggi.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>
                        Mempromosikan destinasi wisata lokal yang autentik dan
                        belum terjamah, memberdayakan komunitas setempat.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>
                        Mengintegrasikan praktik pariwisata berkelanjutan dalam
                        setiap aspek operasional kami.
                      </span>
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Keunggulan Kami Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary font-headline tracking-tight">
              Keunggulan Kami
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto font-body">
              Mengapa memilih Jelajahi Indonesia sebagai pemandu petualangan
              Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerContainer>
              <div className="bg-surface-container rounded-xl p-8 hover:bg-surface-container-highest transition-colors">
                <div className="bg-surface-container-lowest w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span
                    className="material-symbols-outlined text-3xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-surface font-headline">
                  Profesionalisme Tanpa Kompromi
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  Tim kami terdiri dari pakar perjalanan yang berdedikasi
                  tinggi, siap menangani setiap detail perjalanan Anda dari awal
                  hingga akhir dengan presisi dan kehati-hatian.
                </p>
              </div>

              <div className="bg-surface-container rounded-xl p-8 hover:bg-surface-container-highest transition-colors">
                <div className="bg-surface-container-lowest w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span
                    className="material-symbols-outlined text-3xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    explore
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-surface font-headline">
                  Keahlian Lokal Mendalam
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  Kami tidak hanya tahu destinasi; kami memahaminya. Akses kami
                  ke pemandu lokal yang berpengetahuan luas memastikan Anda
                  mendapatkan pengalaman budaya yang sesungguhnya.
                </p>
              </div>

              <div className="bg-surface-container rounded-xl p-8 hover:bg-surface-container-highest transition-colors">
                <div className="bg-surface-container-lowest w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span
                    className="material-symbols-outlined text-3xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    diamond
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-surface font-headline">
                  Pengalaman Eksklusif
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  Dari akomodasi butik tersembunyi hingga akses pribadi ke situs
                  budaya, kami merancang rencana perjalanan yang menawarkan
                  kemewahan dan keunikan yang tak tertandingi.
                </p>
              </div>
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
