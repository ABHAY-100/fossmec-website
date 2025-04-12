import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";


const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <Landing />
        <About />
        <Events />
        <Team />
        <Marquee />
      </div>
      <Footer />
    </div>
  );
};

export default page;
