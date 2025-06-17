import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "VoltGo Şarj İstasyonu",
    title: "Modern Şarj İstasyonları"
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Elektrikli Araç Şarj",
    title: "Gelişmiş Teknoloji"
  },
  {
    id: 3,
    src: "/AYRIK-UNITELI-1-540x640.jpg",
    alt: "Ayrık Üniteli Cihaz",
    title: "Ayrık Üniteli Çözümler"
  },
  {
    id: 4,
    src: "/DC-Cihazı.jpg",
    alt: "DC Hızlı Şarj",
    title: "DC Hızlı Şarj Teknolojisi"
  },
  {
    id: 5,
    src: "/SUPER-HIZLI-1-540x640.jpg",
    alt: "Süper Hızlı Şarj",
    title: "Ultra Hızlı Şarj Çözümleri"
  },
  {
    id: 6,
    src: "/main.jpg",
    alt: "VoltGo Genel",
    title: "VoltGo Ekosistemi"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Galeri</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VoltGo ürünleri ve şarj istasyonlarından görüntüler
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Daha Fazla Görüntü
          </button>
        </div>
      </div>
    </section>
  );
} 