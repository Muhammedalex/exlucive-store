import { Link } from 'react-router-dom';
import Googleicon from '../assets/imgs/gooogle.png';

const Register = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-10">
    <h2 className="font-sans text-[36px] font-medium text-black">
    Create an account
        </h2>
    <p className="text-[16px] font-normal font-sans text-black">
    Enter your details below
    </p>
    <form className="flex flex-col items-start justify-center gap-10">
    <input className="w-full bg-transparent border-b border-line-c placeholder:text-placeh-c text-[16px] focus:outline-none py-2 px-1" placeholder="Name" type="text"  />
        <input className="w-full bg-transparent border-b border-line-c placeholder:text-placeh-c text-[16px] focus:outline-none py-2 px-1" placeholder="Email or Phone Number" type="email"  />
        <input className="w-full bg-transparent border-b border-line-c placeholder:text-placeh-c text-[16px] focus:outline-none py-2 px-1" placeholder="Password" type="password"  />
        <div className="flex flex-col items-center justify-center gap-7 ">
            <button className="flex bg-[#DB4444] w-full font-sans font-normal py-4 rounded-md px-32 items-center justify-center text-white">
              Register
            </button>
            <button className="flex items-center justify-center w-full gap-2 py-4 font-sans font-normal text-black bg-white border rounded-md shadow-sm border-black/40">
              <img src={Googleicon} alt='google' />
              <span>Sign up with Google</span>
            </button>
        </div>
    </form>
    <p className='w-full font-normal text-center text-[16px] font-sans'>
    Already have account?
    <Link to="/auth/login" className='py-1 ml-4 font-medium border-b border-black'>
    Log in
    </Link>
    </p>
</div>
  )
}

export default Register
