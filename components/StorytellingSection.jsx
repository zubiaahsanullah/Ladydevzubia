"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FiFacebook, FiInstagram, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

// --- ANIMATION VARIANTS ---
const revealVariant = {
  hidden: { 
    clipPath: "inset(0% 0% 100% 0%)", 
    opacity: 0, 
    y: 50 
  },
  show: { 
    clipPath: "inset(0% 0% 0% 0%)", 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const SocialSection = () => {
  // Yahan apni video ka path add karein (e.g., .mp4 file)
  const marqueeItems = [
    "/images/socialmedia/s1.png",
    "/images/socialmedia/WhatsApp Video 2026-03-30 at 12.04.22 AM.mp4", // <--- Video File Path
    "/images/socialmedia/GLOBAL TENSIONS RISE.png",
    "/images/socialmedia/Performance Driven Web Solutions.png",
    "/images/socialmedia/s2.jpeg",
    "/images/socialmedia/WhatsApp Video 2026-03-30 at 4.38.56 AM.mp4", 
    "/images/socialmedia/Why Digital Marketing Matters for Your Business.png",
    "/images/socialmedia/GROWTH.mp4",
  ];

  // Helper function to render Image or Video
  const renderMedia = (src, index, type) => {
    const isVideo = src.toLowerCase().endsWith('.mp4');
    
    if (isVideo) {
      return (
        <video
          key={`${type}-${index}`}
          src={src}
          className="marquee-img"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/placeholder.jpg" // Optional: video load hone tak image dikhegi
        />
      );
    }
    return (
      <img 
        key={`${type}-${index}`} 
        src={src} 
        alt="Zubia Agency Work" 
        className="marquee-img" 
      />
    );
  };

  return (
    <section className="social-impact-section">
      <style>{`
      
/* --- Global Styles & Desktop --- */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&family=Space+Grotesk:wght@300;500;700&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap');


        .social-impact-section {
          width: 100%;
          background-color: #fcfcfc;
          padding: 120px 20px;
          overflow: hidden;
          font-family: sans-serif;
        }

        .social-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .social-content {
          flex: 1.1;
          text-align: left;
          display: flex;
          flex-direction: column;
        }


        .social-heading {
          font-size: clamp(35px, 5vw, 60px);
          font-weight: 900;
          line-height: 1.05;
          color: #0f172a;
          font-family: 'Raleway', sans-serif;
          letter-spacing: -2px;
          margin-bottom: 25px;
        }

        .highlight-text { color: #7b61ff; }

        .social-description {
        font-family: 'Lexend', sans-serif;
          color: #64748b;
          font-size: 18px;
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 35px;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .social-icon-btn {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(123, 97, 255, 0.15);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif;
          cursor: pointer;
          text-decoration: none;
        }

        .social-icon-btn:hover {
          background: #7b61ff;
          color: #fff;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(123, 97, 255, 0.2);
        }

        .social-stats {
          display: flex;
          gap: 25px;
          margin-bottom: 40px;
          width: 100%;
          max-width: 520px;
        }

        .stat-card {
          background: #f3e8ff;
          padding: 20px 30px;
          border-radius: 25px;
          flex: 1;
          border: 1px solid rgba(123, 97, 255, 0.05);
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          display: block;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
        }

        .social-cta-btn {
            background: #7b61ff;
          color: #ffffff;
          padding: 20px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 100px;
          transition: all 0.3s ease;
          width: fit-content;


          
        }

        .social-cta-btn:hover {
          background: #7b61ff;
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(123, 97, 255, 0.25);
        }

        /* --- Visual Marquee --- */
        .social-visual {
          flex: 0.9;
          display: flex;
          gap: 20px;
          height: 620px;
          position: relative;
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }

        .marquee-col {
          flex: 1;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
.badge {
display: inline-block;
  color: #7b61ff; /* Main Theme Accent */
  background: rgba(123, 97, 255, 0.08); /* Subtle colored background */
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 13px;
  text-transform: uppercase;
  
  margin-bottom: 25px;
  border: 1px solid rgba(123, 97, 255, 0.15);
}


        .marquee-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 28px;
          background: #f1f5f9;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .marquee-up .marquee-track { animation: scrollUp 30s linear infinite; }
        .marquee-down .marquee-track { animation: scrollDown 30s linear infinite; }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .social-container { flex-direction: column; text-align: center; gap: 50px; }
          .social-content { align-items: center; }
          .social-stats { justify-content: center; }
          .social-visual { width: 100%; height: 450px; }
          .about-badge { justify-content: center; }
          .social-links { justify-content: center; }
        }
          /* --- Updated Mobile View (Stats Hidden & Left Aligned) --- */
@media (max-width: 1024px) {
  .social-impact-section {
    padding: 60px 20px; /* Thodi space sides par */
  }

  .social-container {
    flex-direction: column;
    text-align: left; /* Pura container left aligned */
    gap: 40px;
    align-items: flex-start;
  }

  .social-content {
    align-items: flex-start; /* Items ko left se shuru karein */
    text-align: left;
    flex: none;
    width: 100%;
  }

  .social-heading {
    font-size: 32px;
    letter-spacing: -1px;
    margin-bottom: 15px;
    text-align: left;
    width: 100%;
  }

  .social-description {
    font-size: 16px;
    margin-bottom: 25px;
    text-align: left;
    max-width: 100%;
  }

  /* --- STATS HIDE LOGIC --- */
  .social-stats {
    display: none !important; /* Mobile par stats nazar nahi aayenge */
  }

  .social-links {
    justify-content: flex-start; /* Icons left par */
    margin-bottom: 30px;
  }

  /* --- Marquee Mobile Optimization --- */
  .social-visual {
    width: 100%;
    height: 400px;
    flex: none;
    gap: 15px;
    /* Masking ensure karti hai ke images smooth fade hon */
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  }

  .marquee-img {
    height: 200px;
    border-radius: 20px;
  }

  .social-cta-btn {
    width: fit-content; /* Button left par rahega aur sirf text jitna bada hoga */
    padding: 18px 30px;
  }
}

/* Extra Small Screens */
@media (max-width: 480px) {
  .social-heading {
    font-size: 28px;
  }
  .social-visual {
    height: 350px;
  }
}
      `}</style>

      <motion.div 
        className="social-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        
        <div className="social-content">
          <motion.div className="sub-title" variants={revealVariant}>
         
            Global Agency Reach
          </motion.div>

          <motion.h2 className="social-heading" variants={revealVariant}>
            Social Dominance <br />
            <span className="highlight-text">& Digital Strategy</span>
          </motion.h2>

          <motion.p className="social-description" variants={revealVariant}>
            Hum brands ko social media par establish karte hain taake aapka business 
            sirf present na ho, balke har platform par dominate kare.
          </motion.p>

          <motion.div className="social-links" variants={revealVariant}>
            <a href="#" className="social-icon-btn"><FiInstagram /></a>
            <a href="#" className="social-icon-btn"><FiLinkedin /></a>
            <a href="#" className="social-icon-btn"><FiFacebook /></a>
          </motion.div>
          
          <motion.div className="social-stats" variants={revealVariant}>
            <div className="stat-card">
              <span className="stat-number">280%</span>
              <span className="stat-label">Average ROI Boost</span>
            </div>
            <div className="stat-card" style={{ background: '#0b0f19', color: '#fff' }}>
              <span className="stat-number" style={{ color: '#fff' }}>#1</span>
              <span className="stat-label" style={{ color: '#94a3b8' }}>Social Authority</span>
            </div>
          </motion.div>
          
          <motion.a href="#contact" className="social-cta-btn" variants={revealVariant}>
            Scale Your Brand <FiArrowUpRight />
          </motion.a>
        </div>

        <div className="social-visual">
          {/* Column 1: UP */}
          <div className="marquee-col marquee-up">
            <div className="marquee-track">
              {marqueeItems.concat(marqueeItems).map((src, i) => renderMedia(src, i, 'up'))}
            </div>
          </div>

          {/* Column 2: DOWN */}
          <div className="marquee-col marquee-down">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].reverse().map((src, i) => renderMedia(src, i, 'down'))}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default SocialSection;