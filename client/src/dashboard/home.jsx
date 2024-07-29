import React, { useEffect } from 'react'
import { useTheme } from '../context/Theme'
import { useSidebar } from '../context/Sidebar'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Profile from './profile'
import Cards from '../components/cards'
import Devices from '../components/devices'
import Goals from '../components/goals'
import Location from '../components/location'
import Period from '../components/period'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { theme } = useTheme();
    const { open } = useSidebar();
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user.id) {
        navigate('/');
    }

    return (
        <>
        <div className={`${theme ? 'bg-[#9DB2BF] text-primary' : 'bg-primary text-light'} flex w-screen text-sm md:text-md transform duration-1000`}>
            <div className={`hidden md:flex w-fit m-0 p-0`}><Sidebar  /></div>
            <div className='flex w-full'>
                <div className='w-full'>
                    <div className='w-full fixed md:relative'>
                        <Header />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-20 md:mt-0 p-3 *:rounded-xl'>
                        <div className='w-full md:h-52'>
                            <Cards />
                        </div>
                        <div className={`${theme ? 'bg-light' : 'bg-secondary'} w-full h-52 p-3 transform duration-1000`}>
                            <Devices />
                        </div>
                        <div className={`${theme ? 'bg-light' : 'bg-secondary'} w-full h-52 p-3 transform duration-1000`}>
                            <Goals />
                        </div>
                        <div className={`${theme ? 'bg-light' : 'bg-secondary'} w-full h-36 md:h-full md:row-span-2 p-3 transform duration-1000`}>
                            <Location />
                        </div>
                        <div className={`${theme ? 'bg-light' : 'bg-secondary'} w-full h-36 p-3 transform duration-1000`}>
                            <Period />
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex w-2/5'><Profile /></div>
            </div>
        </div>
        
        <div className={`${open ? 'flex md:hidden translate-x' : '-translate-x-full'} top-0 fixed transition-transform duration-1000`}>
            <Sidebar />
        </div>
        </> 
    )
}

export default Home
