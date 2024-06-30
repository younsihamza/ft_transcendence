export  default function Tournament({gameName,players})
{
    return (<div className='flex  justify-between'>
        <div className='border-2 flex justify-between w-[60%]  items-center rounded-xl px-2'>
            <h3>{gameName+" TOURNAMENT"}</h3>
            <p>{players}</p>
        </div>
        <button className='border-2 py-4 px-7 rounded-xl hover:opacity-75'>JOIN NOW</button>
    </div>)
}