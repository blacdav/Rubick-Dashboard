import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import { useAuth } from '../context/Auth';
import { ValidateInput } from '../context/ValidateInput';
// import { useNavigate } from 'react-router-dom';
import robot from '/robot.png'

const Login = () => {
    const [login, setLogin] = useState({username: '', password: ''});
    const [err, setErr] = useState({})
    const { /* signin, */ googleLogin } = useAuth();
    // const navigate = useNavigate();

    const handleInput = (e) => {
        const input = {...login, [e.target.name]: e.target.value}
        setLogin(input)
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const ok = ValidateInput(login)
        
        setErr(ok);
        if(login.username !== '' && login.username !== '') {
            signin(login)
        }
    }

    return (
        <div className="text-md bg-primary text-light h-screen">
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
                    <button>Sign In</button>
                    <button className="bg-light text-primary py-1 px-3 rounded-full">Register</button>
                </div>
            </header>

            <main className="grid grid-cols-1 items-center lg:grid-cols-2 w-full md:w-4/5 pb-10 mx-auto">
                <div className="hidden md:flex justify-center">
                    <img src={robot} alt="robot image" className='w-3/5' />
                </div>

                <div className="w-full text-center">
                    <h1 className="text-center font-bold leading-5 mb-5">Hello ! <br /> Welcome Back</h1>
                    <form onSubmit={handleLogin} className="grid mx-auto w-4/5 border-b border-light pb-12 mb-5">
                        <div className="w-full mb-5 text-left">
                            <input type="text" name="username" placeholder="Enter your username" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                            {err.username && <small className='text-red-600'>{err.username}</small>}
                        </div>

                        <div className="w-full mb-1 text-left">
                            <input type="password" name="password" placeholder="Enter your password" className="px-2 py-4 md:py-3 text-sm text-primary rounded-md w-full" onChange={handleInput} />
                            {err.password && <small className='text-red-600'>{err.password}</small>}
                        </div>

                        <Link to='/' className="text-sm text-right mt-1 md:mt-0 text-red-700">Recover Password?</Link>

                        <button type='submit' className="bg-light text-primary font-bold rounded-md px-2 py-4 md:py-3 mt-6">Sign In</button>
                    </form>
                    <p className="text-sm -mt-8 mx-auto relative bg-primary w-fit px-1 text-center">Or Continue with</p>

                    <div className="*:w-1/5 *:bg-light flex gap-3 justify-center my-5 *:py-3 *:rounded-md">
                        <button className="flex justify-center items-center" onClick={() => googleLogin()}><FcGoogle /></button>
                        <button className="text-blue-800 flex justify-center items-center"><FaFacebookF /></button>
                        <button className="text-primary flex justify-center items-center"><FaXTwitter /></button>
                    </div>

                    <p>Don&apos;t have an account? <Link to='/' className="font-bold">Create Account</Link> </p>
                </div>
            </main>
        </div>
    )
}

export default Login
