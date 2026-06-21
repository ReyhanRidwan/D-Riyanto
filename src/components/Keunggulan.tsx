import { CheckCircle2, ShieldCheck, ClipboardCheck, Clock, Users, MapPin, BadgeCheck, MessageSquareMore } from 'lucide-react';
import { KEUNGGULAN } from '../data';
import { motion } from 'motion/react';

// Maps custom icon indicators for advantages
const getAdvantageIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Users className="h-6 w-6 text-orange-500" />;
    case 1:
      return <BadgeCheck className="h-6 w-6 text-orange-500" />;
    case 2:
      return <ClipboardCheck className="h-6 w-6 text-orange-500" />;
    case 3:
      return <ShieldCheck className="h-6 w-6 text-orange-500" />;
    case 4:
      return <Clock className="h-6 w-6 text-orange-500" />;
    case 5:
      return <MapPin className="h-6 w-6 text-orange-500" />;
    case 6:
      return <CheckCircle2 className="h-6 w-6 text-orange-500" />;
    case 7:
      return <MessageSquareMore className="h-6 w-6 text-orange-500" />;
    default:
      return <CheckCircle2 className="h-6 w-6 text-orange-500" />;
  }
};

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative dark lighting accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full uppercase">
              KOMITMEN UTAMA KAMI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Mengapa Memilih Jasa Kontraktor D'Riyanto?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              Membangun atau merenovasi adalah investasi besar. Kami memberikan proses pengerjaan bebas stres dengan jaminan hukum, transparansi biaya, arsitektur kokoh, dan tim lapangan yang kooperatif.
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEUNGGULAN.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-orange-500/20 hover:bg-slate-800 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                {getAdvantageIcon(index)}
              </div>
              
              <div>
                <h3 className="font-display text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Help WhatsApp line Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-display text-2xl font-bold text-white">
              Butuh konsultasi atau ingin mengukur lokasi?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Hubungi tim kami hari ini untuk menjadwalkan kunjungan survey gratis tanpa biaya perjalanan.
            </p>
          </div>
          <a
            href="https://wa.me/6283892611581"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 font-display font-semibold text-sm text-white shadow-lg transition-colors shrink-0"
          >
            Hubungi Customer Care (D'Riyanto)
          </a>
        </div>

      </div>
    </section>
  );
}
