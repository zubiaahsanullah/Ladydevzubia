"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiTrendingUp, FiTarget, FiBarChart2 } from "react-icons/fi";
import "./css/BentoSection.css";

const revealVariant = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 50 },
  show: { 
    clipPath: "inset(0% 0% 0% 0%)", 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const BentoSection = () => {
  return (
    <section className="bento-wrapper">
      {/* Header Section */}
      <div className="bento-header">
        <div className="service-badge">
          <span className="badge-line"></span>
          Our Expertise
        </div>

        <motion.h2 
          className="bento-main-title"
          initial={{ clipPath: "inset(0% 0% 100% 0%)", y: 30 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Solutions That <span>Scale Your Brand</span>
        </motion.h2>
      </div>

      {/* Grid Layout */}
      <motion.div 
        className="bento-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        
        {/* Main Service: SEO */}
        <motion.div className="bento-tile tile-blue" variants={revealVariant}>
          <div className="tile-content">
           
            <h3>Organic Growth That Outsmarts The Competition</h3>
            <p>We don't just target keywords; we target ROI. Boost your search visibility by 10x with our AI-driven audits and precision content strategies.</p>
            <button className="tile-btn">EXPLORE STRATEGY</button>
          </div>
          <div className="tile-icon-bottom">
            <FiSearch />
          </div>
        </motion.div>

        {/* Stats & Mini Service Stack */}
        <div className="bento-stack">
          <motion.div className="bento-tile tile-light" variants={revealVariant}>
              <div className="mini-content">
                <h2>+280%</h2>
                <p>Average Traffic Increase</p>
              </div>
              <FiBarChart2 className="mini-icon" />
          </motion.div>
          
          <motion.div className="bento-tile tile-dark" variants={revealVariant}>
              <div className="mini-content">
                <h2>#1</h2>
                <p>Rankings for High-Value Keywords</p>
              </div>
              <FiTarget className="mini-icon" />
          </motion.div>
        </div>

        {/* Authority / Branding Service */}
        <motion.div className="bento-tile tile-gradient" variants={revealVariant}>
          <div className="tile-icon-top">
             <FiTrendingUp />
          </div>
          <div className="avatar-group">
            <img src="https://i.pravatar.cc/150?u=1" alt="client" />
            <img src="https://i.pravatar.cc/150?u=2" alt="client" />
            <img src="https://i.pravatar.cc/150?u=3" alt="client" />
          </div>
          <div className="tile-content">
            <h3>Authority Building & Digital PR</h3>
            <p>Global brands trust us for high-quality link acquisition and technical SEO that cements industry leadership.</p>
            <button className="tile-btn outline">CONTACT US</button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BentoSection;