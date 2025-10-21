import BeFeatured from "@/components/be-featured";
import Footer from "@/components/footer";
import FooterCTA from "@/components/footer-cta";
import FrequentlyAskedQuestions from "@/components/frequently-asked-questions";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MeetTheTeam from "@/components/meet-the-team";
import OrganizationsTape from "@/components/organizations-tape";
import OurWorks from "@/components/our-works";
import WhatToExpect from "@/components/what-to-expect";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <OrganizationsTape />

            <div className="mt-24 flex flex-col gap-24">
                <OurWorks />
                <MeetTheTeam />
                <WhatToExpect />
                <BeFeatured />
                <FrequentlyAskedQuestions />
                <FooterCTA />
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
