import Friend from "./Friend";

export default function Challeng() {
    return (
        <div className='bg-secondaryColor flex flex-col w-[20%] h-[95%] text-white items-center rounded-[40px] justify-evenly '>
            <h1 className='font-bold text-xl '> CHALLENGE</h1>

            <div className='flex  flex-col w-[85%] gap-5 h-[40%]'>
                <h2 className='text-xl font-medium opacity-90'>Ready to play</h2>
                <div className='  flex flex-col overflow-auto gap-5'>
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                    <Friend icon={true} />
                </div>

            </div>
            <div className="w-[80%]  h-[2px] required bg-gray-400 flex" />


            <div className='flex  flex-col w-[85%] gap-5 h-[40%]'>
                <h2 className='text-xl font-medium opacity-90'>In game</h2>
                <div className=' flex flex-col overflow-auto gap-5 '>
                    <Friend gameName={"playing tic tac toe"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing tic tac toe"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing tic tac toe"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing tic tac toe"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing tic tac toe"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                    <Friend gameName={"playing ping pong"} />
                </div>
            </div>
        </div>
    )
}