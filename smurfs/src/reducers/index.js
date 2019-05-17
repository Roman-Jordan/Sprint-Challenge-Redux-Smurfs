
import {
    START_SMURFING,
    FETCHING_SMURFS,
    SMURF_ADDED, 
    FETCH_SUCCESS,
    FETCH_ERROR} 
from '../actions'
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: true,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const rootReducer = (state = initialState, action) =>{
   switch(action.type){

    case SMURF_ADDED:{
      return {
        smurfs:action.payload
      }
    }

    case FETCHING_SMURFS:{
      return {
        fetchingSmurfs:!state.fetchingSmurfs
      }
    }

    case FETCH_SUCCESS:{
      return {
        fetchingSmurfs:!state.fetchingSmurfs,
        smurfs:action.payload
      }
    }

    case FETCH_ERROR:{
      return {
        error:action.payload
      }
    }

    default:
      return state
   }
 }

 export default rootReducer;