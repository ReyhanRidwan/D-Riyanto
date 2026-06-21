import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Keunggulan from './components/Keunggulan';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Promo from './components/Promo';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <div id="main-landing-app" className="min-h-screen bg-white">
      {/* Interactive Sticky Header */}
      <Navbar />

      {/* Main Structural Page Flow */}
      <main id="app-sections">
        {/* Hero Segment */}
        <Hero />

        {/* Core Services */}
        <Services />

        {/* Advantage Highlights */}
        <Keunggulan />

        {/* Lightbox Filter Portfolio Gallery */}
        <Portfolio />

        {/* Progress Roadmap Workflow */}
        <Workflow />

        {/* True Customer Reviews */}
        <Testimonials />

        {/* Limited Offer Conversion Banner */}
        <Promo />
      </main>

      {/* Detailed footer directory and map */}
      <Footer />

      {/* Pulsing overlay WhatsApp triggers */}
      <FloatingWA />
    </div>
  );
}
