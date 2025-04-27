
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import TicketPurchase from "@/components/TicketPurchase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <TicketPurchase />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
