"use client";
import React from "react";
import "./css/Clients.css";

const ClientsGrid = () => {
  const techStack = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", name: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", name: "PHP" }, // Added PHP
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", name: "Laravel" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", name: ".Net Core" }, // Added Shopify
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", name: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", name: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", name: "Three.js" },
  ];

  return (
    <section className="clients-grid-section">
      <div className="clients-grid-container">
        
        <div className="clients-grid-header">
          <span className="grid-badge">The Tech Stack</span>
          <h2 className="grid-title">Our <span>Premium</span> Toolset</h2>
          <p className="grid-desc">Leveraging the world's most powerful technologies to build your digital future.</p>
        </div>

        <div className="tech-grid-wrapper">
          {techStack.map((tech, index) => (
            <div className="tech-grid-item" key={index}>
              <div className="tech-logo-box">
                <img src={tech.src} alt={tech.name} loading="lazy" />
                <span>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsGrid;