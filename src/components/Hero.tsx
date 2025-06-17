"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Split text component for word-by-word animation
const SplitText = ({ children, className }: { children: string; className?: string }) => {
  const words = children.split(' ');
  
  return (
    <motion.div 
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
            ease: "anticipate"
          }
        }
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { 
              y: 60, 
              opacity: 0,
              clipPath: "inset(0 0 100% 0)"
            },      
            visible: { 
              y: 0, 
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Count up animation component
const CountUpNumber = ({ target, isVisible }: { target: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, target]);
  
  return (
    <motion.div
      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
      initial={{ scale: 0.8, rotate: -180 }}
      animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -180 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        delay: target * 0.2 
      }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
        transition: { duration: 0.2 }
      }}
    >
      {count}
    </motion.div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const { t } = useLanguage();
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true });

  const benefits = [
    { number: 1, text: t('hero.benefit1') },
    { number: 2, text: t('hero.benefit2') },
    { number: 3, text: t('hero.benefit3') }
  ];

  return (
    <section ref={ref} className="relative overflow-hidden -mt-0 pt-0" id="home">
      <div className="w-full h-screen relative overflow-hidden">
        {/* Ken-Burns background image */}
        <motion.div
          className="absolute inset-0 w-full h-[130vh]"
          style={{ 
            scale,
            y
          }}
        >
          <Image
            src="/main_0.jpg"
            alt="Electric Vehicle Charger Solutions"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"
          style={{ opacity }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-white">
              {/* Main title with split text animation */}
              <SplitText className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </SplitText>
              
              {/* Subtitle with delay */}
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-blue-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                {t('hero.subtitle')}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed opacity-90 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                {t('hero.description')}
              </motion.p>
              
              {/* Action buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <motion.button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{t('hero.readMore')}</span>
                </motion.button>
                
                <motion.a
                  href="/EN-KATALOG.pdf"
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t('hero.downloadCatalog')}</span>
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Right Benefits */}
          <motion.div 
            ref={benefitsRef}
            className="absolute bottom-8 right-8 hidden md:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20"
              whileHover={{ 
                backgroundColor: 'rgba(255,255,255,0.15)',
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.number}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 3.5 + (index * 0.2), duration: 0.6 }}
                  >
                    <CountUpNumber 
                      target={benefit.number} 
                      isVisible={benefitsInView}
                    />
                    <motion.span 
                      className="text-lg font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {benefit.text}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mobile Benefits */}
      <div className="md:hidden bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 gap-4 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.number}
                className="flex items-center space-x-4"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <CountUpNumber 
                  target={benefit.number} 
                  isVisible={true}
                />
                <span className="text-lg font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 