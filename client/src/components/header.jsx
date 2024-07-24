// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import { FaSearch, FaBars } from 'react-icons/fa';
// import Sidebar from "./sidebar"
import { useSidebar } from '../context/Sidebar'
import { useTheme } from "../context/Theme"

const Header = () => {
    const { theme, light } = useTheme();
    const { open, setOpen } = useSidebar();
    
    return (
        <>
            <div className={`${theme ? 'bg-bg text-primary' : 'bg-primary text-light'} flex justify-between items-center p-5 h-20 w-full transform duration-1000`}>
                <div className="flex items-center">
                    <h1 className="font-bold mr-5">Dashboard</h1>
                    <div className={`${theme ? 'bg-light' : 'bg-secondary'} hidden sm:flex items-center gap-2 py-2 px-4 rounded-full transform duration-1000`}>
                        <FaSearch />
                        <input type="search" name="search" id="search" placeholder="search" className={`${theme ? 'bg-light' : 'bg-secondary'} border-0 outline-0 transform duration-1000`} />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="bg-secondary h-4 w-8 cursor-pointer rounded-full">
                        <div onClick={() => { light(!theme)}} className={`${theme ? 'translate-x-4' : 'translate-x'} bg-tertiary w-4 h-4 rounded-full transform duration-1000`}></div>
                    </div>
                    <div className="flex md:hidden text-nm" onClick={() => { console.log('menu clicked'); setOpen(!open)}}>
                        <FaBars />
                    </div>
                </div>
            </div>

            {/* <Sidebar /> */}
        </>
    )
}

export default Header
