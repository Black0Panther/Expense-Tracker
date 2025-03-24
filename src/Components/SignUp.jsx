import { useNavigate } from "react-router-dom"
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth"
import { app } from "../firebase";
import { useState } from "react";
const auth = getAuth(app);





const SignUp = ()=>{
    const navigate = useNavigate();
    const [Email,setEmail]=useState("");
    const [Pass,setPass]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(
            auth,
            Email,
           Pass).then((value)=>console.log(value));
        };
    const handleSign=()=>{
     navigate('/SignIn')
    }
    const a = ()=>{
   createUser();
   handleSign();
    }
    return <>
    <div className=" w-full h-screen flex justify-center items-center">
          <div className="bg-gray-400 w-76 md:w-96 p-16 shadow-2xl shadow-lime-300">
            <h1 className="flex text-2xl font-bold mb-6 justify-center ">Sign Up</h1>
           <div className=" flex flex-col gap-3">
            <h1>Email:</h1>
            <input type="email" 
            value={Email}
            placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <h1>Password:</h1>
            <input 
            type="password" 
            placeholder="Enter your Password"
            value={Pass}
            onChange={(e)=>setPass(e.target.value)} />
            <button onClick={ a} className="bg-gray-600 rounded-2xl mt-5 text-white px-6 py-4 active:scale-90">Sign Up</button>
           </div>
          </div>
    </div>
    </>
}

export default SignUp