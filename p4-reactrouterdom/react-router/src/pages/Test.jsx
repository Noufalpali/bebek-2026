import { FaHome } from "react-icons/fa";

export default function Test(){
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <FaHome size={70}/>
        <h1 className="text-5xl font-black text-yellow-400 mb-4">
            Selamat Datang di Testtt
        </h1>
        <p className="text-slate-400 text-lg max-w-md text-center">
            Ini adalah halaman utama website.
        </p>
    </div>
  );
};