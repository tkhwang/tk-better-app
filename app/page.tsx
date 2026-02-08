import ExpertiseSection from "@/components/features-06/features-06";
import Hero06 from "@/components/hero-06/hero-06";
import CTASection from "@/components/cta/cta";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero06 />
      <ExpertiseSection />
      <CTASection />
    </main>
  );
}
