import { ArrowUpRight, Check, Hammer, Home, LayoutList, Ruler, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data';
import { motion } from 'motion/react';

// Help helper to match custom icons for specific card category
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'renovasi-rumah':
      return <Home className="h-6 w-6 text-orange-500" />;
    case 'renovasi-kantor':
      return <LayoutList className="h-6 w-6 text-orange-500" />;
    case 'bangun-rumah':
      return <Hammer className="h-6 w-6 text-orange-500" />;
    case 'interior-rumah':
      return <Ruler className="h-6 w-6 text-orange-500" />;
    case 'interior-kantor':
      return <Sparkles className="h-6 w-6 text-orange-500" />;
    default:
      return <Hammer className="h-6 w-6 text-orange-500" />;
  }
};

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-white relative">
      {/* Light structural decoration */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-mono font-bold tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full uppercase">
            Layanan Spesialisasi Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Solusi Konstruksi & Renovasi Terintegrasi
          </h2>
          <p className="text-slate-600 mt-4 text-lg font-light">
            Kami mengutamakan kualitas pengerjaan struktural tingkat tinggi dan sentuhan finishing estetik untuk mewujudkan visi bangunan ideal Anda.
          </p>
        </div>

        {/* Grid Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const waMessage = encodeURIComponent(
              `Halo D'Riyanto, saya tertarik dengan jasa *${service.title}* Anda. Ingin berkonsultasi mengenai estimasi pengerjaan dan survey lokasi.`
            );
            const waUrl = `https://wa.me/6283892611581?text=${waMessage}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Icon Box */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Info / Spec Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Spec Checklist */}
                  <div className="mt-5 space-y-2 flex-grow">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Action button */}
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-slate-800 hover:text-orange-500 font-display font-bold text-xs uppercase tracking-wider group/link"
                    >
                      <span>Tanya Layanan Ini</span>
                      <div className="h-8 w-8 rounded-full bg-slate-100 group-hover/link:bg-orange-500 group-hover/link:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
