import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Friend({ icon = false, gameName }) {
    const notify = () => toast.info("Send Match Request to Hyounsi",{theme: 'dark'});
    return (<div className="flex flex-row w-[100%] items-center">
        <img src="hyounsi.png" className={`rounded-full w-[60px] h-[60px] object-fit border-[2px] ${icon ? 'border-green-600' : 'border-red-600'}`} />
        <div className='ml-3 flex flex-row justify-between w-full items-center border-solid'>
            <div>
                <h3 className='font-medium text-ellipsis overflow-hidden whitespace-nowrap w-[110px]'>Hyounsi</h3>
                <p className='text-xs opacity-70'>{icon ? "in lobby" : gameName}</p>
            </div>
            {icon && <button onClick={notify}><img src="png.png" className="w-6 h-6" />  <ToastContainer autoClose={3000}/> </button>}
        </div>
    </div>)
}