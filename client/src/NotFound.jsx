// import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen text-center">
            <main>
                <p>PAGE NOT FOUND</p>
                <p><Link to="/" className="text-tertiary">click here</Link> to go back to home</p>
            </main>
        </div>
    )
}

export default NotFound
