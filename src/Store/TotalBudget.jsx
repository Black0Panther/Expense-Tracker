import { createContext } from "react"
import { useState } from "react";
export const BudgetContext = createContext();

const TotalBudget = ({children}) =>{

  const [UserBudget,setUserBudget]=useState("");

  const [Val,setVal] = useState('');
    const [Cat,setCat]=useState('');
    const [Cat2,setCat2]=useState('')

 
    return <>
       <BudgetContext.Provider value={{
        UserBudget,
        setUserBudget,
        Val,setVal,
        Cat,setCat,Cat2,setCat2
       }}>
        {children}
       </BudgetContext.Provider>
    </>
}

export default TotalBudget