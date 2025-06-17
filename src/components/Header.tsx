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
  
  // Header blur effect on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12]);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 0 0 0 rgba(0,0,0,0)', '0 8px 32px rgba(0,0,0,0.12)']);
  
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium"
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

  const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
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
      className="sticky top-0 z-50"
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
        boxShadow: headerShadow,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/voltgo-1.png"
                alt="VoltGo Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{t('company.name')}</h1>
              <p className="text-sm text-gray-600">{t('company.tagline')}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem href="#" isActive={activeNavItem === 'home'}>
              {t('nav.home')}
            </NavItem>
            
            {/* Corporate Dropdown */}
            <div className="relative group">
              <motion.button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
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
                  className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {corporateSubmenu.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href} 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <motion.button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1"
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
                  className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {solutionsSubmenu.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href} 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
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
              <span className="text-gray-600">|</span>
              <MagneticButton
                className={`font-medium transition-colors ${language === 'tr' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                onClick={() => setLanguage('tr')}
              >
                TR
              </MagneticButton>
              <span className="text-gray-400">/</span>
              <MagneticButton
                className={`font-medium transition-colors ${language === 'en' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </MagneticButton>
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
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
            className="lg:hidden mt-4 pb-4 border-t border-gray-200"
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
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  whileHover={{ x: 10 }}
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
                <span className="text-gray-600 text-sm">Dil:</span>
                <button
                  className={`text-sm font-medium ${language === 'tr' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setLanguage('tr')}
                >
                  Türkçe
                </button>
                <span className="text-gray-400">/</span>
                <button
                  className={`text-sm font-medium ${language === 'en' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
} 