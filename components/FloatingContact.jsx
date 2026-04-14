"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Floating.css'; 

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { id: 1, icon: "ri-whatsapp-fill", color: '#25D366', label: 'WhatsApp', href: 'https://wa.me/923372413300' },
    { id: 2, icon: "ri-instagram-line", color: '#FF007A', label: 'Instagram', href: 'https://www.instagram.com/lady_dev_zubia?igsh=OXkzdGtmOWViYzd0' },
    { id: 3, icon: "ri-linkedin-fill", color: '#0077B5', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ladydev-zubia-590468403' },
    { id: 4, icon: "ri-mail-send-fill", color: '#7b61ff', label: 'Email', href: 'mailto:ladydevzubia@gmail.com' },
  ];

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />

      <div className="premiumFabWrapper">
        <AnimatePresence>
          {isOpen && (
            <div className="menuStack">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.4, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.4, y: 20, filter: 'blur(10px)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.04 }}
                  className="socialOrbit"
                  style={{ '--brand-color': link.color }}
                >
                  <div className="glassIcon">
                    <i className={link.icon}></i>
                  </div>
                  <span className="premiumTooltip">{link.label}</span>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`masterBtn ${isOpen ? 'masterBtnActive' : ''}`}
        >
          {!isOpen && <div className="pulseLayer"></div>}
          <div className="iconContainer">
             {/* Headphones icon replace with plus */}
             <i className={`${isOpen ? 'ri-close-line' : 'ri-customer-service-2-line'} supportSymbol`}></i>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingContact;
