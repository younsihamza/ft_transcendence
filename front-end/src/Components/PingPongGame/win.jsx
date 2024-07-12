import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function Progress({value, max})
{
    const [progress, setProgress] = useState(0)
    const ref = useRef()
    useEffect(()=>{
        let status = null
        status = setInterval(()=>{
            setProgress((prevProgress)=> {
                
                if(prevProgress >= value)
                {
                    clearInterval(status)
                    return value
                }
                return prevProgress + 1
            })
        },100)
        return ()=> clearInterval(status)
    },[])

    useEffect(() => {
        if (ref.current) {
            ref.current.style.width = `${progress}%`;
        }
    }, [progress]);
    return (
        <div className="w-full h-4 xsm:h-2 bg-white rounded-full">
            <div className={`h-full transition-all duration-200 ease-in-out w-[${progress}%] bg-thirdColor rounded-full`} ref={ref}/> 
        </div> 
    )
}

export default function Win()
{
    return (
        <div className="w-[100%] h-[100%] absolute border-y-white border-[2px] bg-whiteTrans flex flex-col items-center justify-center z-10">
            <p className="font-Valorax text-5xl "> PING PONG</p>
            <div className="relative flex flex-col justify-center items-center">
                <p className="font-Plaguard text-9xl  text-green-500">YOU WIN</p>
                <div className="absolute  top-10 flex flex-col  items-center gap-2 w-[100%]">
                    <img src="ykhourba.jpeg" className="rounded-full w-[140px] border-[2px] border-forthColor object-cover" />
                    <p className="font-inter">YKHOURBA</p>
                    <p className="w-[100%] text-right">+10XP</p>
                    <div className="w-[90%] font-inter text-xs bg-secondaryColor py-3 px-3 flex flex-col justify-center items-center rounded-full border-[1px] ">
                        <div className="flex justify-between w-[100%]">
                            <p>LEVEL 2</p>
                            <p>LEVEL 3</p>
                        </div>
                        <Progress value={75} max={100}/>
                    </div>
                        <div className="w-[100%] flex justify-evenly">
                            <button className="w-[30%] h-[40px] bg-secondaryColor font-inter border-[2px]">PLAY AGAIN</button>
                            <button className="w-[30%] h-[40px] bg-secondaryColor font-inter border-[2px]">HOME</button>
                        </div>
                </div>
            </div>

        </div>
    )
}
