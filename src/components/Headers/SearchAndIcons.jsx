import {   MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {  HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";




const SearchAndIcons = () => {
    const auth = false;
  return (
    <div className="flex items-center justify-start gap-6">
        <form className="flex items-center justify-center w-full pr-3 gap-7 bg-search-bg">
            <input type="text" placeholder="What are you looking for?" className="w-full h-full py-2 pl-5 pr-3 bg-transparent placeholder:text-placeh-c text-[12px] focus:outline-none" />
            <MagnifyingGlassIcon className="w-6" />
        </form>
        <div className="flex items-center justify-center gap-3">
            <Link className="relative">
            <span className="absolute w-[12px] text-[8px] flex justify-center items-center font-sans font-semibold h-[12px] rounded-full bg-red-500 text-white top-[-3px] right-[-3px]">
                2
            </span>
            <HeartIcon className="w-6 " />
            </Link>
            <Link className="relative">
            <span className="absolute w-[12px] text-[8px] flex justify-center items-center font-sans font-semibold h-[12px] rounded-full bg-red-500 text-white top-[-3px] right-[-3px]">
                6
            </span>
            <ShoppingCartIcon className="w-6 " />
            </Link>            {auth && <UserIcon className="w-6" />}
        </div>
    </div>
  )
}

export default SearchAndIcons
