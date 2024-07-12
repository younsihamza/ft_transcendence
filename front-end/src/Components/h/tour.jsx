export default function Tour() {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center">
        <div className="h-[50%] w-[80%] bg-secondaryColor flex justify-around items-center">
        <div className="w-[100px] h-[250px] border-[2px] border-l-0 relative">
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute top-[-40px] left-[-40px] outline-4 outline-gray-950 shadow-black"/>
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute bottom-[-40px] left-[-40px] outline-4 outline-gray-950 shadow-black"/>
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute bottom-[35%] right-[-40px] outline-4 outline-gray-950 shadow-black"/>
        </div>
        <div className="w-[100px] h-[250px] border-[2px] border-r-0 relative">
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute top-[-40px] right-[-40px] outline-4 outline-gray-950 shadow-black"/>
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute bottom-[-40px] right-[-40px] outline-4 outline-gray-950 shadow-black"/>
            <div className="h-[80px] w-[80px] bg-gray-50 rounded-full absolute bottom-[35%] left-[-40px] outline-4 outline-gray-950 shadow-black"/>
        </div>
        </div>
    </div>
  );
}
