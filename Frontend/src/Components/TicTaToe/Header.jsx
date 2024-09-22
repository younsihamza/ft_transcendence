import React from 'react'
import { FiCornerUpLeft } from "react-icons/fi";
import { PiArrowUUpLeftBold } from 'react-icons/pi';

function Header() {
    return (
        <div className='flex justify-center w-[80%] items-center max-w-[1400px]'>
            <button className='border-white border-[1px] xsm:h-[5vw] xsm:w-[5vw] max-w-[80px]  max-h-11 rounded-xl  hover:opacity-75 active:opacity-50 bg-secondaryColor flex justify-center items-center'><PiArrowUUpLeftBold style={{  color: 'white' }} /></button> 
            <h1 className='flex-1 sm:text-[5vw] xl:text-2 text-white text-center flex justify-center items-center font-Valorax text-border'>
                TIC TAC TOE
            </h1>
        </div>
    )
}

export default Header