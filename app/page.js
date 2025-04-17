import About from "@/components/About";
import Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import LenisWrapper from "@/components/LenisWrapper";

const page = () => {
  return (
    <div className="flex flex-col font-dm-mono">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <LenisWrapper>
          <Landing />
          <About />
          <Events />
          <Team />
          <Marquee />
        </LenisWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default page;
