import { useState, useEffect } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Proses Kerja', href: '#proses' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-2 group">
              <div className="bg-orange-500 p-2 rounded text-white group-hover:bg-orange-600 transition-colors">
                <Hammer className="h-6 w-6 stroke-[2.5]" id="logo-icon" />
              </div>
              <span className="font-display text-2xl font-black tracking-wider text-white">
                D'RIYANTO
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://wa.me/6283892611581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 font-display font-bold text-sm text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4" />
                Konsultasi Gratis
              </a>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-out Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-slate-900/95 backdrop-blur-lg lg:hidden px-6 py-8 border-t border-white/5"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-white hover:text-orange-500 transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="https://wa.me/6283892611581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 font-display font-bold text-white shadow-xl shadow-orange-500/25 text-center"
                >
                  <Phone className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href="#kontak"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border border-white/20 hover:border-white/40 text-white font-medium hover:text-orange-500 text-center py-3.5 rounded-xl transition-all"
                >
                  Temukan Alamat Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
