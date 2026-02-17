import banner from "../../assets/hq.png";

const CTA = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden min-h-100 flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Stay Connected, Stay Inspired
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            Our growing range of professional royalty free music is free to
            download and use in your projects and covers a range of genres and
            moods.
          </p>

          <button className="bg-white text-black px-10 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all duration-300">
            Access Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
