import React from 'react';
import { CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';

const OurSound = () => {
  const advantages = [
    {
      title: "Professionally Recorded Sounds",
      desc: "You'll get access to an extensive library of pro level sounds that have been used in some of the world's most recognisable media.",
      icon: <CheckCircle2 size={24} />,
      bgColor: "bg-gray-50 hover:bg-black hover:text-white",
      iconContainer: "border-white/20"
    },
    {
      title: "Safe to use",
      desc: "All our free sounds and music are safe to use for any non-commercial and commercial use, even for broadcast. We check every file for quality.",
      icon: <ShieldCheck size={24} />,
      bgColor: "bg-white hover:bg-black text-black hover:text-white shadow-sm",
      iconContainer: "border-gray-200"
    },
    {
      title: "Excellent support",
      desc: "We're always here if you need us. Contact anytime, we typically respond within a few hours, often even faster.",
      icon: <MessageCircle size={24} />,
      bgColor: "bg-gray-50 hover:bg-black hover:text-white",
      iconContainer: "border-gray-200"
    }
  ];

  return (
    <section className="bg-[#fdfaf5] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1e26] tracking-tighter mb-4">
            Our Sound Catalogue Advantages
          </h2>
          <p className="text-gray-500 text-sm italic">
            Our sound effects are unique and pro quality.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[40px] overflow-hidden">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 md:p-14 flex flex-col items-start min-h-87.5 ${item.bgColor}`}
            >
              {/* Icon Box */}
              <div className={`p-3 rounded-xl border ${item.iconContainer} mb-8`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-6 leading-tight">
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSound;