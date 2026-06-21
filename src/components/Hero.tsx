import { Phone, Calendar, ArrowRight, ShieldCheck, Clock, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen bg-slate-950 pt-28 lg:pt-36 pb-16 overflow-hidden flex items-center"
    >
      {/* Structural Grids and Dark Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/60 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30"
            >
              <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">
                Kontraktor Sipil & Spesialis Renovasi Bergaransi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Renovasi Rumah & Kantor <br />
              <span className="text-orange-500 relative inline-block">
                Profesional
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-orange-500/20 -z-10" />
              </span>{' '}
              dengan Hasil Berkualitas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              D'Riyanto melayani renovasi rumah, renovasi kantor, bangun rumah baru, finishing interior, dan berbagai pekerjaan konstruksi dengan pengerjaan rapi, tepat waktu, dan harga transparan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="https://wa.me/6283892611581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 font-display font-medium text-white shadow-xl shadow-orange-500/30 text-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-orange-500/50 bg-white/5 hover:bg-orange-500/5 font-display font-medium text-white text-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="h-5 w-5 text-gray-400 group-hover:text-orange-500" />
                Konsultasi & Survey Gratis
                <ArrowRight className="h-4 w-4 ml-1 opacity-60 group-hover:opacity-100" />
              </a>
            </motion.div>

            {/* Highlighted Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-slate-800/80"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-slate-400">
                  Harga Transparan (RAB)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-orange-500">
                  Gratis
                </span>
                <span className="text-xs sm:text-sm text-slate-400">
                  Survey & Jasa Ukur
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Tertulis
                </span>
                <span className="text-xs sm:text-sm text-slate-400">
                  Garansi Pemeliharaan
                </span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Mockups / Hero Image Frame */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Back ambient accent circle */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-500 to-slate-800 opacity-20 blur-2xl -z-10 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900 overflow-hidden perspective-image">
                <img
                  src={IMAGES.hero}
                  alt="D'Riyanto Modern House Project"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  {/* Floating Overlay Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/10 self-start text-xs font-medium text-white mb-2">
                    <ShieldCheck className="h-4 w-4 text-orange-500" />
                    Proyek Pelaksanaan 2 Lantai - Jakarta Barat
                  </div>
                </div>
              </div>

              {/* Floating Info Panels */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="bg-orange-500/20 p-2.5 rounded-lg text-orange-500">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                    Jaminan Waktu
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    Tepat Sesuai S-Curve
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="bg-blue-500/20 p-2.5 rounded-lg text-blue-400">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                    Kualitas Finishing
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    Rapi, Presisi & Prima
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
