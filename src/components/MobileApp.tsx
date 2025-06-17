"use client";

import Image from "next/image";
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// 3D Phone Tilt Component
const PhoneMockup = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x: mouseX * 5, y: mouseY * 5 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      className="relative flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div 
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
        animate={{
          rotateX: isHovered ? -mousePosition.y : 0,
          rotateY: isHovered ? mousePosition.x : 0,
          z: isHovered ? 50 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Phone Frame */}
        <motion.div 
          className="w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
            {/* App Screenshot Mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 p-6 relative">
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: 'linear'
                }}
                style={{
                  maskImage: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
                  mixBlendMode: 'overlay'
                }}
              />
              
              <div className="text-white relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">VOLTGO</h3>
                  <motion.div 
                    className="w-6 h-6 bg-white/20 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <motion.div 
                  className="bg-white/10 rounded-2xl p-4 mb-6"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm">En Yakın İstasyon</span>
                    <span className="text-sm">1.2 km</span>
                  </div>
                  <motion.div 
                    className="h-24 bg-white/20 rounded-lg mb-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="flex justify-between">
                    <span className="text-xs">DC Hızlı Şarj</span>
                    <motion.span 
                      className="text-xs"
                      animate={{ color: ['#ffffff', '#10b981', '#ffffff'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Müsait
                    </motion.span>
                  </div>
                </motion.div>
                
                <div className="space-y-3">
                  <motion.div 
                    className="h-3 bg-white/20 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <motion.div 
                    className="h-3 bg-white/20 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                  <motion.div 
                    className="h-3 bg-white/20 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity },
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, 10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 1
          }}
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function MobileApp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('mobileApp.feature1'),
      description: t('mobileApp.feature1Desc'),
      bgColor: 'bg-green-100'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('mobileApp.feature2'),
      description: t('mobileApp.feature2Desc'),
      bgColor: 'bg-blue-100'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('mobileApp.feature3'),
      description: t('mobileApp.feature3Desc'),
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Title */}
            <motion.h3 
              className="text-4xl font-bold mb-6 text-gray-800"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              {t('mobileApp.title')}<br />
              <span className="text-blue-600">{t('mobileApp.subtitle')}</span>
            </motion.h3>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('mobileApp.description')}
            </motion.p>
            
            {/* App Store Links */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="#" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="w-8 h-8 mr-3" 
                  viewBox="0 0 384 512" 
                  fill="currentColor"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </motion.svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="w-8 h-8 mr-3" 
                  viewBox="0 0 512 512" 
                  fill="currentColor"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </motion.svg>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>
            
            {/* Features */}
            <motion.div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h4 
                    className="font-semibold text-gray-800 mb-2"
                    whileHover={{ color: '#2563eb' }}
                  >
                    {feature.title}
                  </motion.h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right - Phone Mockup */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
} 