import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Objectives from "@/components/sections/Objectives";
import AppDevelopment from "@/components/sections/AppDevelopment";
import MassMessaging from "@/components/sections/MassMessaging";
import TechnicalService from "@/components/sections/TechnicalService";
import Investment from "@/components/sections/Investment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Objectives />
      <AppDevelopment />
      <MassMessaging />
      <TechnicalService />
      <Investment />
      <Footer />
    </div>
  );
};

export default Index;
