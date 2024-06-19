
const Login = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-10">
        <h2 className="font-sans text-[36px] font-medium text-black">
        Log in to Exclusive
        </h2>
        <p className="text-[16px] font-normal font-sans text-black">
        Enter your details below
        </p>
        <form className="flex flex-col items-start justify-center gap-10">
            <input className="w-full bg-transparent border-b border-line-c placeholder:text-placeh-c text-[16px] focus:outline-none py-2 px-1" placeholder="Email or Phone Number" type="email"  />
            <input className="w-full bg-transparent border-b border-line-c placeholder:text-placeh-c text-[16px] focus:outline-none py-2 px-1" placeholder="Password" type="password"  />
            <div className="flex flex-col-reverse items-start justify-center gap-10 sm:gap-20 sm:items-center sm:flex-row sm:justify-start">
                <button className="flex bg-[#DB4444] font-sans font-normal py-4 px-12 items-center justify-center text-white">
                  Login
                </button>
              <p className="text-[#DB4444] font-sans font-normal">
                Forget Password?
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
