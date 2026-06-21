import React, { useState } from 'react';
import { IMAGES, PortfolioItem } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Minimize2 } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'semua' | 'rumah' | 'kantor'>('semua');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const portfolioList = IMAGES.portfolio;

  // Filter items
  const filteredItems = filter === 'semua' 
    ? portfolioList 
    : portfolioList.filter(item => item.category === filter);

  // Lightbox handlers
  const openPhoto = (itemUrl: string) => {
    const idx = portfolioList.findIndex(p => p.image === itemUrl);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
    }
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      const nextIdx = (selectedPhotoIndex + 1) % portfolioList.length;
      setSelectedPhotoIndex(nextIdx);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      const prevIdx = (selectedPhotoIndex - 1 + portfolioList.length) % portfolioList.length;
      setSelectedPhotoIndex(prevIdx);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-mono font-bold tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full uppercase">
              Galeri Portofolio Nyata
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
              Bukti Kualitas Pekerjaan Kami
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl font-light">
              Foto-foto dokumentasi langsung dari lapangan. Semua aset asli dibuat eksklusif mewakili kualitas pengerjaan tim ahli kami.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl self-start">
            <button
              onClick={() => setFilter('semua')}
              className={`px-4 py-2.5 rounded-lg text-xs font-display font-black tracking-wider uppercase transition-colors ${
                filter === 'semua'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setFilter('rumah')}
              className={`px-4 py-2.5 rounded-lg text-xs font-display font-black tracking-wider uppercase transition-colors ${
                filter === 'rumah'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Proyek Rumah
            </button>
            <button
              onClick={() => setFilter('kantor')}
              className={`px-4 py-2.5 rounded-lg text-xs font-display font-black tracking-wider uppercase transition-colors ${
                filter === 'kantor'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Proyek Kantor
            </button>
          </div>
        </div>

        {/* Gallery Grid items with Masonry and animations */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openPhoto(item.image)}
              >
                {/* Image element */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top action indicator */}
                  <div className="flex justify-end">
                    <div className="h-10 w-10 bg-white/15 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom descriptive attributes */}
                  <div className="text-left">
                    <span className="text-xs font-mono font-medium text-orange-400 uppercase tracking-widest bg-orange-900/40 px-2 py-0.5 rounded border border-orange-500/20">
                      {item.category === 'rumah' ? 'Residensial' : 'Komersial / Kantor'}
                    </span>
                    <h3 className="text-base font-display font-bold text-white mt-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-3 text-slate-300 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                        {item.location}
                      </span>
                      <span className="h-3 w-[1px] bg-white/20" />
                      <span>Luas: {item.size}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
              onClick={closePhoto}
            >
              {/* Close Button */}
              <button
                onClick={closePhoto}
                className="absolute top-6 right-6 p-3 bg-slate-900/80 hover:bg-orange-500 border border-white/10 rounded-full text-white transition-colors"
                aria-label="Tutup Galeri"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Prev and Next Controls */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-500 border border-white/10 rounded-full text-white transition-colors"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-500 border border-white/10 rounded-full text-white transition-colors"
                aria-label="Selanjutnya"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Central Lightbox Visual Container */}
              <div 
                className="relative max-w-4xl w-full flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl relative"
                >
                  <img
                    src={portfolioList[selectedPhotoIndex].image}
                    alt={portfolioList[selectedPhotoIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                </motion.div>

                {/* Subtitle / Meta */}
                <div className="bg-slate-900/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl text-left text-white">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono font-medium text-orange-400 uppercase tracking-widest bg-orange-950/50 border border-orange-500/20 px-2.5 py-1 rounded">
                        {portfolioList[selectedPhotoIndex].category === 'rumah' ? 'Pekerjaan Rumah' : 'Pekerjaan Kantor'}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black text-white mt-3">
                        {portfolioList[selectedPhotoIndex].title}
                      </h3>
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        {portfolioList[selectedPhotoIndex].description}
                      </p>
                    </div>

                    <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6 text-sm shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="h-4 w-4 text-orange-500 shrink-0" />
                        <span>{portfolioList[selectedPhotoIndex].location}</span>
                      </div>
                      <div className="text-slate-400">
                        Tipe Ukuran: <strong className="text-white">{portfolioList[selectedPhotoIndex].size}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
