import CTA from "../../components/Home/CTA";
import HeroSection from "../../components/Home/HeroSection";
import LatestSound from "../../components/Home/LatestSound";
import OurSound from "../../components/Home/OurSound";
import PopularEffect from "../../components/Home/PopularEffect";
import PopularSound from "../../components/Home/PopularSound";
import WhyChoose from "../../components/Home/WhyChoose";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LatestSound />
      <PopularSound />
      <PopularEffect/>
      <OurSound/>
      <WhyChoose/>
      <CTA/>
    </div>
  );
};

export default Home;
