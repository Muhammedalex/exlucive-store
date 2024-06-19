import Camera from '../../assets/imgs/camera.png';
import BlackCamera from '../../assets/imgs/blackcamera.png';
import { useState } from 'react';

const CategoryCard = () => {
    const [img , setImg ] = useState(BlackCamera);
  return (
    <div onMouseEnter={()=>setImg(Camera)} onMouseLeave={()=>setImg(BlackCamera)} className='group cursor-pointer flex flex-col items-center gap-4 justify-center border hover:bg-custom-red border-black/30 rounded-md w-[170px] h-[145px]'>
        <img src={img} alt='camera' />
        <p className='text-black font-sans font-normal group-hover:text-white text-[16px]'>
            Camera
        </p>
    </div>
  )
}

export default CategoryCard
