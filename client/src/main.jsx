import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'

// const ID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='740007449297-3gkabd2r3v0ttcisjdsmeb49913f7tq4.apps.googleusercontent.com'>
    <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
