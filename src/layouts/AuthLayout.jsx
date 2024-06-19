import { Outlet } from "react-router-dom"
import Authimg from '../assets/imgs/authlayout.png'
const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center w-full my-20">
        <div className="w-[50%] hidden md:block h-[781px]">
          <img src={Authimg} alt="auth" className="w-full h-full" />
        </div>
        <div className="w-[50%] flex justify-center items-center">
        <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout
