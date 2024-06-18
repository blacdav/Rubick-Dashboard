// import React from 'react'

const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 *:bg-secondary *:p-2 *:rounded-xl">
            <div className="w-full h-32 md:h-24">A</div>
            <div className="w-full h-32 md:h-24">B</div>
            <div className="w-full h-32 md:h-24">C</div>
            <div className="w-full h-32 md:h-24">D</div>
        </div>
    )
}

export default Cards
