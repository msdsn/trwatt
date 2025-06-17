"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Split paragraph component for line-by-line animation
const SplitParagraph = ({ children, className }: { children: string; className?: string }) => {
  const lines = children.split('. ').filter(line => line.trim());
  
  return (
    <motion.div 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
          }
        }
      }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="block mb-2"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20 
            },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          {line}{index < lines.length - 1 ? '. ' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Floating Logo component
const FloatingLogo = ({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) => (
  <motion.div 
    className="w-16 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring' }}
    whileHover={{ 
      scale: 1.1, 
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.5 }
    }}
  >
    <Image
      src={src}
      alt={alt}
      width={40}
      height={30}
      className="object-contain"
    />
  </motion.div>
);

export default function About() {
  const { t } = useLanguage();
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  const stationCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "DC – Hızlı Şarj İstasyonu",
      description: "İşletme sahipleri için ideal olan DC hızlı şarj istasyonları, yüksek güç kapasitesi ile elektrikli araçları kısa sürede şarj etme imkanı sunar. Ticari kullanım için optimize edilmiş bu çözümler, gelir getirici yatırım fırsatları yaratır.",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "AC – Şarj İstasyonu",
      description: "Tüm uygulamalar için ideal olan AC şarj istasyonları, konut, ofis ve kamu alanları için mükemmel çözümler sunar. Maliyet etkin ve güvenilir bu sistemler, günlük şarj ihtiyaçlarını karşılamak için tasarlanmıştır.",
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600"
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "İnovasyon",
                  description: "VOLTGO'nun en son teknolojilerini takip ederek yenilikçi çözümler sunuyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Kalite",
                  description: "VOLTGO'nun yüksek kalite standartlarında ürün ve hizmet garantisi veriyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Sürdürülebilirlik",
      description: "Çevre dostu çözümlerle gelecek nesillere temiz bir dünya bırakıyoruz."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h3>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <SplitParagraph>
              {`TRWATT, ${t('about.description1')}`}
            </SplitParagraph>
            <SplitParagraph>
              {t('about.description2')}
            </SplitParagraph>
          </div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors relative overflow-hidden group"
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
          </motion.div>
        </motion.div>

        {/* Where are we Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.whereTitle')}
            </motion.h3>
            
            <SplitParagraph className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('about.whereDesc')}
            </SplitParagraph>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  style={{ y, scale }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src="/1.jpg"
                    alt="VOLTGO Üretim Tesisi"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </motion.div>
                
                <motion.div 
                  className="flex space-x-2"
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
                  <FloatingLogo src="/TRWatt_logo.png" alt="TR Watt" delay={0} />
                  <motion.div 
                    className="w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <span className="text-xs font-bold text-gray-600">BETA</span>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="space-y-4 mt-8">
                <motion.div
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src="/2.jpg"
                    alt="Şarj İstasyonu Teknolojisi"
                    width={300}
                    height={250}
                    className="rounded-lg shadow-md w-full h-56 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Station Types */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stationCards.map((card, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 relative overflow-hidden group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 6,
                  rotateY: 6,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glassmorphism overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Sweep highlight */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mr-4`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-800">{card.title}</h4>
                  </motion.div>
                  
                  <motion.div
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Corporate and Commercial Solutions */}
        <motion.div 
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32" />
          
          <motion.h3 
            className="text-3xl font-bold mb-6 text-gray-800 relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kurumsal ve Ticari Çözümler
          </motion.h3>
          
          <SplitParagraph className="text-lg text-gray-600 leading-relaxed relative z-10">
                TRWATT olarak, VOLTGO'nun kurumsal ve ticari çözümlerini müşterilerimize sunuyoruz. Gelir modeli odaklı yaklaşımımızla, şarj istasyonu yatırımlarınızın karlılığını maksimize ediyoruz. Finansal danışmanlık, teknik destek ve sürekli bakım hizmetlerimizle, elektrikli araç şarj altyapınızı güvenle işletebilirsiniz. Kurumsal müşterilerimize özel fiyatlandırma ve esnek ödeme seçenekleri sunarak, sürdürülebilir enerji dönüşümünde iş ortağınız oluyoruz.
          </SplitParagraph>
        </motion.div>

        {/* Values Section with background */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
          >
            <Image
              src="/infobox-bg.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-blue-900/80"></div>
          
          <div className="relative z-10 py-16 px-8">
            <motion.h4 
              className="text-3xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Değerlerimiz
            </motion.h4>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="text-center text-white group"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: 'rgba(255,255,255,0.3)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h5 
                    className="text-xl font-semibold mb-3"
                    whileHover={{ color: '#60a5fa' }}
                  >
                    {value.title}
                  </motion.h5>
                  <p className="opacity-90">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 