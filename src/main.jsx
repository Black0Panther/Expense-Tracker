import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TotalBudget from './Store/TotalBudget.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <TotalBudget>
    <App />
    </TotalBudget>
    </BrowserRouter>,


)
