import { useContext } from "react"
import { BudgetContext } from "../Store/TotalBudget"

const AddNew=({handleSubmit,dispatch ,setBudget,setExpense , Budget,Expense})=>{
    const {Val,Cat,setVal,setCat,Cat2,setCat2} = useContext(BudgetContext)
    return <>
    <div className=" h-1/2 flex justify-center items-center"> 
     <div className=" w-full h-full flex flex-col gap-2 px-6 py-14 ">
        <h1 className="font-bold text-xl">Add New Expense</h1>
        <h1 className="font-semibold text-lg">Amount</h1>
        <input className="border border-gray-400 py-1" 
        value={Val}
        onChange={(e)=>setVal(e.target.value)}
        type="number" 
        placeholder="Enter the value"/>
        <h1 className="text-lg font-semibold">Catcription</h1>
        <input className="border border-gray-400 py-1"
        type="text"
        value={Cat}
        onChange={(e)=>setCat(e.target.value)}
         placeholder="Enter the Catcription"/>
         <h1 className="font-semibold text-lg">Category</h1>
       {/* <input type="text" 
               value={Cat2}
               onChange={(e)=>setCat2(e.target.value)}
               placeholder="Enter the value"/> */}
  <select name="" id="" value={Cat2} onChange={(e)=>setCat2(e.target.value)}>
    <option value="milk">Milk</option>
    <option value="bakery">Bakery</option>
    <option value="education">Education</option>


  </select>
               
        <button onClick={handleSubmit} className="bg-gray-600 text-white rounded-2xl active:scale-90 px-4 py-3 m-5">Enter</button>
    </div>
    </div>
    </>
}

export default AddNew