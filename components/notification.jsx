import {FaCheck} from "react-icons/fa";
import { FaExclamation } from "react-icons/fa6";

export default function Notification({status}){

    return (
        <>
            {status &&(
                <div className="max-w bg-gray-200 h-2/4  flex flex-row items-center justify-around px-18 py-4 rounded-lg">
                    <h6 className="text-green-600 pr-16" >Create Success</h6>
                    <FaCheck className="text-green-600"/>
                </div>
            )}

            {!status &&(
                <div className="max-w bg-gray-200 h-2/4  flex flex-row items-center justify-around px-18 py-4 rounded-lg">
                    <h6 className="text-red-600 pr-4" >Failed</h6>
                    <FaExclamation className="text-red-600"/>
                </div>
            )}
        </>


    )
}