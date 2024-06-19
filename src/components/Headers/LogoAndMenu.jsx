import { Link, useLocation } from "react-router-dom"
import Logo from '../../assets/imgs/exclusive.png'

const LogoAndMenu = () => {
    const {pathname} = useLocation();
    
  return (
    <div className="flex items-center justify-between gap-48">
        <div className="flex max-w-[118px] max-h-[24px] items-center justify-start w-80">
            <Link className="w-full">
                <img src={Logo} alt="logo" className="w-full" />
            </Link>
        </div>
        <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-12 font-sans text-[16px] font-normal text-black">
                <li className={`${pathname === '/' ? 'border-b border-black' : ''}`}>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className={`${pathname === 'home' ? 'border-b border-black' : ''}`}>
                    <Link>
                        Contact
                    </Link>
                </li>
                <li className={`${pathname === 'home' ? 'border-b border-black' : ''}`}>
                    <Link>
                        About
                    </Link>
                </li>
                <li className={`${pathname === '/auth/register' ? 'border-b border-black' : ''}`}>
                    <Link to='/auth/register'>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default LogoAndMenu
