import { useNavigate } from "react-router-dom"
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useContext, useState } from "react";
import TotalBudget, { BudgetContext } from "../Store/TotalBudget";
const auth = getAuth(app)

const SignIn = ()=>{
    const navigate = useNavigate();
     const [Email,setEmail]=useState("");
       const [Pass,setPass]=useState("");
       const [Userinput,setUserinput] = useState("")
      //  Using context APi
        const {setUserBudget} = useContext(BudgetContext)
        
// will go to signup page
  const handleSignup=()=>{
    navigate('/SignUp')
  }
  const login=()=>{
    signInWithEmailAndPassword(
      auth,
      Email,
      Pass,
    ).then(handleSign)
    .Catch((err)=>console.log(err))
  }
    const handleSign=()=>{
     navigate('/Layout')
     setUserBudget(Userinput)
    }
    const a =()=>{
      login();
    }
    return <>
    <div className="bg-green-50 w-full h-screen flex justify-center items-center">
          <div className="bg-white w-76 md:w-96 p-16 shadow-2xl shadow-black">
            <h1 className="flex text-2xl font-bold mb-6 justify-center ">Sign In</h1>
           <div className=" flex flex-col gap-3">
            <h1>Email:</h1>
            <input className="border-2  focus:border-blue-500 outline-none "
            type="email" 
            placeholder="Enter your Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <h1>Password:</h1>

            <input  className=" border-gray-400 border-2 focus:border-blue-500 outline-none"
            type="password" 
            placeholder="Enter your Password"
            value={Pass}
            onChange={(e)=>setPass(e.target.value)} />

            <h1>Budget:</h1>
          
            <input className="focus:border-blue-500 border-gray-400 border-2 outline-none"
            type="number" 
            placeholder="Enter Budget" 
            value={Userinput}
            onChange={(e)=>setUserinput(e.target.value)}/>
            <button onClick={a} className="bg-blue-500 rounded-2xl mt-5 text-white px-6 py-4 active:scale-90">Sign In</button>
            <button onClick={handleSignup} className="bg-red-400 text-white px-6 py-4 rounded-2xl active:scale-90">Signup</button>
           </div>
          </div>
    </div>
    </>
}

export default SignIn