import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Friend({ icon = false, gameName, hidden = false }) {
    const notify = () => toast.info("Send Match Request to Hyounsi", { theme: 'dark' });
    return (<div className="flex flex-row w-[100%] items-center">
        <img src="hyounsi.png" className={`rounded-full md:w-[60px] md:h-[60px] object-fit border-[2px] xsm:w-[60px] xsm:[60px] sm:w-[60px] sm:h-[60px] ${icon ? 'border-green-600' : 'border-red-600'}`} />
        <div className={`ml-3 flex flex-row justify-between w-full items-center border-solid ${hidden ? "hidden" : ""} lg:flex w-[250px]`}>
            <div className="max-w-[calc(100%-3rem)]">
                <h3 className='font-medium text-ellipsis overflow-hidden whitespace-nowrap w-[100px]'>Hyounsi</h3>
                <p className='text-xs opacity-70 text-ellipsis overflow-hidden whitespace-nowrap'>{icon ? "in lobby" : gameName}</p>
            </div>
            {icon && <button onClick={notify}><img src="./png.png" className="w-5 h-5" /><ToastContainer autoClose={3000} /> </button>}
        </div>
    </div>)
}