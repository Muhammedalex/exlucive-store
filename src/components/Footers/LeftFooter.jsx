
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
const LeftFooter = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full gap-4 max-w-56">
      <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="font-bold text-md">
          Exclusive
          </h3>
          <p className="text-[20px] font-medium">
          Subscribe
          </p>
          <p className="text-[16px] font-normal">
          Get 10% off your first order
          </p>
      </div>
          <div className="flex items-center justify-start w-full px-4 py-3 border border-white rounded-md">
              <input placeholder='Enter your email' className="text-xs font-normal text-white bg-black rounded-md placeholder:text-placeh-c focus:outline-none"  />
              <PaperAirplaneIcon className='w-6 text-white' />
          </div>
    </div>
  )
}

export default LeftFooter
