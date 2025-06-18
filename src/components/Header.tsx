"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNavItem, setActiveNavItem] = useState<string>('home');
  const { scrollY } = useScroll();
  const { language, setLanguage, t } = useLanguage();
  
  // Text color changes based on scroll position (white on hero, dark below)
  const textColor = useTransform(scrollY, [0, typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600], ['rgb(255, 255, 255)', 'rgb(55, 65, 81)']);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'corporate', 'solutions', 'products', 'stations', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveNavItem(currentSection);
      }
      
      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      if (isMenuOpen) {
        const header = document.querySelector('header');
        if (header && !header.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const corporateSubmenu = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.values'), href: "#values" },
    { name: t('nav.policies'), href: "#policies" }
  ];

  const solutionsSubmenu = [
    { name: "DC Hızlı Şarj", href: "#dc-charging" },
    { name: "AC Şarj İstasyonu", href: "#ac-charging" },
    { name: "Wallbox Çözümleri", href: "#wallbox" },
    { name: "Kurumsal Çözümler", href: "#corporate" },
    { name: "Ticari Çözümler", href: "#commercial" }
  ];

  const NavItem = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <motion.a 
      href={href} 
      className="relative hover:text-blue-600 transition-colors font-bold text-xs"
      style={{ color: textColor }}
      whileHover={{ 
        x: [0, -2, 2, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded"
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
    </motion.a>
  );

  const MagneticButton = ({ children, className, onClick, style }: { children: React.ReactNode; className?: string; onClick?: () => void; style?: any }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      if (Math.abs(mouseX) < 40 && Math.abs(mouseY) < 40) {
        setMousePosition({ x: mouseX * 0.3, y: mouseY * 0.3 });
        setIsHovered(true);
      } else {
        setMousePosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

          return (
        <motion.button
          className={className}
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {children}
        </motion.button>
      );
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[9999]"
    >
      <motion.div 
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mx-2 my-2"
        whileHover={{ 
          backgroundColor: 'rgba(255,255,255,0.15)',
          scale: 1.01
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/TRWatt_logo.png"
                  alt="TR Watt Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-base font-bold"
                  style={{ color: textColor }}
                >
                  {t('company.name')}
                </motion.h1>
                <motion.p 
                  className="text-xs font-bold opacity-80"
                  style={{ color: textColor, fontSize: '10px' }}
                >
                  {t('company.tagline')}
                </motion.p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavItem href="#" isActive={activeNavItem === 'home'}>
                {t('nav.home')}
              </NavItem>
              
              {/* Corporate Dropdown */}
              <div className="relative group">
                <motion.button 
                  className="hover:text-blue-600 transition-colors font-bold text-xs flex items-center space-x-1"
                  style={{ color: textColor }}
                  onMouseEnter={() => setActiveDropdown('corporate')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -2 }}
                >
                  <span>{t('nav.corporate')}</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: activeDropdown === 'corporate' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                {activeDropdown === 'corporate' && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white/20 backdrop-blur-md rounded-3xl p-4 shadow-xl z-50 border border-white/10"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-6 bg-white rounded-2xl">
                      {corporateSubmenu.map((item, index) => (
                        <motion.a 
                          key={index}
                          href={item.href} 
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg mb-1"
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <motion.button 
                  className="hover:text-blue-600 transition-colors font-bold text-xs flex items-center space-x-1"
                  style={{ color: textColor }}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -2 }}
                >
                  <span>{t('nav.solutions')}</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: activeDropdown === 'solutions' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                {activeDropdown === 'solutions' && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white/20 backdrop-blur-md rounded-3xl p-4 shadow-xl z-50 border border-white/10"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-6 bg-white rounded-2xl">
                      {solutionsSubmenu.map((item, index) => (
                        <motion.a 
                          key={index}
                          href={item.href} 
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg mb-1"
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <NavItem href="#products" isActive={activeNavItem === 'products'}>
                {t('nav.products')}
              </NavItem>
              <NavItem href="#stations" isActive={activeNavItem === 'stations'}>
                {t('nav.stations')}
              </NavItem>
              <NavItem href="#gallery" isActive={activeNavItem === 'gallery'}>
                {t('nav.gallery')}
              </NavItem>
              <NavItem href="/EN-KATALOG.pdf" isActive={false}>
                {t('nav.catalog')}
              </NavItem>
              <NavItem href="#contact" isActive={activeNavItem === 'contact'}>
                {t('nav.contact')}
              </NavItem>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-sm">
                <motion.span style={{ color: textColor }}>|</motion.span>
                <MagneticButton
                  className={`font-bold transition-colors ${language === 'tr' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                  style={{ color: language === 'tr' ? '#2563eb' : textColor, fontSize: '10px' }}
                  onClick={() => setLanguage('tr')}
                >
                  TR
                </MagneticButton>
                <motion.span style={{ color: textColor, fontSize: '10px' }} className="opacity-50">/</motion.span>
                <MagneticButton
                  className={`font-bold transition-colors ${language === 'en' ? 'text-blue-600' : 'hover:text-blue-600'}`}
                  style={{ color: language === 'en' ? '#2563eb' : textColor, fontSize: '10px' }}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </MagneticButton>
              </div>
            </nav>

            {/* Mobile menu button */}
            <motion.button 
              className="lg:hidden p-2 hover:text-blue-600"
              style={{ color: textColor }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden mt-4 pb-4 border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="space-y-3 pt-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {[
                  { href: "#", label: t('nav.home') },
                  { href: "#about", label: t('nav.about') },
                  { href: "#products", label: t('nav.products') },
                  { href: "#stations", label: t('nav.stations') },
                  { href: "#gallery", label: t('nav.gallery') },
                  { href: "/EN-KATALOG.pdf", label: t('nav.catalog') },
                  { href: "#contact", label: t('nav.contact') }
                ].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href} 
                    className="block hover:text-blue-600 transition-colors font-medium"
                    style={{ color: textColor }}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Mobile Language Selector */}
                <motion.div 
                  className="flex items-center space-x-4 pt-2"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <motion.span className="text-sm" style={{ color: textColor }}>Dil:</motion.span>
                  <motion.button
                    className={`text-sm font-medium ${language === 'tr' ? 'text-blue-600' : ''}`}
                    style={{ color: language === 'tr' ? '#2563eb' : textColor }}
                    onClick={() => setLanguage('tr')}
                  >
                    Türkçe
                  </motion.button>
                  <motion.span className="opacity-50" style={{ color: textColor }}>/</motion.span>
                  <motion.button
                    className={`text-sm font-medium ${language === 'en' ? 'text-blue-600' : ''}`}
                    style={{ color: language === 'en' ? '#2563eb' : textColor }}
                    onClick={() => setLanguage('en')}
                  >
                    English
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.header>
  );
} 