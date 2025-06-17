import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-4xl font-bold mb-8 text-gray-800">Hakkımızda</h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-800">Waltgo</strong>, 2024 yılında VoltGo'nun yetkili bayisi olarak elektrikli araç şarj çözümleri 
              alanında hizmet vermeye başlamıştır. EMRA onaylı şarj ağı operatörü VoltGo'nun kaliteli ürünlerini 
              müşterilerimize sunarak elektrikli mobilite dönüşümünde aktif rol oynamaktayız.
            </p>
            <p>
              DC Hızlı Şarj, AC Şarj İstasyonları ve Wallbox çözümleri ile hem bireysel hem de kurumsal 
              müşterilerimize en uygun şarj altyapısını sağlıyoruz. Gelişmiş teknoloji ve güvenilir hizmet 
              anlayışımızla sektörde öncü konumumuzu sürdürüyoruz.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              DEVAMINI OKU
            </button>
          </div>
        </div>

        {/* Where are we Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Neredeyiz?</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Waltgo olarak İstanbul merkezli hizmet veriyoruz. VoltGo'nun Adana Hacı Sabancı OSB'de 
              bulunan 65.000 m² toplam alana sahip modern üretim tesislerinde üretilen ürünleri, 
              müşterilerimize en hızlı ve güvenilir şekilde ulaştırıyoruz. Geniş hizmet ağımız ile 
              tüm Marmara bölgesinde teknik destek ve kurulum hizmeti sağlamaktayız.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/1.jpg"
                  alt="VoltGo Üretim Tesisi"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <div className="flex space-x-2">
                  <div className="w-16 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/voltgo-1.png"
                      alt="VoltGo"
                      width={40}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">BETA</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/2.jpg"
                  alt="Şarj İstasyonu Teknolojisi"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-md w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Station Types */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DC Charging */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">DC – Hızlı Şarj İstasyonu</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                İşletme sahipleri için ideal olan DC hızlı şarj istasyonları, yüksek güç kapasitesi ile 
                elektrikli araçları kısa sürede şarj etme imkanı sunar. Ticari kullanım için optimize edilmiş 
                bu çözümler, gelir getirici yatırım fırsatları yaratır.
              </p>
            </div>

            {/* AC Charging */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">AC – Şarj İstasyonu</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tüm uygulamalar için ideal olan AC şarj istasyonları, konut, ofis ve kamu alanları için 
                mükemmel çözümler sunar. Maliyet etkin ve güvenilir bu sistemler, günlük şarj ihtiyaçlarını 
                karşılamak için tasarlanmıştır.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate and Commercial Solutions */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Kurumsal ve Ticari Çözümler</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Waltgo olarak, VoltGo'nun kurumsal ve ticari çözümlerini müşterilerimize sunuyoruz. 
            Gelir modeli odaklı yaklaşımımızla, şarj istasyonu yatırımlarınızın karlılığını maksimize ediyoruz. 
            Finansal danışmanlık, teknik destek ve sürekli bakım hizmetlerimizle, elektrikli araç şarj 
            altyapınızı güvenle işletebilirsiniz. Kurumsal müşterilerimize özel fiyatlandırma ve 
            esnek ödeme seçenekleri sunarak, sürdürülebilir enerji dönüşümünde iş ortağınız oluyoruz.
          </p>
        </div>

        {/* Values Section with background */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/infobox-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="relative z-10 py-16 px-8">
            <h4 className="text-3xl font-bold text-center mb-12 text-white">Değerlerimiz</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h5 className="text-xl font-semibold mb-3">İnovasyon</h5>
                <p className="opacity-90">VoltGo'nun en son teknolojilerini takip ederek yenilikçi çözümler sunuyoruz.</p>
              </div>
              
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h5 className="text-xl font-semibold mb-3">Kalite</h5>
                <p className="opacity-90">VoltGo'nun yüksek kalite standartlarında ürün ve hizmet garantisi veriyoruz.</p>
              </div>
              
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h5 className="text-xl font-semibold mb-3">Sürdürülebilirlik</h5>
                <p className="opacity-90">Çevre dostu çözümlerle gelecek nesillere temiz bir dünya bırakıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 