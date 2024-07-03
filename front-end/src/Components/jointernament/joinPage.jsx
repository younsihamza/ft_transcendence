import { useState, useEffect } from "react";
import FriendsBar from "../FriendsBar";
import Challenge from "./Challenge";
import CreateTournament from "./createTournament";

export default function JoinPage()
{
    const [windowWidth, setWindowWidth] =  useState(window.innerWidth)
    useEffect(()=>{
        
        function handleResize()
        {
            setWindowWidth(windowWidth.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    },[])
    const [open, setopen] = useState(false)
    return(<div className='bg-primaryColor w-full flex flex-row items-center justify-between px-7 relative'>
        <div className='flex  justify-center items-center xsm:w-[90%] w-[80%] h-[100%]'>
            <CreateTournament/>
        </div>
        <Challenge/>
    </div>)
}