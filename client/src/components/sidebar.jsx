import React, { useState } from 'react'
import logo from '/logo.png'
import { useSidebar } from '../context/Sidebar'
import { AiFillHome } from 'react-icons/ai'
import { FaCalendar, FaPortrait, FaSignOutAlt} from 'react-icons/fa'
import { FaMessage, FaGear} from 'react-icons/fa6'
import { useTheme } from '../context/Theme'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Sidebar = () => {
    const { theme } = useTheme();
    const { open, setOpen } = useSidebar();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname
    const { logout, isAuth } = useAuth();
    const [width, setWidth] = useState(window.innerWidth);

    const home = pathname === '/home'
    const profile = pathname === '/profile'

    return (
        <div className={`${open ? 'grid' : 'grid'} grid-cols-1 justify-center ${theme ? 'bg-light text-primary' : 'bg-secondary text-light'} text-sm md:text-md h-screen w-full md:w-20 transform duration-1000`}>
            <div className="grid h-32  justify-center">
                <img src={logo} alt="logo" className='w-64 md:w-auto' />
            </div>

            <ul className="grid *:text-md *:flex *:md:grid *:items-center *:md:justify-center *:ps-10 *:md:ps-0 w-full *:gap-3 gap-0 md:gap-5 *:w-full *:h-fit *:cursor-pointer">
                <li onClick={() => { setOpen(false); navigate('/home') }} className={`${home ? 'border-s-4 border-tertiary text-tertiary' : ''} hover:border-s-4`}>
                    <AiFillHome />
                    <span className='flex md:hidden'>Dashboard</span>
                </li>
                <li className="hover:border-s-4">
                    <FaMessage />
                    <span className='flex md:hidden'>Messages</span>
                </li>
                <li className="hover:border-s-4">
                    <FaGear />
                    <span className='flex md:hidden'>Settings</span>
                </li>
                <li className="hover:border-s-4">
                    <FaCalendar />
                    <span className='flex md:hidden'>Calender</span>
                </li>
                <li className="hover:border-s-4">
                    <FaCalendar />
                    <span className='flex md:hidden'>Calender</span>
                </li>
                <li onClick={() => { setOpen(false); (width <= 425 ? navigate('/profile') : null) }} className={`${profile ? 'border-s-4 border-tertiary text-tertiary' : ''} hover:border-s-4`}>
                    <FaPortrait />
                    <span className='flex md:hidden'>Profile</span>
                </li>
            </ul>

            <div className="flex md:justify-center text-center gap-2 items-center md:items-end pb-5 w-full *:cursor-pointer">
                <p onClick={() => { setOpen(false); setTimeout(() => {logout()}, 1000)}} className="flex text-md gap-3 md:justify-center items-center ps-10 md:ps-0 hover:border-s-4 h-fit w-full">
                    <FaSignOutAlt />
                    <span className='flex md:hidden'>Logout</span>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
