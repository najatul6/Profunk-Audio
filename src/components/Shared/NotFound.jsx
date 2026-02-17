import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const NotFound = () => {

    return (
        <div className="">
            <div className="bg-indigo-900 relative overflow-hidden h-[600px] lg:h-screen">
                <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" className="absolute h-full w-full object-cover" />
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-2 xl:py-40">
                    <div className="w-full flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-3xl md:text-5xl text-center text-white leading-tight mt-4">
                            Data Not Found! <br /> You are all alone here!
                        </h1>
                        <div className="w-full sm:w-auto flex flex-col items-center">
                            <p className="font-extrabold text-8xl text-white animate-bounce">
                            404
                        </p>
                        <Link to='/' className="">
                            <Button className=" text-white bg-[#FC0] font-bold border-0 shadow-inner shadow-gray-600">
                                <RiArrowGoBackFill />
                                Back to home
                            </Button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;