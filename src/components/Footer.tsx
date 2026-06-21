import { MapPin, Phone, Mail, Clock, Hammer, ExternalLink, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-slate-950 text-white relative border-t border-slate-900 pt-20 pb-8">
      {/* Structural Grids Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Conversational CTA headline */}
        <div className="text-center md:text-left max-w-4xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            MULAI PROYEK ANDA SEKARANG
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Wujudkan Hunian dan Ruang Kerja yang Lebih Baik Bersama <span className="text-orange-500">D'Riyanto</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            Serahkan kebutuhan renovasi rumah atau tata ulang tata letak ruang komersial kantor Anda kepada ahlinya. Pengerjaan rapi, jaminan tepat waktu, komitmen transparansi, dan bergaransi resmi.
          </p>
        </div>

        {/* Layout Grid Details */}
        <div className="grid lg:grid-cols-12 gap-12 pt-12 border-t border-slate-900">
          
          {/* Column 1: Brand & Contact text information */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-2 group self-start">
              <div className="bg-orange-500 p-2 rounded text-white">
                <Hammer className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="font-display text-2xl font-black tracking-wider text-white">
                D'RIYANTO
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Penyedia layanan konstruksi, bangun baru, dan renovasi rumah/kantor premium dengan tim ahli bersertifikat dan pengerjaan bergaransi resmi wilayah Jakarta dan Jabodetabek.
            </p>

            {/* Direct List Cards Details */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-light leading-relaxed">
                  <strong>Kantor Pusat:</strong><br />
                  Jl. Aries Asri V Blok E14, RT.7/RW.8, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11620
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="text-slate-300 font-light">
                  <strong>Telepon / WhatsApp:</strong><br />
                  <a
                    href="https://wa.me/6283892611581"
                    className="text-white hover:text-orange-500 font-bold underline decoration-orange-500 underline-offset-4 transition-all"
                  >
                    083892611581 (Hubungi Sekarang)
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="text-slate-300 font-light">
                  <strong>Jam Operasional Kantor & Lapangan:</strong><br />
                  Senin - Sabtu: 08:00 WIB - 17:00 WIB (Minggu Libur/Janji Temu)
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Directory Links */}
          <div className="lg:col-span-2 text-left hidden sm:flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-400">
              <a href="#beranda" className="hover:text-orange-500 transition-colors">Beranda</a>
              <a href="#layanan" className="hover:text-orange-500 transition-colors">Layanan Utama</a>
              <a href="#keunggulan" className="hover:text-orange-500 transition-colors">Keunggulan Kami</a>
              <a href="#portfolio" className="hover:text-orange-500 transition-colors">Galeri Portfolio</a>
              <a href="#proses" className="hover:text-orange-500 transition-colors">Sistem Proses Kerja</a>
              <a href="#testimoni" className="hover:text-orange-500 transition-colors">Testimoni Klien</a>
              <a href="#kontak" className="hover:text-orange-500 transition-colors">Informasi Kontak</a>
            </div>
          </div>

          {/* Column 3: Google Maps embed container */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase">
                Peta Google Maps Kantor Kami
              </h4>
              <a
                href="https://maps.google.com/?q=Jl.+Aries+Asri+V+Blok+E14,+Meruya+Utara,+Kembangan,+Jakarta+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-400 hover:text-orange-500 flex items-center gap-1 transition-all"
              >
                <span>Buka Aplikasi</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Maps Iframe Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 h-64 lg:h-72 w-full">
              <iframe
                title="Google Maps D'Riyanto Location Meruya Utara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.0!2d106.73231367464229!3d-6.194723060691763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70cdba8ddc9%3A0xc39f9b5ad86fe2bd!2sJl.%20Aries%20Asri%20V%20No.14%2C%20RT.7%2BRW.8%2B%255C%2BNo.E14%2C%20Meruya%20Utara%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat!5e0!3m2!1sid!2sid!4v1782047000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter invert-[90%] grayscale contrast-125"
              />
            </div>
          </div>

        </div>

        {/* Footer legalities and trade standards */}
        <div className="mt-16 pt-8 border-t border-slate-900 text-xs text-slate-500 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-light">
            &copy; {currentYear} D'Riyanto Kontraktor. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4 text-slate-500 font-light">
            <span className="flex items-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5" />
              RAB Transparan
            </span>
            <span className="h-3.5 w-[1px] bg-slate-800" />
            <span>Garansi Pemeliharaan Resmi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
