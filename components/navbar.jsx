"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiZap, FiMenu, FiX } from "react-icons/fi";
import styles from "./css/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ];

  // Saari 8 Services (Icons hata diye hain)
  const servicesList = [
    { name: "Web Development", id: "services" },
    { name: "Web Application", id: "services" },
    { name: "SEO Strategy", id: "services" },
    { name: "UI/UX Design", id: "uiux-design" },
    { name: "Digital Marketing", id: "services" },
    { name: "Graphic Designing", id: "services" },
    { name: "Creative Content", id: "services" },
    { name: "Content Writing", id: "services" },
  ];

  return (
    <nav className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        
        {/* BRAND LOGO */}
        <Link href="/" className={styles.logoArea}>
          <Image 
            src="/images/logo2.png" 
            alt="Lady Dev Zubia" 
            width={180} 
            height={180} 
            className={styles.logoImg}
            priority 
          />
        </Link>

        {/* NAVIGATION LINKS (DESKTOP) */}
        <ul className={styles.navLinksList}>
          <li className={styles.dropdownContainer}>
            <span className={styles.dropdownTrigger}>
              Services <FiChevronDown className={styles.chevron} />
            </span>
            <ul className={styles.dropdownMenu}>
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link href={`#${service.id}`}>
                    <div>
                      <strong>{service.name}</strong>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {navItems.map((item) => (
            <li key={item.id} className={styles.navLinkItem}>
              <Link href={`#${item.id}`}>{item.name}</Link>
            </li>
          ))}

          <li>
            <Link href="#contact" className={styles.actionBtn}>
              <FiZap /> Start Project
            </Link>
          </li>
        </ul>

        {/* MOBILE TOGGLE ICON */}
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`${styles.mobileOverlay} ${isOpen ? styles.overlayOpen : ""}`}>
          <ul className={styles.mobileLinks}>
            <li>
              <div className={styles.mobileDropdownHeader} onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Services <FiChevronDown style={{transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: '0.3s'}} />
              </div>
              {isServicesOpen && (
                <div className={styles.mobileSubMenu}>
                   {servicesList.map((service) => (
                     <Link key={service.id} href={`#${service.id}`} onClick={() => setIsOpen(false)}>
                       {service.name}
                     </Link>
                   ))}
                </div>
              )}
            </li>
            
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`} onClick={() => setIsOpen(false)}>{item.name}</Link>
              </li>
            ))}
            
            <li style={{ marginTop: '20px' }}>
              <Link href="#contact" className={styles.actionBtn} onClick={() => setIsOpen(false)}>
                Start Project ↗
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}