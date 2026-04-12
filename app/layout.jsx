// app/layout.jsx
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

// 1. SEO Metadata: Favicon aur baaki SEO details ke saath
export const metadata = {
  title: {
    default: "Lady Dev Zubia | Web Development & SEO Expert",
    template: "%s | Lady Dev Zubia"
  },
  description: "Lady Dev Zubia provides high-performance Web Development, UI/UX Design, and SEO Strategy services. Building modern, AI-powered digital experiences.",
  
  // FAVICON SETTINGS
  icons: {
    icon: "/images/logo2.png", // Standard favicon (public folder mein rakhein)
    shortcut: "/images/logo2.png", // Android/Chrome ke liye
    apple: "/images/logo2.png", // iPhone/Safari ke liye
  },

  keywords: [
    "Lady Dev Zubia",
    "Web Development",
    "SEO Strategy Expert",
    "UI/UX Designer",
    "Web Application Development",
    "Digital Marketing Services",
    "Content Writing SEO"
  ],
  authors: [{ name: "Zubia" }],
  openGraph: {
    title: "Lady Dev Zubia | Modern Web Solutions",
    description: "Expert Web Development and Digital Growth Strategies.",
    url: "https://ladydevzubia.com", 
    siteName: "Lady Dev Zubia",
    images: [
      {
        url: "/images/logo2.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // 2. JSON-LD Schema: Ye Google Bots ko aapki services ki list detail mein batata hai
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lady Dev Zubia",
    "description": "Expert in Web Development, SEO Strategy, UI/UX Design, and Digital Marketing.",
    "url": "https://ladydevzubia.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "High-performance Next.js apps with clean code." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application", "description": "Intuitive mobile-first web experiences." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Strategy", "description": "Search engine optimization to dominate rankings." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design", "description": "Modern minimalist designs focused on conversion." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing", "description": "Result-driven campaigns to scale your brand." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Designing", "description": "Creative visual branding and identity assets." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Content", "description": "Engaging multimedia content for brand growth." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Writing", "description": "SEO-optimized copy that speaks to your audience." } }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Schema data ko inject kar rahe hain */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <div className="page-shell">
          <Navbar /> 
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}