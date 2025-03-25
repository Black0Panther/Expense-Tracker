import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
   const nav = useNavigate();
   const handleLogout=()=>{
      nav('/SignIn')
   }
   
  return <>
     <nav className="w-full h-14 border border-gray-400 flex justify-between items-center px-6 min-h-6">
        <div className="text-2xl font-bold">Expense Tracker</div>
        <div className="flex gap-4 items-center">
        <ul className="hidden md:flex gap-4 ">
        <button onClick={handleLogout} className="px-2 bg-red-500 rounded-xl">Logout</button>
            <li className="font-semibold cursor-pointer">Dashboard</li>
            <li className="font-semibold cursor-pointer">Expenses</li>
            <li className="font-semibold cursor-pointer">Reports</li>
        </ul>
        <div className="text-xl cursor-pointer">
        <CgProfile />
        </div>
        </div>
     </nav>
  </>
}

export default Navbar