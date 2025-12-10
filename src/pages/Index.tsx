import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PlatformSection } from "@/components/PlatformSection";
import { AttentionVideoSection } from "@/components/AttentionVideoSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { CollectUnderstandActSection } from "@/components/CollectUnderstandActSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { FeaturesListSection } from "@/components/FeaturesListSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlatformSection />
        <AttentionVideoSection />
        <ChallengesSection />
        <CollectUnderstandActSection />
        <UseCasesSection />
        <FeaturesListSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
