import Hero from "@/components/sections/Hero";
import Objectives from "@/components/sections/Objectives";
import AppDevelopment from "@/components/sections/AppDevelopment";
import MassMessaging from "@/components/sections/MassMessaging";
import TechnicalService from "@/components/sections/TechnicalService";
import Investment from "@/components/sections/Investment";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Objectives />
      <AppDevelopment />
      <MassMessaging />
      <TechnicalService />
      <Investment />
    </div>
  );
};

export default Index;
