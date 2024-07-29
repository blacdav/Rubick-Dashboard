import React, { useState } from 'react';
import { Link } from "react-router-dom";
import robot from '/robot.png'
import Signin from '../components/signin';

const Login = () => {
    return (
        <div className="text-md bg-primary text-light h-screen overflow-y-scroll translate-x-0 transform duration-1000">
            <header className="flex justify-between w-4/5 mx-auto py-5 md:py-10 md:mb-10">
                <div className="hidden lg:flex gap-5">
                    <Link to='/'>Home</Link>
                    <Link>About</Link>
                    <Link>Blog</Link>
                    <Link>Pages</Link>
                    <Link>Contact</Link>
                </div>

                <div className="hidden lg:flex gap-5">
                    <select name="lang" id="lang" className="bg-transparent">
                        <option value="english">English</option>
                    </select>
                    {/* <button>Sign In</button> */}
                    <Link to='/register' className="bg-light text-primary py-1 px-3 rounded-full">Register</Link>
                </div>
            </header>

            <main className="grid grid-cols-1 items-center lg:grid-cols-2 w-full md:w-4/5 pb-10 mx-auto">
                <div className={`hidden md:flex justify-center transform duration-1000`}>
                    <img src={robot} alt="robot image" className='w-3/5' />
                </div>

                <Signin />
            </main>
        </div>
    )
}

export default Login
