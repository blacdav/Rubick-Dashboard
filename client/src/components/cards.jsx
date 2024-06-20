// import React from 'react'
import { useTheme } from "../context/Theme"

const Cards = () => {
    const { theme } = useTheme();

    return (
        <div className={`${theme ? '*:bg-light' : '*:bg-secondary'} grid grid-cols-1 md:grid-cols-2 gap-4 *:p-2 *:rounded-xl *:transform *:duration-1000`}>
            <div className="w-full h-32 md:h-24">A</div>
            <div className="w-full h-32 md:h-24">B</div>
            <div className="w-full h-32 md:h-24">C</div>
            <div className="w-full h-32 md:h-24">D</div>
        </div>
    )
}

export default Cards
