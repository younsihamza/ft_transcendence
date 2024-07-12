import React from 'react'

function SecondPlayer({name, level, image, score}) {
    return (
        <div className="flex items-center   text-white rounded-md flex-grow">
            <h2 className="font-Plaguard xsm:text-[2vw] lg:text-4xl">0{score}</h2>
            <div className="flex-1 xsm:mr-1 lg:mr-4 ">
                <h1 className="font-inter  xsm:text-[2vw] lg:text-lg text-right">{name}</h1>
                <h4 className="font-inter text-right  xsm:text-[1vw] lg:text-[0.7rem]">Level {score}</h4>
            </div>
            <img src={image} alt='avatar' className='xsm:w-[10vw] lg:w-24 xsm:h-[10vw] lg:h-24 object-cover rounded-[50%] border-forthColor border-[2px]' />
        </div>
    )
}

export default SecondPlayer
