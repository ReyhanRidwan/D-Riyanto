import { PROCESS_STEPS } from '../data';
import { motion } from 'motion/react';
import { CalendarRange, Hammer, ClipboardCheck, Eye, Sparkles, Footprints, ShieldCheck } from 'lucide-react';

const getStepIcon = (step: string) => {
  switch (step) {
    case '01':
      return <CalendarRange className="h-5 w-5 text-orange-500" />;
    case '02':
      return <Footprints className="h-5 w-5 text-orange-500" />;
    case '03':
      return <ClipboardCheck className="h-5 w-5 text-orange-500" />;
    case '04':
      return <Hammer className="h-5 w-5 text-orange-500" />;
    case '05':
      return <Eye className="h-5 w-5 text-orange-500" />;
    default:
      return <Sparkles className="h-5 w-5 text-orange-500" />;
  }
};

export default function Workflow() {
  return (
    <section id="proses" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-mono font-bold tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full uppercase">
            Tahapan Kerja Jelas & Terstruktur
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Alur Kerja Profesional Kami
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-light text-lg">
            Dari perencanaan konsep hingga serah-terima kunci fisik. Kami mengawal setiap tahapan pengerjaan dengan transparansi penuh untuk mengantisipasi ketidaksesuaian.
          </p>
        </div>

        {/* Process Roadmap Timeline */}
        <div className="relative mt-12">
          {/* Central structural connector lane line (hidden on small responsive devices) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-150 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid lg:grid-cols-6 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Visual Connector / Indicator Ring */}
                <div className="relative mb-6">
                  {/* Outer breathing halo */}
                  <div className="absolute -inset-1.5 rounded-full bg-orange-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  
                  {/* Central Node Circle */}
                  <div className="h-16 w-16 rounded-full bg-slate-900 border-4 border-white group-hover:border-orange-500 group-hover:bg-orange-500/5 text-white flex items-center justify-center shadow-md relative z-10 transition-all duration-300">
                    {getStepIcon(item.step)}
                  </div>

                  {/* Absolute visual number index label */}
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow border border-white z-20">
                    Langkah {item.step}
                  </span>
                </div>

                {/* Technical Text content card */}
                <div className="pt-4 px-3">
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
