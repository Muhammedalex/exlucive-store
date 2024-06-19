import { Link } from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
const TopHeader = () => {
  return (
    <div className="flex items-center justify-center w-full bg-black md:h-12 max-h-12">
        <div className="flex items-center justify-end w-full gap-10 md:gap-56 md:mr-44 ">
            <p className="font-sans text-xs font-normal text-line-c">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <Link to='/' className="ml-3 font-sans text-xs font-semibold text-white underline">
            ShopNow
              </Link></p>
              <button className="flex items-center justify-center font-sans text-xs font-normal text-white">
                  English
                  <ChevronDownIcon className="w-6" />
              </button>
        </div>
    </div>
  )
}

export default TopHeader
