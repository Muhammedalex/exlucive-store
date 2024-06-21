import Speaker from '../../assets/imgs/speaker.png';
import Button from '../Elements/Button';
import Timer from '../Elements/Timer';

const Banner = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full gap-3 px-10 py-10 bg-black lg:flex-row lg:h-full '>
        <div className='flex flex-col items-start justify-start w-full h-full gap-6 py-10 lg:h-full px-7'>
            <h5 className='text-[#00FF66] font-sans font-semibold text-[16px]'>Categories</h5>
            <h2 className='text-white font-sans font-semibold text-[48px]'>
            Enhance Your Music Experience
            </h2>
            <Timer textColor='text-black' />
            <Button variant='bg-[#00FF66] hover:bg-success rounded-md'>
                Buy Now
            </Button>
        </div>
        <div className='relative'>
        <div className='flex items-center justify-center w-full h-full px-7 blur-3xl'>
            <div className="flex items-center justify-center w-[500px] h-[500px] p-4 rounded-full bg-[#D9D9D9]/30 ">
            </div>
        </div>
                <img src={Speaker} alt="" className='absolute lg:right-10 bottom-24' />
        </div>
    </div>
  )
}

export default Banner
