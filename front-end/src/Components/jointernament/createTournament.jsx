import { useState } from "react";
import ModelCreate from "./model.Create";
import Tournament from "./tournament";

export default function CreateTournament() {
    const [ismodel, setIsmodel] = useState(false)
    const [tournaments, setTournaments] = useState([])
    const addNewTournament= (value)=>{
        const newArray = [...tournaments,value]
        setTournaments(newArray)
    }
    return (<div className='border  border-forthColor w-[75%]  text-white flex flex-col items-center h-[65%] justify-between bg-linkBgColor py-3 rounded-md'>
        <div className='flex flex-col items-center'>
            <h1 className='font-Valorax text-7xl drop-shadow-2xl text-border' style={{ textShadow: `2px 2px 4px #BC9FD1` }}>PING PONG</h1>
            <h3 className='font-Valorax  text-xl'>TOURNAMENT</h3>
        </div>
        <div className='flex  flex-col  w-[80%] h-[65%] gap-4'>
            <div className='flex justify-between px-4 w-[100%]'>
                <h2 className='font-bold'>TOURNAMENT LIST</h2>
                <button className="font-bold hover:opacity-75" onClick={()=>setIsmodel(true)}>CREATE NEW</button>
            </div>
            <div className='h-[1px] w-[100%] bg-white' />

            <div className="text-xl font-bold overflow-auto flex flex-col gap-5">
                {tournaments.map((item)=><Tournament gameName={item.gameName} players={item.players} />)}
            </div>
        </div>
       {ismodel && <ModelCreate setTournaments={addNewTournament} setIsmodel={setIsmodel}/>}
    </div>)
}