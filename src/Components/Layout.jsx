import { useContext, useReducer, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Reducer2 from "./Reducer2";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Tag from "./Tag";
import TotalBudget, { BudgetContext } from "../Store/TotalBudget";
const Layout = ()=>{

  const {UserBudget} = useContext(BudgetContext)

  const [Expense,setExpense]=useState(0);
  const [Budget, setBudget] = useState(0); // Default to 0
  useEffect(() => {
    if (UserBudget) {  // Only update if UserBudget is not empty
        setBudget(UserBudget);
    }
}, [UserBudget]);


   const [expense , dispatch] = useReducer(Reducer2,[]);
    return <>
    <Navbar></Navbar>
      <div className=" w-full h-screen flex flex-col md:flex-row">
        <Left expense={expense} Budget={Budget} Expense={Expense} setExpense={setExpense}></Left>
       <Right 
       dispatch={dispatch}
       setBudget={setBudget}
       Budget={Budget}
       expense={expense}
       Expense={Expense}
       setExpense={setExpense}
       ></Right>
      </div>
    </>
}
export default Layout;