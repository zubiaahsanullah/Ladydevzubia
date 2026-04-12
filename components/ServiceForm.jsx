"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiArrowRight, FiPhone, FiMail, FiX } from "react-icons/fi";

const ServiceForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success or error

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbxpZX_u3koOoMlUd1C-ZP40SRzhSzadnJ5L3WgfXU508ZiZ7zEQTk7Ca-jFfpZP4cdl6w/exec"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="service-form-section">
      <style>{`
        .service-form-section {
          width: 100%;
          background-color: #fcfcfc;
          padding: 120px 20px;
          font-family: 'Lexend', sans-serif;
          position: relative;
        }

        .section-center {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .behind-image {
          position: absolute;
          top: -250px;
          right: -180px;
          width: 450px;
          height: 450px;
          z-index: 0;
          pointer-events: none;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
        }

        .behind-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.8;
        }

        .form-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          background: #ffffff;
          padding: 60px;
          border-radius: 40px;
          border: 1px solid rgba(123, 97, 255, 0.1);
          box-shadow: 0 40px 100px -20px rgba(15, 23, 42, 0.08);
          position: relative;
          z-index: 2;
        }

        .form-badge {
        display: inline-block;
     font-family: 'Lexend', sans-serif;
  color: #7b61ff;
  background: rgba(123, 97, 255, 0.08);
  padding: 8px 24px;
  border-radius: 100px;
  font-weight:600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  border: 1px solid rgba(123, 97, 255, 0.1);
        }

        .form-heading {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.1;
          color: #0f172a;
          letter-spacing: -2px;
          margin-bottom: 25px;
        }

        .direct-contact {
          margin: 25px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #0f172a;
          font-weight: 700;
          font-size: 16px;
          transition: 0.3s;
        }

        .contact-link i {
          color: #fff;
          background: #7b61ff;
          padding: 8px;
          border-radius: 10px;
          display: flex;
        }

        .contact-link:hover {
          color: #7b61ff;
          transform: translateX(5px);
        }

        .main-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: #f8fafc;
          padding: 40px;
          border-radius: 30px;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .main-form input, .main-form select, .main-form textarea {
          width: 100%;
          padding: 16px 20px;
          border-radius: 16px;
          border: 2px solid transparent;
          background: #fff;
          color: #0f172a;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s ease;
          outline: none;
        }

        .main-form input:focus {
          border-color: #7b61ff;
          box-shadow: 0 0 0 4px rgba(123, 97, 255, 0.1);
        }

        .submit-btn {
          background: #7b61ff;
          color: #fff;
          padding: 18px;
          border-radius: 18px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* --- Success Popup Styles --- */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .popup-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 32px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .close-popup {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          display: flex;
          color: #64748b;
        }

        @media (max-width: 1000px) {
          .form-wrapper { grid-template-columns: 1fr; padding: 40px; }
          .behind-image { display: none; }
          .input-row { grid-template-columns: 1fr; }
        }
          /* ======================================================
   MOBILE VIEW: Form "Bahar" aur Full Width karne ke liye
   ====================================================== */
@media (max-width: 768px) {
  .service-form-section {
    padding: 40px 0px !important; /* Section ki side padding khatam ki */
  }

  .section-center {
    width: 100% !important;
    max-width: 100% !important;
  }

  .form-wrapper {
    grid-template-columns: 1fr !important;
    padding: 40px 20px !important; /* Card ke andar ki padding */
    border-radius: 0px !important; /* Mobile par edges hatane ke liye (optional) */
    border-left: none !important;
    border-right: none !important;
    box-shadow: none !important; /* Mobile par clean look */
    width: 100% !important;
  }

  .form-info {
    text-align: left !important;
    align-items: flex-start !important;
    padding: 0 10px;
  }

  .main-form {
    padding: 25px 15px !important;
    border-radius: 20px !important;
    width: 100% !important;
    margin: 0 auto;
  }

  .input-row {
    grid-template-columns: 1fr !important; /* Inputs ek ke niche ek */
    gap: 15px !important;
  }

  .form-heading {
    font-size: 30px !important;
    text-align: left !important;
  }

  .form-badge {
    margin-left: 0 !important;
  }

  .submit-btn {
    width: 100% !important;
    border-radius: 12px !important;
  }
}
      `}</style>

      {/* --- Success/Error Pop-up Implementation --- */}
      <AnimatePresence>
        {status && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="popup-card"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
            >
              <button className="close-popup" onClick={() => setStatus("")}>
                <FiX size={20} />
              </button>

              {status === "success" ? (
                <>
                  <div style={{ background: '#ecfdf5', color: '#10b981', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', margin: '0 auto 20px', fontSize: 40 }}>
                    <FiCheckCircle style={{margin: 'auto'}}/>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: 25 }}>
                    Your consultation request has been received. We'll get back to you within 24 hours.
                  </p>
                </>
              ) : (
                <>
                  <div style={{ background: '#fef2f2', color: '#ef4444', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', margin: '0 auto 20px', fontSize: 40 }}>
                    <FiAlertCircle style={{margin: 'auto'}}/>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Oops!</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: 25 }}>
                    Something went wrong. Please check your connection or try again later.
                  </p>
                </>
              )}

              <button 
                onClick={() => setStatus("")}
                style={{ background: '#7b61ff', color: '#fff', border: 'none', padding: '14px 30px', borderRadius: '14px', fontWeight: 700, width: '100%', cursor: 'pointer' }}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-center">
        {/* --- Image Layer (Peeche) --- */}
        <motion.div 
          className="behind-image"
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/images/services/contact.webp" alt="Creative Element" />
        </motion.div>

        {/* --- Main Box Layer (Aage) --- */}
        <motion.div 
          className="form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="form-info">
            <div className="form-badge">
              <span style={{ width: 8, height: 8, background: '#7b61ff', borderRadius: '50%' }}></span>
              Contact Us
            </div>
            <h2 className="form-heading">
              Fuel Your <br />
              <span style={{ color: '#7b61ff' }}>Digital Future</span>
            </h2>
            
            <div className="direct-contact">
              <a href="tel:+923372413300" className="contact-link">
                <i><FiPhone /></i> +92337 2413300
              </a>
              <a href="mailto:nabeehaahsan22@gmail.com" className="contact-link">
                <i><FiMail /></i> nabeehaahsan22@gmail.com
              </a>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ background: '#f3e8ff', padding: '15px', borderRadius: '20px', flex: 1 }}>
                  <span style={{ display: 'block', fontSize: '20px', fontWeight: '800' }}>24/7</span>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Live Support</span>
                </div>
                <div style={{ background: '#0f172a', padding: '15px', borderRadius: '20px', flex: 1, color: '#fff' }}>
                  <span style={{ display: 'block', fontSize: '20px', fontWeight: '800' }}>Free</span>
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Audit</span>
                </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="main-form">
            <div className="input-row">
              <input name="name" type="text" placeholder="Name" required />
              <input name="phone" type="tel" placeholder="Phone" required />
            </div>
            <input name="email" type="email" placeholder="Email" required />
            
          <select name="service" required>
  <option value="">Choose Service</option>
  <option value="Web Development">Web Development</option>
  <option value="Web Application">Web Application</option>
  <option value="SEO Strategy">SEO Strategy</option>
  <option value="UI/UX Design">UI/UX Design</option>
  <option value="Digital Marketing">Digital Marketing</option>
  <option value="Graphic Designing">Graphic Designing</option>
  <option value="Creative Content">Creative Content</option>
  <option value="Content Writing">Content Writing</option>
</select>

            <textarea name="message" placeholder="Your Message..." rows="4" required></textarea>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : <>Confirm Consultation <FiArrowRight /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceForm;