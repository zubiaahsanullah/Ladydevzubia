"use client";
import { motion } from "framer-motion";
import "./css/SandwichMarquee.css";
import Image from "next/image"; // Import zaroori hai

const SandwichMarquee = () => {
  const marqueeText = "MARKETING • DESIGN • STRATEGY • SEO • CREATIVE • ";

  return (
    <section className="sandwich-section">
      
      {/* 1. BACK MARQUEE */}
      <div className="marquee-container back-text">
        <motion.div 
          className="marquee-track"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <h1>{marqueeText}{marqueeText}</h1>
        </motion.div>
      </div>

      {/* 2. MIDDLE IMAGE - Fixed with Next.js Image Component */}
      <div className="center-subject">
        <Image 
          src="/images/cta.png"
          alt="Subject"
          width={600}
          height={600}
          priority // Ab ye yahan sahi kaam karega
          className="main-img"
        />
      </div>

      {/* 3. FRONT MARQUEE */}
      <div className="marquee-container front-text">
        <motion.div 
          className="marquee-track"
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <h1>{marqueeText}{marqueeText}</h1>
        </motion.div>
      </div>

    </section>
  );
};

export default SandwichMarquee;