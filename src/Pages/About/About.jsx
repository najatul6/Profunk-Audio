import { Watch } from "react-loader-spinner";

const About = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center text-6xl">
      <div>
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        
      </div>
      About Page is under construction
    </div>
  );
};

export default About;
