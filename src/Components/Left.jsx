import { useContext, useState } from "react"
import Card from "./Card"
import AddNew from "./AddNew"
import { BudgetContext } from "../Store/TotalBudget"
const Left=({ Budget,Expense,expense})=>{
    const {Val} = useContext(BudgetContext)
  const [Check,setCheck] = useState(false);
const check1 = ()=>{
       if(Val > Budget){
        setCheck(!Check)
       }
}

    return <>
    <div className="w-full md:w-3/4">
     <div className=" flex justify-between px-8 py-4">
        <div className="items-center border-none md:border border-gray-400 px-6 py-2 flex flex-col gap-2.5 ">
            <h2 className="text-2xl font-bold  md:text-3xl">Budget</h2>
            <p className="text-xl font-semibold">Rs.{Budget}</p>
        </div>
        <div className=" border-none md:border border-gray-400 px-6 py-2 md:flex flex-col gap-2.5 items-center"> 
            <h2 className="text-2xl font-bold md:text-3xl ">Spend</h2>
            <p style={{background: Check ? "red" : "transparent"}} className="text-xl font-semibold">{Expense}</p>
        </div>
     </div>
  
     {/* Table */}
     <div className="mt-5">
   
           <Card expense={expense}></Card>
       
  
    </div>

    </div>
    </>
}

export default Left