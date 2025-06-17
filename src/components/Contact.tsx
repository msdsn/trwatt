import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">İletişim</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VoltGo ürünleri hakkında bilgi almak ve teknik destek için bizimle iletişime geçin
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-semibold mb-8 text-gray-800">Bizimle İletişime Geçin</h4>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Adres</h5>
                  <p className="text-gray-600">Maslak Mahallesi, Büyükdere Cd. No:123<br />Sarıyer/İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Telefon</h5>
                  <p className="text-gray-600">+90 (212) 555 0123<br />+90 (555) 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">E-posta</h5>
                  <p className="text-gray-600">info@waltgo.com<br />destek@waltgo.com</p>
                </div>
              </div>
            </div>
            
            {/* VoltGo Reference */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h5 className="font-semibold mb-4 text-gray-800 flex items-center">
                <Image
                  src="/voltgo-1.png"
                  alt="VoltGo"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                VoltGo Merkez İletişim
              </h5>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Telefon:</span>
                  <span className="font-medium">444 85 87</span>
                </div>
                <div className="flex justify-between">
                  <span>E-posta:</span>
                  <span className="font-medium">info@voltgo.com.tr</span>
                </div>
                <div className="flex justify-between">
                  <span>Adres:</span>
                  <span className="font-medium text-sm">Acıdere OSB Mah. Çanakkale Cad. No: 15<br />Sarıçam / ADANA</span>
                </div>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h5 className="font-semibold mb-4 text-gray-800">Çalışma Saatleri</h5>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-medium text-red-500">Kapalı</span>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-gray-800">Konumumuz</h5>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/mapp.png"
                  alt="Waltgo Bayi Konum Haritası"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/10 hover:bg-blue-600/20 transition-colors cursor-pointer"></div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Bize Yazın</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Soyadınız"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              
              <input
                type="tel"
                placeholder="Telefon Numaranız"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              
              <select className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                <option value="">Konu Seçiniz</option>
                <option value="urun-bilgi">VoltGo Ürün Bilgileri</option>
                <option value="teknik-destek">Teknik Destek</option>
                <option value="bayi-basvuru">Bayi Başvurusu</option>
                <option value="fiyat-teklifi">Fiyat Teklifi</option>
                <option value="kurulum">Kurulum Hizmeti</option>
                <option value="genel">Genel Sorular</option>
              </select>
              
              <textarea
                placeholder="Mesajınız"
                rows={6}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 