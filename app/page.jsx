import Hero from "../components/hero";
import BentoSection from "../components/BentoSection"; 
import AboutSection from "../components/AboutSection";
import MarqueeHero from "../components/SandwichMarquee"; 
import Services from "../components/Services"; 
import StorytellingSection from "../components/StorytellingSection"; 
import Faq from "../components/Faq"; 
import ProcessSection from "../components/ProcessSection"; 
import Testimonials from "../components/Testimonials"; 
import FloatingContact from "../components/FloatingContact"; 
import WhyChooseUs from "../components/WhyChooseUs"; 
import Clients from "../components/Clients"; 
import RocketScroll from "../components/RocketScroll"; 
import ServiceForm from "../components/ServiceForm"; 
import Cta from "../components/Cta"; 

export default function Home() {
  return (
    <>
      <Hero /> 
      <BentoSection />
      <AboutSection />
      <MarqueeHero />
      <Services />
      <StorytellingSection/>
      <Faq />
      <Testimonials/>
      <Clients/>
      <RocketScroll/>
      <ProcessSection/>
      <WhyChooseUs/>
      <FloatingContact/>
  <ServiceForm/>
  <Cta/>
 
    </>
  );
}