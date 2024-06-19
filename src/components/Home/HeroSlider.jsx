import Hero from '../../assets/imgs/herosction.png';
import Aole from '../../assets/imgs/applee.png'
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full px-10 text-white bg-black rounded-sm md:flex-row">
        <div className='flex flex-col items-start justify-center w-full p-10 gap-7'>
            <div className='flex items-center justify-start w-full gap-6'>
                <img src={Aole} alt='apple' />
                <p className='text-[16px] font-sans font-normal'>
                iPhone 14 Series
                </p>
            </div>
            <p className='text-[48px] w-full max-w-72 font-sans font-semibold '>
            Up to 10% off Voucher
            </p>
            <Link to='/' className='flex items-center justify-start w-full gap-2 underline underline-offset-8'>
                Shop Now <ArrowRightIcon className='w-6' />
            </Link>
        </div>
        <div className='w-full'>
            <img src={Hero} alt='hero-section' />
        </div>
        <div className='absolute bottom-0 left-auto flex items-center justify-center gap-3 mb-2'>
                <span className='w-3 h-3 border border-white rounded-full cursor-pointer bg-custom-red'>

                </span>
                <span className='w-3 h-3 border border-white rounded-full cursor-pointer bg-body'>

                </span>
                <span className='w-3 h-3 border border-white rounded-full cursor-pointer bg-body'>

                </span>
                <span className='w-3 h-3 border border-white rounded-full cursor-pointer bg-body'>

                </span>
        </div>
    </div>
  )
}

export default HeroSlider
