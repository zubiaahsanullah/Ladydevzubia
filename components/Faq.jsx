"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'; // Next.js Image component
import { FiChevronDown } from "react-icons/fi"; // Animated Chevron arrowhead

// --- FAQ DATA ARRAY ---
// Aap yahan apne agency-specific sawalat aur jawabat change kar sakte hain
const faqItems = [
  {
    question: "What specific digital services does LADY DEV ZUBIA provide?",
    answer: "We offer a core suite of high-performance digital services: Web Development (specializing in Next.js), Mobile App Design, SEO Strategy, UI/UX Design, result-driven Digital Marketing, and 24/7 technical System Support."
  },
  {
    question: "How long is your standard standard website development timeline?",
    answer: "Project timelines vary by complexity. A standard standard website typically takes 3-6 weeks, while a complex web application can require 8-12 weeks or more. We provide a detailed timeline after our discovery phase."
  },
  {
    question: "Can you explain your customized pricing structure?",
    answer: "Our pricing is transparent and customized. We tailor solutions to your specific goals and budget. After understanding your requirements, we provide a detailed proposal outlining the scope of work and clear pricing options."
  },
  {
    question: "Do you offer reliable support and maintenance after a project launches?",
    answer: "Absolutely. We provide comprehensive System Support packages to ensure your platform remains secure, updated, and optimized for performance after launch. We believe in long-term partnerships."
  },
  {
    question: "What is the process to initiate a project with your team?",
    answer: "Getting started is simple. Simply fill out our contact form or book a free consultation. We'll discuss your goals, share initial insights, and guide you through our onboarding process."
  },
];

