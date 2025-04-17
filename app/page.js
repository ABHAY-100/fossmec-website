import About from "@/components/About";
import Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import LenisWrapper from "@/components/LenisWrapper";
import bg from "@/assets/bg.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col font-dm-mono">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <LenisWrapper>
          <Landing />
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <Image src={bg} alt="bg" fill className="object-cover max-h-screen z-[-1]" />
            </div>
            <div className="relative z-10">
              <About />
              <Events />
              <Team />
              <Marquee />
            </div>
          </div>
        </LenisWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default page;
