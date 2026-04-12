"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import "./css/Services.css";

// --- SERVICES DATA ARRAY (Corrected SEO Content) ---
const services = [
  {
    title: "Web Development",
    desc: "Building high-performance Next.js apps with clean, scalable, and SEO-friendly code.",
    image: "/images/services/web.png", 
    color: "#7b61ff"
  },
  {
    title: "Web Application",
    desc: "Crafting intuitive mobile-first web experiences that keep users engaged and active.",
    image: "/images/services/webdevelopmentbanner-Photoroom.png",
    color: "#d486f8"
  },
  {
    title: "SEO Strategy",
    desc: "Optimizing your digital footprint to dominate search engine rankings and organic traffic.",
    image: "/images/services/seo-Photoroom1.png",
    color: "#4ade80"
  },
  {
    title: "UI/UX Design",
    desc: "Modern and minimalist user interface designs focused on high conversion and accessibility.",
    image: "/images/services/uiux-Photoroom1.png",
    color: "#f8b615"
  },
  {
    title: "Digital Marketing",
    desc: "Strategic ROI-focused marketing campaigns to scale your brand presence globally.",
    image: "/images/services/smm.png",
    color: "#0ea5e9"
  },
  {
    title: "Graphic Designing",
    desc: "Creating powerful visual identities and branding assets that tell your unique story.",
    image: "/images/services/graphicdesign.png",
    color: "#f43f5e"
  },
  {
    title: "Creative Content",
    desc: "Producing engaging multimedia content designed to capture and hold audience attention.",
    image: "/images/services/creativecontent-Photoroom.png",
    color: "#0ea5e9"
  },
  {
    title: "Content Writing",
    desc: "High-quality, SEO-optimized copy that speaks to your audience and drives action.",
    image: "/images/services/graphicdesign.png", // Agar alag image ho toh path change kar lein
    color: "#f43f5e"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* --- HEADER (SEO Friendly) --- */}
      <div className="services-header">
        <span className="sub-title">WHAT WE DO BEST</span>
        <h2 className="main-title">Pushing the <span>Boundaries</span> <br /> of Digital Innovation</h2>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* --- PNG IMAGE CONTAINER --- */}
            <div className="service-image-container">
              <Image 
                src={service.image} 
                alt={`${service.title} - Professional Service by Lady Dev Zubia`} 
                fill
                style={{ objectFit: 'contain' }}
                className="service-png"
                priority={index < 2} 
              />
            </div>
            
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            
            {/* --- ARROW ICON --- */}
            <div className="service-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            {/* Subtle background glow on hover */}
            <div className="card-glow" style={{ background: service.color }}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;