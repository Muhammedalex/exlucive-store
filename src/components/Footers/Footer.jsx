
import { arr_1, arr_2, arr_3 } from './data';
import LeftFooter from './LeftFooter';
import MiddleFooter from './MiddleFooter';
import RightFooter from './RightFooter';
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 pb-10 font-sans text-white bg-black px-28 gap-14">
      <div className="flex flex-col items-start justify-between w-full gap-20 md:flex-row">
          <LeftFooter />
          <MiddleFooter items={arr_1} title='Support' />
          <MiddleFooter items={arr_2} title='Account' />
          <MiddleFooter items={arr_3} title='Quick Link' />

          <RightFooter />
      </div>
      <div>
        <p className="text-[16px]  font-sans font-normal text-line-c/50">
        Copyright Muhammed Aymen 2024. All right reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
