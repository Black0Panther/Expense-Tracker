import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Layout from './Components/Layout'
import Chartuse from './Components/Chartuse'
import SignIn from './Components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp'
import TotalBudget, { BudgetContext } from './Store/TotalBudget'
import Tag from './Components/Tag'


function App() {
 
  //  const name = useContext(BudgetContext)
  //  console.log(name)

  return (
    <>
        
   <Routes>
   <Route path='/' element={<SignIn/>}></Route>
    <Route path='/Layout' element={<Layout/>}> </Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>
    <Route path='SignIn' element={<SignIn/>}></Route>
    <Route path='/SignIn' element={<Navbar/>}></Route>
   </Routes>

    </>
  )
}

export default App
