import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'

const ID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='576991176616-h56es6qneqgmcabfj78b6nsgf85fah0k.apps.googleusercontent.com'>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
