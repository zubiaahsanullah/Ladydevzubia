"use client";

import React from "react";
import styles from "./css/Testimonials.module.css";

const data = [
  {
    id: 1,
    name: "Ahmed Khan",
    text: "Lady Dev Zubia transformed our digital presence completely and gave our brand a much stronger online identity.",
  },
  {
    id: 2,
    name: "Sara Malik",
    text: "The team is creative, professional, and highly responsive. Their strategy really helped us improve our reach.",
  },
  {
    id: 3,
    name: "Usman Tariq",
    text: "Very smooth experience from start to finish. The work quality and communication were both excellent.",
  },
  {
    id: 4,
    name: "Areeba Noor",
    text: "They gave our business a premium and polished digital look. Everything feels much more impactful now.",
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    text: "Strong branding sense, smart execution, and impressive understanding of modern digital marketing trends.",
  },
  {
    id: 6,
    name: "Hina Faisal",
    text: "A dependable team that delivers quality work. We saw noticeable improvement in our online engagement.",
  },
];

const avatarGradients = [
  "linear-gradient(135deg, #7b61ff 0%, #a78bfa 100%)",
  "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
  "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)",
  "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
  "linear-gradient(135deg, #db2777 0%, #f9a8d4 100%)",
];

const TestimonialCard = ({ name, text, index }) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const avatarBg = avatarGradients[index % avatarGradients.length];

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow}></div>

      <div className={styles.userInfo}>
        <div
          className={styles.userInitial}
          style={{ background: avatarBg }}
        >
          {firstLetter}
        </div>

        <div className={styles.userDetails}>
          <div className={styles.topRow}>
            <h4>{name}</h4>
            <span className={styles.googleBadge}>Google Review</span>
          </div>
          <div className={styles.stars}>★★★★★</div>
        </div>
      </div>

      <p className={styles.reviewText}>"{text}"</p>
    </div>
  );
};

const SliderRow = ({ items, direction = "left" }) => {
  const duplicated = [...items, ...items];

  return (
    <div className={styles.rowOuter}>
      <div
        className={`${styles.sliderTrack} ${
          direction === "left" ? styles.slideLeft : styles.slideRight
        }`}
      >
        {duplicated.map((item, idx) => (
          <TestimonialCard
            key={`${direction}-${idx}`}
            name={item.name}
            text={item.text}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialPage() {
  return (
    <section className={styles.testimonialContainer}>
      <div className={styles.headingWrap}>
        <div className={styles.aboutBadge}>
          <span className={styles.badgeLine}></span>
          Client Feedback
        </div>

        <h2 className={styles.mainHeading}>
          What Our <span>Clients Say</span>
        </h2>

        <p className={styles.description}>
          Real feedback from brands who trusted Lady Dev Zubia for digital
          growth, strategy, and creative brand presence.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <SliderRow items={data} direction="left" />
        <SliderRow items={data} direction="right" />
      </div>
    </section>
  );
}