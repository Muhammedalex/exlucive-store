/* eslint-disable react/prop-types */

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Timer from "./Timer";

export const NextArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="flex items-center justify-center transform bg-[#F5F5F5] rounded-full shadow h-11 w-11">
        <ArrowRightIcon className="w-5 " /> 
      </button>
    );
  };

 export const PrevArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="flex items-center justify-center transform bg-[#F5F5F5] rounded-full shadow w-11 h-11 ">
        <ArrowLeftIcon className="w-5 " />
      </button>
    );
  };

const Sections = ({title="Today's" , supTitle = 'Flash Sales' , flash=false , view=false , slider=false , prev , next}) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:flex-row md:items-end md:justify-start">
        <div className="flex flex-col items-center justify-center gap-7 md:gap-20 md:items-end md:flex-row md:justify-start">
            <div className="flex flex-col items-start justify-center gap-6">
                <div className="flex items-center justify-center gap-4 ">
                    <span className="w-5 h-10 rounded-md bg-custom-red">

                    </span>
                    <h5 className="flex items-center justify-center text-[16px] font-sans font-semibold text-custom-red">
                        {title}
                    </h5>
                </div>
                <h2 className="font-sans text-xl font-semibold text-black">
                {supTitle}
                </h2>
            </div>
            {flash&& (
                <div className="flex items-center justify-center mb-3">
            <Timer  till={new Date('2024-06-20T00:00:00')} />
      </div>
            )}
        </div>
        {slider && (
            <div className="flex items-end justify-center h-full gap-2 md:ml-auto">
            <PrevArrow onClick={prev} />
            <NextArrow onClick={next} />
        </div>
        )}
        {view && (
            <button className="px-12 py-4 text-white bg-custom-red font-sans font-medium text-[16px] md:ml-auto">
                View All
            </button>
        )}
    </div>
  )
}

export default Sections
