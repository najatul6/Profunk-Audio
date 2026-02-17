import React from 'react';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      title: "Sound Designers",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-2 bg-[#FDF5ED]", // Light Cream/Tan color
      iconColor: "text-gray-800"
    },
    {
      title: "YouTube",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-1 bg-[#F8FAFC]", // Very light blue/gray
      iconColor: "text-gray-800"
    },
    {
      title: "Game Developers",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-1 bg-[#F8FAFC]",
      iconColor: "text-gray-800"
    },
    {
      title: "Podcasts",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-1 bg-[#F8FAFC]",
      iconColor: "text-gray-800"
    },
    {
      title: "Content Creators",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-1 bg-[#F8FAFC]",
      iconColor: "text-gray-800"
    },
    {
      title: "Composers & Producers",
      desc: "Bombs, missiles small, large & distant",
      className: "md:col-span-2 bg-black text-white", // Black card
      iconColor: "text-white"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-black text-[#1e1e26] tracking-tighter">
          Why Choose Profunk Audio
        </h2>
        <p className="text-gray-400 text-sm max-w-sm md:text-right">
          Our extensive sound effect catalogue delivers sounds & music for every creative field. 
          You'll find the exact sounds and music you need to deliver a professional result everytime.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-[32px] flex flex-col items-start transition-transform hover:scale-[1.02] duration-300 ${item.className}`}
          >
            {/* Icon Circle */}
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-6 
              ${index === 5 ? 'border-white/20' : 'border-gray-300'}`}>
              <Check size={20} className={item.iconColor} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className={`text-sm ${index === 5 ? 'text-gray-400' : 'text-gray-500'}`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;