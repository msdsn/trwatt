"use client";

import Image from "next/image";
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-4 text-gray-800">{t('contact.title')}</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-8 text-gray-800">{t('contact.getInTouch')}</h4>
            
            <motion.div 
              className="space-y-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: t('contact.address'),
                  content: "Maslak Mahallesi, Büyükdere Cd. No:123\nSarıyer/İstanbul, Türkiye"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: t('contact.phone'),
                  content: "+90 (212) 555 0123\n+90 (555) 123 4567"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: t('contact.email'),
                  content: "info@trwatt.com\ndestek@trwatt.com"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">{item.title}</h5>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* VoltGo Reference */}
            <motion.div 
              className="bg-blue-50 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h5 className="font-semibold mb-4 text-gray-800 flex items-center">
                <motion.a
                  href="#home"
                  className="cursor-pointer"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Image
                                          src="/logo00113.png"
                                          alt="TR Watt"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                </motion.a>
                {t('contact.voltgoCenter')}
              </h5>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>{t('contact.phone2')}</span>
                  <span className="font-medium">444 85 87</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.email2')}</span>
                  <span className="font-medium">info@voltgo.com.tr</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.address2')}</span>
                  <span className="font-medium text-sm">Acıdere OSB Mah. Çanakkale Cad. No: 15<br />Sarıçam / ADANA</span>
                </div>
              </div>
            </motion.div>
            
            {/* Working Hours */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-gray-800">{t('contact.workingHours')}</h5>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>{t('contact.monday')}</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday')}</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday')}</span>
                  <span className="font-medium text-red-500">{t('contact.closed')}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-gray-800">{t('contact.location')}</h5>
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/mapp.png"
                  alt="TRWATT Bayi Konum Haritası"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-blue-600/10 hover:bg-blue-600/20 transition-colors cursor-pointer"
                  whileHover={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">{t('contact.writeUs')}</h4>
            <motion.form 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.input
                  type="text"
                  placeholder={t('contact.firstName')}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="text"
                  placeholder={t('contact.lastName')}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              {[
                { type: "email", placeholder: t('contact.emailAddress') },
                { type: "tel", placeholder: t('contact.phoneNumber') }
              ].map((field, index) => (
                <motion.input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileFocus={{ scale: 1.02 }}
                />
              ))}
              
              <motion.select 
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">{t('contact.subject')}</option>
                <option value="urun-bilgi">{t('contact.productInfo')}</option>
                <option value="teknik-destek">{t('contact.technicalSupport')}</option>
                <option value="bayi-basvuru">{t('contact.dealerApplication')}</option>
                <option value="fiyat-teklifi">{t('contact.priceQuote')}</option>
                <option value="kurulum">{t('contact.installationService')}</option>
                <option value="genel">{t('contact.generalQuestions')}</option>
              </motion.select>
              
              <motion.textarea
                placeholder={t('contact.message')}
                rows={6}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileFocus={{ scale: 1.02 }}
              />
              
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 relative overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{t('contact.sendMessage')}</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=902125550123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
        </motion.svg>
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          {t('contact.whatsapp')}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </motion.div>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </section>
  );
} 