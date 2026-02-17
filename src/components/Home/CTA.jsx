import React from 'react';

const CTA = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Main Container with Background Image */}
      <div className="relative rounded-[40px] overflow-hidden min-h-[400px] flex items-center justify-center text-center px-4">
        
        {/* Background Image - Microphone theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200')`, // Replace with your actual image path
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Stay Connected, Stay Inspired
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            Our growing range of professional royalty free music is free to download and use in your 
            projects and covers a range of genres and moods.
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