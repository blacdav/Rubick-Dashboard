// import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./sidebar"
import { useSidebar } from '../context/Sidebar'

const Header = () => {
    const { open, openBar } = useSidebar();
    
    return (
        <>
            <div className="flex justify-between items-center bg-primary text-light p-5 h-20 w-full">
                <div className="flex items-center">
                    <h1 className="font-bold mr-5">Dashboard</h1>
                    <div className="hidden sm:flex items-center gap-2 bg-secondary py-2 px-4 rounded-full">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="search" name="search" id="search" placeholder="search" className="bg-secondary border-0 outline-0" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="bg-secondary h-4 w-8 cursor-pointer rounded-full">
                        <div className="bg-tertiary w-4 h-4 rounded-full transform duration-1000 translate-x-4"></div>
                    </div>
                    <div className="flex md:hidden text-nm" onClick={() => { console.log('menu clicked'); openBar(!open)}}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>

            <Sidebar />
        </>
    )
}

export default Header
