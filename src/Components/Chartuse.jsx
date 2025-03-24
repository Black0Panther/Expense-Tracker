import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut,Line} from "react-chartjs-2"
const Chartuse = ({expense})=>{
    const labels = expense.map((expense, index) => `Expense ${index + 1}`);
    const data = expense.map(expense => expense.amount);

    return <>
    <div className="w-full h-72">
     <Line 
    data={{ 
      labels:labels,
   datasets : [
    {
        label:"Expenses",
        data:data,
        borderColor: "rgb(75, 12, 192)",
        borderWidth: 2,
    }
   ]
     }}
     />
     </div>
    </>
}

export default Chartuse