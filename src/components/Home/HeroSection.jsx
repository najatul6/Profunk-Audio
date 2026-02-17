import { CornerRightDown } from "lucide-react";
import video from "../../assets/hero.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute z-20 inset-0 bg-black opacity-50"></div>

      <div className="relative z-40 text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp animate-delay-1s">
          Sound Stories
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fadeInUp animate-delay-2s">
          Over 160,000 stunning sound effects (SFX) and over 650 royalty <br />{" "}
          free music tracks free for commercial and non commercial use.
        </p>
        <div className="flex justify-center items-center z-50">
          <button className="bg-[#FFFFFF24]  cursor-pointer flex justify-center items-center gap-2 hover:bg-[#ffffff] hover:text-black text-white font-bold py-3 px-8 rounded-md transition duration-300 animate-fadeInUp animate-delay-3s">
            Explore <CornerRightDown size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
