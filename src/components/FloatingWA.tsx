import { PhoneCall, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show premium tooltip after 4 seconds to grab users' attention subtly
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Delayed attention-grabbing floating message bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-2 max-w-xs shrink-0 select-none cursor-pointer"
            onClick={() => window.open('https://wa.me/6283892611581', '_blank')}
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>Tanya estimasi renovasi & bangun sekarang?</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 font-bold ml-1 text-[10px]"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Anchor Action */}
      <motion.a
        href="https://wa.me/6283892611581"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-2xl glow-effect relative group"
        aria-label="Chat WhatsApp D'Riyanto"
      >
        {/* Pulse Ring Halo Background */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/20 animate-ping -z-10" />

        {/* Dynamic Icon */}
        <MessageCircle className="h-7 w-7 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
