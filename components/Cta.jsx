"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./css/Cta.css";

const CTA = () => {
  return (
    <section className="cta-full-bleed">
      <div className="cta-inner-wrapper">
        
        {/* --- Background Animated Layers --- */}
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        
        {/* Left Ring */}
        <div className="bg-layer ring-left"></div>
        
        {/* Right Double Rings */}
        <div className="bg-layer ring-right-outer">
          <div className="ring-right-inner"></div>
        </div>

        <div className="cta-content-box">
          <h2 className="cta-main-title">
            Start your <span>digital</span> <br /> success today
          </h2>

          <p className="cta-subline">
            Unlock the full potential of your brand with our comprehensive <br />
            digital marketing and development strategies.
          </p>

          <div className="cta-btn-group">
            <button className="cta-btn-main">
              Get Started Now <FiArrowUpRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;