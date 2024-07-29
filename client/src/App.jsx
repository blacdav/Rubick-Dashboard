import { Routes, Route } from 'react-router-dom'
import Signin from './dashboard/login'
import Home from './dashboard/home'
import NotFound from './NotFound'
import Profile from './dashboard/profile'
import Register from './dashboard/register'
// import Loading from './Loading'

function App() {
  return (
    <Routes className='bg-primary'>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/register' element={<Register />} />
      {/* <Route path="*" element={<Loading />} /> */}
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
    </Routes>
  )
}

export default App
