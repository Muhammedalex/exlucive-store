import Google from '../../assets/imgs/google.png';
import Apple from '../../assets/imgs/apple.png';
import Codeqr from '../../assets/imgs/codeqr.png';
import Fcbook from '../../assets/imgs/fcbook.png';
import Twit from '../../assets/imgs/twit.png';
import Instaa from '../../assets/imgs/instaa.png';
import Linkedin from '../../assets/imgs/linkedin.png';

const RightFooter = () => {
  return (
    <div className="max-w-[198px] flex justify-start gap-6 flex-col items-start ">
        <h3 className='text-[20px] font-medium'>
        Download App
        </h3>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-[12px] font-medium">
          Save $3 with App New User Only
          </p>
        <div className="flex items-center justify-start gap-2">
          <img src={Codeqr} alt="code" />
          <div className="flex flex-col items-center justify-center gap-2">
              <img src={Google} alt="app" />
              <img src={Apple} alt="app" />
          </div>
        </div>
        </div>
        <div className="flex items-center justify-start gap-6">
            <img src={Fcbook} alt='icon' />
            <img src={Twit} alt='icon' />
            <img src={Instaa} alt='icon' />
            <img src={Linkedin} alt='icon' />

        </div>
    </div>
  )
}

export default RightFooter
