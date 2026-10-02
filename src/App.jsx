import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import News from "./components/News";
import Devices from "./components/Devices";
import Actions from "./components/Actions";
import Leadership from "./components/Leadership";

const About = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <Mission />
      <Technologies />
     
      <News />
      <Devices />
      <Actions />
      <Leadership />
       <Footer />
    </>
  );
};

export default About;