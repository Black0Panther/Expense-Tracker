import { useReducer } from "react"
import Reducer2 from "./Reducer2"
import Tag from "./Tag"



const Card = ({expense})=>{
 
    return <>
    <h1 className="text-2xl font-bold m-5">Transactions</h1>
    {expense.map(function(e,idx){
        return <div key={idx} className="bg-white flex  justify-between px-12 py-4   border border-gray-300">
       <div className="flex gap-2 items-center">
    <h2 className="font-bold">{e.Cat}</h2>
    <Tag tagvalue={e.Cat2}></Tag>
    </div>  
    <h4 className="text-red-600">-{e.amount}</h4>
  
    </div>
    })}
   
    </>
}

export default Card;