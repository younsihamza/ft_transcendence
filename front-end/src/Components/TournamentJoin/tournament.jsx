export  default function Tournament({gameName,players, mod})
{
    return (<div className='flex  justify-between text-[1.5vw]'>
        <div className='border-2 flex justify-between w-[60%] h-[40px]  items-center rounded-xl px-2'>
            <h3>{gameName+" TOURNAMENT"}</h3>
            <p>{players}</p>
        </div>
        <button className='border-2  px-4 rounded-xl hover:opacity-75 h-[40px]'>JOIN NOW</button>
    </div>)
}