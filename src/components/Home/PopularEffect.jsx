import React from 'react';
import { FileText } from 'lucide-react'; 

const PopularEffect = () => {
  const effects = [
    {
      title: "Anime Tones",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1578632738980-6060017f7b11?q=80&w=400"
    },
    {
      title: "Plasma Core Sampler",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400"
    },
    {
      title: "Sci-Fi UI Tones",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400"
    },
    {
      title: "Cellphone Vibrate",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400"
    },
    {
      title: "Sci-Fi Computer Tones",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
    },
    {
      title: "Dark Cinematic Whooshes",
      desc: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains.",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#1e1e26] tracking-tighter mb-4">
          Popular Sound Effect
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto italic border-b border-dashed border-gray-300 pb-2">
          Unique sound effects for download. You won't find them anywhere else.
        </p>
      </div>

      {/* Effects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {effects.map((effect, index) => (
          <div key={index} className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            {/* Image Container */}
            <div className="h-64 overflow-hidden">
              <img 
                src={effect.img} 
                alt={effect.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{effect.title}</h3>
                <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                  <FileText size={16} />
                </div>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {effect.desc}
              </p>

              <button className="w-full bg-gray-50 hover:bg-[#1e1e26] hover:text-white text-gray-800 font-bold py-3 rounded-xl transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularEffect;