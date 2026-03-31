import Hero from "@/components/landing/Hero";
import ServicesPreview from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <CTA />
    </>
  );
}
