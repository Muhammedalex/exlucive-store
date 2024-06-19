import Speaker from '../../assets/imgs/speaker.png';
import Button from '../Elements/Button';
import Timer from '../Elements/Timer';

const Banner = () => {
  return (
    <div className='flex items-center justify-center relative w-full px-10 py-10 bg-black gap-3 h-[500px] max-h-[500px]'>
        <div className='flex flex-col items-start justify-start w-full h-full gap-6 py-10 px-7'>
            <h5 className='text-[#00FF66] font-sans font-semibold text-[16px]'>Categories</h5>
            <h2 className='text-white font-sans font-semibold text-[48px]'>
            Enhance Your Music Experience
            </h2>
            <Timer textColor='text-black' />
            <Button variant='bg-[#00FF66] hover:bg-success rounded-md'>
                Buy Now
            </Button>
        </div>
        <div className='flex items-center justify-center w-full h-full px-7 blur-3xl'>
            <div className="flex items-center justify-center w-[500px] h-[500px] p-4 rounded-full bg-[#D9D9D9]/30 ">
            </div>
        </div>
                <img src={Speaker} alt="" className='absolute right-10' />
    </div>
  )
}

export default Banner
