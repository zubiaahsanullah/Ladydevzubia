"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiAward, FiArrowRight } from "react-icons/fi";
import "./css/AboutSection.css";

const AboutSection = () => {
  const revealAnimation = {
    hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
    show: { 
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" className="about-wrapper">
      <div className="about-container">
        
        {/* Left Side: Visuals */}
        <motion.div 
          className="about-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealAnimation}
        >
          <div className="image-stack">
            <img 
              src="https://cdn.dribbble.com/userupload/44247716/file/604186d6093a7423af3f224bc472e353.png?resize=1024x768&vertical=center" 
              alt="Digital Marketing Agency - Lady Dev Zubia" 
              className="main-about-img"
            />
            <div className="exp-card">
              <h3>5+</h3>
              <p>Years of <br /> Driving ROI</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Agency Content */}
        <div className="about-content">
        
          
          <h2 className="about-title">
            Scaling Brands Through <span>Digital Innovation</span>
          </h2>
          
          <p className="about-text">
            We are a result-driven <strong>Digital Marketing Agency</strong> that bridges the gap between 
            high-end technology and creative strategy. Led by <strong>Lady Dev Zubia</strong>, our team 
            engineers high-performance web solutions and <strong>Advanced SEO Frameworks</strong> designed 
            to dominate search results and turn clicks into loyal customers.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon"><FiTarget /></div>
              <div className="feature-info">
                <h4>Growth Strategy</h4>
                <p>Data-backed funnels and SEO audits tailored to maximize your business revenue.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FiAward /></div>
              <div className="feature-info">
                <h4>Performance Tech</h4>
                <p>Developing ultra-fast Next.js platforms that offer superior user experience and speed.</p>
              </div>
            </div>
          </div>

          <button className="about-btn">
            Read Our Success Stories <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;