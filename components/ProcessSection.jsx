"use client";
import Image from 'next/image';
import { Handshake, Search, Layers3, TerminalSquare } from 'lucide-react';

const processPhases = [
  {
    id: 1,
    side: 'left',
    icon: Handshake,
    title: 'Discovery & Strategy',
    description: 'Define goals, user needs, and project scope with precision.',
  },
  {
    id: 2,
    side: 'right',
    icon: Search,
    title: 'Research & Wireframing',
    description: 'Conduct deep research and create solid blueprints for success.',
  },
  {
    id: 3,
    side: 'left',
    icon: Layers3,
    title: 'UI/UX Design',
    description: 'Crafting engaging, modern, and high-converting user experiences.',
  },
  {
    id: 4,
    side: 'right',
    icon: TerminalSquare,
    title: 'Development',
    description: 'High-performance coding with rigorous testing and deployment.',
  },
];

export default function ProcessSection() {
  return (
    <>
      <style>{`
        /* 🌌 DARK SPACE BACKGROUND */
        .process-section {
          background: #0b0f19; /* Pure deep space blue */
          color: #fff;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
          font-family: sans-serif;
        }

        /* ✨ ANIMATED STARS BACKGROUND */
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.5;
          animation: twinkle var(--duration) infinite ease-in-out;
        }

        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        /* 🌠 NEBULA GLOWS */
        .nebula {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.08) 0%, transparent 70%);
          z-index: 1;
          filter: blur(80px);
        }

        .container {
          max-width: 1300px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .header-group {
          text-align: center;
          margin-bottom: 100px;
        }

        .sub-title-badge {
          display: inline-block;
          color: #7b61ff;
          background: rgba(123, 97, 255, 0.1);
          padding: 8px 24px;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 2px;
          font-weight:600;
  font-size: 13px;
         
          margin-bottom: 20px;
          border: 1px solid rgba(123, 97, 255, 0.2);
        }

        .main-title {
          font-size: clamp(38px, 6vw, 62px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.05;
          margin: 0;
          color: #ffffff;
        }

        .remarks-text { color: #ffffff!important; }

        .process-grid {
          display: grid;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .process-grid { grid-template-columns: 1fr 450px 1fr; }
        }

        .process-column {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .process-point {
          display: flex;
          align-items: center;
          gap: 25px;
          position: relative;
          transition: 0.4s ease;
        }

        .side-left { text-align: right; flex-direction: row-reverse; }
        .side-right { text-align: left; flex-direction: row; }

        .icon-box {
          width: 70px;
          height: 70px;
          min-width: 70px;
          background: #7b61ff;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        box-shadow: 0 0 30px rgba(123, 97, 255, 0.5)
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        

        .process-icon { width: 30px; height: 30px; }

        .text-group h3 {
          font-size: 24px;
           font-family: 'Raleway', sans-serif;
          margin-bottom: 10px;
        }

        .text-group p {
          color: #94a3b8;
          font-size: 16px;
          font-family: 'Lexend', sans-serif;
         
          max-width: 320px;
        }

        .vision-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .vision-img-holder {
          width: 450px;
          height: 450px;
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 0 40px rgba(123, 97, 255, 0.3));
        }

        /* 🪐 ORBITING RING */
        .vision-wrapper::after {
          content: "";
          position: absolute;
          width: 110%;
          height: 110%;
          border: 1.5px solid rgba(123, 97, 255, 0.15);
          border-radius: 50%;
          animation: orbit 30s linear infinite;
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1023px) {
          .process-grid { grid-template-columns: 1fr; gap: 60px; }
          .process-column { gap: 40px; }
          .side-left, .side-right { 
            flex-direction: row !important; 
            text-align: left !important; 
            align-items: center;
          }
          .vision-img-holder { width: 300px; height: 300px; }
          .main-title { font-size: 42px; }
        }
          /* --- Desktop View (No Changes Made Here) --- */
/* Aapka baaki saara CSS yahan rahega... */

/* ======================================================
   MOBILE & TABLET RESPONSIVE FIXES
   ====================================================== */
@media (max-width: 1023px) {
  .process-section {
    padding: 60px 15px;
  }

  .header-group {
    text-align: left; /* Mobile par left align zyada clean lagta hai */
    margin-bottom: 50px;
  }

  .process-grid {
    display: flex;
    flex-direction: column; /* Vertical stacking */
    gap: 40px;
  }

  /* Image Position Control */
  .vision-wrapper {
    order: 1; /* Image ko top par dikhane ke liye (Heading ke baad) */
    margin-bottom: 20px;
  }

  .vision-img-holder {
    width: 280px;
    height: 280px;
  }

  .process-column {
    order: 2; /* Content image ke neechay aayega */
    gap: 25px;
    width: 100%;
  }

  /* Force Left Alignment on Mobile for all points */
  .process-point {
    flex-direction: row !important; /* Icon left, Text right */
    text-align: left !important;
    gap: 15px;
    background: rgba(255, 255, 255, 0.03); /* Subtle card effect on mobile */
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(123, 97, 255, 0.1);
  }

  .icon-box {
    width: 55px;
    height: 55px;
    min-width: 55px;
  }

  .process-icon {
    width: 24px;
    height: 24px;
  }

  .text-group h3 {
    font-size: 19px;
    margin-bottom: 5px;
  }

  .text-group p {
    font-size: 14px;
    max-width: 100%;
    line-height: 1.5;
  }

  .main-title {
    font-size: 32px;
  }
}

/* Very Small Screen Adjustment */
@media (max-width: 480px) {
  .vision-img-holder {
    width: 220px;
    height: 220px;
  }
  .process-point {
    padding: 15px;
  }
  .icon-box {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
}
      `}</style>

      <section id="process" className="process-section">
        {/* BACKGROUND ANIMATIONS */}
        <div className="stars-container">
          <div className="nebula" style={{ top: '-10%', left: '-5%' }}></div>
          <div className="nebula" style={{ bottom: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)' }}></div>
          
          {/* Creating random stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                '--duration': Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="header-group">
            <span className="sub-title-badge">Our Workflow</span>
            <h2 className="main-title">
              Our Creative <span className="remarks-text">Process</span>
            </h2>
          </div>

          <div className="process-grid">
            
            {/* LEFT COLUMN */}
            <div className="process-column">
              {processPhases.filter(p => p.side === 'left').map(phase => (
                <div key={phase.id} className="process-point side-left">
                  <div className="icon-box">
                    <phase.icon className="process-icon" />
                  </div>
                  <div className="text-group">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="vision-wrapper">
              <div className="vision-img-holder">
                <Image
                  src="/images/services/ourprocess-Photoroom.png"
                  alt="Creative Process"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="process-column">
              {processPhases.filter(p => p.side === 'right').map(phase => (
                <div key={phase.id} className="process-point side-right">
                  <div className="icon-box">
                    <phase.icon className="process-icon" />
                  </div>
                  <div className="text-group">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}