import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MobileApp from '@/components/MobileApp';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <MobileApp />
      <Products />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
