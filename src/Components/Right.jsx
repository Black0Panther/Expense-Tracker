import { useReducer, useState } from "react"
import Reducer2 from "./Reducer2";
import AddNew from "./AddNew";
import Chartuse from "./Chartuse";
const Right=({dispatch, Val , Cat,setVal ,setCat , setBudget,setExpense , Budget,Expense,expense})=>{
   
    
    const handleSubmit = ()=>{
       console.log(Val)
       console.log(Cat)
       if(Val == 0 && Cat== 0){
        alert(" sry ")
        return;
       }
       dispatch({type:"ADD" , payload:Val , payload2:Cat})
       if(Budget-parseInt(Val) <= 0){
        alert("Attention: You have exceeded the monthly Budget !!!")
        return;
       }
       setBudget(Budget-parseInt(Val))
       setExpense(Expense+parseInt(Val))
       setVal('')
       setCat('')
    }
    return <>
    <div className="w-full md:w-1/4">
    <div className="">
     <AddNew handleSubmit={handleSubmit}  Val={Val} 
       setVal={setVal} 
       Cat={Cat} 
       setCat={setCat} 
       dispatch={dispatch}
       setBudget={setBudget}
       setExpense={setExpense}
       Budget={Budget}
       Expense={Expense}></AddNew>
     
    </div>

    <div className=" w-full h-72">
      <Chartuse expense={expense}></Chartuse>
    </div>
    </div>
    </>
}

export default Right