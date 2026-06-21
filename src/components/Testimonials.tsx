import { Star, Quote, Building2, User } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full uppercase">
            Kepuasan Klien Adalah Utama
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Apa Kata Pemilik Hunian & Kantor?
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed font-light text-lg">
            Kepercayaan tulus yang dibangun melalui ketetapan waktu selesai pro-aktif, kecermatan detail, dan transparansi laporan anggaran.
          </p>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/40 border border-white/5 hover:border-orange-500/20 hover:bg-slate-800/70 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Score & Quote icon row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-orange-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 stroke-none" />
                    ))}
                  </div>

                  {/* Decorative quotes */}
                  <Quote className="h-10 w-10 text-white/5 shrink-0 rotate-180" />
                </div>

                {/* Main Quote Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-light mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {/* Vector Person Avatar Indicator (Building Vs User icon based on category) */}
                <div className="h-12 w-12 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  {review.role.toLowerCase().includes('kantor') || review.role.toLowerCase().includes('klinik') ? (
                    <Building2 className="h-5 w-5" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </div>

                <div className="text-left">
                  <h4 className="font-display font-bold text-white text-base leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5 font-light">
                    {review.role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-mono tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded uppercase font-bold">
                    {review.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
