import React from "react"
import { FaBell } from "react-icons/fa6"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import { useTheme } from "../context/Theme"
import { useSidebar } from "../context/Sidebar"
import { useAuth } from "../context/Auth"
import { useNavigate } from "react-router-dom"
import Messages from '../components/messages'

const Profile = () => {
    const { theme } = useTheme();
    const { open } = useSidebar();
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user.id) {
        navigate('/');
    }

    return (
        <>
        <div className={`${theme ? 'bg-light text-primary' : 'bg-secondary text-light'} flex flex-col pb-5 w-full h-screen transform duration-1000`}>
            <div className="h-fit flex md:hidden">
                <Header />
            </div>
            <div className="h-full md:h-auto no-scrollbar overflow-y-scroll md:overflow-y-hidden">
                <div className="flex justify-between items-center h-10 md:h-20 px-5 mt-2">
                    <FaBell className="cursor-pointer" />
                    <p>Your plan: <span className="text-tertiary font-bold">Standard</span></p>
                </div>

                <div className="grid grid-cols-1 justify-center items-center mt-5">
                    <div className="grid justify-center">
                        <div className={`grid h-28 w-28 rounded-full after:content-[''] after:h-4 after:w-4 ${user ? 'after:bg-tertiary  after:border-2' : ''} after:rounded-full after:-mt-4 after:z-10 after:ml-20`}>
                            <img src={user.picture} alt="user profile" className="h-28 w-28 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 items-center text-center">
                        <p className="text-2xl font-bold m-0">{user.name}</p>
                        <p>user</p>
                        <button className="py-2 px-4 bg-tertiary font-bold w-2/5 mt-3 rounded-full">Upgrade Plan</button>
                    </div>
                    <div className="grid grid-cols-2 *:grid *:justify-center text-center mt-2 items-center">
                        <div className={`border-e-2 ${theme ? 'border-primary' : 'border-light'}`}>
                            <p className="text-lg font-bold">$236k</p>
                            <p>Total Revenue</p>
                        </div>
                        <div className={`${theme ? 'before:bg-light after:bg-light' : 'before:bg-secondary  after:bg-secondary'} before:content-[''] before:-ml-16 before:-mb-4 before:h-5 before:w-10 after:content-[''] after:w-10 after:h-7 after:-mt-6 after:-ml-16 before:transform after:transform before:duration-1000 after:duration-1000`}>
                            <p className="text-lg font-bold">$128k</p>
                            <p>Earnings</p>
                        </div>
                    </div>
                </div>
                
                <Messages />
            </div>
        </div>

        <div className={`${open === true ? 'flex md:hidden translate-x-0' : '-translate-x-full md:translate-x-1 md:-z-10'} top-0 fixed transform duration-1000`}>
            <Sidebar />
        </div>
        </>
    )
}

export default Profile
