/* eslint-disable react/prop-types */
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import Hand from '../../assets/imgs/handps.png';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({discount=true}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 rounded-md max-w-[270px] w-1/4 group">
      <div className="relative flex items-center justify-center p-3 rounded-md w-72 h-60 bg-search-bg">
        <img src={Hand} alt='product' />
        {discount && (
            <span className='absolute px-3 py-1 rounded-md text-[12px] font-sans text-white top-3 left-3 bg-custom-red'>-30%</span>
        )}
        <div className='absolute top-0 right-0 flex flex-col items-center justify-center gap-2 transition-all opacity-0 group-hover:opacity-100 group-hover:right-3 group-hover:top-3'>
            <span to='/' className='flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer hover:text-white hover:bg-custom-red'>
            <HeartIcon className='w-6' />
            </span>
            <Link to='/' className='flex items-center justify-center w-8 h-8 bg-white rounded-full hover:text-white hover:bg-custom-red'>
            <EyeIcon className='w-6' />
            </Link>
        </div>
        <button className='absolute bottom-[-40] hidden  hover:bg-body group-hover:flex group-hover:bottom-0 transition-all items-center justify-center w-full h-10 font-sans font-medium text-white bg-black'>
        Add To Cart
        </button>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <Link to='/'>
        <h3 className='text-[16px] font-sans font-medium text-black'>
        HAVIT HV-G92 Gamepad
        </h3>
        </Link>
        <div className='flex items-center justify-start gap-3'>
            <span className='text-[16px] text-custom-red font-sans font-medium'>
                $ 120
            </span>
           {discount && (
             <span className='text-[16px] line-through text-body font-sans font-medium'>
             $ 160
         </span>
           )}
        </div>
           <div className='flex items-center justify-center gap-2'>
           <div className="rating rating-sm">
    <Rating rate={3} />
</div>     
<span className='text-[12px] flex justify-center items-start font-sans font-semibold text-body'>
    {'(88)'}
</span>
           </div>
         </div>
    </div>
  )
}

export default ProductCard
