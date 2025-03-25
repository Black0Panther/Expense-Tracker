import { useNavigate } from "react-router-dom"
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
const auth = getAuth(app)

const SignIn = ()=>{
    const navigate = useNavigate();
     const [Email,setEmail]=useState("");
       const [Pass,setPass]=useState("");
        const [Userinput,setUserinput]=useState("");

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
    .catch((err)=>console.log(err))
  }
    const handleSign=()=>{
     navigate('/Layout')
     localStorage.setItem("budget",Userinput)
    }
    const a =()=>{
      login();
    }
    return <>
    <div className=" w-full h-screen flex justify-center items-center">
          <div className="bg-gray-400 w-76 md:w-96 p-16 shadow-2xl shadow-lime-300">
            <h1 className="flex text-2xl font-bold mb-6 justify-center ">Sign In</h1>
           <div className=" flex flex-col gap-3">
            <h1>Email:</h1>
            <input 
            type="email" 
            placeholder="Enter your Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <h1>Password:</h1>



            <input 
            type="password" 
            placeholder="Enter your Password"
            value={Pass}
            onChange={(e)=>setPass(e.target.value)} />



            <input type="number" 
            placeholder="Enter Budget" 
            value={Userinput}
            onChange={(e)=>setUserinput(e.target.value)}/>
            <button onClick={a} className="bg-gray-600 rounded-2xl mt-5 text-white px-6 py-4 active:scale-90">Sign In</button>
            <button onClick={handleSignup} className="bg-red-400 text-white">Signup</button>
           </div>
          </div>
    </div>
    </>
}

export default SignIn