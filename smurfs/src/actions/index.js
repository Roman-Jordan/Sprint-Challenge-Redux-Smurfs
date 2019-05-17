import axios from 'axios';

export const START_SMURFING = 'START_SMURFING';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_SUCCESS';

export const addSmurf = smurf => dispatch =>{
  axios
    .get()
    .then()
    .catch()
}

export const getSmurfs = smurf => dispatch =>{
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>dispatch({type:FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:FETCH_ERROR,payload:err}))
}

export const updateSmurf = smurf => dispatch =>{
  axios
    .get()
    .then()
    .catch()
}

export const deleteSmurf = smurf => dispatch =>{
  axios
    .get()
    .then()
    .catch()
}

