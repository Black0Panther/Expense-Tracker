const AddNew=({handleSubmit,dispatch, Val , Cat,setVal ,setCat , setBudget,setExpense , Budget,Expense})=>{
    return <>
    <div className=" h-1/2 flex justify-center items-center"> 
     <div className=" w-full h-full flex flex-col gap-2 px-6 py-14 ">
        <h1 className="font-bold text-xl">Add New Expense</h1>
        <h1 className="font-semibold text-lg">Amount</h1>
        <input className="border border-gray-400 py-1" 
        value={Val}
        onChange={(e)=>setVal(e.target.value)}
        type="number" 
        placeholder="Enter the value"/>
        <h1 className="text-lg font-semibold">Category</h1>
        <input className="border border-gray-400 py-1"
        type="text"
        value={Cat}
        onChange={(e)=>setCat(e.target.value)}
         placeholder="Enter the category"/>
        <button onClick={handleSubmit} className="bg-gray-600 text-white rounded-2xl active:scale-90 px-4 py-3 m-5">Enter</button>
    </div>
    </div>
    </>
}

export default AddNew