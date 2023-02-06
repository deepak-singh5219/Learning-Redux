import { BUY_CAKE } from "./actionTypes"

const initialState = {
    numOfCakes:20
}

const cakeReducer = (state = initialState, action) => {
      switch(action.type){
        case BUY_CAKE: return{
             ...state,
             numOfCakes:(state.numOfCakes - 1>=0)?state.numOfCakes-1:state.numOfCakes
        }
        default: return state;
      }
    
}

export default cakeReducer;