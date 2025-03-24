import { useReducer, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Reducer2 from "./Reducer2";
import Navbar from "./Navbar";

const Layout = ()=>{
const inputUser = prompt('Enter the total Budget')
  const [Val,setVal] = useState('');
    const [Cat,setCat]=useState('');
   
    const [Budget,setBudget]=useState(inputUser);
    const [Expense,setExpense]=useState(0);



   const [expense , dispatch] = useReducer(Reducer2,[]);
    return <>
    <Navbar></Navbar>
      <div className=" w-full h-screen flex flex-col md:flex-row">
        <Left Val={Val} setVal={setVal} Cat={Cat} setCat={setCat} expense={expense} Budget={Budget} Expense={Expense}></Left>
       <Right 
       Val={Val} 
       setVal={setVal} 
       Cat={Cat} 
       setCat={setCat} 
       dispatch={dispatch}
       setBudget={setBudget}
       setExpense={setExpense}
       Budget={Budget}
       expense={expense}
       Expense={Expense}></Right>
      </div>
    </>
}
export default Layout;