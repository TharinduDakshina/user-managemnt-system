export  default  function CommonMessage({icon,message,onClickHandle}){
    return (
        <div className="w-1/3 h-1/4  py-3 flex flex-col items-center justify-around bg-gray-400 shadow rounded-lg">
            <span>{icon}</span>

            <h2 className="font-sans text-2xl text-white">{message}</h2>

            <div className="flex flex-row justify-around w-full py-2">
                <button
                    className="ml-4 px-10 py-1 bg-white text-gray-800 rounded hover:bg-gray-200 transition cursor-pointer"
                    onClick={()=>{onClickHandle(1)}}
                >
                    OK
                </button>

                <button
                    className="ml-4 px-10 py-1 bg-white text-gray-800 rounded hover:bg-gray-200 transition cursor-pointer"
                    onClick={()=>{onClickHandle(2)}}
                >
                    Cancel
                </button>
            </div>


        </div>
    )
}