const PremiumFaqWithRobot = () => {
  // State to track which FAQ item is open
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id); // Close if open, open if closed
  };

  return (
    <section id="premium-faq" className="premium-faq-section">
      <div className="premium-faq-container">
        
        {/* --- HEADER --- */}
        <div className="faq-header">
          <span className="sub-title">GET YOUR ANSWERS</span>
          <h2 className="main-title">Frequently Asked <span>Questions</span></h2>
          
          <p className="faq-desc">Quick, insightful answers to common questions about our agency's services.</p>
          
          {/* --- ROBOT IMAGE CONTAINER (Interactive Ishara) --- */}
          {/* Robot Up descriptions ke paas betha ho upar hi 
              aur neechay FAQs isharah kar raha ho grid ko */}
          <motion.div 
            className="faq-robot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of image is visible
          >
            <Image 
              // PNG image path (background transparent honi chahiye)
              // Make sure image is at /public/images/faq.png
              src="/images/faq.png" 
              alt="AI Assistant pointing down to FAQs"
              width={800} // PNG ki width (aap isay change kar sakte hain design ke mutabiq)
              height={800} // PNG ki height
              className="faq-robot-png"
              priority={false} // Performance optimization
            />
          </motion.div>
        </div>

        {/* --- FAQ GRID (Bento-Style Cards) --- */}
        <div className="faq-bento-grid">
          {faqItems.map((item, index) => {
            const isOpen = activeId === index;
            return (
              <motion.div 
                key={index} 
                className={`faq-bento-card ${isOpen ? "open" : ""}`}
                // 3D SKEW INTERACTION (Hover)
                whileHover={{ rotateX: -2, rotateY: 1, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                
                {/* FAQ Question Button */}
                <button 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className={`faq-icon-wrapper ${isOpen ? "open" : ""}`}>
                    {/* Animated Chevron arrowhead */}
                    <FiChevronDown />
                  </div>
                </button>

                {/* FAQ Answer (Animated Height) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "20px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </motion.div>
            );
          })}
        </div>

        {/* --- OPTIONAL CTA (If still have questions) --- */}
        <div className="faq-footer">
          <p>Still have unique questions?</p>
          <a href="#contact" className="faq-cta-btn">Contact Our Team</a>
        </div>

      </div>

      {/* --- CSS (Styled JSX) --- */}
      {/* Maine zaroori CSS changes yahan add kar diye hain, 
          taake aapko alag se CSS file modify na karni pare. */}
      <style jsx global>{`
        /* --- PREMIUM FAQ SECTION --- */
        .premium-faq-section {
          padding: 80px 20px;
          background-color: #fcfcfc; /* Light Theme Background */
          font-family: sans-serif;
          overflow: visible; /* Required for absolute robot positioning */
        }

        .premium-faq-container {
          max-width: 1200px; /* Constrained width for grid readability */
          margin: 0 auto;
          position: relative; /* Context for absolute robot container */
        }

        /* --- HEADER --- */
        .faq-header {
          text-align: center;
          margin-bottom: 80px; /* Adjust space for robot context */
          position: relative; /* Context for absolute positioning inside header */
        }

        .sub-title {
          display: inline-block;
          color: #7b61ff; /* Accent Color */
          background: rgba(123, 97, 255, 0.08);
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 800;
          letter-spacing: 1.5px;
          font-size: 13px;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid rgba(123, 97, 255, 0.15);
          /* --- FIX: Text Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        .main-title {
          font-size: clamp(38px, 6vw, 62px); /* Slightly bolder/larger title */
          font-weight: 900;
           font-family: 'Raleway', sans-serif;
          color:  #7b61ff !important; /* Dark Color */
          margin-top: 0;
          line-height: 1.05;
          letter-spacing: -2px;
          /* --- FIX: Text Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        .main-title span {
          color: #0f172a;
         
        }

        .faq-desc {
          color: #64748b;
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          margin-top: 25px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative; /* Context for absolute robot container placement */
          z-index: 10;
          /* --- FIX: Text Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        /* --- ROBOT IMAGE CONTAINER (Interactive Ishara) --- */
        /* Robot Up descriptions ke paas betha ho upar hi 
           aur neechay FAQs isharah kar raha ho grid ko */
        .faq-robot-container {
          position: absolute; /* Placement Context */
          /* Place near description, slightly negative margin to make it sit 'above' header content */
          bottom: -70px; /* Moves Robot down towards Grid */
          right: 15%; /* Moves Robot slightly right from center */
          width: 400px; /* PNG Container size */
          height: 400px;
          /* --- FIX: Image Text ke Peeche Layer Hon ke Liye --- */
          z-index: 5; /* Lower than text elements */
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* User cant click image itself */
        }

        /* Ensuring PNG properties are correct */
        .faq-robot-png {
          max-width: 800%;
          max-height: 800%;
          object-fit: contain; /* Keeps ratio intact */
          display: block;
          
        }

        /* --- FAQ BENTO GRID --- */
        .faq-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Two columns layout */
          gap: 30px; /* Space between items */
          perspective: 2000px; /* Essential for 3D skew effects */
          position: relative; /* Context for absolute z-index layering */
          z-index: 10; /* Keep Grid above robot positioning container */
        }

        .faq-bento-card {
          background: #ffffff;
          padding: 35px 30px;
          border-radius: 30px; /* Professional rounded corners */
          border: 1px solid rgba(0, 0, 0, 0.03); /* Minimal border */
          transition: all 0.4s ease;
          position: relative;
          will-change: transform, box-shadow; /* Performance optimization */
        }

        .faq-bento-card:hover {
          border-color: rgba(123, 97, 255, 0.08); /* Minimal accent border on hover */
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02); /* Large soft shadow */
        }

        /* Gradient Border Accent when open/hover */
        .faq-bento-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, transparent, #7b61ff, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .faq-bento-card:hover::before,
        .faq-bento-card.open::before {
          opacity: 0.15; /* Subtle accent glow */
        }

        /* FAQ Question Button */
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          display: flex;
           font-family: 'Lexend', sans-serif;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          padding: 0;
          cursor: pointer;
          color: #0f172a;
          font-size: 21px; /* Slightly larger heading */
          
          letter-spacing: -0.5px;
          transition: color 0.3s ease;
        }

        .faq-bento-card:hover .faq-question {
          color: #7b61ff;
          /* --- FIX: Text Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        /* Icon Container (Animated Chevron arrowhead) */
        .faq-icon-wrapper {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(123, 97, 255, 0.08);
          color: #7b61ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce transition */
          flex-shrink: 0; /* Prevents icon from shrinking */
          margin-left: 20px;
          /* --- FIX: Icon Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        .faq-icon-wrapper.open {
          background: #7b61ff;
          color: #ffffff;
          transform: rotate(180deg) scale(1.1); /* Rotate arrowhead and scale */
        }

        /* FAQ Answer */
        .faq-answer-wrapper {
          overflow: hidden; /* Required for height animation */
          /* --- FIX: Answer Image ke Upar Layer Hon ke Liye --- */
          position: relative;
          z-index: 10;
        }

        .faq-answer p {
          color: #64748b;
          line-height: 1.75; /* Professional line-height */
          font-size: 16px;
          margin: 0;
          padding-right: 5px; /* Minimal space */
        }

        /* --- FOOTER CTA --- */
        .faq-footer {
          text-align: center;
           font-family: 'Lexend', sans-serif;
          margin-top: 60px;
          color: #7b61ff;
          font-weight: 600;
          font-size: 20px;
        }

        .faq-cta-btn {
          display: inline-block;
          background: #7b61ff;
          color: #ffffff;
          padding: 20px 35px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .faq-cta-btn:hover {
          background: #7b61ff;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 20px rgba(123, 97, 255, 0.15); /* Accent shadow */
        }

        /* --- RESPONSIVE OPTIMIZATIONS --- */
        @media (max-width: 1024px) {
          .faq-bento-grid {
            grid-template-columns: repeat(2, 1fr); /* Keep two columns on tablets */
            gap: 25px;
            perspective: none; /* Disable perspective on tablets */
          }
          .faq-bento-card { padding: 30px; }
          .faq-robot-container { right: 5%; bottom: -50px; width: 300px; height: 300px; } /* Adjust on tablet */
        }

        @media (max-width: 768px) {
          .premium-faq-section { padding: 80px 15px; overflow: visible; }
          .faq-header { margin-bottom: 120px; /* Adjust spacing to keep robot above grid on mobile */ }
          .faq-bento-grid { 
            grid-template-columns: 1fr; /* Single column layout on mobile */
            max-width: 550px;
            margin: 0 auto;
            gap: 20px;
          }
          .main-title { font-size: clamp(35px, 9vw, 50px); letter-spacing: -1px; }
          .faq-desc { font-size: 16px; margin-bottom: 0px; }
          
          .faq-bento-card { padding: 30px 25px; border-radius: 25px; }
          .faq-question { font-size: 18px; }
          .faq-icon-wrapper { width: 32px; height: 32px; font-size: 18px; margin-left: 15px; }
          .faq-answer p { font-size: 15px; }

          /* Robot Mobile Optimization: Bese Grid ke Upar Center mein betha hua lagega */
          .faq-robot-container {
            bottom: -110px; /* Position above single column mobile grid */
            right: 0%; 
            left: 0%;
            margin-left: auto;
            margin-right: auto;
            width: 250px;
            height: 250px;
          }
        }
          /* --- RESPONSIVE OPTIMIZATIONS --- */
@media (max-width: 1024px) {
  .faq-bento-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet par 2 columns hi rakhein */
    gap: 25px;
    perspective: none; 
  }
  .faq-bento-card { padding: 30px; }
  .faq-robot-container { 
    right: 5%; 
    bottom: -60px; 
    width: 300px; 
    height: 300px; 
  } 
}

@media (max-width: 768px) {
  .premium-faq-section { 
    padding: 60px 15px; 
    overflow: visible; 
  }

  .faq-header { 
    margin-bottom: 140px; /* Robot ke liye extra space */
    text-align: left; /* Mobile par left align zyada clean lagta hai */
  }

  .main-title { 
    font-size: 36px; 
    line-height: 1.1;
    text-align: left;
  }

  .faq-desc { 
    font-size: 16px; 
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }

  .sub-title {
    margin-bottom: 15px;
  }

  /* --- MOBILE GRID: Single Column --- */
  .faq-bento-grid { 
    grid-template-columns: 1fr; 
    max-width: 100%;
    gap: 15px;
  }

  .faq-bento-card { 
    padding: 25px 20px; 
    border-radius: 24px; 
  }

  .faq-question { 
    font-size: 18px; 
    line-height: 1.4;
  }

  .faq-icon-wrapper { 
    width: 30px; 
    height: 30px; 
    font-size: 16px; 
  }

  .faq-answer p { 
    font-size: 15px; 
    line-height: 1.6;
  }

  /* --- ROBOT MOBILE FIX --- */
  .faq-robot-container {
    position: absolute;
    bottom: -130px; /* Grid ke upar center mein bitha diya */
    right: 0;
    left: auto;
    width: 220px;
    height: 220px;
    z-index: 1;
    opacity: 0.8; /* Mobile par thoda light taaki text clear rahay */
  }

  .faq-footer {
    margin-top: 40px;
    font-size: 18px;
  }

  .faq-cta-btn {
    /* Mobile par full width button clicks increase karta hai */
    text-align: center;
    padding: 16px 20px;
  }
}

/* Very Small Screen Fix */
@media (max-width: 480px) {
  .main-title { font-size: 30px; }
  .faq-robot-container {
    width: 180px;
    height: 180px;
    bottom: -110px;
  }
}
      `}</style>
    </section>
  );
};

export default PremiumFaqWithRobot;