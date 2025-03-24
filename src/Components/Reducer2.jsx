const Reducer2 = (state,action)=>{
  switch(action.type){
    case "ADD":
        return [...state,{amount:action.payload , Category:action.payload2}];
        default:
            return state
  }
}

export default Reducer2