import { useReducer } from "react"
import Reducer2 from "./Reducer2"




const Card = ({expense})=>{
 
    return <>
    <h1 className="text-2xl font-bold m-5">Transactions</h1>
    {expense.map(function(e,idx){
        return <div key={idx} className="bg-white flex  justify-between px-12 py-4   border border-gray-300">
         
    <h2 className="">{e.Category}</h2>
    <h4 className="text-red-600">-{e.amount}</h4>
  
    </div>
    })}
   
    </>
}

export default Card;