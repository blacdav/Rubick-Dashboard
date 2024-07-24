import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '/logo.png'
import { useSidebar } from '../context/Sidebar'
import { FaHome, FaCalendar, FaPortrait, FaSignOutAlt} from 'react-icons/fa'
import { FaMessage, FaGear} from 'react-icons/fa6'
import { useTheme } from '../context/Theme'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Sidebar = () => {
    const { theme } = useTheme();
    const { open, setOpen } = useSidebar();
    const navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <div className={`${open ? 'grid' : 'grid'} grid-cols-1 justify-center ${theme ? 'bg-light text-primary' : 'bg-secondary text-light'} text-sm md:text-md h-screen w-full md:w-20 transform duration-1000`}>
            <div className="grid justify-center">
                <img src={logo} alt="logo" className='w-64 md:w-auto' />
            </div>

            <ul className="grid *:flex *:md:block *:items-center *:justify-center *:text-center *:ps-10 *:md:ps-0 text-center w-full *:gap-3 gap-2 *:w-full *:h-fit *:cursor-pointer">
                <li onClick={() => { setOpen(false); navigate('/home') }} className="hover:border-s-4">
                    <FaHome />
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
                <li onClick={() => { setOpen(false); navigate('/profile') }} className="hover:border-s-4">
                    <FaPortrait />
                    <span className='flex md:hidden'>Profile</span>
                </li>
            </ul>

            <div className="flex justify-center text-center gap-2 items-end pb-5 *:cursor-pointer">
                <p onClick={() => {logout(true); {logout(true) ? navigate('/') : null}}} className="flex md:block gap-3 items-center ps-10 md:ps-0 hover:border-s-4 h-fit w-full">
                    <FaSignOutAlt />
                    <span className='flex md:hidden'>Logout</span>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
