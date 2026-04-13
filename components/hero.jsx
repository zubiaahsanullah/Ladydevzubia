"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./css/hero.css";

const services = [
  {
    name: "Web Development",
    image: "/images/services/web.png",
    description: "Build high-performance, scalable Next.js websites that provide seamless user experiences and drive business conversions.",
    keywords: "Next.js Development, Scalable Web Apps"
  },
  {
    name: "SEO Strategy",
    image: "/images/services/seo-Photoroom1.png",
    description: "Rank #1 on Google and attract organic traffic with advanced technical SEO, on-page optimization, and data-driven strategies.",
    keywords: "Search Engine Optimization, Technical SEO"
  },
  {
    name: "UI/UX Design",
    image: "/images/services/uiux-Photoroom1.png",
    description: "Create intuitive and stunning digital products. We focus on human-centered UI/UX design to increase user engagement and retention.",
    keywords: "UI/UX Design, Figma Prototyping"
  },
  {
    name: "Social Media Marketing",
    image: "/images/services/smm.png",
    description: "Build a loyal community and boost brand awareness through strategic social media campaigns and viral content creation.",
    keywords: "SMM Strategy, Brand Awareness"
  },
  {
    name: "Graphic Designing",
    image: "/images/services/graphicdesign.png",
    description: "Visual storytelling that defines your brand. From custom logos to marketing assets, we create designs that stand out.",
    keywords: "Brand Identity, Graphic Design"
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = services[index];

  return (
    <section className="hero-wrapper-section">
      <div className="hero-bento-container">
        {/* Decorative Background Glows */}
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="hero-text-side">
          {/* Main H1 for SEO - Only 1 per page */}
          <h1 className="hero-main-heading">
            Accelerate Your <br /> 
            <span className="gradient-text">Digital Growth</span>
          </h1>

          <div className="service-name-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Dynamic H2 for Services Ranking */}
                <h2 className="service-title">
                  Professional <span style={{color: '#7b61ff'}}>{current.name}</span>
                </h2>
                
                <p className="hero-description dynamic-desc">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-btn-group">
          <button
  className="btn-primary"
  aria-label="Chat on WhatsApp"
  onClick={() => window.open("https://wa.me/923372413300", "_blank")}
>
  WhatsApp Us
</button>
            <button className="btn-outline" aria-label="View Case Studies">View Our Case Studies</button>
          </div>
        </div>

        <div className="hero-visual-side">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.7, ease: "anticipate" }}
              className="image-wrapper"
              style={{ position: 'relative', width: '100%', height: '400px' }}
            >
              {/* Optimized Next.js Image */}
              <Image 
                src={current.image} 
                alt={`${current.name} - Expert Digital Solutions by Lady Dev Zubia`} 
                fill
                priority
                style={{ objectFit: 'contain' }}
                className="hero-main-img" 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
