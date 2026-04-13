"use client";
import Link from "next/link";
import Image from 'next/image'; 
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiArrowUpRight, FiPhone, FiMapPin } from "react-icons/fi"; 

export default function UpdatedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Saari 8 Services with IDs
  const footerServices = [
    { name: "Web Development", id: "services" },
    { name: "Web Application", id: "services" },
    { name: "SEO Strategy", id: "services" },
    { name: "UI/UX Design", id: "services" },
    { name: "Digital Marketing", id: "services" },
    { name: "Graphic Designing", id: "services" },
    { name: "Creative Content", id: "services" },
    { name: "Content Writing", id: "services" },
  ];

  return (
    <footer className="minimal-footer">
      <div className="footer-container">
        
        {/* --- 1. STROKE BACKGROUND TEXT --- */}
        <div className="footer-bg-text-wrapper">
          <span className="footer-bg-stroke-text">NEXT</span>
        </div>

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="footer-main">
          
          {/* LEFT SECTION */}
          <div className="footer-left">
            <div className="footer-logo-wrapper">
              <Image 
                src="/images/whitelogo-1.png" 
                alt="LADYDEVZUBIA Logo" 
                width={160} 
                height={160} 
                className="footer-logo-png" 
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <h2 className="footer-title">
              Let's build something <br /> <span>remarkable</span> together.
            </h2>
            
            <p className="footer-subline">Next-Generation Digital Strategy & Development for Global Brands.</p>
            
            <Link href="mailto:info@ladydevzubia.com" className="email-link">
              info@ladydevzubia.com <FiArrowUpRight />
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="footer-right">
            
            {/* Social Links */}
            <div className="link-group">
              <h3>CONNECT</h3>
              <Link href="https://linkedin.com"><FiLinkedin /> LinkedIn</Link>
              <Link href="https://instagram.com"><FiInstagram /> Instagram</Link>
          
            </div>

            {/* ALL 8 SERVICES */}
            <div className="link-group services-stack">
              <h3>OUR SERVICES</h3>
              <div className="services-grid-footer">
                {footerServices.map((service) => (
                  <Link href={`#${service.id}`} key={service.id}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="link-group contact-stack">
              <h3>CONTACT</h3>
            <div className="contact-item">
  <FiPhone /> 
  <a href="https://api.whatsapp.com/send?phone=923372413300" target="_blank" rel="noopener noreferrer">
    +92 337 2413300
  </a>
</div>
              <div className="contact-item">
                <FiMapPin /> <span>Karachi, Pakistan</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM FOOTER --- */}
        <div className="footer-bottom">
          <div className="bottom-center copyright-text">
            <span>© 2026 LADYDEVZUBIA</span>
            <p>Digital Experience Designer & Full-Stack Developer</p>
          </div>
          
          <button onClick={scrollToTop} className="scroll-top-btn">
            BACK TO TOP
          </button>
        </div>
      </div>

      <style jsx global>{`
        .minimal-footer {
          background: #08090a;
          color: #fff;
          padding: 80px 20px 40px; 
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* --- STROKE TEXT --- */
        .footer-bg-text-wrapper {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: -1;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .footer-bg-stroke-text {
          font-size: clamp(100px, 25vw, 350px);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -10px;
          -webkit-text-stroke: 1px rgba(123, 97, 255, 0.1);
          color: transparent;
          background-image: linear-gradient(0deg, rgba(123, 97, 255, 0.08) 0%, transparent 70%);
          -webkit-background-clip: text;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 60px;
          margin-bottom: 30px;
        }

        .footer-left { flex: 1; }
        .footer-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          line-height: 1.1;
          font-family: 'Raleway', sans-serif;
          margin-bottom: 20px;
        }
        .footer-title span { color: #7b61ff; }
.email-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top:30px;
  color: #7b61ff;
  background: rgba(123, 97, 255, 0.08);
  padding: 10px 18px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  border: 1px solid rgba(123, 97, 255, 0.2);
  transition: all 0.3s ease;
}

.email-link:hover {
  background: #7b61ff;
  color: #fff;
  transform: translateY(-2px);
}
        .footer-right {
          flex: 1.5;
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .services-grid-footer {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Desktop: 2 columns for services */
          gap: 5px 30px;
        }

        .link-group h3 {
          font-size: 14px;
          font-weight: 800;
          color: #7b61ff;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .link-group a, .contact-item {
          color: #94a3b8;
          text-decoration: none;
          font-size: 15px;
          line-height: 2.2;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.3s;
        }

        .link-group a:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright-text { color: #64748b; font-size: 13px; text-transform: uppercase; }
        .copyright-text span { color: #fff; display: block; margin-bottom: 4px; }

        .scroll-top-btn {
          background: #7b61ff;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 11px;
          cursor: pointer;
          transition: 0.3s;
        }

        .scroll-top-btn:hover { background: #fff; color: #7b61ff; transform: translateY(-3px); }

        /* --- MOBILE VIEW --- */
        @media (max-width: 1024px) {
          .footer-main { flex-direction: column; gap: 50px; }
          .footer-right { width: 100%; flex-wrap: wrap; }
        }

        @media (max-width: 768px) {
          .services-grid-footer { grid-template-columns: 1fr; } /* Mobile: Single column */
          .footer-right { flex-direction: column; gap: 40px; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
          .scroll-top-btn { width: 100%; }
        }
      `}</style>
    </footer>
  );
}
