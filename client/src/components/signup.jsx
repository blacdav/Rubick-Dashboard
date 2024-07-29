import React, { useState } from 'react'
import { ValidateInput } from '../context/ValidateInput';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useAuth } from '../context/Auth';

const signup = ({ switchScreen, setSwitchScreen }) => {
    const [login, setLogin] = useState({username: '', password: ''});
    const [err, setErr] = useState({});
    const { googleLogin } = useAuth();

    const handleInput = (e) => {
        const input = {...login, [e.target.name]: e.target.value}
        setLogin(input)
    }

    const handleSignup = (e) => {
        e.preventDefault();

        const ok = ValidateInput(login)
        
        setErr(ok);
        if(login.username !== '' && login.username !== '') {
            signin(login)
        }
    }

  return (
    <div className={`${switchScreen ? 'md:-translate-x-full' : ''} w-full px-5 text-center transform duration-1000`}>
        <h1 className="text-center font-bold leading-5 mb-5">Hello ! <br /> Welcome Back</h1>
        <form onSubmit={handleSignup} className={`grid gap-3 mx-auto w-full border-b border-light pb-8 mb-5`}>
            <div className={`${switchScreen ? 'hidden' : 'grid'} gap-3`}>
                <div className='flex gap-3'>
                    <div className="w-full text-left">
                        <input type="text" name="username" placeholder="Lastname" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                        {err.username && <small className='text-red-600'>{err.username}</small>}
                    </div>

                    <div className="w-full text-left">
                        <input type="password" name="password" placeholder="Firstname" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                        {err.password && <small className='text-red-600'>{err.password}</small>}
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className="w-full text-left">
                        <input type="text" name="username" placeholder="Middlename" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                        {err.username && <small className='text-red-600'>{err.username}</small>}
                    </div>

                    <div className="w-full text-left">
                        <input type="password" name="password" placeholder="Username" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                        {err.password && <small className='text-red-600'>{err.password}</small>}
                    </div>
                </div>

                <div className="w-full text-left">
                    <input type="text" name="username" placeholder="Email" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                    {err.username && <small className='text-red-600'>{err.username}</small>}
                </div>

                <div onClick={() => setSwitchScreen(true)} className="bg-transparent hover:bg-light text-light hover:text-primary border-2 border-light font-bold rounded-md px-2 py-4 md:py-2 mt-2 hover:cursor-pointer">Continue</div>
            </div>

            <div className={`${switchScreen ? 'grid' : 'hidden'} gap-3`}>
                <div className="w-full text-left">
                    <input type="password" name="password" placeholder="Password" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                    {err.password && <small className='text-red-600'>{err.password}</small>}
                </div>

                <div className="w-full text-left">
                    <input type="password" name="password" placeholder="Confirm Password" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                    {err.password && <small className='text-red-600'>{err.password}</small>}
                </div>

                <div className='flex gap-3'>
                    <div onClick={() => setSwitchScreen(false)} className="bg-transparent hover:bg-light border-2 border-light text-light hover:text-primary font-bold rounded-md px-2 py-4 md:py-2 mt-2 w-full hover:cursor-pointer">Back</div>
                    <button type='submit' className="bg-light text-primary font-bold rounded-md px-2 py-4 md:py-2 mt-2 w-full">Sign Up</button>
                </div>
            </div>
        </form>
        <p className="text-sm -mt-8 mx-auto relative bg-primary w-fit px-1 text-center">Or Continue with</p>

        <div className="*:w-1/5 *:bg-light flex gap-3 justify-center my-5 *:py-3 *:rounded-md">
            <button className="flex justify-center items-center" onClick={() => googleLogin()}><FcGoogle /></button>
            <button className="text-blue-800 flex justify-center items-center"><FaFacebookF /></button>
            <button className="text-primary flex justify-center items-center"><FaXTwitter /></button>
        </div>

        <p>Already have an account? <Link to='/' onClick={() => setSwitchScreen(false)} className="font-bold">Sign Up</Link> </p>
    </div>
  )
}

export default signup
