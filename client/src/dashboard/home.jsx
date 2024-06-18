// import React from 'react'
import { useTheme } from '../context/Theme'
// import { useSidebar } from '../context/Sidebar'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Profile from './profile'
import Cards from '../components/cards'
import Devices from '../components/devices'
import Goals from '../components/goals'
import Location from '../components/location'
import Period from '../components/period'

const Home = () => {
    const { theme } = useTheme();
    // const { open } = useSidebar();
    return (
        <>
        <div className={`${theme ? 'bg-bg text-primary' : 'bg-primary text-light'} flex w-screen text-sm md:text-md transform duration-1000`}>
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
                        <div className='w-full h-52 bg-secondary p-3'>
                            <Devices />
                        </div>
                        <div className='w-full h-52 bg-secondary p-3'>
                            <Goals />
                        </div>
                        <div className='w-full h-36 md:h-full md:row-span-2 bg-secondary p-3'>
                            <Location />
                        </div>
                        <div className='w-full h-36 bg-secondary p-3'>
                            <Period />
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex w-2/5'><Profile /></div>
            </div>
        </div>
        
        <Sidebar />
        </> 
    )
}

export default Home
