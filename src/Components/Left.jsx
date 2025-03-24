import { useState } from "react"
import Card from "./Card"
const Left=({expense, Val , Cat,setVal,setCat , Budget,Expense})=>{
  
    return <>
    <div className="w-full md:w-3/4">
     <div className=" flex justify-between px-8 py-4">
        <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl font-bold">Total Budget</h2>
            <p className="text-xl font-semibold">Rs.{Budget}</p>
        </div>
        <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl font-bold">Spend</h2>
            <p className="text-xl font-semibold">{Expense}</p>
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