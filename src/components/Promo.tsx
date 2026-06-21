import { Phone, CheckCircle, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

export default function Promo() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call-to-action Promo Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative p-8 md:p-14 text-white hover:border-orange-500/20 transition-all duration-300"
        >
          {/* Subtle light effect circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Promo text details */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full self-start">
                🎉 PROMO TERBATAS BULAN INI
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Konsultasi Rencana & Survey Lokasi <span className="text-orange-500">100% GRATIS!</span>
              </h2>
              
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                Hubungi kami sekarang untuk mendapatkan estimasi biaya renovasi atau pembangunan. Tim teknis D'Riyanto siap datang langsung mengukur ruang dan berdiskusi menyusun Rencana Anggaran Biaya (RAB) yang transparan.
              </p>

              {/* Check highlights */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-orange-505 text-orange-500 shrink-0" />
                  <span>Tanpa Biaya Perjalanan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Estimasi RAB Presisi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Konsultasi Desain Awal</span>
                </div>
              </div>
            </div>

            {/* Quick conversions buttons panel */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              <a
                href="https://wa.me/6283892611581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 font-display font-bold text-white text-lg shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-5 w-5 shrink-0" />
                Mulai Survey Gratis
              </a>
              <a
                href="#kontak"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-white/20 hover:border-orange-500/50 bg-white/5 hover:bg-white/10 font-display font-medium text-white text-base transition-colors"
              >
                <Calculator className="h-5 w-5 text-gray-400" />
                Tanya Simulasi RAB
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
