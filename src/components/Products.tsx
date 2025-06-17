import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Ayrık Üniteli Şarj Cihazı",
    description: "Yüksek performanslı ayrık üniteli elektrikli araç şarj çözümü. Modüler tasarımı ile farklı kapasitelerde kullanılabilir.",
    image: "/AYRIK-UNITELI-1-540x640.jpg",
    features: ["Modüler tasarım", "Yüksek verimlilik", "Kolay kurulum"],
    power: "7-22 kW"
  },
  {
    id: 2,
    name: "DC Şarj Cihazı",
    description: "Hızlı şarj için DC şarj istasyonu çözümü. Ticari kullanım için ideal.",
    image: "/DC-Cihazı.jpg",
    features: ["Hızlı şarj", "CCS/CHAdeMO desteği", "Akıllı ödeme sistemi"],
    power: "50-150 kW"
  },
  {
    id: 3,
    name: "Süper Hızlı Şarj Cihazı",
    description: "En hızlı şarj teknolojisi ile donatılmış cihaz. Ultra hızlı şarj deneyimi sunar.",
    image: "/SUPER-HIZLI-1-540x640.jpg",
    features: ["Ultra hızlı şarj", "Gelişmiş soğutma", "Uzaktan izleme"],
    power: "150-350 kW"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Ürün Portföyümüz</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VoltGo'nun en gelişmiş elektrikli araç şarj çözümlerini keşfedin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.power}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{product.name}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Özellikler:</h5>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/EN-KATALOG.pdf"
            target="_blank"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <span>Tüm Ürünler için Katalog İndir</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 