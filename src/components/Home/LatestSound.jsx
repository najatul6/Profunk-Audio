import { Play, Download, ListPlus, Info, Volume2 } from "lucide-react";
import musicslogo from "../../assets/musics.png";

const LatestSound = () => {
  const sounds = Array(12).fill({
    title: "Wood, twig snap in forest, stereo, weaker, smaller",
    duration: "04:15",
  });

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-black text-[#1e1e26] tracking-tighter mb-2">
            Latest Sound Effects
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-400 text-xs mb-4">
            Browse professional sound effects recorded by the best in the
            business.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button className="px-4 py-2 text-sm font-medium text-gray-600">
                Sound Effects
              </button>
              <button className="px-2 py-2 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
                </svg>
              </button>
            </div>
            <button className="bg-[#1e1e26] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-black transition-all">
              All Sound Effect
            </button>
          </div>
        </div>
      </div>

      {/* Sound Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sounds.map((sound, index) => (
          <div
            key={index}
            className="bg-[#F8FAFC] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Top Content */}
            <div className="p-5">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-14 overflow-hidden h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 font-bold text-[10px] leading-tight text-center">
                  <img src={musicslogo} alt="Brand Logo" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 leading-snug">
                  {sound.title}
                </h3>
              </div>

              {/* Player Row */}
              <div className="flex items-center gap-3 bg-gray-200/50 rounded-full px-4 py-2 mb-2">
                <button className="w-8 h-8 bg-[#1e1e26] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <Play size={14} fill="currentColor" />
                </button>
                {/* Visualizer Placeholder */}
                <div className="flex-1 flex items-end gap-0.5 h-4">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-400 w-0.5"
                      style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-500">
                  {sound.duration}
                </span>
                <Volume2 size={14} className="text-gray-400" />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex border-t border-gray-200 bg-gray-50/50">
              <button className="flex-1 py-3 flex justify-center items-center border-r border-gray-200 hover:bg-white transition-colors">
                <Download size={16} className="text-gray-400" />
              </button>
              <button className="flex-1 py-3 flex justify-center items-center border-r border-gray-200 hover:bg-white transition-colors">
                <ListPlus size={16} className="text-gray-400" />
              </button>
              <button className="flex-1 py-3 flex justify-center items-center hover:bg-white transition-colors">
                <Info size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestSound;
