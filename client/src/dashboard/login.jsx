import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import { useGoogle } from '../context/GoogleAuth';

const Login = () => {
    const [login, setLogin] = useState({usrename: '', password: ''});
    const { isAuth, logout } = useAuth();
    const navigate = useNavigate();
    const { google } = useGoogle();

    const handleInput = (e) => {
        const input = {...login, [e.target.name]: e.target.value}
        setLogin(input)
    }

    const handleLogin = (e) => {
        e.preventDefault();

        logout(isAuth);
        navigate('./home');
    }

    return (
        <div className="text-md bg-primary text-light h-screen">
            <header className="flex justify-between w-4/5 mx-auto py-5 md:py-10 md:mb-10">
                <div className="hidden md:flex gap-5">
                    <Link to='/'>Home</Link>
                    <Link>About</Link>
                    <Link>Blog</Link>
                    <Link>Pages</Link>
                    <Link>Contact</Link>
                </div>

                <div className="hidden md:flex gap-5">
                    <select name="lang" id="lang" className="bg-transparent">
                        <option value="english">English</option>
                    </select>
                    <button>Sign In</button>
                    <button className="bg-light text-primary py-1 px-3 rounded-full">Register</button>
                </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-4/5 pb-10 mx-auto">
                <div className="hidden md:grid">

                </div>

                <div className="w-full text-center">
                    <h1 className="text-center font-bold leading-5 mb-5">Hello ! <br /> Welcome Back</h1>
                    <form action="#" className="grid mx-auto w-4/5 border-b border-light pb-12 mb-5">
                        <div className="w-full">
                            {/* <label htmlFor="username">Username:</label> */}
                            <input type="text" name="username" placeholder="Enter your username" className="px-2 py-3 md:py-2 text-sm text-primary mb-5 rounded-md w-full" onClick={handleInput} />
                        </div>

                        <div className="w-full">
                            {/* <label htmlFor="username">Password:</label> */}
                            <input type="text" name="password" placeholder="Enter your password" className="px-2 py-3 md:py-2 text-sm text-primary mb-1 rounded-md w-full" onClick={handleInput} />
                        </div>

                        <Link to='/' className="text-sm text-right">Recover Password?</Link>

                        <button className="bg-light text-primary font-bold rounded-md px-2 py-3 md:py-2 mt-6" onClick={handleLogin}>Sign In</button>
                    </form>
                    <p className="text-sm -mt-8 mx-auto relative bg-primary w-fit px-1 text-center">Or Continue with</p>

                    <div className="*:w-1/5 *:bg-light flex gap-3 justify-center my-6 *:py-2 *:rounded-md">
                        <button className="text-primary" onClick={() => {logout(google); console.log(logout)}}>G<font-awesome-icon icon="google" /></button>
                        <button className="text-primary">F</button>
                        <button className="text-primary">T</button>
                    </div>

                    <p>Don&apos;t have an account? <Link to='/' className="font-bold">Create Account</Link> </p>
                </div>
            </main>
        </div>
    )
}

export default Login
