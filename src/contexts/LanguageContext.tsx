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
    'hero.title': 'Electric Vehicle Charger Solutions',
    'hero.subtitle': 'VoltGo',
    'hero.description': 'Gelecek nesil elektrikli araç şarj teknolojileri ile sürdürülebilir mobiliteye geçiş yapın.',
    'hero.readMore': 'DEVAMINI OKU',
    'hero.downloadCatalog': 'Katalog İndir',
    'hero.benefit1': 'Ücretsiz Nakliye',
    'hero.benefit2': 'Hızlı ve Verimli',
    'hero.benefit3': '7/24 Aktif',
    
    // Mobile App
    'mobileApp.title': 'VoltGo Mobile App –',
    'mobileApp.subtitle': 'Şimdi İndirin',
    'mobileApp.description': 'VoltGo mobil uygulaması ile elektrikli araç şarj istasyonlarını kolayca bulun, şarj işlemlerinizi yönetin ve gerçek zamanlı bilgilere erişin.',
    'mobileApp.feature1': 'Ücretsiz ve Erişilebilir',
    'mobileApp.feature1Desc': 'Tamamen ücretsiz kullanım',
    'mobileApp.feature2': 'Anlaşılır ve Faydalı',
    'mobileApp.feature2Desc': 'Kolay kullanım arayüzü',
    'mobileApp.feature3': 'Güvenli ve Dikkatli',
    'mobileApp.feature3Desc': 'Verileriniz güvende',
    
    // Products
    'products.title': 'Ürün Portföyümüz',
    'products.subtitle': 'VoltGo\'nun en gelişmiş elektrikli araç şarj çözümlerini keşfedin',
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
    'about.description1': 'Waltgo, 2024 yılında VoltGo\'nun yetkili bayisi olarak elektrikli araç şarj çözümleri alanında hizmet vermeye başlamıştır. EMRA onaylı şarj ağı operatörü VoltGo\'nun kaliteli ürünlerini müşterilerimize sunarak elektrikli mobilite dönüşümünde aktif rol oynamaktayız.',
    'about.description2': 'DC Hızlı Şarj, AC Şarj İstasyonları ve Wallbox çözümleri ile hem bireysel hem de kurumsal müşterilerimize en uygun şarj altyapısını sağlıyoruz. Gelişmiş teknoloji ve güvenilir hizmet anlayışımızla sektörde öncü konumumuzu sürdürüyoruz.',
    'about.whereTitle': 'Neredeyiz?',
    'about.whereDesc': 'Waltgo olarak İstanbul merkezli hizmet veriyoruz. VoltGo\'nun Adana Hacı Sabancı OSB\'de bulunan 65.000 m² toplam alana sahip modern üretim tesislerinde üretilen ürünleri, müşterilerimize en hızlı ve güvenilir şekilde ulaştırıyoruz.',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'VoltGo ürünleri hakkında bilgi almak ve teknik destek için bizimle iletişime geçin',
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
    'footer.partnership': 'Waltgo & VoltGo Ortaklığı - Elektrikli Mobilite Geleceği için Güçlü İş Birliği',
    'footer.description': 'VoltGo\'nun yetkili bayisi olarak elektrikli araç şarj çözümlerinde güvenilir hizmet sunuyoruz.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.services': 'Hizmetlerimiz',
    'footer.rights': '2024 Waltgo - VoltGo Yetkili Bayisi. Tüm hakları saklıdır.',
    
    // Company Info
    'company.name': 'Waltgo',
    'company.tagline': 'VoltGo Yetkili Bayisi'
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
    'hero.subtitle': 'VoltGo',
    'hero.description': 'Transition to sustainable mobility with next-generation electric vehicle charging technologies.',
    'hero.readMore': 'READ MORE',
    'hero.downloadCatalog': 'Download Catalog',
    'hero.benefit1': 'Free Transportation',
    'hero.benefit2': 'Fast and Efficient',
    'hero.benefit3': '24/7 Active',
    
    // Mobile App
    'mobileApp.title': 'VoltGo Mobile App –',
    'mobileApp.subtitle': 'Download Now',
    'mobileApp.description': 'Easily find electric vehicle charging stations, manage your charging operations and access real-time information with the VoltGo mobile application.',
    'mobileApp.feature1': 'Free and Accessible',
    'mobileApp.feature1Desc': 'Completely free to use',
    'mobileApp.feature2': 'Understandable and Useful',
    'mobileApp.feature2Desc': 'Easy-to-use interface',
    'mobileApp.feature3': 'Safe and Careful',
    'mobileApp.feature3Desc': 'Your data is safe',
    
    // Products
    'products.title': 'Our Product Portfolio',
    'products.subtitle': 'Discover VoltGo\'s most advanced electric vehicle charging solutions',
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
    'about.description1': 'Waltgo started serving in the field of electric vehicle charging solutions as an authorized dealer of VoltGo in 2024. We play an active role in the electric mobility transformation by offering quality products of VoltGo, an EMRA-approved charging network operator, to our customers.',
    'about.description2': 'We provide the most suitable charging infrastructure to both individual and corporate customers with DC Fast Charging, AC Charging Stations and Wallbox solutions. We maintain our leading position in the sector with our advanced technology and reliable service approach.',
    'about.whereTitle': 'Where are we?',
    'about.whereDesc': 'As Waltgo, we provide services based in Istanbul. We deliver the products produced in VoltGo\'s modern production facilities with a total area of 65,000 m² located in Adana Hacı Sabancı OSB to our customers in the fastest and most reliable way.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us for information about VoltGo products and technical support',
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
    'footer.partnership': 'Waltgo & VoltGo Partnership - Strong Collaboration for Electric Mobility Future',
    'footer.description': 'As an authorized dealer of VoltGo, we provide reliable service in electric vehicle charging solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.rights': '2024 Waltgo - VoltGo Authorized Dealer. All rights reserved.',
    
    // Company Info
    'company.name': 'Waltgo',
    'company.tagline': 'VoltGo Authorized Dealer'
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