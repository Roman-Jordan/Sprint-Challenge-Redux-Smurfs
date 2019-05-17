
import {
    START_SMURFING,
    FETCHING_SMURFS, 
    FETCH_SUCCESS,
    FETCH_ERROR} 
from '../actions'
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const reducer = (state = initialState, action) =>{
   switch(action.type){

    case START_SMURFING:{
      return {
        smurfs:state.smurfs
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
   }
 }
