"use client";
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react';

const reasons = [
  {
    id: 1,
    icon: <Zap size={24} />,
    title: "Fast execution & Agile Workflow",
    description: "We deliver results 2x faster than traditional agencies using our proprietary agile methodology.",
  },
  {
    id: 2,
    icon: <BarChart3 size={24} />,
    title: "Data-Driven Performance",
    description: "Every decision is backed by analytics. We focus on ROI that actually impacts your bottom line.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={24} />,
    title: "Secure & Scalable Solutions",
    description: "Built with the latest security protocols to ensure your business stays safe as it grows.",
  }
];

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      {/* --- Responsive CSS --- */}
      <style jsx>{`
        .wcu-section {
          background: #ffffff;
          color: #0f172a;
    
          overflow: hidden;
        }

        .wcu-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .image-side {
          flex: 1 1 500px;
          height: 750px;
          position: relative;
          margin-left: -2px;
        }

        .content-side {
          flex: 1 1 500px;
          padding-right: 8%;
          padding-left: 60px;
          z-index: 5;
        }

        /* Mobile & Tablet Optimization */
        @media (max-width: 1024px) {
          .image-side {
            display: none !important; /* Hide image on mobile and tablet */
          }
          
          .content-side {
            flex: 1 1 100%;
            padding: 40px 20px; /* Full width padding */
            text-align: left;
          }

          .wcu-section {
            padding: 40px 0;
          }

          .wcu-btn {
         /* Mobile par button full width */
            justify-content: center;
          }
        }
      `}</style>

      <div className="wcu-wrapper">
        {/* IMAGE SIDE (Hidden on Mobile) */}
        <div className="image-side">
          <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/services/whychosse-Photoroom1.png"
              alt="Business Growth"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="content-side">
          <span style={{
            color: '#7b61ff',
            background: 'rgba(123, 97, 255, 0.08)',
            padding: '8px 20px',
            borderRadius: '50px',
            fontWeight: '800',
            fontSize: '13px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '20px',
            border: '1px solid rgba(123, 97, 255, 0.15)',
            fontFamily: "'Raleway', sans-serif"
          }}>
            Why Choose Us
          </span>

          <h2 style={{
            fontSize: 'clamp(34px, 5vw, 58px)',
            fontWeight: '900',
            lineHeight: '1.05',
            marginBottom: '45px',
            letterSpacing: '-2.5px',
            color: '#0f172a',
            fontFamily: "'Raleway', sans-serif"
          }}>
            Built for <span style={{ color: '#7b61ff' }}>Growth</span>, <br />
            Driven by Data.
          </h2>

          <div className="reasons-list">
            {reasons.map((r) => (
              <div
                key={r.id}
                style={{
                  display: 'flex',
                  gap: '25px',
                  marginBottom: '40px'
                }}
              >
                <div style={{
                  minWidth: '54px',
                  height: '54px',
                  background: 'rgba(123, 97, 255, 0.1)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#7b61ff'
                }}>
                  {r.icon}
                </div>

                <div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    marginBottom: '10px',
                    color: '#1e293b',
                    fontFamily: "'Raleway', sans-serif"
                  }}>
                    {r.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    maxWidth: '450px',
                    fontFamily: "'Lexend', sans-serif"
                  }}>
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="wcu-btn"
            style={{
              marginTop: '25px',
              padding: '18px 45px',
              borderRadius: '100px',
              background: '#7b61ff',
              color: '#fff',
              border: 'none',
              fontWeight: '700',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              boxShadow: '0 15px 30px rgba(123, 97, 255, 0.25)',
              transition: '0.3s',
              fontFamily: "'Raleway', sans-serif"
            }}
          >
            Let's Talk <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;