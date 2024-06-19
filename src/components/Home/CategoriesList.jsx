import { ChevronRightIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
const CategoriesList = () => {
    const [show , setShow ] = useState(false)
    const closeShow =()=>{
        setShow(false)
    }
  return (
    <div className="relative flex items-center justify-start gap-0" onClick={closeShow} >
        <ul className="flex text-black font-sans font-normal gap-4 w-56 text-[16px] pr-3 border-r border-line-c flex-col items-start justify-center">
            <li onMouseEnter={()=>setShow(true)} className="flex items-center justify-start w-full">
            Woman’s Fashion
            <ChevronRightIcon className="w-6 ml-auto" />
            </li>
            <li className="flex items-center justify-start w-full">
            Men’s Fashion
            <ChevronRightIcon className="w-6 ml-auto"/>
            </li>
            <li className="flex items-center justify-start w-full gap-12">
            Kids Fashion
            </li>
            <li className="flex items-center justify-start w-full gap-12">
            Home & Lifestyle
            </li>
            <li className="flex items-center justify-start w-full gap-12">
            Baby’s & Toys
            </li>
        </ul>
       {show && (
         <div className="absolute bottom-0 right-[-220px] z-20 h-full bg-white shadow-md">
         <ul className="flex text-black px-2 font-sans font-normal gap-4 text-[16px] pr-3  flex-col items-start justify-center">
             <li className="flex items-center justify-start w-full gap-12">
             Woman’s Fashion
             <ChevronRightIcon className="w-6 ml-auto" />
             </li>
             <li className="flex items-center justify-start w-full">
             Men’s Fashion
             <ChevronRightIcon className="w-6 ml-auto"/>
             </li>
             <li className="flex items-center justify-start w-full gap-12">
             Kids Fashion
             </li>
             <li className="flex items-center justify-start w-full gap-12">
             Home & Lifestyle
             </li>
             <li className="flex items-center justify-start w-full gap-12">
             Baby’s & Toys
             </li>
         </ul>
         </div>
       )}
    </div>
  )
}

export default CategoriesList
