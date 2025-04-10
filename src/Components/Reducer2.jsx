const Reducer2 = (state,action)=>{
  switch(action.type){
    case "ADD":
        return [...state,{amount:action.payload , Cat:action.payload2 , Cat2:action.payload3}];
        default:
            return state
  }
}

export default Reducer2