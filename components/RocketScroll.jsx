"use client";

import React, { useEffect, useRef, useState } from "react";
import "./css/Scroll.css";

const RocketScroll = () => {
  const rocketRef = useRef(null);
  const [direction, setDirection] = useState(""); // "moving-up" or "moving-down"
  const scrollTimeout = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const updateRocketPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight <= 0) return;

      // Calculate percentage (stays within 1% to 94% range)
      let scrollPercent = (scrollTop / scrollHeight) * 94;
      if (scrollPercent < 1) scrollPercent = 1;

      if (rocketRef.current) {
        rocketRef.current.style.top = `${scrollPercent}%`;

        // Detect Direction
        if (scrollTop > lastScrollTop.current) {
          setDirection("moving-down");
        } else if (scrollTop < lastScrollTop.current) {
          setDirection("moving-up");
        }
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;

      // Handle Flame Visibility
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setDirection("");
      }, 150);
    };

    window.addEventListener("scroll", updateRocketPosition, { passive: true });
    updateRocketPosition();

    return () => {
      window.removeEventListener("scroll", updateRocketPosition);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div id="rocket-scroll-container">
      <div
        ref={rocketRef}
        id="rocket-main-unit"
        className={direction}
      >
        {/* SVG Rocket Icon - No library needed */}
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor" 
          className="rocket-svg"
        >
          <path d="M13.13 2.19a1 1 0 0 0-1.13 0L7.54 5.3a5 5 0 0 0-2.14 4.09v3.13l-1.63 1.63a1 1 0 0 0-.29.71v3a1 1 0 0 0 1 1h.75a1 1 0 0 0 1-1v-1.13l2.25-2.25h9l2.25 2.25v1.13a1 1 0 0 0 1 1h.75a1 1 0 0 0 1-1v-3a1 1 0 0 0-.29-.71l-1.63-1.63V9.39a5 5 0 0 0-2.14-4.09l-4.46-3.11zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>

        <div className="exhaust-flame top-flame"></div>
        <div className="exhaust-flame bottom-flame"></div>
      </div>
    </div>
  );
};

export default RocketScroll;