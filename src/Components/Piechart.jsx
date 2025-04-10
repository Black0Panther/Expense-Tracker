import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut,Line} from "react-chartjs-2"
const Piechart = ({expense})=>{
    const labels = expense.map((expense, index) => `Expense ${index + 1}`);
    const data = expense.map(expense => expense.amount);

    return <>
    <div className="w-full h-72">
     <Doughnut 
    data={{ 
      labels:labels,
   datasets : [
    {
        label:"Expenses",
        data:data,
        borderColor: "black",
        backgroundColor:'rgba(10, 40, 6, 0.1)',
        borderWidth: 2,
    }
   ]
     }}
     />
     </div>
    </>
}

export default Piechart