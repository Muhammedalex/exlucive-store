import Sections from "../Elements/Sections";
import Speakers from "../../assets/imgs/speakers.png";
import Ps5 from "../../assets/imgs/ps5.png";
import Attwomen from "../../assets/imgs/attwomen.png";
import Perfume from "../../assets/imgs/perfume.png";
import { Link } from "react-router-dom";



const NewArrivel = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-14">
      <Sections
        title="Featured"
        supTitle="New Arrival"
        flash={false}
        slider={false}
        view={false}
      />
      <div className="grid w-full grid-rows-none gap-4 md:gap-8 md:grid-cols-4">
        <div className="col-span-2 flex relative justify-center w-full items-end  md:h-[600px] row-span-2 bg-[#0D0D0D] md:col-span-2" >
           <div className="absolute bottom-0 flex flex-col items-start justify-start gap-4 py-5 left-10 max-w-60">
              <h4 className="text-[#FAFAFA] font-sans font-semibold text-md">
              PlayStation 5
              </h4>
              <p className="text-xs font-sans text-[#FAFAFA] font-normal ">
              Black and White version of the PS5 coming out on sale.
              </p>
              <Link className="font-sans font-medium text-white underline underline-offset-4 text-[16px]">
              Shop Now
              </Link>
          </div>
          <img
            src={Ps5}
            alt="/"
          />
        </div>
        <div className="flex relative items-end justify-end w-full row-span-1 col-span-2 bg-[#0D0D0D] gap-7 md:col-span-2">
          <div className="absolute bottom-0 flex flex-col items-start justify-start gap-4 py-5 left-10 max-w-[255px]">
              <h4 className="text-[#FAFAFA] w-full sm:text-nowrap font-sans font-semibold text-md">
              Women’s Collections 
                            </h4>
              <p className="text-xs font-sans text-[#FAFAFA] font-normal ">
              Featured woman collections that give you another vibe.
                            </p>
              <Link className="font-sans font-medium text-white underline underline-offset-4 text-[16px]">
              Shop Now
              </Link>
          </div>
        <img  src={Attwomen} alt="/" />
        </div>
        <div className="flex relative items-center justify-center w-full bg-[#0D0D0D] gap-7 md:col-span-1">
          <div className="absolute bottom-0 flex flex-col items-start justify-start gap-4 py-5 left-5 max-w-[255px]">
              <h4 className="text-[#FAFAFA] w-full sm:text-nowrap font-sans font-semibold text-md">
              Speakers                            </h4>
              <p className="text-xs font-sans text-[#FAFAFA] font-normal ">
              Amazon wireless speakers
                                          </p>
              <Link className="font-sans font-medium text-white underline underline-offset-4 text-[16px]">
              Shop Now
              </Link>
          </div>
        <img  src={Speakers} alt="/" />
        </div>
        <div className="flex relative items-center justify-center w-full bg-[#0D0D0D] gap-7 md:col-span-1">
          <div className="absolute bottom-0 flex flex-col items-start justify-start gap-4 py-5 left-5 max-w-[255px]">
              <h4 className="text-[#FAFAFA] w-full sm:text-nowrap font-sans font-semibold text-md">
                Perfume
                            </h4>
              <p className="text-xs font-sans text-[#FAFAFA] font-normal ">
              GUCCI INTENSE OUD EDP                            </p>
              <Link className="font-sans font-medium text-white underline underline-offset-4 text-[16px]">
              Shop Now
              </Link>
          </div>
        <img  src={Perfume} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivel;
