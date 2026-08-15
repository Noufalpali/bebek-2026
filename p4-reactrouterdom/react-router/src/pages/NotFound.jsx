import { FaHome } from "react-icons/fa";

export default function NotFound(){
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <FaHome size={70}/>
        <h1 className="text-5xl font-black text-yellow-400 mb-4">
            Page Not Found
        </h1>
    </div>
  );
};