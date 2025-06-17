"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const corporateSubmenu = [
    { name: "Hakkımızda", href: "#about" },
    { name: "Değerlerimiz", href: "#values" },
    { name: "Politikalarımız", href: "#policies" }
  ];

  const solutionsSubmenu = [
    { name: "DC Hızlı Şarj", href: "#dc-charging" },
    { name: "AC Şarj İstasyonu", href: "#ac-charging" },
    { name: "Wallbox Çözümleri", href: "#wallbox" },
    { name: "Kurumsal Çözümler", href: "#corporate" },
    { name: "Ticari Çözümler", href: "#commercial" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/voltgo-1.png"
              alt="VoltGo Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Waltgo</h1>
              <p className="text-sm text-gray-600">VoltGo Yetkili Bayisi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">ANA SAYFA</a>
            
            {/* Corporate Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('corporate')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>KURUMSAL</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'corporate' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {corporateSubmenu.map((item, index) => (
                    <a 
                      key={index}
                      href={item.href} 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>ÇÖZÜMLERİMİZ</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {solutionsSubmenu.map((item, index) => (
                    <a 
                      key={index}
                      href={item.href} 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">ÜRÜNLER</a>
            <a href="#stations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">ŞARJ İSTASYONLARI</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">GALERİ</a>
            <a href="/EN-KATALOG.pdf" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">KATALOG</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">İLETİŞİM</a>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600">|</span>
              <span className="text-blue-600 font-medium">Türkçe</span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="space-y-3 pt-4">
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">ANA SAYFA</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">HAKKIMIZDA</a>
              <a href="#products" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">ÜRÜNLER</a>
              <a href="#stations" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">ŞARJ İSTASYONLARI</a>
              <a href="#gallery" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">GALERİ</a>
              <a href="/EN-KATALOG.pdf" target="_blank" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">KATALOG</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">İLETİŞİM</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 