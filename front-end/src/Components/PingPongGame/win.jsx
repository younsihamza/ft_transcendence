import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function Progress({value, max})
{
    
const [progress, setProgress] = useState(0)

return (
        <div className="w-full h-4 xsm:h-2 bg-white rounded-full">
            <div className={`h-full w-[${progress}%] bg-thirdColor rounded-full`}></div>
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
                    <Progress value={64} max={100}/>
                </div>
                <div className="">
                </div>
            </div>

        </div>
    )
}
