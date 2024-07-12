export default function Win()
{
    return (
        <div className="w-[100%] h-[100%] absolute border-y-white border-[2px] bg-whiteTrans flex flex-col items-center justify-center z-10">
            <p className="font-Valorax text-5xl "> PING PONG</p>
            <div className="relative flex flex-col justify-center items-center">
                <p className="font-Plaguard text-9xl  text-green-500">YOU WIN</p>
                <div className="absolute  top-10 flex flex-col  items-center">
                    <img src="ykhourba.jpeg" className="rounded-full w-[140px] border-[2px] border-forthColor object-cover" />
                    <p>ykhourba</p>
                    <p>+10XP</p>
                </div>
            </div>

        </div>
    )
}
