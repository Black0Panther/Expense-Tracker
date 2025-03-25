import { useReducer, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Reducer2 from "./Reducer2";
import Navbar from "./Navbar";
import { useEffect } from "react";
const Layout = ()=>{



  const [Budget, setBudget] = useState(0); // Default to 0

  useEffect(() => {
    const savedBudget = localStorage.getItem("budget"); // Retrieve budget
    if (savedBudget) {
      setBudget(Number(savedBudget)); // Ensure it's a number
    }
  }, []);

  const [Expense,setExpense]=useState(0);

  const [Val,setVal] = useState('');
    const [Cat,setCat]=useState('');
   
    


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