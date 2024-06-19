import LogoAndMenu from "./LogoAndMenu"
import SearchAndIcons from "./SearchAndIcons"
const NavHeader = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center w-full pb-5 mt-10 border-b shadow-md md:flex-row md:gap-36">
        <LogoAndMenu />
        <SearchAndIcons />
    </div>
  )
}

export default NavHeader
