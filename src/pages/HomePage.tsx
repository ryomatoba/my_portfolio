// src/pages/HomePage.tsx (新規作成)
import HeroSection from "../components/sections/home/HeroSection";
import AboutSection from "../components/sections/home/AboutSection";
import SkillsSection from "../components/sections/home/SkillsSection";
import PortfolioSection from "../components/sections/home/PortfolioSection";
import ContactSection from "../components/sections/home/ContactSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
        </>
    );
}