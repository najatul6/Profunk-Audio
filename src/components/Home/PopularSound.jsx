import img1 from "../../assets/soundeffects/1.png";
import img2 from "../../assets/soundeffects/2.png";
import img3 from "../../assets/soundeffects/3.png";
import img4 from "../../assets/soundeffects/4.png";
import img5 from "../../assets/soundeffects/5.png";
import img6 from "../../assets/soundeffects/6.png";

const PopularSound = () => {
  const categories = [
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img1,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img2,
      className: "md:col-span-1",
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img3,
      className: "md:col-span-1",
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img4,
      className: "md:col-span-1",
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img5,
      className: "md:col-span-1",
    },
    {
      title: "Explosion Sound Effects",
      desc: "Bombs, missiles small, large & distant",
      img: img6,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="bg-[#fdfaf5] py-20 px-6 sm:px-10 lg:px-20 rounded-[50px] mx-4 my-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1e26] tracking-tight mb-4">
            Popular Sound Effect
          </h2>
          <p className="text-gray-500 text-sm">
            Unique sound effects for download. You won't find them anywhere
            else.
          </p>
        </div>
        <button className="bg-[#1e1e26] text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-black transition-all">
          All Sound Categories
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories?.map((item, index) => (
          <div
            key={index}
            className={`group relative h-64 overflow-hidden rounded-3xl cursor-pointer ${item.className}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-lg font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSound;
