
const PopularSound = () => {
  const categories = [
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
      className: "md:col-span-2 md:row-span-1" 
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400",
      className: "md:col-span-1"
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400",
      className: "md:col-span-1"
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400",
      className: "md:col-span-1"
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400",
      className: "md:col-span-1"
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      className: "md:col-span-2"
    }
  ];

  return (
    <section className="bg-[#fdfaf5] py-20 px-6 sm:px-10 lg:px-20 rounded-[50px] mx-4 my-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1e26] tracking-tight mb-4">
            Popular Sound Effect
          </h2>
          <p className="text-gray-500 text-sm">
            Unique sound effects for download. You won't find them anywhere else.
          </p>
        </div>
        <button className="bg-[#1e1e26] text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-black transition-all">
          All Sound Categories
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className={`group relative h-64 overflow-hidden rounded-3xl cursor-pointer ${item.className}`}
          >
            {/* Image Background */}
            <img 
              src={item.img} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-xs font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSound;