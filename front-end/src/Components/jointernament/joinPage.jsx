import FriendsBar from "../FriendsBar";
import Challeng from "./Challenge";
import CreateTournament from "./createTournament";

export default function JoinPage()
{
    return(<div className='bg-primaryColor w-full flex flex-row items-center justify-between px-7 relative'>
        <div className='flex  justify-center items-center w-[80%] h-[100%]'>
            <CreateTournament/>
        </div>
        <Challeng/>
    </div>)
}