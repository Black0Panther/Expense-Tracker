import { useContext, useReducer, useState } from "react"
import Reducer2 from "./Reducer2";
import AddNew from "./AddNew";
import Chartuse from "./Chartuse";
import Piechart from "./Piechart";
import { BudgetContext } from "../Store/TotalBudget";
const Right=({dispatch, setBudget,setExpense , Budget,Expense,expense})=>{
   
    const {Val,Cat,setCat,setVal,Cat2,setCat2} = useContext(BudgetContext)
    const handleSubmit = ()=>{
       console.log(Val)
       console.log(Cat)
       if(Val == 0 && Cat== 0){
        alert(" sry ")
        return;
       }
       dispatch({type:"ADD" , payload:Val , payload2:Cat , payload3:Cat2})
       if(Budget-parseInt(Val) <= 0){
        alert("Attention: You have exceeded the monthly Budget !!!")
        setBudget(0)
        
       }
       setBudget(Budget-parseInt(Val))
       setExpense(Expense+parseInt(Val))
       setVal('')
       setCat('')
    }
    return <>
    <div className="w-full md:w-1/4">
    <div className="">
     <AddNew handleSubmit={handleSubmit}  
       dispatch={dispatch}
       setBudget={setBudget}
       setExpense={setExpense}
       Budget={Budget}
       Expense={Expense}></AddNew>
     
    </div>

    <div className=" w-full h-72">
      <Chartuse expense={expense}></Chartuse>
    </div>
    <div>
      <Piechart expense={expense}></Piechart>
    </div>
    </div>
    </>
}

export default Right