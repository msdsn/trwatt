"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Header
    'nav.home': 'ANA SAYFA',
    'nav.corporate': 'KURUMSAL',
    'nav.solutions': 'ÇÖZÜMLERİMİZ',
    'nav.products': 'ÜRÜNLER',
    'nav.stations': 'ŞARJ İSTASYONLARI',
    'nav.gallery': 'GALERİ',
    'nav.catalog': 'KATALOG',
    'nav.contact': 'İLETİŞİM',
    'nav.about': 'Hakkımızda',
    'nav.values': 'Değerlerimiz',
    'nav.policies': 'Politikalarımız',
    
    // Hero
    'hero.title': 'Elektrikli Araç Şarj Çözümleri',
    'hero.subtitle': 'VOLTGO',
    'hero.description': 'Gelecek nesil elektrikli araç şarj teknolojileri ile sürdürülebilir mobiliteye geçiş yapın.',
    'hero.readMore': 'DEVAMINI OKU',
    'hero.downloadCatalog': 'Katalog İndir',
    'hero.benefit1': 'Ücretsiz Nakliye',
    'hero.benefit2': 'Hızlı ve Verimli',
    'hero.benefit3': '7/24 Aktif',
    
    // Mobile App
    'mobileApp.title': 'VOLTGO Mobile App –',
    'mobileApp.subtitle': 'Şimdi İndirin',
    'mobileApp.description': 'VOLTGO mobil uygulaması ile elektrikli araç şarj istasyonlarını kolayca bulun, şarj işlemlerinizi yönetin ve gerçek zamanlı bilgilere erişin.',
    'mobileApp.feature1': 'Ücretsiz ve Erişilebilir',
    'mobileApp.feature1Desc': 'Tamamen ücretsiz kullanım',
    'mobileApp.feature2': 'Anlaşılır ve Faydalı',
    'mobileApp.feature2Desc': 'Kolay kullanım arayüzü',
    'mobileApp.feature3': 'Güvenli ve Dikkatli',
    'mobileApp.feature3Desc': 'Verileriniz güvende',
    
    // Products
    'products.title': 'Ürün Portföyümüz',
    'products.subtitle': 'VOLTGO\'nun en gelişmiş elektrikli araç şarj çözümlerini keşfedin',
    'products.product1': 'Ayrık Üniteli Şarj Cihazı',
    'products.product1Desc': 'Yüksek performanslı ayrık üniteli elektrikli araç şarj çözümü. Modüler tasarımı ile farklı kapasitelerde kullanılabilir.',
    'products.product2': 'DC Şarj Cihazı',
    'products.product2Desc': 'Hızlı şarj için DC şarj istasyonu çözümü. Ticari kullanım için ideal.',
    'products.product3': 'Süper Hızlı Şarj Cihazı',
    'products.product3Desc': 'En hızlı şarj teknolojisi ile donatılmış cihaz. Ultra hızlı şarj deneyimi sunar.',
    'products.detailInfo': 'Detaylı Bilgi',
    'products.allCatalog': 'Tüm Ürünler için Katalog İndir',
    
    // About
    'about.title': 'Hakkımızda',
    'about.description1': 'TRWATT, 2024 yılında VOLTGO\'nun yetkili bayisi olarak elektrikli araç şarj çözümleri alanında hizmet vermeye başlamıştır. EMRA onaylı şarj ağı operatörü VOLTGO\'nun kaliteli ürünlerini müşterilerimize sunarak elektrikli mobilite dönüşümünde aktif rol oynamaktayız.',
    'about.description2': 'DC Hızlı Şarj, AC Şarj İstasyonları ve Wallbox çözümleri ile hem bireysel hem de kurumsal müşterilerimize en uygun şarj altyapısını sağlıyoruz. Gelişmiş teknoloji ve güvenilir hizmet anlayışımızla sektörde öncü konumumuzu sürdürüyoruz.',
    'about.whereTitle': 'Neredeyiz?',
    'about.whereDesc': 'TRWATT olarak İstanbul merkezli hizmet veriyoruz. VOLTGO\'nun Adana Hacı Sabancı OSB\'de bulunan 65.000 m² toplam alana sahip modern üretim tesislerinde üretilen ürünleri, müşterilerimize en hızlı ve güvenilir şekilde ulaştırıyoruz.',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'VOLTGO ürünleri hakkında bilgi almak ve teknik destek için bizimle iletişime geçin',
    'contact.getInTouch': 'Bizimle İletişime Geçin',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.workingHours': 'Çalışma Saatleri',
    'contact.location': 'Konumumuz',
    'contact.writeUs': 'Bize Yazın',
    'contact.firstName': 'Adınız',
    'contact.lastName': 'Soyadınız',
    'contact.emailAddress': 'E-posta Adresiniz',
    'contact.phoneNumber': 'Telefon Numaranız',
    'contact.subject': 'Konu Seçiniz',
    'contact.message': 'Mesajınız',
    'contact.sendMessage': 'Mesaj Gönder',
    
    // Footer
    'footer.partnership': 'TRWATT & VOLTGO Ortaklığı - Elektrikli Mobilite Geleceği için Güçlü İş Birliği',
    'footer.description': 'VOLTGO\'nun yetkili bayisi olarak elektrikli araç şarj çözümlerinde güvenilir hizmet sunuyoruz.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.services': 'Hizmetlerimiz',
    'footer.rights': '2024 TRWATT - VOLTGO Yetkili Bayisi. Tüm hakları saklıdır.',
    
    // Company Info
    'company.name': 'TRWATT',
    'company.tagline': 'VOLTGO Yetkili Bayisi',
    
    // Services
    'services.dcFastCharging': 'DC Hızlı Şarj Çözümleri',
    'services.acChargingStations': 'AC Şarj İstasyonları',
    'services.wallboxSystems': 'Wallbox Sistemleri',
    'services.technicalSupport': 'Teknik Destek',
    'services.installationMaintenance': 'Kurulum & Bakım',
    
    // Legal
    'legal.privacyPolicy': 'Gizlilik Politikası',
    'legal.termsOfUse': 'Kullanım Şartları',
    'legal.cookiePolicy': 'Çerez Politikası',
    
    // Products - Features
    'features.modularDesign': 'Modüler tasarım',
    'features.highEfficiency': 'Yüksek verimlilik', 
    'features.easyInstallation': 'Kolay kurulum',
    'features.fastCharging': 'Hızlı şarj',
    'features.ccsSupport': 'CCS/CHAdeMO desteği',
    'features.smartPayment': 'Akıllı ödeme sistemi',
    'features.ultraFastCharging': 'Ultra hızlı şarj',
    'features.advancedCooling': 'Gelişmiş soğutma',
    'features.remoteMonitoring': 'Uzaktan izleme',
    'features.title': 'Özellikler:',
    
    // Solutions Submenu
    'solutions.dcFastCharging': 'DC Hızlı Şarj',
    'solutions.acChargingStation': 'AC Şarj İstasyonu',
    'solutions.wallboxSolutions': 'Wallbox Çözümleri',
    'solutions.corporateSolutions': 'Kurumsal Çözümler',
    'solutions.commercialSolutions': 'Ticari Çözümler',
    
    // Gallery
    'gallery.title': 'Galeri',
    'gallery.subtitle': 'VOLTGO ürünleri ve şarj istasyonlarından görüntüler',
    'gallery.moreImages': 'Daha Fazla Görüntü',
    'gallery.image1Title': 'Modern Şarj İstasyonları',
    'gallery.image2Title': 'Gelişmiş Teknoloji',
    'gallery.image3Title': 'Ayrık Üniteli Çözümler',
    'gallery.image4Title': 'DC Hızlı Şarj Teknolojisi',
    'gallery.image5Title': 'Ultra Hızlı Şarj Çözümleri',
    'gallery.image6Title': 'VOLTGO Ekosistemi',
    
    // About - Station Cards & Values
    'stationCard.dcTitle': 'DC – Hızlı Şarj İstasyonu',
    'stationCard.dcDesc': 'İşletme sahipleri için ideal olan DC hızlı şarj istasyonları, yüksek güç kapasitesi ile elektrikli araçları kısa sürede şarj etme imkanı sunar. Ticari kullanım için optimize edilmiş bu çözümler, gelir getirici yatırım fırsatları yaratır.',
    'stationCard.acTitle': 'AC – Şarj İstasyonu',
    'stationCard.acDesc': 'Tüm uygulamalar için ideal olan AC şarj istasyonları, konut, ofis ve kamu alanları için mükemmel çözümler sunar. Maliyet etkin ve güvenilir bu sistemler, günlük şarj ihtiyaçlarını karşılamak için tasarlanmıştır.',
    'about.corporateTitle': 'Kurumsal ve Ticari Çözümler',
    'about.corporateDesc': 'TRWATT olarak, VOLTGO\'nun kurumsal ve ticari çözümlerini müşterilerimize sunuyoruz. Gelir modeli odaklı yaklaşımımızla, şarj istasyonu yatırımlarınızın karlılığını maksimize ediyoruz. Finansal danışmanlık, teknik destek ve sürekli bakım hizmetlerimizle, elektrikli araç şarj altyapınızı güvenle işletebilirsiniz. Kurumsal müşterilerimize özel fiyatlandırma ve esnek ödeme seçenekleri sunarak, sürdürülebilir enerji dönüşümünde iş ortağınız oluyoruz.',
    'about.valuesTitle': 'Değerlerimiz',
    'values.innovation': 'İnovasyon',
    'values.innovationDesc': 'VOLTGO\'nun en son teknolojilerini takip ederek yenilikçi çözümler sunuyoruz.',
    'values.quality': 'Kalite',
    'values.qualityDesc': 'VOLTGO\'nun yüksek kalite standartlarında ürün ve hizmet garantisi veriyoruz.',
    'values.sustainability': 'Sürdürülebilirlik',
    'values.sustainabilityDesc': 'Çevre dostu çözümlerle gelecek nesillere temiz bir dünya bırakıyoruz.',
    
    // Contact - VOLTGO Center & Working Hours
    'contact.voltgoCenter': 'VOLTGO Merkez İletişim',
    'contact.phone2': 'Telefon:',
    'contact.email2': 'E-posta:',
    'contact.address2': 'Adres:',
    'contact.monday': 'Pazartesi - Cuma:',
    'contact.saturday': 'Cumartesi:',
    'contact.sunday': 'Pazar:',
    'contact.closed': 'Kapalı',
    'contact.whatsapp': 'WhatsApp ile iletişime geç',
    
    // Contact Form Options
    'contact.productInfo': 'VOLTGO Ürün Bilgileri',
    'contact.technicalSupport': 'Teknik Destek',
    'contact.dealerApplication': 'Bayi Başvurusu',
    'contact.priceQuote': 'Fiyat Teklifi',
    'contact.installationService': 'Kurulum Hizmeti',
    'contact.generalQuestions': 'Genel Sorular',
    
    // Mobile App - Station Info
    'mobileApp.nearestStation': 'En Yakın İstasyon',
    'mobileApp.dcFastCharging': 'DC Hızlı Şarj',
    'mobileApp.available': 'Müsait',
    
    // Header Mobile
    'header.language': 'Dil:'
  },
  en: {
    // Header
    'nav.home': 'HOME',
    'nav.corporate': 'CORPORATE',
    'nav.solutions': 'OUR SOLUTIONS',
    'nav.products': 'PRODUCTS',
    'nav.stations': 'CHARGING STATIONS',
    'nav.gallery': 'GALLERY',
    'nav.catalog': 'CATALOG',
    'nav.contact': 'CONTACT',
    'nav.about': 'About Us',
    'nav.values': 'Our Values',
    'nav.policies': 'Our Policies',
    
    // Hero
    'hero.title': 'Electric Vehicle Charger Solutions',
    'hero.subtitle': 'VOLTGO',
    'hero.description': 'Transition to sustainable mobility with next-generation electric vehicle charging technologies.',
    'hero.readMore': 'READ MORE',
    'hero.downloadCatalog': 'Download Catalog',
    'hero.benefit1': 'Free Transportation',
    'hero.benefit2': 'Fast and Efficient',
    'hero.benefit3': '24/7 Active',
    
    // Mobile App
    'mobileApp.title': 'VOLTGO Mobile App –',
    'mobileApp.subtitle': 'Download Now',
    'mobileApp.description': 'Easily find electric vehicle charging stations, manage your charging operations and access real-time information with the VOLTGO mobile application.',
    'mobileApp.feature1': 'Free and Accessible',
    'mobileApp.feature1Desc': 'Completely free to use',
    'mobileApp.feature2': 'Understandable and Useful',
    'mobileApp.feature2Desc': 'Easy-to-use interface',
    'mobileApp.feature3': 'Safe and Careful',
    'mobileApp.feature3Desc': 'Your data is safe',
    
    // Products
    'products.title': 'Our Product Portfolio',
    'products.subtitle': 'Discover VOLTGO\'s most advanced electric vehicle charging solutions',
    'products.product1': 'Separate Unit Charging Device',
    'products.product1Desc': 'High-performance separate unit electric vehicle charging solution. Can be used in different capacities with its modular design.',
    'products.product2': 'DC Charging Device',
    'products.product2Desc': 'DC charging station solution for fast charging. Ideal for commercial use.',
    'products.product3': 'Super Fast Charging Device',
    'products.product3Desc': 'Device equipped with the fastest charging technology. Provides ultra-fast charging experience.',
    'products.detailInfo': 'Detailed Information',
    'products.allCatalog': 'Download Catalog for All Products',
    
    // About
    'about.title': 'About Us',
    'about.description1': 'TRWATT started serving in the field of electric vehicle charging solutions as an authorized dealer of VOLTGO in 2024. We play an active role in the electric mobility transformation by offering quality products of VOLTGO, an EMRA-approved charging network operator, to our customers.',
    'about.description2': 'We provide the most suitable charging infrastructure to both individual and corporate customers with DC Fast Charging, AC Charging Stations and Wallbox solutions. We maintain our leading position in the sector with our advanced technology and reliable service approach.',
    'about.whereTitle': 'Where are we?',
    'about.whereDesc': 'As TRWATT, we provide services based in Istanbul. We deliver the products produced in VOLTGO\'s modern production facilities with a total area of 65,000 m² located in Adana Hacı Sabancı OSB to our customers in the fastest and most reliable way.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us for information about VOLTGO products and technical support',
    'contact.getInTouch': 'Get In Touch With Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'E-mail',
    'contact.workingHours': 'Working Hours',
    'contact.location': 'Our Location',
    'contact.writeUs': 'Write to Us',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.emailAddress': 'Your Email Address',
    'contact.phoneNumber': 'Your Phone Number',
    'contact.subject': 'Select Subject',
    'contact.message': 'Your Message',
    'contact.sendMessage': 'Send Message',
    
    // Footer
    'footer.partnership': 'TRWATT & VOLTGO Partnership - Strong Collaboration for Electric Mobility Future',
    'footer.description': 'As an authorized dealer of VOLTGO, we provide reliable service in electric vehicle charging solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.rights': '2024 TRWATT - VOLTGO Authorized Dealer. All rights reserved.',
    
    // Company Info
    'company.name': 'TRWATT',
    'company.tagline': 'VOLTGO Authorized Dealer',
    
    // Services
    'services.dcFastCharging': 'DC Fast Charging Solutions',
    'services.acChargingStations': 'AC Charging Stations',
    'services.wallboxSystems': 'Wallbox Systems',
    'services.technicalSupport': 'Technical Support',
    'services.installationMaintenance': 'Installation & Maintenance',
    
    // Legal
    'legal.privacyPolicy': 'Privacy Policy',
    'legal.termsOfUse': 'Terms of Use',
    'legal.cookiePolicy': 'Cookie Policy',
    
    // Products - Features
    'features.modularDesign': 'Modular Design',
    'features.highEfficiency': 'High Efficiency',
    'features.easyInstallation': 'Easy Installation',
    'features.fastCharging': 'Fast Charging',
    'features.ccsSupport': 'CCS/CHAdeMO Support',
    'features.smartPayment': 'Smart Payment System',
    'features.ultraFastCharging': 'Ultra Fast Charging',
    'features.advancedCooling': 'Advanced Cooling',
    'features.remoteMonitoring': 'Remote Monitoring',
    'features.title': 'Features:',
    
    // Solutions Submenu
    'solutions.dcFastCharging': 'DC Fast Charging',
    'solutions.acChargingStation': 'AC Charging Station',
    'solutions.wallboxSolutions': 'Wallbox Solutions',
    'solutions.corporateSolutions': 'Corporate Solutions',
    'solutions.commercialSolutions': 'Commercial Solutions',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Images from VOLTGO products and charging stations',
    'gallery.moreImages': 'More Images',
    'gallery.image1Title': 'Modern Charging Stations',
    'gallery.image2Title': 'Advanced Technology',
    'gallery.image3Title': 'Separate Unit Solutions',
    'gallery.image4Title': 'DC Fast Charging Technology',
    'gallery.image5Title': 'Ultra Fast Charging Solutions',
    'gallery.image6Title': 'VOLTGO Ecosystem',
    
    // About - Station Cards & Values
    'stationCard.dcTitle': 'DC – Fast Charging Station',
    'stationCard.dcDesc': 'DC fast charging stations, ideal for business owners, offer the opportunity to charge electric vehicles in a short time with high power capacity. These solutions, optimized for commercial use, create revenue-generating investment opportunities.',
    'stationCard.acTitle': 'AC – Charging Station',
    'stationCard.acDesc': 'AC charging stations, ideal for all applications, offer excellent solutions for residential, office and public areas. These cost-effective and reliable systems are designed to meet daily charging needs.',
    'about.corporateTitle': 'Corporate and Commercial Solutions',
    'about.corporateDesc': 'As TRWATT, we offer VOLTGO\'s corporate and commercial solutions to our customers. With our revenue model-focused approach, we maximize the profitability of your charging station investments. With our financial consulting, technical support and continuous maintenance services, you can safely operate your electric vehicle charging infrastructure. By offering special pricing and flexible payment options to our corporate customers, we become your business partner in sustainable energy transformation.',
    'about.valuesTitle': 'Our Values',
    'values.innovation': 'Innovation',
    'values.innovationDesc': 'We offer innovative solutions by following VOLTGO\'s latest technologies.',
    'values.quality': 'Quality',
    'values.qualityDesc': 'We guarantee products and services in VOLTGO\'s high quality standards.',
    'values.sustainability': 'Sustainability',
    'values.sustainabilityDesc': 'We leave a clean world to future generations with environmentally friendly solutions.',
    
    // Contact - VOLTGO Center & Working Hours
    'contact.voltgoCenter': 'VOLTGO Center Communication',
    'contact.phone2': 'Phone:',
    'contact.email2': 'E-mail:',
    'contact.address2': 'Address:',
    'contact.monday': 'Monday - Friday:',
    'contact.saturday': 'Saturday:',
    'contact.sunday': 'Sunday:',
    'contact.closed': 'Closed',
    'contact.whatsapp': 'Contact via WhatsApp',
    
    // Contact Form Options
    'contact.productInfo': 'VOLTGO Product Information',
    'contact.technicalSupport': 'Technical Support',
    'contact.dealerApplication': 'Dealer Application',
    'contact.priceQuote': 'Price Quote',
    'contact.installationService': 'Installation Service',
    'contact.generalQuestions': 'General Questions',
    
    // Mobile App - Station Info
    'mobileApp.nearestStation': 'Nearest Station',
    'mobileApp.dcFastCharging': 'DC Fast Charging',
    'mobileApp.available': 'Available',
    
    // Header Mobile
    'header.language': 'Language:'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}