import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="w-full h-[85vh] relative">
        <Image
          src="/main.jpg"
          alt="Electric Vehicle Charger Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Electric Vehicle Charger Solutions
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-300">
                VoltGo
              </h2>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
                Gelecek nesil elektrikli araç şarj teknolojileri ile sürdürülebilir mobiliteye geçiş yapın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                  DEVAMINI OKU
                </button>
                <a
                  href="/EN-KATALOG.pdf"
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Katalog İndir</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Right Benefits */}
          <div className="absolute bottom-8 right-8 hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <span className="text-lg font-medium">Ücretsiz Nakliye</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span className="text-lg font-medium">Hızlı ve Verimli</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <span className="text-lg font-medium">7/24 Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Benefits */}
      <div className="md:hidden bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <span className="text-lg font-medium">Ücretsiz Nakliye</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span className="text-lg font-medium">Hızlı ve Verimli</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <span className="text-lg font-medium">7/24 Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 