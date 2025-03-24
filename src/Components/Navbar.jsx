import { CgProfile } from "react-icons/cg";
const Navbar = ()=>{
  return <>
     <nav className="w-full h-14 border border-gray-400 flex justify-between items-center px-6 min-h-6">
        <div className="text-2xl font-bold">Expense Tracker</div>
        <div className="flex gap-4 items-center">
        <ul className="hidden md:flex gap-4 ">
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